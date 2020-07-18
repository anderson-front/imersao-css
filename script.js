



function carregar(){
  var img = document.getElementById('foto-periodo')
  
  var data = new Date()

  var hora = data.getHours

  if(hora >=0 && hora <= 11){
    img.src = "img/manha.png"

 }else if(hora >= 12 && hora <=18){
   
   img.src = "img/noite.png"
//    document.body.style.background ='#e2c019'
                                   
 }else{
   img.src = "img/noite.png"
//    document.body.style.background ='#515154'
 
 }


  
}