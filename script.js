var btnpw = document.getElementById('btnpw')
    
btnpw.addEventListener('click' , function(){
   let password = document.getElementById('password')

   if(password.type == "password"){
       password.type = "text"
       this.style.opacity = "0.5"
   } else {
       password.type = "password"
       this.style.opacity = "1"
   }
})