// Custom JavaScript for GitBook v3
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        
        // Initialize all features
        initSmoothScroll();
        initCopyCode();
        initSearchEnhancement();
        initProgressSteps();
        initThemeToggle();
        
    });
    
    // Smooth scrolling for anchor links
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL without jumping
                    history.pushState(null, null, this.getAttribute('href'));
                }
            });
        });
    }
    
    // Copy code functionality
    function initCopyCode() {
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            const button = document.createElement('button');
            button.className = 'copy-code-btn';
            button.innerHTML = '📋';
            button.title = 'Copy code';
            button.style.cssText = `
                position: absolute;
                top: 8px;
                right: 8px;
                background: var(--brand-bg);
                border: 1px solid var(--brand-border);
                border-radius: 4px;
                padding: 4px 8px;
                font-size: 12px;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.2s ease;
                z-index: 10;
            `;
            
            const pre = block.parentElement;
            pre.style.position = 'relative';
            pre.appendChild(button);
            
            pre.addEventListener('mouseenter', () => button.style.opacity = '1');
            pre.addEventListener('mouseleave', () => button.style.opacity = '0');
            
            button.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(block.textContent);
                    button.innerHTML = '✅';
                    button.title = 'Copied!';
                    setTimeout(() => {
                        button.innerHTML = '📋';
                        button.title = 'Copy code';
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy:', err);
                    button.innerHTML = '❌';
                    setTimeout(() => {
                        button.innerHTML = '📋';
                    }, 2000);
                }
            });
        });
    }
    
    // Search enhancement
    function initSearchEnhancement() {
        // Add keyboard shortcuts for search
        document.addEventListener('keydown', function(e) {
            // Ctrl/Cmd + K to focus search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.querySelector('input[type="search"]');
                if (searchInput) {
                    searchInput.focus();
                }
            }
            
            // Escape to close search
            if (e.key === 'Escape') {
                const searchInput = document.querySelector('input[type="search"]');
                if (searchInput && document.activeElement === searchInput) {
                    searchInput.blur();
                }
            }
        });
        
        // Enhance search results
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput) {
            searchInput.addEventListener('input', debounce(function(e) {
                const query = e.target.value.toLowerCase();
                if (query.length > 2) {
                    highlightSearchTerms(query);
                }
            }, 300));
        }
    }
    
    // Progress steps animation
    function initProgressSteps() {
        const progressSteps = document.querySelectorAll('.progress-steps');
        progressSteps.forEach(steps => {
            // Animate steps on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateProgressSteps(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            
            observer.observe(steps);
        });
    }
    
    // Animate progress steps
    function animateProgressSteps(stepsContainer) {
        const steps = stepsContainer.querySelectorAll('li');
        steps.forEach((step, index) => {
            setTimeout(() => {
                step.style.opacity = '1';
                step.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }
    
    // Theme toggle enhancement
    function initThemeToggle() {
        const themeToggle = document.querySelector('[data-md-component="palette"]');
        if (themeToggle) {
            // Add transition effect when switching themes
            themeToggle.addEventListener('change', function() {
                document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
                setTimeout(() => {
                    document.body.style.transition = '';
                }, 300);
            });
        }
        
        // System theme detection
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', function(e) {
                // Auto switch if user hasn't manually set preference
                const hasManualPreference = localStorage.getItem('data-md-color-scheme');
                if (!hasManualPreference) {
                    document.body.setAttribute('data-md-color-scheme', e.matches ? 'slate' : 'default');
                }
            });
        }
    }
    
    // Highlight search terms
    function highlightSearchTerms(query) {
        const content = document.querySelector('.md-content');
        if (!content) return;
        
        // Remove previous highlights
        content.querySelectorAll('.search-highlight').forEach(el => {
            el.outerHTML = el.innerHTML;
        });
        
        // Add new highlights
        const walker = document.createTreeWalker(
            content,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }
        
        textNodes.forEach(textNode => {
            const text = textNode.textContent;
            const regex = new RegExp(`(${query})`, 'gi');
            if (regex.test(text)) {
                const highlightedText = text.replace(regex, '<mark class="search-highlight">$1</mark>');
                const span = document.createElement('span');
                span.innerHTML = highlightedText;
                textNode.parentNode.replaceChild(span, textNode);
            }
        });
    }
    
    // Debounce utility
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Reading progress indicator
    function initReadingProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: var(--brand-accent);
            z-index: 9999;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = Math.min(scrolled, 100) + '%';
        });
    }
    
    // Initialize reading progress
    initReadingProgress();
    
    // Add keyboard shortcuts info
    function showKeyboardShortcuts() {
        const shortcuts = {
            'Ctrl/⌘ + K': 'Focus search',
            'Escape': 'Close search',
            '?': 'Show shortcuts'
        };
        
        console.log('🚀 Keyboard Shortcuts:', shortcuts);
    }
    
    // Show shortcuts on ? key
    document.addEventListener('keydown', function(e) {
        if (e.key === '?' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            showKeyboardShortcuts();
        }
    });
    
})();
