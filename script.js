let next1 = document.querySelector('.next1')
let next2 = document.querySelector('.next2')
let next3 = document.querySelector('.next3')
let next4 = document.querySelector('.next4')

let part1 = document.querySelector('.part1')
let part2 = document.querySelector('.part2')
let part3 = document.querySelector('.part3')
let part4 = document.querySelector('.part4')

let photo =document.querySelector('.photo')


next1.addEventListener('click',function(){
    part1.style.display = 'block'
    part2.style.display = 'none'
    part3.style.display = 'none'
    part4.style.display = 'none'
    
})
next2.addEventListener('click',function(){
    part2.style.display = 'block'
    part1.style.display = 'none'
    part3.style.display = 'none'
    part4.style.display = 'none'
   
})
next3.addEventListener('click',function(){
    part3.style.display = 'block'
    part1.style.display = 'none'
    part2.style.display = 'none'
    part4.style.display = 'none'
})
next4.addEventListener('click',function(){
    part4.style.display = 'block'
    part1.style.display = 'none'
    part2.style.display = 'none'
    part3.style.display = 'none'
})
let hider = true;
photo.addEventListener('click',function(){
 if(hider){
    part1.style.display ='block'
    overlayPart.style.display = 'none'
    next.style.display = 'flex'
    hider = false;
 }else{
    part1.style.display = 'none'
    overlayPart.style.display = 'flex'
    next.style.display = 'none'
    hider = true
 }
})

let overlayPart = document.querySelector('.overlayPart')
let next = document.querySelector('.next')