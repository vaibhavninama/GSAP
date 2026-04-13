
let ti =gsap.timeline()
let st =gsap.timeline()

st.from('nav h1',{
    opacity:0,
    y:-100,
    duration:1.5,
    ease:'power2.inOut'
})

st.from('nav i',{
    opacity:0,
    
    duration:0.5,
    ease:'power2.inOut'
})


ti.to('.full',{
     right:'2vw',
    
})
ti.from('.full h4',{
  opacity:0,
  x:100,
  stagger:0.3,


})
ti.from('.full i',{
  
    opacity:0,

})

ti.pause()

document.querySelector('.full i').addEventListener('click',()=>{
  ti.reverse()
})
document.querySelector('nav i').addEventListener('click',()=>{
  ti.play()
})

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