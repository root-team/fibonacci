
let input = document.getElementById("input");
let button = document.getElementById("button");
let cikti = document.getElementById("sonuc");

button.addEventListener("click",fibonacci);

function fibonacci(){
  let num = Number(input.value);
  
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  cikti.innerText = b

  input.value ="";
  input.focus();
}








// let fibo = []

// for i in range(-2, 8):
//     if i < 0 : fibo.append(1)
//     else: fibo.append(fibo[i] + fibo[i+1])

// print(fibo)

// function fibo(n) {
//   if (n<1){
//     return "Incorrect Input"
  
//   }else if(n == 1 || n==2) {
//     console.log(1) 
  
//   }else{
//      console.log (fibo(n-1) + fibo(n-2)) }

// }


 
