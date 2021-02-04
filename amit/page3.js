var free_button1 = document.getElementById("btn")
         
            
function changecolour(){
   free_button1.style.backgroundColor="rgb(10, 12, 114)"
  
   
}

function chnage_text_color(){
   free_button1.style.color="white"
}

function removecolor(){
    free_button1.style.color="rgb(10, 12, 114)"
}

function removebackground_color(){
    free_button1.style.backgroundColor="white"
}

 free_button1.addEventListener('mouseover',changecolour)
 free_button1.addEventListener('mouseover',chnage_text_color)
 free_button1.addEventListener('mouseleave',removecolor)
 free_button1.addEventListener('mouseleave',removebackground_color)
