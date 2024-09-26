gsap.registerPlugin(ScrollTrigger);

function locoScrollTrigger() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locoScrollTrigger();



function page2Animation() {

    document.querySelectorAll('.page2 .page2Content span').forEach(spanElement => {
        let clutter = '';

        spanElement.textContent.split('').forEach(dets => {
            clutter += `<span>${dets}</span>`;
        });

        spanElement.innerHTML = clutter;
    });

    gsap.to('.page2 .page2Content span span', {
        scrollTrigger: {
            trigger: `.page2 .page2Content`,
            start: 'top 80%',
            end: 'center center',
            scrub: 0.5,
            scroller: `.main`
        },
        stagger: 0.05,
        color: `#fff`
    });
}
page2Animation();



function page3Canvas() {
    const canvas = document.querySelector(".page3 canvas");
    const context = canvas.getContext("2d");

    // Ensure canvas dimensions match the viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        const data = `
            assets/frames00007.png
            assets/frames00010.png
            assets/frames00013.png
            assets/frames00016.png
            assets/frames00019.png
            assets/frames00022.png
            assets/frames00025.png
            assets/frames00028.png
            assets/frames00031.png
            assets/frames00034.png
            assets/frames00037.png
            assets/frames00040.png
            assets/frames00043.png
            assets/frames00046.png
            assets/frames00049.png
            assets/frames00052.png
            assets/frames00055.png
            assets/frames00058.png
            assets/frames00061.png
            assets/frames00064.png
            assets/frames00067.png
            assets/frames00070.png
            assets/frames00073.png
            assets/frames00076.png
            assets/frames00079.png
            assets/frames00082.png
            assets/frames00085.png
            assets/frames00088.png
            assets/frames00091.png
            assets/frames00094.png
            assets/frames00097.png
            assets/frames00100.png
            assets/frames00103.png
            assets/frames00106.png
            assets/frames00109.png
            assets/frames00112.png
            assets/frames00115.png
            assets/frames00118.png
            assets/frames00121.png
            assets/frames00124.png
            assets/frames00127.png
            assets/frames00130.png
            assets/frames00133.png
            assets/frames00136.png
            assets/frames00139.png
            assets/frames00142.png
            assets/frames00145.png
            assets/frames00148.png
            assets/frames00151.png
            assets/frames00154.png
            assets/frames00157.png
            assets/frames00160.png
            assets/frames00163.png
            assets/frames00166.png
            assets/frames00169.png
            assets/frames00172.png
            assets/frames00175.png
            assets/frames00178.png
            assets/frames00181.png
            assets/frames00184.png
            assets/frames00187.png
            assets/frames00190.png
            assets/frames00193.png
            assets/frames00196.png
            assets/frames00199.png
            assets/frames00202.png
        `;
        return data.split("\n")[index].trim(); // Added trim to remove extra spaces/newlines
    }

    const frameCount = 67;

    const images = [];
    const imageSeq = { frame: 1 };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        img.onload = function () {
            // Load the first image before starting animation
            if (i === 0) {
                render();
            }
        };
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 0.15,
            trigger: ".page3",
            start: "top top",
            end: "250% top",
            scroller: ".main",
        },
        onUpdate: render,
    });

    function render() {
        if (images[imageSeq.frame]) {
            scaleImage(images[imageSeq.frame], canvas, context);
        }
    }

    function scaleImage(image, canvas, ctx) {
        if (!image || !canvas || !ctx) {
            console.error("Invalid arguments provided to scaleImage.");
            return;
        }

        if (image.complete && image.naturalHeight !== 0) {
            // Set canvas dimensions
            canvas.width = window.innerWidth; // Reset to window size
            canvas.height = window.innerHeight;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        } else {
            console.error("Image is not loaded or is in a broken state.");
        }
    }

    ScrollTrigger.create({
        trigger: ".page3",
        pin: true,
        scroller: ".main",
        start: "top top",
        end: "250% top",
    });
}
page3Canvas();



function page4Animation() {

    document.querySelectorAll('.page4 .page4Content span').forEach(spanElement => {
        let clutter = '';

        spanElement.textContent.split('').forEach(dets => {
            clutter += `<span>${dets}</span>`;
        });

        spanElement.innerHTML = clutter;
    });

    gsap.to('.page4 .page4Content span span', {
        scrollTrigger: {
            trigger: `.page4 .page4Content`,
            start: 'top 80%',
            end: 'center center',
            scrub: 0.5,
            scroller: `.main`
        },
        stagger: 0.05,
        color: `#fff`
    });
}
page4Animation();



function page5Canvas() {
    const canvas = document.querySelector(".page5 canvas");
    const context = canvas.getContext("2d");

    // Ensure canvas dimensions match the viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        const data = `
            assets/bridges00004.png
            assets/bridges00007.png
            assets/bridges00010.png
            assets/bridges00013.png
            assets/bridges00016.png
            assets/bridges00019.png
            assets/bridges00022.png
            assets/bridges00025.png
            assets/bridges00028.png
            assets/bridges00031.png
            assets/bridges00034.png
            assets/bridges00037.png
            assets/bridges00040.png
            assets/bridges00043.png
            assets/bridges00046.png
            assets/bridges00049.png
            assets/bridges00052.png
            assets/bridges00055.png
            assets/bridges00058.png
            assets/bridges00061.png
            assets/bridges00064.png
            assets/bridges00067.png
            assets/bridges00070.png
            assets/bridges00073.png
            assets/bridges00076.png
            assets/bridges00079.png
            assets/bridges00082.png
            assets/bridges00085.png
            assets/bridges00088.png
            assets/bridges00091.png
            assets/bridges00094.png
            assets/bridges00097.png
            assets/bridges00100.png
            assets/bridges00103.png
            assets/bridges00106.png
            assets/bridges00109.png
            assets/bridges00112.png
            assets/bridges00115.png
            assets/bridges00118.png
            assets/bridges00121.png
            assets/bridges00124.png
            assets/bridges00127.png
            assets/bridges00130.png
            assets/bridges00133.png
            assets/bridges00136.png
            assets/bridges00139.png
            assets/bridges00142.png
            assets/bridges00145.png
            assets/bridges00148.png
            assets/bridges00151.png
            assets/bridges00154.png
            assets/bridges00157.png
            assets/bridges00160.png
            assets/bridges00163.png
        `;
        const paths = data.split("\n").map(line => line.trim()).filter(Boolean);
        if (index >= 0 && index < paths.length) {
            return paths[index];
        } else {
            console.error(`Invalid index: ${index}. Maximum allowed is ${paths.length - 1}.`);
            return null;
        }
    }

    const frameCount = 54;

    const images = [];
    let loadedImages = 0;
    const imageSeq = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const src = files(i);
        if (src) {
            img.src = src;
            img.onload = function () {
                loadedImages++;
                // Start rendering after the first image is loaded
                if (loadedImages === 1) {
                    render();
                }
            };
            images.push(img);
        }
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 0.15,
            trigger: ".page5",
            start: "top top",
            end: "250% top",
            scroller: ".main",
        },
        onUpdate: render,
    });

    function render() {
        if (images[imageSeq.frame]) {
            requestAnimationFrame(() => {
                scaleImage(images[imageSeq.frame], canvas, context);
            });
        }
    }

    function scaleImage(image, canvas, ctx) {
        if (!image || !canvas || !ctx) {
            console.error("Invalid arguments provided to scaleImage.");
            return;
        }

        if (image.complete && image.naturalHeight !== 0) {
            // Set canvas dimensions to match the window size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        } else {
            console.error("Image is not loaded or is in a broken state.");
        }
    }

    ScrollTrigger.create({
        trigger: ".page5",
        pin: true,
        scroller: ".main",
        start: "top top",
        end: "250% top",
    });
}
page5Canvas();



function page6Animation() {

    document.querySelectorAll('.page6 .page6Content span').forEach(spanElement => {
        let clutter = '';

        spanElement.textContent.split('').forEach(dets => {
            clutter += `<span>${dets}</span>`;
        });

        spanElement.innerHTML = clutter;
    });

    gsap.to('.page6 .page6Content span span', {
        scrollTrigger: {
            trigger: `.page6 .page6Content`,
            start: 'top 80%',
            end: 'center center',
            scrub: 0.5,
            scroller: `.main`
        },
        stagger: 0.05,
        color: `#fff`
    });
}
page6Animation();



function page7Canvas() {
    const canvas = document.querySelector(".page7 canvas");
    const context = canvas.getContext("2d");

    // Ensure canvas dimensions match the viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        const data = `
            assets/1.webp
            assets/2.webp
            assets/3.webp
            assets/4.webp
            assets/5.webp
            assets/6.webp
            assets/7.webp
            assets/8.webp
            assets/9.webp
            assets/10.webp
            assets/11.webp
            assets/12.webp
            assets/13.webp
            assets/14.webp
            assets/15.webp
            assets/16.webp
            assets/17.webp
            assets/18.webp
            assets/19.webp
            assets/20.webp
            assets/21.webp
            assets/23.webp
            assets/24.webp
            assets/25.webp
            assets/26.webp
            assets/27.webp
            assets/28.webp
            assets/29.webp
            assets/30.webp
            assets/31.webp
            assets/32.webp
            assets/33.webp
            assets/34.webp
            assets/35.webp
            assets/36.webp
            assets/37.webp
            assets/38.webp
            assets/39.webp
            assets/40.webp
            assets/41.webp
            assets/42.webp
            assets/43.webp
            assets/44.webp
            assets/45.webp
            assets/46.webp
            assets/47.webp
            assets/48.webp
            assets/49.webp
            assets/50.webp
            assets/51.webp
            assets/52.webp
            assets/53.webp
            assets/54.webp
            assets/55.webp
            assets/56.webp
            assets/57.webp
            assets/58.webp
            assets/59.webp
            assets/60.webp
            assets/61.webp
            assets/62.webp
            assets/63.webp
            assets/64.webp
            assets/65.webp
            assets/66.webp
            assets/67.webp
            assets/68.webp
            assets/69.webp
            assets/70.webp
            assets/71.webp
            assets/72.webp
            assets/73.webp
            assets/74.webp
            assets/75.webp
            assets/76.webp
            assets/77.webp
            assets/78.webp
            assets/79.webp
            assets/80.webp
            assets/81.webp
            assets/82.webp
            assets/83.webp
            assets/84.webp
            assets/85.webp
            assets/86.webp
            assets/87.webp
            assets/88.webp
            assets/89.webp
            assets/90.webp
            assets/91.webp
            assets/92.webp
            assets/93.webp
            assets/94.webp
            assets/95.webp
            assets/96.webp
            assets/97.webp
            assets/98.webp
            assets/99.webp
            assets/100.webp
            assets/101.webp
            assets/102.webp
            assets/103.webp
            assets/104.webp
            assets/105.webp
            assets/106.webp
            assets/107.webp
            assets/108.webp
            assets/109.webp
            assets/110.webp
            assets/111.webp
            assets/112.webp
            assets/113.webp
            assets/114.webp
            assets/115.webp
            assets/116.webp
            assets/117.webp
            assets/118.webp
            assets/119.webp
            assets/120.webp
            assets/121.webp
            assets/122.webp
            assets/123.webp
            assets/124.webp
            assets/125.webp
            assets/126.webp
            assets/127.webp
            assets/128.webp
            assets/129.webp
            assets/130.webp
            assets/131.webp
            assets/132.webp
            assets/133.webp
            assets/134.webp
        `;
        const paths = data.split("\n").map(line => line.trim()).filter(Boolean);
        if (index >= 0 && index < paths.length) {
            return paths[index];
        } else {
            console.error(`Invalid index: ${index}. Maximum allowed is ${paths.length - 1}.`);
            return null;
        }
    }

    const frameCount = 133;

    const images = [];
    let loadedImages = 0;
    const imageSeq = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const src = files(i);
        if (src) {
            img.src = src;
            img.onload = function () {
                loadedImages++;
                // Start rendering after the first image is loaded
                if (loadedImages === 1) {
                    render();
                }
            };
            images.push(img);
        }
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 1, // Smooth scroll synchronization
            trigger: ".page7",
            start: "top top",
            end: "250% top",
            scroller: ".main",
        },
        onUpdate: render,
    });

    function render() {
        if (images[imageSeq.frame]) {
            requestAnimationFrame(() => {
                scaleImage(images[imageSeq.frame], canvas, context);
            });
        }
    }

    function scaleImage(image, canvas, ctx) {
        if (!image || !canvas || !ctx) {
            console.error("Invalid arguments provided to scaleImage.");
            return;
        }

        if (image.complete && image.naturalHeight !== 0) {
            // Set canvas dimensions to match the window size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        } else {
            console.error("Image is not loaded or is in a broken state.");
        }
    }

    ScrollTrigger.create({
        trigger: ".page7",
        pin: true,
        scroller: ".main",
        start: "top top",
        end: "250% top",
    });
}
page7Canvas();


function page7Circle() {
    // Ensure GSAP plugins are registered
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // Animate circle scaling
    gsap.fromTo('.page7 .circle', 
        { scale: 0 }, // Initial scale
        {
            scale: 2.6, // Final scale
            scrollTrigger: {
                trigger: '.page7',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                scroller: '.main',
            }
        }
    );

    // Animate background color of inner circle
    gsap.to('.page7 .circle .inner-circle', {
        backgroundColor: '#0a3cce80',
        scrollTrigger: {
            trigger: '.page7',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            scroller: '.main',
        }
    });

    // Ensure the font size of the text inside the circle is not affected by the scale
    gsap.set('.page7 .circle .inner-circle .text-wrapper', {
        scale:0.4, // Keep the font size fixed
    });

    // Animate percentage text from 0 to 100%
    gsap.to('.page7 .circle .percentage', {
        ease: 'none',
        scrollTrigger: {
            trigger: '.page7',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            scroller: '.main',
            onUpdate: function(self) {
                // Calculate percentage and update text content
                const percentage = Math.floor(self.progress * 60);
                document.querySelectorAll('.page7 .circle .percentage').forEach(el => {
                    el.textContent = `${percentage}%`;
                });
            }
        }
    });
}

// Call the function
page7Circle();



function page11Animation() {
    gsap.from('.page11 .bottom11Content .container', {
        y: 120,
        opacity: 0,
        stagger: 0.2,
        duration: 0.9,
        scrollTrigger: {
            trigger: ".page11",
            start: "top 40%",
            end: "top 38%",
            scroller: ".main",
            scrub: 2,
        }
    });
}

page11Animation();