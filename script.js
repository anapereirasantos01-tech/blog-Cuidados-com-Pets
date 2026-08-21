document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    const likeBtn = document.getElementById('like-btn');

    // Verifica a preferência salva no navegador
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    // Ação para alternar para o Modo Claro/Escuro
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        const isLight = document.body.classList.contains('light-mode');

        if (isLight) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Ação de Curtir
    if (likeBtn) {
        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('liked');
        });
    }
});