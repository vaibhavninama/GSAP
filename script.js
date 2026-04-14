

function nav(){
  
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
}
nav()

function page22(){
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
}
page22()

function textAnimetion(){
  let h1 =document.querySelector('.vibhu')
let h1text =h1.textContent

let h1TextWords =h1text.split('')

let h1textHandler = h1TextWords.length/2
let cluttor =''
h1TextWords.forEach((word,idx)=>{
  if(h1textHandler>idx){
    cluttor +=`<span class='a' >${word}</span>`
  }else{
    cluttor +=`<span class='b' >${word}</span>`
  }
})

h1.innerHTML = cluttor

}
textAnimetion()

gsap.from('h1 .a',{
  opacity:0,
  duration:0.7,
  delay:0.3,
  y:50,
  stagger:0.15,
})
gsap.from('h1 .b',{
  opacity:0,
  duration:0.7,
  delay:0.3,
  y:50,
  stagger:-0.15,
})

window.addEventListener("wheel",function(dets){
  if(dets.deltaY>0){
    console.log('hy')
    gsap.to('.box-3',{
      transform:'translateX(-200%)',
      repeat:-1,
      duration:4,
      ease:'none'
    })
    gsap.to('.box-3 i',{
      rotate:180
    })
  }else{
    console.log('lol')
    gsap.to('.box-3',{
      transform:'translateX(100%)',
      repeat:-1,
      duration:4,
      ease:'none'
    })
    gsap.to('.box-3 i',{
      rotate:0
    })
  }
})