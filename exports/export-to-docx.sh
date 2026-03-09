#!/bin/bash
# Script xuất tất cả tài liệu marketing sang DOCX
# Chạy: bash exports/export-to-docx.sh

set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
DOCS_DIR="$PROJECT_DIR/docs"
EXPORT_DIR="$PROJECT_DIR/exports"

# Kiểm tra pandoc
if ! command -v pandoc &> /dev/null; then
    echo "❌ Cần cài pandoc trước: brew install pandoc"
    exit 1
fi

echo "📄 Bắt đầu xuất DOCX..."
echo "📁 Thư mục nguồn: $DOCS_DIR"
echo "📁 Thư mục xuất: $EXPORT_DIR"
echo ""

pandoc "$DOCS_DIR/marketing-lean-plan.md" -o "$EXPORT_DIR/ke-hoach-marketing-lean.docx" && echo "✅ 1/6 ke-hoach-marketing-lean.docx"
pandoc "$DOCS_DIR/marketing-action-plan.md" -o "$EXPORT_DIR/ke-hoach-hanh-dong-marketing.docx" && echo "✅ 2/6 ke-hoach-hanh-dong-marketing.docx"
pandoc "$DOCS_DIR/marketing-plan-report.md" -o "$EXPORT_DIR/bao-cao-ke-hoach-marketing.docx" && echo "✅ 3/6 bao-cao-ke-hoach-marketing.docx"
pandoc "$DOCS_DIR/marketing-kit-checklist.md" -o "$EXPORT_DIR/marketing-kit-checklist.docx" && echo "✅ 4/6 marketing-kit-checklist.docx"
pandoc "$DOCS_DIR/todo-checklist.md" -o "$EXPORT_DIR/todo-checklist.docx" && echo "✅ 5/6 todo-checklist.docx"
pandoc "$DOCS_DIR/website-concept-framework.md" -o "$EXPORT_DIR/khung-y-tuong-website.docx" && echo "✅ 6/6 khung-y-tuong-website.docx"

echo ""
echo "🎉 Xuất xong! Các file DOCX:"
ls -lh "$EXPORT_DIR"/*.docx
echo ""
echo "📌 Upload lên Google Drive → Open with Google Docs để chỉnh sửa"
