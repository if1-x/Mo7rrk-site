// كود بسيط لتشغيل زر البحث أو القائمة الجانبية مستقبلاً
document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.btn-primary');
    const searchInput = document.querySelector('.search-box input');

    searchBtn.addEventListener('click', () => {
        if(searchInput.value.trim() !== "") {
            console.log('جاري البحث عن:', searchInput.value);
            // هنا تقدر تربطه بالـ API تبعك لاحقاً
        } else {
            searchInput.focus();
        }
    });
});
