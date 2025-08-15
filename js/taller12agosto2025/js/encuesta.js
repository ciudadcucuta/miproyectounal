function satisfaccion(){
    
    let p1, p2, p3, p4, p5, resultado, porcentaje,mensaje;
    
    p1 = parseInt(document.getElementById("p1").value);
    p2 = parseInt(document.getElementById("p2").value);
    p3 = parseInt(document.getElementById("p3").value);
    p4 = parseInt(document.getElementById("p4").value);
    p5 = parseInt(document.getElementById("p5").value);

    resultado = p1 + p2 + p3 + p4 + p5;
    porcentaje = (resultado / 5) * 100;

    if(porcentaje >= 60)
    {
        mensaje = "CLIENTE SATISFECHO";
    }
    else if(porcentaje < 60 && porcentaje >=40)
    {
        mensaje = "CLIENTE MEDIO SATISFECHO";
    }
    else{
        mensaje = "CLIENTE INSATISFECHO";
    }
    
    alert("Porcentaje de Satisfacción: " + porcentaje + "% - " + mensaje );
   

}