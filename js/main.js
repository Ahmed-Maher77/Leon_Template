// Select elements
const header = document.querySelector('header');
const NavTrigger = document.querySelector('.icon');
const NavList = document.querySelector('header .navbar');
const closeNav = document.querySelector('header .fa-xmark');
const ShowMoreBtn = document.querySelector("#portfolio-sec .container button")
const NoMoreMsg = document.querySelector("#portfolio-sec .container .no-more-msg")

console.log(NavTrigger, NavList, closeNav);

// ==================== Header Visibility ====================
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})


// ==================== Navbar ====================
NavTrigger.addEventListener('click', () => {
    NavList.classList.toggle('active');
})
closeNav.addEventListener('click', () => {
    NavList.classList.remove('active');
})
window.addEventListener('click', (e) => {
    if (NavList.classList.contains('active') &&
            !NavList.contains(e.target) &&
            !NavTrigger.contains(e.target)
    ) {
        NavList.classList.remove('active');
    }
})


// ==================== Show More Button in Portfolio Section ====================
ShowMoreBtn.addEventListener('click', () => {
    NoMoreMsg.classList.add('active');
    setTimeout(() => {
        NoMoreMsg.classList.remove('active');
    }, 1500);
    
})