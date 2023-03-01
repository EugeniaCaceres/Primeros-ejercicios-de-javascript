let numero1 = parseInt(prompt());
let numero2 = parseInt(prompt());
let numero3 = parseInt(prompt());

if (numero1 > numero2) {
  if (numero1 > numero3) {
    document.write(numero1);
  } else {
    document.write(numero3);
  }
} else {
  if (numero2 > numero3) {
    document.write(numero2);
  } else {
    document.write(numero3);
  }
}
