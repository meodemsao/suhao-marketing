# Kế hoạch Website — Nội thất Luxury

## Stack đã chọn
- **Frontend:** Astro (Static Site Generator)
- **CMS:** Directus (Open-source, self-hosted)
- **Hosting FE:** Cloudflare Pages (Free)
- **Hosting CMS:** VPS hoặc Railway (~100-200K/tháng)
- **Chi phí:** Domain 300K/năm + VPS ~1.5-2 triệu/năm

---

## 2 Giai đoạn

### GĐ 1: HTML Demo (1-2 tuần)
- Code landing page tĩnh, responsive, design luxury
- Mock data 5 công trình + 3 bài blog
- Deploy demo lên Cloudflare Pages
- Review → feedback → điều chỉnh design

### GĐ 2: Astro + Directus (2-3 tuần)
- Chuyển HTML → Astro components
- Setup Directus + tạo collections
- Kết nối Astro ↔ Directus API
- Upload content thật vào CMS
- SEO + Deploy production

---

## Cấu trúc Website

| Trang | Mô tả | CMS content |
|-------|-------|-------------|
| **Trang chủ** | Hero video/ảnh + USP + CTA + Featured projects | Featured projects từ Directus |
| **Portfolio** | Grid công trình, filter theo loại/phong cách | ✅ Collection "Projects" |
| **Chi tiết công trình** | Story + gallery + before/after + chi phí | ✅ Dynamic từ Directus |
| **Dịch vụ** | 4 dịch vụ: Thiết kế / Thi công / Nội thất / Trọn gói | Tĩnh hoặc CMS |
| **Đầu tư & Chi phí** | Bảng giá 3 tiers minh bạch | Tĩnh |
| **Blog** | Danh sách bài viết, 4 chuyên mục | ✅ Collection "Posts" |
| **Chi tiết bài viết** | Nội dung rich text + ảnh | ✅ Dynamic từ Directus |
| **Về chúng tôi** | Brand story + đội ngũ + xưởng | Tĩnh |
| **Liên hệ** | Form + Zalo chat + Google Maps | Tĩnh |

---

## Directus Collections

### Collection: `projects` (Công trình)
| Field | Type | Ghi chú |
|-------|------|---------|
| title | String | Tên dự án |
| slug | String | URL-friendly |
| category | Dropdown | Biệt thự / Căn hộ / Văn phòng / Nội thất |
| style | Dropdown | Modern / Scandinavian / Indochine / Luxury / Japandi |
| area | Integer | Diện tích m² |
| investment | String | VD: "1.2 - 1.5 tỷ" |
| duration | String | VD: "3 tháng" |
| location | String | Quận/TP |
| description | WYSIWYG | Câu chuyện dự án |
| main_image | Image | Ảnh chính/thumbnail |
| gallery | Multiple Files | Thư viện ảnh |
| before_image | Image | Ảnh trước |
| after_image | Image | Ảnh sau |
| materials | Tags | Vật liệu sử dụng |
| featured | Boolean | Hiện trang chủ |
| status | Published/Draft | Trạng thái |

### Collection: `posts` (Bài viết)
| Field | Type | Ghi chú |
|-------|------|---------|
| title | String | Tiêu đề |
| slug | String | URL |
| category | Dropdown | Xu hướng / Vật liệu / Chi phí / Tips |
| excerpt | Text | Tóm tắt |
| content | WYSIWYG | Nội dung |
| cover_image | Image | Ảnh bìa |
| author | String | Tác giả |
| published_at | DateTime | Ngày đăng |
| seo_title | String | SEO |
| seo_description | Text | SEO |
| status | Published/Draft | Trạng thái |

### Collection: `testimonials` (Đánh giá)
| Field | Type | Ghi chú |
|-------|------|---------|
| client_name | String | Tên khách |
| quote | Text | Lời nhận xét |
| project | M2O → projects | Liên kết công trình |
| avatar | Image | Ảnh khách (optional) |
| rating | Integer | 1-5 sao |

---

## Lộ trình chi tiết

### GĐ 1: HTML Demo
- [ ] Wireframe/mockup các trang
- [ ] Code HTML trang chủ (hero + featured projects + testimonials + CTA)
- [ ] Code trang Portfolio (grid + filter)
- [ ] Code trang chi tiết công trình (gallery + story + pricing)
- [ ] Code trang Services + Pricing
- [ ] Code trang About + Contact
- [ ] Code trang Blog list + Blog detail
- [ ] Responsive mobile/tablet
- [ ] Deploy demo Cloudflare Pages
- [ ] Review & feedback

### GĐ 2: Astro + Directus
- [ ] Init Astro project, chuyển HTML → components
- [ ] Setup Directus trên VPS/Railway
- [ ] Tạo collections + fields theo schema trên
- [ ] Code Astro: fetch projects từ Directus API
- [ ] Code Astro: fetch posts từ Directus API
- [ ] Upload 5 công trình + 3 bài blog vào Directus
- [ ] SEO: meta tags, sitemap, robots.txt, Open Graph
- [ ] Lighthouse audit (target: >90 performance)
- [ ] Deploy production

### GĐ 3: Mở rộng
- [ ] Before/After slider component
- [ ] Zalo chat widget
- [ ] Google Analytics + Search Console
- [ ] Blog SEO: thêm 10 bài
- [ ] Công cụ ước tính chi phí v1
