"""
MkDocs Macros plugin để hỗ trợ progress steps và các components tùy chỉnh
"""

def define_env(env):
    """
    Định nghĩa các macro và biến cho MkDocs
    """
    
    @env.macro
    def progress_steps(progress_data=None):
        """
        Tạo progress steps component từ page metadata
        
        Args:
            progress_data: dict - Data từ page.meta.progress_steps
        
        Returns:
            str: HTML cho progress steps
        """
        if not progress_data or not progress_data.get("enabled"):
            return ""
            
        items = progress_data.get("steps", [])
        current = progress_data.get("current_step", 1)
        
        if not items:
            return ""
            
        html = ['<ol class="progress-steps">']
        
        for i, item in enumerate(items, start=1):
            # Xác định class cho mỗi bước
            if i < current:
                step_class = "done"
            elif i == current:
                step_class = "current"
            else:
                step_class = ""
            
            title = item.get("title", f"Bước {i}")
            desc = item.get("desc", "")
            link = item.get("link", "")
            
            title_html = f'<a href="{link}" class="title-link">{title}</a>' if link else title
            
            html.append(f'''
    <li class="{step_class}">
        <span class="dot">{i}</span>
        <div class="meta">
            <div class="title">{title_html}</div>
            {f'<div class="desc">{desc}</div>' if desc else ''}
        </div>
    </li>''')
        
        html.append('</ol>')
        return "\n".join(html)
    
    @env.macro  
    def render_steps(items, current=1):
        """
        Render progress steps - renamed to avoid conflicts
        """
        if not items:
            return ""
            
        html = ['<ol class="progress-steps">']
        
        for i, item in enumerate(items, start=1):
            # Xác định class cho mỗi bước
            if i < current:
                step_class = "done"
            elif i == current:
                step_class = "current"
            else:
                step_class = ""
            
            title = item.get("title", f"Bước {i}")
            desc = item.get("desc", "")
            
            html.append(f'''
    <li class="{step_class}">
        <span class="dot">{i}</span>
        <div class="meta">
            <div class="title">{title}</div>
            {f'<div class="desc">{desc}</div>' if desc else ''}
        </div>
    </li>''')
        
        html.append('</ol>')
        return "\n".join(html)
    
    @env.macro
    def alert(content, type="info", title=""):
        """
        Tạo alert box tùy chỉnh
        
        Args:
            content: str - Nội dung alert
            type: str - Loại alert (info, success, warning, error)
            title: str - Tiêu đề alert (tùy chọn)
        
        Returns:
            str: HTML cho alert box
        """
        icons = {
            "info": "information-outline",
            "success": "check-circle-outline", 
            "warning": "alert-outline",
            "error": "alert-circle-outline"
        }
        
        icon = icons.get(type, "information-outline")
        title_html = f'<div class="alert-title">{title}</div>' if title else ''
        
        return f'''
<div class="custom-alert alert-{type}">
    <div class="alert-icon">
        <svg viewBox="0 0 24 24"><use href="#mdi-{icon}"></use></svg>
    </div>
    <div class="alert-content">
        {title_html}
        <div class="alert-text">{content}</div>
    </div>
</div>'''

    @env.macro
    def card(title, content, icon="", link=""):
        """
        Tạo card component
        
        Args:
            title: str - Tiêu đề card
            content: str - Nội dung card
            icon: str - Icon Material Design (tùy chọn)
            link: str - Link khi click vào card (tùy chọn)
        
        Returns:
            str: HTML cho card
        """
        icon_html = f'<div class="card-icon"><svg viewBox="0 0 24 24"><use href="#mdi-{icon}"></use></svg></div>' if icon else ''
        
        card_content = f'''
<div class="custom-card">
    {icon_html}
    <div class="card-content">
        <h3 class="card-title">{title}</h3>
        <p class="card-text">{content}</p>
    </div>
</div>'''
        
        if link:
            return f'<a href="{link}" class="card-link">{card_content}</a>'
        
        return card_content

    @env.macro  
    def grid(items, columns=2):
        """
        Tạo grid layout cho cards hoặc content
        
        Args:
            items: list - Danh sách items để hiển thị trong grid
            columns: int - Số cột (mặc định 2)
        
        Returns:
            str: HTML cho grid layout
        """
        grid_html = f'<div class="custom-grid" style="grid-template-columns: repeat({columns}, 1fr);">'
        
        for item in items:
            grid_html += f'<div class="grid-item">{item}</div>'
            
        grid_html += '</div>'
        return grid_html

    @env.macro
    def page_navigation():
        """
        Tạo navigation buttons đơn giản cho trang hiện tại
        """
        html = ['<div class="page-navigation">']
        
        # Static demo buttons for now
        html.append('''
    <div class="page-nav-placeholder"></div>
    <a href="#" class="page-nav-btn page-nav-btn--next">
        <div>
            <div class="page-nav-btn__label">Trang sau</div>
            <div class="page-nav-btn__title">Trang tiếp theo</div>
        </div>
        <div class="page-nav-btn__icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9,18 15,12 9,6"/>
            </svg>
        </div>
    </a>''')
        
        html.append('</div>')
        return "\n".join(html)

    # Biến toàn cục có thể sử dụng trong templates
    env.variables['site_brand'] = 'Help Center'
    env.variables['support_email'] = 'support@yourdomain.com'
    env.variables['company_name'] = 'Your Company'
