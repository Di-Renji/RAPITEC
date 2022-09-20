$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title"; >#title#</div>',
        labels: {
            previous : 'Regresar',
            next : 'Siguiente',
            finish : 'Finalizar',
            current : ''
        },
    });
    $("#date").datepicker({
        dateFormat: "MM - DD - yy",
        showOn: "both",
        buttonText : '<i class="zmdi zmdi-chevron-down"></i>',
    });
});

/******************************** INICIO DE SESION ****************************************/

function eee(){
    var valor = document.querySelector("a");
    
    if(valor.getAttribute("href", "#finish")){
        alert("Holaaa");
    }
}

function GenerarReporte(){
    var cantidadUti = Number(document.getElementById("txtUtilidad").value);
    var cantidadLiq = Number(document.getElementById("txtLiquidez").value);
    var cantidadRen = Number(document.getElementById("txtRentabilidad").value);
    var cantidadSol = Number(document.getElementById("txtSolvencia").value);
    var mensajeLiq = document.getElementById("txtMensajeLiq").value;
    var mensajeSol = document.getElementById("txtMensajeSol").value;
    var mensajeRen = document.getElementById("txtMensajeRent").value;
    var mes = document.getElementById("mes").value;
    var año = document.getElementById("año").value;

    document.getElementById("valorUtilidad").value = "S/. " + cantidadUti.toFixed(2);
    document.getElementById("valorUtilidad").setAttribute("style", "width:100%; border:white; text-align:center; font-size: 15px;");
    document.getElementById("valorLiquidez").value = "S/. " + cantidadLiq.toFixed(2);
    document.getElementById("valorLiquidez").setAttribute("style", "width:100%; border:white; text-align:center; font-size: 15px;");
    document.getElementById("valorRentabilidad").value = "S/. " + cantidadRen.toFixed(2);
    document.getElementById("valorRentabilidad").setAttribute("style", "width:100%; border:white; text-align:center; font-size: 15px;");
    document.getElementById("valorSolvencia").value = "S/. " + cantidadSol.toFixed(2);
    document.getElementById("valorSolvencia").setAttribute("style", "width:100%; border:white; text-align:center; font-size: 15px;");

    document.getElementById("mensaLiquidez").value = mensajeLiq.toString();
    document.getElementById("mensaLiquidez").setAttribute("style", "width:100%; border:white; text-align:center; font-size: 12px;");
    document.getElementById("mensaRentabilidad").value = mensajeRen.toString();
    document.getElementById("mensaRentabilidad").setAttribute("style", "width:100%; border:white; text-align:center; font-size: 12px;");
    document.getElementById("mensaSolvencia").value = mensajeSol.toString();
    document.getElementById("mensaSolvencia").setAttribute("style", "width:100%; border:white; text-align:center; font-size: 9px;");

    document.getElementById("cajaRep1").value = "Admin";
    document.getElementById("cajaRep1").setAttribute("style", "width:150px; border:white; text-align:center; font-size: 15px;");
    document.getElementById("cajaRep2").value = mes + " del año " + año;
    document.getElementById("cajaRep2").setAttribute("style", "width:280px; border:white; text-align:center; font-size: 15px;");
    
    
}

// Calculos

/*********************************** UTILIDAD POR MES ************************************/

function CalcularUtilidad() {
    var compras = Number(document.getElementById("txtCompras").value);
    var planilla = Number(document.getElementById("txtPlanilla").value);
    var gastos = Number(document.getElementById("txtGastos").value);
    var impuesto = Number(document.getElementById("txtImpuesto").value);
    var dinero = Number(document.getElementById("txtDineroUti").value);
    var ventas = Number(document.getElementById("txtVentas").value);
    var resultado = dinero + ventas - (compras + planilla + gastos + impuesto) ;
    document.getElementById("txtUtilidad").value = resultado.toFixed(2);
    GenerarReporte();
}




/********************************** RATIO DE LIQUIDEZ  ************************************/

function CalcularActivoCorriente(){
    var dineroLiquidez = Number(document.getElementById("txtDineroLiq").value);
    var mercaderia = Number(document.getElementById("txtMercaderia").value);
    var ahorros = Number(document.getElementById("txtAhorros").value);
    var cuentas = Number(document.getElementById("txtCuentas").value);
    var otrasCuentas = Number(document.getElementById("txtOtrasCuentas").value);
    var totalActivoCorriente = dineroLiquidez + mercaderia + ahorros + cuentas + otrasCuentas;
    document.getElementById("txtTotalActivoCorriente").value = totalActivoCorriente.toFixed(2);
}

function CalcularPasivoCorriente(){
    var prestamo = Number(document.getElementById("txtPrestamo").value);
    var cuentas = Number(document.getElementById("txtCuentas2").value);
    var otrasCuentas = Number(document.getElementById("txtOtrasCuentas2").value);
    var totalPasivoCorriente = prestamo + cuentas + otrasCuentas;
    document.getElementById("txtTotalPasivoCorriente").value = totalPasivoCorriente.toFixed(2);
}

function CalcularLiquidez(){
    var activoCorriente = Number(document.getElementById("txtTotalActivoCorriente").value);
    var pasivoCorriente = Number(document.getElementById("txtTotalPasivoCorriente").value);
    var Liquidez = activoCorriente / pasivoCorriente;
    document.getElementById("txtLiquidez").value = Liquidez.toFixed(2);
    if (Liquidez > 1){
        document.getElementById("txtMensajeLiq").value = "''Si Puede Endeudarse''";
        document.getElementById("txtMensajeLiq").setAttribute("style", "border:white; text-align:center; color:green; font-family:Arial, Helvetica, sans-serif; font-size: 26px;");        
    }
    else{
        document.getElementById("txtMensajeLiq").value = "''No puede Endeudarse''";
        document.getElementById("txtMensajeLiq").setAttribute("style", "border:white; text-align:center; color:red; font-family:Arial, Helvetica, sans-serif; font-size: 26px;");        
    }
    GenerarReporte()
}


/******************************** RATIO DE RENTABILIDAD ***************************************/
function CalcularRentabilidad(){
    var capital = Number(document.getElementById("txtCapital").value);
    var utilidad = Number(document.getElementById("txtUtilidad").value);
    var rentabilidad = utilidad / capital;
    document.getElementById("txtRentabilidad").value = rentabilidad.toFixed(2);

    if (rentabilidad > 0) {
        document.getElementById("txtMensajeRent").value = "''El Negocio SI es Rentable''";
        document.getElementById("txtMensajeRent").setAttribute("style", "border:white; text-align:center; color:blue; font-family:Arial, Helvetica, sans-serif; font-size: 26px;");
    }
    else{
        document.getElementById("txtMensajeRent").value = "''El Negocio NO es Rentable''";
        document.getElementById("txtMensajeRent").setAttribute("style", "border:white; text-align:center; color:red; font-family:Arial, Helvetica, sans-serif; font-size: 26px;")
    }

    GenerarReporte()
}


/******************************** RATIO DE SOLVENCIA *****************************************/
function CalcularActivoNoCorriente(){
    var local = Number(document.getElementById("txtLocal").value);
    var marca = Number(document.getElementById("txtMarca").value);
    var auto = Number(document.getElementById("txtAuto").value);
    var moviliario = Number(document.getElementById("txtMoviliario").value);
    var maquinaria = Number(document.getElementById("txtMaquinaria").value);
    var cuentasCobrar = Number(document.getElementById("txtCuentas3").value);
    var activoNoCorriente = local + marca + auto + moviliario + maquinaria +cuentasCobrar;
    
    document.getElementById("txtTotalActivoNoCorriente").value = activoNoCorriente.toFixed(2);
}

function CalcularSolvencia(){
    var activoCorriente = Number(document.getElementById("txtTotalActivoCorriente").value);         // se calculo en ratio de liquidez 
    var activoNoCorriente = Number(document.getElementById("txtTotalActivoNoCorriente").value);     // se calculo en ratio de solvencia
    var pasivoCorriente = Number(document.getElementById("txtTotalPasivoCorriente").value);         // se calculo en ratio de liquidez (es el prestamo)
    var pasivoNoCorriente = Number(document.getElementById("txtCredito").value);                    // es cuentas por pagar a largo plazo de Solvencia
    solvencia = (activoCorriente + activoNoCorriente) / (pasivoCorriente + pasivoNoCorriente)
    document.getElementById("txtSolvencia").value = solvencia.toFixed(2);
    if ((activoCorriente+activoNoCorriente) > (pasivoCorriente+pasivoNoCorriente)) {
        document.getElementById("txtMensajeSol").value = "Empresa SI tiene suficientes Activos para Pagar Deudas en un Riesgo de Insolvencia";
        document.getElementById("txtMensajeSol").setAttribute("style", "border:white; text-align:center; color:green; font-family:Arial, Helvetica, sans-serif; font-size: 13px;");
    }
    else{
        
    }
    if ((activoCorriente+activoNoCorriente) < (pasivoCorriente+pasivoNoCorriente)) {
        document.getElementById("txtMensajeSol").value = "Empresa NO tiene suficientes Activos para Pagar Deudas en un Riesgo de Insolvencia";
        document.getElementById("txtMensajeSol").setAttribute("style", "border:white; text-align:center; color:red; font-family:Arial, Helvetica, sans-serif; font-size: 13px;");
    }
    else{

    }
    GenerarReporte()
}


/********************************** LIMPIEZA DE DATOS ******************************************/
function Limpiar(){
    const form = document.getElementById("formID");
    form.reset();
}



/********************************** REPORTE DE DATOS ******************************************/

