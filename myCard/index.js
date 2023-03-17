const card = document.querySelector(".card")
console.log(card);
card.addEventListener("click",function(){
    
        this.classList.toggle("flipped")
   
    
});