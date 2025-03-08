gsap.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.3
})

var tl = gsap.timeline();
tl.from("#main h1",{
    x:-500,
    opacity:0,
    delay:2,
    duration:1,
    stagger:0.3
})


tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    // delay:0.5,
    duration:0.5,
    stagger:0.5
})

var tlt = gsap.timeline();
tl.from("#footer h4",{
    y:-5,
    opacity:0,
    // delay:2,
    duration:1,
    stagger:0.3
})