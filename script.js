

let time  = gsap.timeline()

time.from('#logo',{
    opacity:0,
    y:-30,
    delay:0.2

})
time.from('nav ul li',{
    opacity:0,
    y:-30,
    stagger:0.2

})

gsap.from('#tital',{
    opacity:0,
    y:30,
    delay:0.5,
    scrollTrigger:{
        trigger:'#tital',
        scroller: 'body',
        start:'top 50%',
        end:'top 10%',
        scrub:true
        
    }
})

gsap.from('#box', {
  opacity: 0,
  x: 200,
  scale: 0.5,
  rotate: 10,
  ease: "power3.out",

  scrollTrigger: {
    trigger: '#box',
    start: 'top 80%',
    end: 'top 30%',
    scrub: 1.5,
    
  }
});

gsap.from('#box2', {
opacity:0,
x:-200,
scale:0.5,
rotate:-10,
ease:"power3.out",
scrollTrigger:{
    trigger:'#box2',
    start:'top 80%',
    end:'top 30%',
    scrub:1.5,
    markers:false
}

})