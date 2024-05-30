let btn=document.querySelector("#bt");
let body= document.querySelector("body");
let crntmode="light";
 btn.addEventListener("click",() => {
    if (crntmode==="light"){
        crntmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
       
         }
         else{
            crntmode="light"; 
            body.classList.add("light");
            body.classList.remove("dark");
              
         }
         console.log(crntmode);   

    }
   
);
