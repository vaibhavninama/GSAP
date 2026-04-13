

gsap.to('.page22 h1',{
    transform:'translateX(-45%)',
    scrollTrigger:{
        trigger:'.page22',
        start:'top 0%',    
        end: 'top -100%',
        scrub:2,
       pin:true
       
    }
})