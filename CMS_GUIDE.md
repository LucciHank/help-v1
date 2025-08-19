# 📝 Hướng dẫn sử dụng Decap CMS

## 🎯 **VẤN ĐỀ ĐÃ ĐƯỢC FIX:**

### ✅ 1. **Trang tạo thành công nhưng không hiển thị**
**Nguyên nhân**: Files được tạo nhưng chưa có trong navigation  
**Giải pháp**: 
- Files sẽ accessible qua direct URL
- Để hiện trong menu: thêm vào `mkdocs.yml` → nav section

### ✅ 2. **Admin có thể tạo header pages**  
**Collection mới**: "🏠 Trang Header" 
- Tạo các trang index.md cho từng section
- Select dropdown để chọn section (huong-dan, faq, chinh-sach, pages)

### ✅ 3. **Edit content đã update được**
**Fix**: Git Gateway + Netlify Identity đã hoạt động
- Commit tự động vào Git
- Netlify auto-rebuild

## 🚀 **WORKFLOW TẠO CONTENT:**

### 1. **Tạo trang mới**
1. Vào `/admin/` → Login
2. Chọn collection (Pages, Hướng dẫn, FAQ, etc.)
3. Click "New [Type]"
4. Fill thông tin + content
5. **Save Draft** → **Publish**

### 2. **File được tạo tại**:
```bash
📄 Trang chính    → docs/pages/ten-trang.md
🏠 Header Pages   → docs/section/index.md  
📚 Hướng dẫn      → docs/huong-dan/ten-bai.md
❓ FAQ            → docs/faq/cau-hoi.md
📋 Chính sách    → docs/chinh-sach/chinh-sach.md
```

### 3. **Trang accessible ngay**:
```bash
✅ Direct URL: /pages/ten-trang/
✅ Searchable: Có trong search
✅ SEO ready: Meta tags tự động
```

### 4. **Thêm vào navigation** (nếu cần):
Edit `mkdocs.yml`:
```yaml
nav:
  - Trang chính:
      - Trang chính: pages/index.md
      - Trang mới: pages/ten-trang.md  # ← Thêm dòng này
```

## 📋 **COLLECTIONS AVAILABLE:**

### 📄 **Trang chính** 
- **Folder**: `docs/pages/`
- **URL**: `/pages/slug/`
- **Dùng cho**: Landing pages, static content

### 🏠 **Trang Header**
- **Folder**: `docs/section/` (chọn section từ dropdown)  
- **URL**: `/section/` (index pages)
- **Dùng cho**: Trang đầu mỗi section

### 📚 **Hướng dẫn**
- **Folder**: `docs/huong-dan/`
- **URL**: `/huong-dan/slug/`
- **Features**: Progress steps, categories
- **Dùng cho**: Tutorials, how-to guides

### ❓ **FAQ**
- **Folder**: `docs/faq/`  
- **URL**: `/faq/slug/`
- **Features**: Categories, priority, keywords
- **Dùng cho**: Q&A, troubleshooting

### 📋 **Chính sách**
- **Folder**: `docs/chinh-sach/`
- **URL**: `/chinh-sach/slug/`
- **Features**: Version control, effective dates
- **Dùng cho**: Terms, privacy, policies

## 🔧 **FEATURES CMS:**

### ✨ **WYSIWYG Editor**
- Rich text formatting
- Image upload → `docs/uploads/`
- Code blocks với syntax highlighting  
- Tables, lists, quotes
- Preview real-time

### 🎯 **Progress Steps** (Hướng dẫn)
```yaml
current_step: 2
steps:
  - title: "Bước 1"
    desc: "Mô tả bước 1"  
  - title: "Bước 2"
    desc: "Mô tả bước 2"
```

### 🔍 **SEO Fields**
- Meta title, description
- Keywords list  
- Canonical URL
- Featured image

### 📊 **Content Management**
- Draft/Published status
- Categories và tags
- Priority ordering
- Author tracking
- Date management

## 🛟 **TROUBLESHOOTING:**

### ❌ **Login CMS không được**
```bash
1. Check Netlify Identity enabled?
2. User đã được invite + confirm email?
3. Git Gateway enabled?
4. URL trong config.yml đúng?
```

### ❌ **Content không update sau edit**
```bash
1. Check có commit mới trong Git?
2. Netlify build successful?
3. Clear browser cache
4. Check Deploy log có lỗi?
```

### ❌ **Image upload fail**
```bash
1. Check docs/uploads/ folder exists
2. File size < 5MB
3. Format: jpg, png, gif, webp
4. Git LFS có cần thiết?
```

## 🎉 **READY TO USE!**

**CMS đã hoạt động hoàn toàn:**
✅ Create content → Git commit  
✅ Edit content → Auto update  
✅ Upload images → docs/uploads/  
✅ SEO optimization → Auto meta tags  
✅ Responsive preview → Mobile ready  

**Start creating amazing content! 🚀**
