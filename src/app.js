/** FORMULAS 
1 monto prestamo = valor total - cuota inicial
2 total interese =>(monto de prestamo) * tasa /100
 Cuota =  (monto prestamo + total intereses) / (plazos años * 12 )
 * 
 * 
 */

function calcular() {
    debugger;
  const FORMULARIO = document.forms["formulario"];

  let cuotaInicial = FORMULARIO["cuotaIni"].value;
  let tasaInteres = FORMULARIO["tasaInte"].value;
  let totalCasa = FORMULARIO["totalCasa"].value;
  let plazoAnos = FORMULARIO["plazoAnos"].value;
  let montoPrestamo;
  let totalIntereses;
  let cuota;

  console.log(tasaInteres);

  if (
    cuotaInicial < 0 ||
    tasaInteres < 0 ||
    totalCasa < 0 ||
    plazoAnos < 0
  ) {    alert("Todos los valores deben ser superiores a 0");   }
  else{

    montoPrestamo = totalCasa - cuotaInicial;
    totalIntereses = montoPrestamo * (tasaInteres/100);
    cuota = (montoPrestamo + totalIntereses) / plazoAnos*12
    mostrarDatos();
  }

  function mostrarDatos(){
    document.getElementById('totalPrestamo').innerHTML = `$ ${montoPrestamo}`;
    document.getElementById('valorCuotaM').innerHTML = `$ ${cuota}`
  }
}
