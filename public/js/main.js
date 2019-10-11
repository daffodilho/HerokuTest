(() => {
    console.log('fired!');

    let hamburgerMenu = document.querySelector('#hamburger object svg'),
        mainNav = document.querySelector('#navbar');

    function showMenu() {
        mainNav.classList.toggle('appear');
    }

    hamburgerMenu.addEventListener('click', showMenu);
})();