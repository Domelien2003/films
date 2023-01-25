var total = 0
function clic () {
    total= total +1
    document.getElementById("compteur").textContent= total;
}

var boutonElement = document.getElementById("bouton");
boutonElement.addEventListener("click",clic)




var bouton=document.getElementById('bouton')
var compteur=document.getElementById('compteur')

var bouton=document.querySelectorAll('#bouton')

bouton.forEach((item)=>{
    var total=0
    item.addEventListener('click', function () {
        
        total= total +1
        document.getElementById("compteur").textContent= total;
    })
})
    
