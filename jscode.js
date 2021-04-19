var icon = document.getElementById("icon") ,
     show = document.getElementById("nav");
 
 show.style.maxHeight = "0px"
     
     icon.onclick = function()
     {
         if(show.style.maxHeight == "0px")
         {
             show.style.maxHeight = "400px" ;
         }
     
         else{
             show.style.maxHeight = "0px" ;
         }
         
     
     }    ; 
