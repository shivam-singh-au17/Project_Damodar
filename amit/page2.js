var free_button2 = document.getElementById("btntemplates")
         
            
function changecolour(){
 free_button2.style.backgroundColor="rgb(10, 12, 114)"
}

function chnage_text_color(){
free_button2.style.color="white"
}

function removecolor(){
free_button2.style.color="rgb(10, 12, 114)"
}

function removebackground_color(){
free_button2.style.backgroundColor="white"
}

 free_button2.addEventListener('mouseover',changecolour)
 free_button2.addEventListener('mouseover',chnage_text_color)
 free_button2.addEventListener('mouseleave',removecolor)
 free_button2.addEventListener('mouseleave',removebackground_color)