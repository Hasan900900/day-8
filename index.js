
// const text="hshahhahggsxgsahggxs";
// let letter =text[2]
 
// document.getElementById("chrr").innerHTML= text[2];
function OddEven(){
    
    let shows;
    const input2 =document.getElementById("iny").value;
    if (input2<=1){
        return
    }
    for (let n=2;n<=input2;n++){

    
    if ( input2 % n !== 0    ){
        shows="the no is  prime ";
        break;
     
    }

    
    else{
        shows="the No is not  prime";
        break;
    }
    

}
    document.getElementById("btn").innerHTML = shows;
    document.getElementById("fab").innerHTML="show"
}
