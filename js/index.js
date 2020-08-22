var value = 0;
function subtract(){
    value = parseInt(document.getElementsByClassName("money").innerHTML);
    value-=1;
    document.getElementsByClassName("money").innerHTML = value;
}
function addition(){
    value = parseInt(document.getElementsByClassName("money").innerHTML);
    value+=1;
    document.getElementsByClassName("money").innerHTML = value;

}
//printScreen();
function printScreen(){
    console.log(window.innerWidth+"px ->width");
    console.log(window.innerHeight+"px ->height");
}



//1169 is max width for mobile device 