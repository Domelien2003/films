




var compteur=document.getElementById('compteur')
var btn=document.getElementById('btn')
var bouton=document.querySelectorAll('#bouton')


bouton.forEach((item)=>{
    var total=0

    item.addEventListener('click', function () {

        total= total+1
        document.getElementById("compteur").textContent= total

        document.getElementById("compt").textContent= total
       

    })

   
})



