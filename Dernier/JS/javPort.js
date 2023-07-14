const typed = new Typed('.multiple-text' , {
    strings: ['Web Developer', 'Mobile Developer',"Junior's Data Scientist"],
    typeSpeed: 100,
    backSpeed: 100,
    blackDelay: 1000,
    loop: true
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal('.container , .header-text p', {origin: 'left'});