
var allProducts = document.querySelectorAll(".list  li")
var div = document.querySelector("#content")
var btn = document.querySelector("#btn")
var totalPrice = 0
var total=document.querySelector("#total")



allProducts.forEach(function (item){
    item.onclick = function (){
        div.innerHTML += item.textContent + " + "
        totalPrice +=  +(item.getAttribute("price"))

        if(div.innerHTML != ""){
            btn.style.display = "block";
        }
    }
})

btn.onclick = function (){
    total.style.display="block"
    total.innerHTML ="Total price = " + totalPrice
}

////////////////////////////////////////////////////

//  0 70000 70000 10000


