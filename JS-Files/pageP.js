
                
var free_button = document.getElementById("button_am")


function changecolour(){
   free_button.style.backgroundColor="rgb(10, 12, 114)"
  
   
}

function chnage_text_color(){
   free_button.style.color="white"
}

function removecolor(){
    free_button.style.color="rgb(10, 12, 114)"
}

function removebackground_color(){
    free_button.style.backgroundColor="white"
}

 free_button.addEventListener('mouseover',changecolour)
 free_button.addEventListener('mouseover',chnage_text_color)
 free_button.addEventListener('mouseleave',removecolor)
 free_button.addEventListener('mouseleave',removebackground_color)

