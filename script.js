const menu = document.querySelector('.fa-bars');
const header = document.querySelector('header');
const section1 = document.querySelector('#section1')
const body = document.querySelector('body');
const modes = document.querySelector('.fa-sun');
const closebtn = document.querySelector('.fa-xmark');
const color = document.querySelector('.fa-palette');
const bodyMode = document.querySelector('.body-mod');
const imgpage2 = document.querySelector('.img-page2');
const allcolor = document.querySelectorAll('.color1');

// this is a scroll animation componaint
AOS.init();







// the section1 script
// const menu = document.querySelector('.fa-solid');
// const section1 = document.querySelector('#section1')

menu.addEventListener('click', () => {
    section1.classList.toggle('nav');
})


document.querySelectorAll('ul li a').forEach(function (aa) {
    aa.addEventListener('click', function () {
          section1.classList.toggle('nav');

    //    console.log('you juct clisc')
    //    section1.classList.toggle('active');
    //    body.classList.toggle('active');
    //    imgpage2.classList.toggle('active');
    })
})



///////////////////////////////////////////////////////////////////////////////
//    the color changing codes
const colors = document.querySelectorAll('.color1');

let i;
for(i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', changecolor)
}

function changecolor () {
    let color = this.getAttribute('data-color');
    document.documentElement.style.setProperty('--color', color);
}


allcolor.forEach( function (color) {
    color.addEventListener('click', function () {
        bodyMode.classList.toggle('active')
    })
})



modes.addEventListener('click', function () {
    body.classList.toggle('mode')
}) 

color.addEventListener('click', function () {
     bodyMode.classList.toggle('active')
})







header.addEventListener('click', function (e) {
    console.log('you just click')
     e.preventDefault();
     const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth'})

})






// const header = document.querySelector('header');

// let lastScrollTop = 0;

// window.addEventListener('scroll', function () {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop < lastScrollTop) {
//         header.classList.add('scroll')
//     } else {
//         header.classList.remove('scroll');
//     }
//     lastScrollTop  = scrollTop;
    
//     if(window.scrollY < header.offsetHeight + 250) {
//         header.classList.add('scroll')
//     }
// })



let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < lastScrollTop) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll');
    }
    lastScrollTop  = scrollTop;
    
    if(window.scrollY < header.offsetHeight + 250) {
        header.classList.add('scroll');
    }
})






//    the send mail function

function SendMail(e) {
    var params = {
        from_name : document.getElementById('name').value,
        email_id : document.getElementById('email').value,
        object : document.getElementById('object').value,
        message : document.getElementById('message').value
    }
    emailjs.send('service_me5p4tc','template_y25fwag',params).then(function () {
        alert('The message have been sent successfully, thanks for contacting us');
        // document.querySelector('.thanks').classList.add('active');
    })
}        
document.querySelector('.send-message').addEventListener('click', function (e) {
    e.preventDefault();
})
















































































