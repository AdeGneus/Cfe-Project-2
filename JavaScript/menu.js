const classToggle = () => {
    const navs = document.querySelectorAll('.menu')

    navs.forEach(nav => nav.classList.toggle('nav-toggleShow'));

}

document.querySelector('#hamburger').addEventListener('click', classToggle);