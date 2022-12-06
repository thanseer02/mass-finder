function calculate()
{
    var a=document.getElementById('w').value;
    var b=document.getElementById('h').value;
 
    var m=a/b;
    console.log(m);
    document.getElementById("mass").innerHTML="MASS : "+m+"kg/m2";

}