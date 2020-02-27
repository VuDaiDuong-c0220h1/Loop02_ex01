let a = 0;
let b = 1;
let c;
document.write(a)
for (count = 0; count < 100; count++) {
    c = b;
    b = b + a;
    a = c;
    document.write(a + "<br/>");
}