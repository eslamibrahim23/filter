
var mydiv=document.getElementsByTagName("div")[0];
var btn=document.getElementsByTagName("button");
btn[0].addEventListener('click',function(){
    console.log(btn[0]);
mydiv.style.filter='saturate(10)'
})
btn[1].addEventListener('click',function(){
mydiv.style.filter='opacity(.5)'
})
btn[2].addEventListener('click',function(){
mydiv.style.filter='invert()'
})
btn[3].addEventListener('click',function(){
mydiv.style.filter='sepia()'
})
btn[4].addEventListener('click',function(){
mydiv.style.filter='grayscale(1)'
})
    
 