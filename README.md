# TomOi Help Center

Help Center được xây dựng với MkDocs Material và Decap CMS, deploy trên Netlify.

## 🚀 Deploy Instructions

### 1. Deploy to Netlify
1. Connect repository to Netlify
2. Build settings sẽ tự động được detect từ `netlify.toml`
3. Click "Deploy site"

### 2. Enable Netlify Identity (for Admin)
1. Go to Site Settings → Identity
2. Click "Enable Identity"
3. Under Registration preferences, select "Open" or "Invite only"
4. Under Services, enable "Git Gateway"

### 3. Access Admin Interface
- Admin URL: `https://your-site.netlify.app/admin`
- Create first admin user through Netlify Identity

## 🛠️ Local Development

```bash
# Install dependencies
pip install mkdocs-material mkdocs-macros-plugin mkdocs-minify-plugin

# Run development server
mkdocs serve

# Build static site
mkdocs build
```

## 📁 Project Structure

```
├── admin/                 # Decap CMS admin interface
├── docs/                  # Documentation content
├── overrides/             # Custom HTML templates
├── mkdocs.yml            # MkDocs configuration
├── netlify.toml          # Netlify build configuration
└── package.json          # Node.js package metadata
```

## ✨ Features

- 🎨 Apple-like minimalist design
- 🌙 Light/Dark mode toggle
- 🔍 Advanced search functionality
- 📱 Fully responsive
- ⚡ Fast static site generation
- 🎛️ Content management with Decap CMS
- 🚀 Auto-deploy on Netlify

## 🔧 Configuration

- Site URL: Update in `mkdocs.yml` and `admin/config.yml`
- Brand colors: Customize in `docs/styles/theme.css`
- Navigation: Edit in `mkdocs.yml`
- CMS fields: Configure in `admin/config.yml`