document.querySelectorAll(".items").forEach(item => {
    item.addEventListener('click' , (event)=> {
        let img = event.target.querySelector("img");
        if(!item.open){
            img.src = "images/icon-minus.svg";
        }
        else{
            img.src ="images/icon-plus.svg";
        }
    })
});

