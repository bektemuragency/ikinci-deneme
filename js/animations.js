export const initAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);

    // Splash Animation
    const tl = gsap.timeline();

    gsap.set("#splash-square", { 
        x: -500, 
        rotation: -180, 
        scale: 0.8, 
        opacity: 0,
        backgroundColor: "#FF3E00"
    });
    gsap.set(".splash-logo", { y: "120%", opacity: 0 });

    tl.to("#splash-square", {
        x: 0,
        rotation: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.5
    })
    .to(".splash-logo", {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "expo.out"
    }, "-=0.7")
    .to("#splash-square", {
        scale: 100,
        duration: 1.5,
        ease: "expo.inOut",
        delay: 0.5
    })
    .to(".splash-logo", {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: "power2.in"
    }, "-=1")
    .to("#splash", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        onComplete: () => {
            revealMainContent();
        }
    }, "-=0.3");
};

const revealMainContent = () => {
    const tl = gsap.timeline();
    const titleSpans = document.querySelectorAll(".main-title span");

    tl.to(".main-content", { opacity: 1, duration: 0.1 });

    if (titleSpans.length > 0) {
        tl.from(titleSpans, {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1.2,
            ease: "expo.out"
        });
    }

    const revealElements = document.querySelectorAll(".gs-reveal");
    revealElements.forEach((el) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                onEnter: () => el.style.opacity = "1",
                once: true
            },
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "expo.out"
        });
    });

    gsap.to(".video-wrapper", {
        scrollTrigger: {
            trigger: ".work-video-container",
            start: "top 80%",
            end: "top 20%",
            scrub: 1.2,
        },
        width: "100%",
        height: "100vh",
        borderRadius: "0px",
        ease: "none"
    });

    gsap.to(".video-overlay h2", {
        scrollTrigger: {
            trigger: ".work-video-container",
            start: "top 40%",
            end: "top 10%",
            scrub: true,
        },
        opacity: 1,
        y: 0,
        ease: "power2.out"
    });

    const serviceRows = document.querySelectorAll(".service-row");
    serviceRows.forEach((row) => {
        const imageSide = row.querySelector(".service-image-side");
        const textSide = row.querySelector(".service-text-side");
        const isReverse = row.classList.contains("row-reverse");

        gsap.from(imageSide, {
            scrollTrigger: { trigger: row, start: "top 80%" },
            x: isReverse ? 100 : -100,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out"
        });

        gsap.from(textSide, {
            scrollTrigger: { trigger: row, start: "top 80%" },
            x: isReverse ? -100 : 100,
            opacity: 0,
            duration: 1.5,
            delay: 0.2,
            ease: "power4.out"
        });
    });
};
