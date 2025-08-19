# GitBook v3 - MkDocs Material + Decap CMS

> **Repo mẫu trọn bộ** cho Help Center với thiết kế Apple-like, tối giản và sang trọng.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![MkDocs](https://img.shields.io/badge/MkDocs-Material-blue.svg)
![Decap CMS](https://img.shields.io/badge/Decap-CMS-green.svg)
![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7.svg)

## ✨ Tính năng

- 🎨 **Thiết kế Apple-like**: Tối giản, sang trọng với accent #df2626
- 🌓 **Light/Dark Mode**: Tự động theo hệ thống hoặc chuyển đổi thủ công
- 📱 **Responsive**: Hoạt động hoàn hảo trên mọi thiết bị
- ⚡ **Performance**: Tối ưu tốc độ tải và SEO
- 🔧 **Admin Dashboard**: Quản lý nội dung dễ dàng với Decap CMS
- 📊 **Progress Steps**: Component tiến trình tùy chỉnh
- 🔍 **Search**: Tìm kiếm thông minh
- 📝 **Rich Editor**: WYSIWYG editor với đầy đủ blocks

## 🚀 Demo

- **Site**: [https://your-help-center.netlify.app](https://your-help-center.netlify.app)
- **Admin**: [https://your-help-center.netlify.app/admin](https://your-help-center.netlify.app/admin)

## 📁 Cấu trúc

```
gitbook-v3/
├── mkdocs.yml              # Config MkDocs chính
├── netlify.toml            # Config deploy Netlify
├── main.py                 # Macros cho progress steps
├── README.md               # Tài liệu này
├── admin/                  # Decap CMS
│   ├── index.html         # Admin interface
│   └── config.yml         # CMS configuration
├── overrides/             # Template overrides
│   ├── main.html         # Layout chính
│   └── partials/
│       └── footer.html   # Footer tùy chỉnh
└── docs/                  # Nội dung
    ├── index.md          # Trang chủ
    ├── styles/
    │   └── theme.css     # CSS tùy chỉnh Apple-like
    ├── huong-dan/        # Hướng dẫn
    ├── faq/             # FAQ
    └── chinh-sach/      # Chính sách
```

## 🎨 Thiết kế

### Màu sắc
- **Accent**: `#df2626` (chỉ dùng cho icon/active/hover)
- **Text**: `#0a0a0a` / `#f5f5f5` (dark)
- **Border**: `#e5e7eb` / `#374151` (dark)
- **Background**: Neutral whites/blacks

### Typography
- **Text**: SF Pro Display, Helvetica Neue, Arial
- **Code**: SF Mono, Menlo, Consolas

### Components
- **Progress Steps**: Hiển thị tiến trình từng bước
- **Cards**: Layout grid responsive
- **Alerts**: Admonitions với style tùy chỉnh
- **Navigation**: Tabs lớn + sidebar cây như GitBook

## 🛠️ Cài đặt

### 1. Clone repo

```bash
git clone https://github.com/yourusername/gitbook-v3.git
cd gitbook-v3
```

### 2. Cài đặt dependencies

```bash
pip install mkdocs-material mkdocs-macros-plugin
```

### 3. Chạy local

```bash
mkdocs serve
```

Truy cập: `http://localhost:8000`

### 4. Truy cập Admin

Mở: `http://localhost:8000/admin`

## 🌐 Deploy lên Netlify

### Cách 1: Deploy từ GitHub (Khuyến nghị)

1. **Push code lên GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Kết nối Netlify**:
   - Đăng nhập [Netlify](https://netlify.com)
   - New site from Git → GitHub
   - Chọn repo `gitbook-v3`

3. **Build settings**:
   ```
   Build command: pip install mkdocs-material mkdocs-macros-plugin && mkdocs build
   Publish directory: site
   ```

4. **Deploy!** 🎉

### Cách 2: Drag & Drop

1. **Build local**:
   ```bash
   mkdocs build
   ```

2. **Upload folder `site/`** lên Netlify

### 3. Thiết lập CMS

1. **Enable Identity** trong Netlify dashboard
2. **Enable Git Gateway** trong Identity settings
3. **Invite users** để truy cập `/admin`

## 📝 Sử dụng Admin

### Đăng nhập Admin

1. Truy cập: `https://yoursite.netlify.app/admin`
2. Đăng ký với email của bạn
3. Xác minh email và đặt mật khẩu
4. Bắt đầu quản lý nội dung!

### Quản lý nội dung

#### 📚 Hướng dẫn
- Tạo/sửa/xóa bài hướng dẫn
- Thiết lập progress steps
- Phân loại theo category
- Đặt độ ưu tiên

#### ❓ FAQ  
- Quản lý câu hỏi thường gặp
- Tags và keywords để tìm kiếm
- Phân loại theo chủ đề

#### 📋 Chính sách
- Điều khoản sử dụng
- Chính sách bảo mật
- Versioning và thời gian hiệu lực

#### ⚙️ Cài đặt
- Thông tin site general
- Social media links
- SEO settings

### Progress Steps

Sử dụng macro `steps()` trong markdown:

```markdown
---
current_step: 2
steps:
  - title: Bước 1
    desc: Mô tả bước 1
  - title: Bước 2  
    desc: Mô tả bước 2
  - title: Bước 3
    desc: Mô tả bước 3
---

{{ steps(steps, current_step) }}
```

## 🎯 Tùy chỉnh

### Thay đổi màu accent

Trong `docs/styles/theme.css`:

```css
:root {
  --brand-accent: #your-color;
  --brand-accent-600: #darker-shade;
  --brand-accent-400: #lighter-shade;
}
```

### Thêm pages mới

1. Tạo file `.md` trong `docs/`
2. Cập nhật `nav` trong `mkdocs.yml`
3. Thêm collection trong `admin/config.yml` (nếu cần)

### Custom components

Thêm macro trong `main.py`:

```python
@env.macro
def your_component(param1, param2="default"):
    return f"<div>{param1} - {param2}</div>"
```

Sử dụng: `{{ your_component("value1", "value2") }}`

## 📊 Analytics & SEO

### Google Analytics

Thêm vào `mkdocs.yml`:

```yaml
extra:
  analytics:
    provider: google
    property: G-XXXXXXXXXX
```

### SEO

- ✅ Meta tags tự động
- ✅ Open Graph support  
- ✅ Schema.org markup
- ✅ Sitemap generation
- ✅ Robots.txt

## 🔧 Troubleshooting

### Build errors

**Lỗi thường gặp**:

```bash
# Module not found
pip install mkdocs-material mkdocs-macros-plugin

# Permission denied  
chmod +x build-script.sh

# Memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
```

### CMS không hoạt động

1. Kiểm tra Netlify Identity đã bật
2. Verify Git Gateway settings
3. Clear browser cache
4. Kiểm tra `admin/config.yml` syntax

### Performance

- ✅ Enable minification trong Netlify
- ✅ Optimize images với tinypng
- ✅ Use WebP format cho images
- ✅ Enable Gzip compression

## 🤝 Contributing

1. Fork repo
2. Tạo feature branch: `git checkout -b feature/amazing-feature`
3. Commit: `git commit -m 'Add amazing feature'`
4. Push: `git push origin feature/amazing-feature`
5. Mở Pull Request

## 📄 License

MIT License - xem [LICENSE](LICENSE) để biết chi tiết.

## 📞 Hỗ trợ

- 📧 **Email**: support@yourdomain.com
- 💬 **Discord**: [Join community](https://discord.gg/your-server)
- 📚 **Docs**: [Full documentation](https://docs.yourdomain.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/gitbook-v3/issues)

## 🎉 Credits

- [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) - Theme framework
- [Decap CMS](https://decapcms.org/) - Content management
- [Netlify](https://netlify.com/) - Hosting platform
- [SF Pro Font](https://developer.apple.com/fonts/) - Typography

---

<div align="center">

**Nếu repo này hữu ích, hãy ⭐ star để ủng hộ!**

Made with ❤️ by [Your Name](https://github.com/yourusername)

</div>
