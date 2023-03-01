let number = parseInt(prompt());

if (
  number % 7 === 0 &&
  number % 5 === 0 &&
  number % 3 === 0 &&
  number % 2 === 0
) {
  document.write("El número ", number, " es divisible por 7, 5 , 3 y 2.");
} else if (
  number % 7 === 0 &&
  number % 5 === 0 &&
  number % 3 === 0 
) {
  document.write("El número ", number, " es divisible por 7, 5 y 3 .");
} else if (
    number % 7 === 0 &&
    number % 5 === 0 &&
    number % 2 === 0 ) 
{
  document.write("El número ", number, " es divisible por 7, 5 y 2.");

} else if (
    number % 5 === 0 &&
    number % 3 === 0 &&
    number % 2 === 0 )
    {
  document.write("El número ", number, " es divisible por 5, 3 y 2");
} else if (
    number % 7 === 0 &&
    number % 3 === 0 &&
    number % 2 === 0) {
  document.write("El número ", number, " es divisible por 7, 3 y 2.");
} else if (
    number % 7 === 0 &&
    number % 5 === 0 ) {
  document.write("El numero ", number, " es divisible por 7 y 5.");
} else if (
    number % 7 === 0 &&
    number % 3 === 0 ) {
  document.write("El numero ", number, " es divisible por 7 y 3.");
} else if (
    number % 7 === 0 &&
    number % 2 === 0 ) {
  document.write("El numero ", number, " es divisible por 7 y 2.");
}else if (
    number % 5 === 0 &&
    number % 3 === 0 ) {
  document.write("El numero ", number, " es divisible por 5 y 3.");
}else if (
    number % 5 === 0 &&
    number % 2 === 0 ) {
document.write("El numero ", number, " es divisible por 5 y 2.");
}else if (
    number % 3 === 0 &&
    number % 2 === 0 ) {
  document.write("El numero ", number, " es divisible por 3 y 2.");
}else if (number % 7 === 0) {
    document.write ("El numero ", number, "es divisible por 7.");
}else if (number % 5 === 0){
    document.write ("El numero", number, "es divisible por 5." );
}else if (number % 3 === 0){
    document.write ("El numero", number, "es divisible por 3.");
}else if (number % 2 === 0)
document.write ("El numero", number, "es divisible por 2");
