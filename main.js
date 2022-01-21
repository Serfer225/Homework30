let a = Number (prompt("Введите первое число"))
let b = Number (prompt("Введите второе число"))
let c = Number (prompt("Введите действие(1=+; 2=- ; 3=/ ; 4=*)"))
if (c==1) (alert (a+b))
if (c==2) (alert (a-b))
if (c==3) (alert (a/b))
if (c==4) (alert (a*b))
if (c==0) (alert("Вы не вбили действие"))
if (c>4||c<0) (alert("Error"))



