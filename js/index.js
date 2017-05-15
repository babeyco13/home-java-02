var n=Number(prompt('N='));              //Рекурсивно
document.write('n-ne fib= ' + fib(n) + '<br>');
document.write('n-ne fib2= ' + fib2(n));
function fib(n) {
  var num;
  if (n >= 2) {
    num = fib(n - 1) + fib(n - 2);
  } else {
    num = n
  }
   return num;
}

function fib2(n) {                      //Циклічно
  var f, f1=1, f2=1;
for (i = 3; i <= n; i++) {
f = f1 + f2 ;
f1 = f2;
f2 = f;
}
return f;
}
