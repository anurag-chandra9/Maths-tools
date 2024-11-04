function calculatefactorial(){
    const Number=parseInt(document.getElementById("Numberinput").value);
     const resultelement=document.getElementById("result")

     if(isNaN(Number)|| Number<0){
        resultelement.textContent="please enter a vaild integer";
        return;
     }
     let factorial=1;
     for(let i=1;i<=Number;i++){
        factorial *=i;
     }
     resultelement.textContent=`Factorial of the number is ${Number} is ${factorial}`
}