document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.profile-bar .btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('ativo'));
            btn.classList.add('ativo');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');

    searchInput.addEventListener('focus', function () {
        searchIcon.style.display = 'none';
        searchInput.classList.add('no-icon');
    });

    searchInput.addEventListener('blur', function () {
        if (!searchInput.value.trim()) {
            searchIcon.style.display = 'inline';
            searchInput.classList.remove('no-icon');
        }
    });
});