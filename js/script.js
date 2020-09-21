gsap.registerPlugin(ScrollTrigger)

const runScripts = function () {
    const startTimeline = gsap.timeline({
        defaults: {
            delay: 0.75,
            ease: Power4.easeOut
        }
    })

    startTimeline
        .to('.color-overlay', {
            duration: 0.5,
            y: '-100vh',
            delay: 0.5
        }, 0)
        .from('.letter-1', {
            duration: 1,
            y: '-16%',
            delay: 1
        }, 1)
        .from('.letter-2', {
            duration: 1,
            y: '-16%',
            delay: 0.75
        }, 1)
        .from('.letter-3', {
            duration: 1,
            y: '-16%',
            delay: 0.66
        }, 1)
        .from('.letter-4', {
            duration: 1,
            y: '-16%',
            delay: 0.5
        }, 1)
        .from('.letter-5', {
            duration: 1,
            y: '-16%',
            delay: 0.25
        }, 1)
        .from('.letter-6', {
            duration: 1,
            y: '16%',
            delay: 0.5
        }, 1)
        .from('.letter-7', {
            duration: 1,
            y: '16%',
            delay: 0.66
        }, 1)
        .from('.letter-8', {
            duration: 1,
            y: '16%',
            delay: 0.75
        }, 1)
        .from('.letter-9', {
            duration: 1,
            y: '16%',
            delay: 1
        }, 1)
        .to('.dilettantlogo', {
            duration: 1.5,
            opacity: 0.075,
            fill: '#1D3135'
        }, 3)
        .from('.hero-copy', {
            duration: 1,
            opacity: 0,
            y: '20vh',
            color: '#D8DDD3',
            delay: 0.75,
            ease: Power4.easeOut,
        }, 3)

        const imprintTimeline = gsap.timeline()

        imprintTimeline
            .to('div.imprint-copy', {
                duration: 1,
                opacity: 1,
                y: '0',
                delay: 0.5,
                ease: Power4.easeOut
            })

    gsap.to('#dilettantlogo', {
        duration: 1,
        scale: 0.8,
        y: '-25vh',
        ease: Power4.easeOut,
        scrollTrigger: {
            trigger: '#dilettantlogo',
            start: 'top 20%',
            toggleActions: 'play play reverse reverse',
            scrub: 1,
        }
    })

    gsap.to('.hero-copy h1', {
        duration: 1,
        color: '#E5DCD3',
        opacity: 0,
        y: '50%',
        scrollTrigger: {
            trigger: '#dilettantlogo',
            start: 'top 20%',
            scrub: 1,
            toggleActions: 'play play reverse reverse'
        }
    })

    gsap.to('.clients__copy', {
        duration: 1,
        opacity: 1,
        y: '0',
        ease: Power4.easeOut,
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.clients__copy',
            start: 'top bottom-=100px',
        }
    })

    gsap.to('.clients__grid__cell img', {
        duration: 1,
        scale: 1.25,
        y: '0',
        ease: Power4.easeOut,
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.clients__grid',
            start: 'top bottom-=250px',
        }
    })

    gsap.to('.footer__column', {
        duration: 1,
        y: '0',
        opacity: 1,
        ease: Power4.easeOut,
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.footer__column',
            start: 'center bottom-=100px',
        }
    })

    gsap.to('.footer__imprint', {
        duration: 1,
        y: '0',
        opacity: 1,
        ease: Power4.easeOut,
        scrollTrigger: {
            trigger: '.footer__column',
            start: 'center bottom-=100px',
        }
    })
}

runScripts();


//   barba.init({
//     views: [{
//       namespace: 'home',
//       beforeEnter() {
//         runScripts();
//       },
//       afterEnter() {
//           runScripts();
//           window.scrollTo({
//             top: 0,
//             behavior: "smooth",
//           });
//       }
//     }]
//   });