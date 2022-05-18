import "./styles.css";

const CLAVE: string = "eureka";
let contador1: number = 0;
let claveIngresada: string | null;

while (contador1 < 3) {
  let claveIngresada: string | null = prompt("Ingrese la clave.");
  if (claveIngresada === CLAVE) {
    contador1 = 3;
    console.log("El usuario salió del programa.");
  } else {
    contador1 = contador1 + 1;
    if (contador1 < 3) {
      alert("Clave incorrecta, intente nuevamente.");
    }
  }
}
if (claveIngresada !== CLAVE) {
  alert("Se han agotado todas las oportunidades.");
  console.log(
    "El usuario ingresó una clave incorrecta tres veces seguidas y ya no tiene permitido intentar nuevamente."
  );
}
