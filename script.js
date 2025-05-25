// في ملف script.js
document.addEventListener('DOMContentLoaded', function() {
    // تحديث سنة حقوق النشر تلقائيًا
    document.getElementById('year').textContent = new Date().getFullYear();
});
