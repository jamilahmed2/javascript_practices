let m;
m=parseInt(prompt("enter your marks:"));
if (m>=90 && m<=100) {
    alert("Grade A+");
} else if(m>=80 && m<=89){
    alert("Grade A");
}else if (m>=70 && m<79) {
    alert("Grade B");
}else if (m>=60 && m<=69) {
    alert("Grade C");
}else if (m>=50 && m<=59){
    alert("Grade D");
}else if (m>=40 && m<=49){
    alert( "Grade E");
}else{
    alert("Enter your marks correctly");
}