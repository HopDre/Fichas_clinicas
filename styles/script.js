//Array de paises correspondiente a seleccion en formulario de datos personales, a modo de prueba
const paises = [
    { code: "AR", name: "Argentina" },
    { code: "BO", name: "Bolivia" },
    { code: "BR", name: "Brasil" },
    { code: "CL", name: "Chile" },
    { code: "CO", name: "Colombia" },
    { code: "MX", name: "México" },
    { code: "ES", name: "España" },
    { code: "US", name: "Estados Unidos" },
    { code: "VE", name: "Venezuela" }
  ];
  const select = document.getElementById("pais");
  paises.forEach(pais => {
    let option = document.createElement("option");
    option.value = pais.code;
    option.textContent = pais.name;
    select.appendChild(option);
  });
//Seccion de datos personales correspondiente al calendario y posterior calculo de edad
 
// Rellenar días
 let selectDia = document.getElementById("dia");
 for (let i = 1; i <= 31; i++) {
   selectDia.innerHTML += `<option value="${i}">${i}</option>`;
 }

 // Rellenar meses
 let selectMes = document.getElementById("mes");
 let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 meses.forEach((mes, index) => {
   selectMes.innerHTML += `<option value="${index + 1}">${mes}</option>`;
 });

 // Rellenar años
 let selectAnio = document.getElementById("anio");
 let currentYear = new Date().getFullYear();
 for (let i = currentYear; i >= 1900; i--) {
   selectAnio.innerHTML += `<option value="${i}">${i}</option>`;
 }

 // Calculo de edad al seleccionar fecha de nacimiento
 function calcularEdad() {
   let dia = parseInt(document.getElementById("dia").value);
   let mes = parseInt(document.getElementById("mes").value) - 1;
   let anio = parseInt(document.getElementById("anio").value);

   if (!dia || !mes || !anio) return;

   let fechaNacimiento = new Date(anio, mes, dia);
   let hoy = new Date();
   let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
   
   // Ajuste por si el cumpleaños aún no ha llegado este año
   let mesDiff = hoy.getMonth() - fechaNacimiento.getMonth();
   if (mesDiff < 0 || (mesDiff === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
     edad--;
   }
   document.getElementById("edad").value = edad >= 0 ? edad : "";
 }
 document.getElementById("dia").addEventListener("change", calcularEdad);
 document.getElementById("mes").addEventListener("change", calcularEdad);
 document.getElementById("anio").addEventListener("change", calcularEdad);


// Datos de algunas regiones y comunas de Chile para ver en modo de prueba los datos personales correspondientes a region y comuna
  const regionesYComunas = {
    "Región de Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
    "Región de Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
    "Región de Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
    "Región de Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
    "Región Metropolitana": ["Santiago", "Puente Alto", "Maipú", "Las Condes", "La Florida", "San Bernardo", "Peñalolén", "Quilicura", "Estación Central"],
  };
  const selectRegion = document.getElementById("region");
  const selectComuna = document.getElementById("comuna");
  
  // Llenar el select de regiones
  Object.keys(regionesYComunas).forEach(region => {
    let option = document.createElement("option");
    option.value = region;
    option.textContent = region;
    selectRegion.appendChild(option);
  });

  // Evento cuando cambia la región
  selectRegion.addEventListener("change", function() {
    selectComuna.innerHTML = '<option value="">Selecciona una comuna</option>'; 
    selectComuna.disabled = !this.value;

    if (this.value) {
      regionesYComunas[this.value].forEach(comuna => {
        let option = document.createElement("option");
        option.value = comuna;
        option.textContent = comuna;
        selectComuna.appendChild(option);
      });
    }
  });

  //Seccion de datos personales correspondiente al dia de la consulta 
  // Rellenar días
 let selectDiaDos = document.getElementById("diaDos");
 for (let i = 1; i <= 31; i++) {
   selectDiaDos.innerHTML += `<option value="${i}">${i}</option>`;
 }

 // Rellenar meses
 let selectMesDos = document.getElementById("mesDos");
 let mesesDos = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 mesesDos.forEach((mesDos, index) => {
   selectMesDos.innerHTML += `<option value="${index + 1}">${mesDos}</option>`;
 });

 // Rellenar años
 let selectAnioDos = document.getElementById("anioDos");
 let currentYearDos = new Date().getFullYear();
 for (let i = currentYear; i >= 1900; i--) {
   selectAnioDos.innerHTML += `<option value="${i}">${i}</option>`;
 }

//-Todas estas funciones corresponden a la habilitacion de los radiobuttons al momento de presionar el "si"
//Si puedes hacer una funcion unica para que el evento se ejecute en todos los radiobuttons bienvenido sea jaja, si no, lo dejamos así, ya que igual no son tantas lineas de codigo

  // Capturar los elementos
  const siRadio = document.getElementById("radioSi");
  const detalleInput = document.getElementById("cantidad_hijos");

  // Detectar cambio en los radio buttons
  document.querySelectorAll('input[name="opcionHijos"]').forEach(radio => {
    radio.addEventListener("change", function() {
      detalleInput.disabled = !siRadio.checked;
    });
  });
    // Capturar los elementos
    const Radiosi = document.getElementById("siRadio");
    const edadCirugia = document.getElementById("edad_cirugia");
  
    // Detectar cambio en los radio buttons
    document.querySelectorAll('input[name="opcionCirugias"]').forEach(radio => {
      radio.addEventListener("change", function() {
        edadCirugia.disabled = !Radiosi.checked;
      });
    });

    // Capturar los elementos
    const complicacionesSi = document.getElementById("complicaciones_si");
    const complicaciones = document.getElementById("complicaciones");
  
    // Detectar cambio en los radio buttons
    document.querySelectorAll('input[name="opcionEmbarazoComplicaciones"]').forEach(radio => {
      radio.addEventListener("change", function() {
        complicaciones.disabled = !complicacionesSi.checked;
      });
    });

    // Capturar los elementos
    const lactanciaSi = document.getElementById("lactancia_si");
    const lactancia = document.getElementById("lactancia");
  
    // Detectar cambio en los radio buttons
    document.querySelectorAll('input[name="opcionLactancia"]').forEach(radio => {
      radio.addEventListener("change", function() {
        lactancia.disabled = !lactanciaSi.checked;
      });
    });

    // Capturar los elementos
    const siJuega = document.getElementById("siJuega");
    const juegaCon = document.getElementById("juega_con");
  
    // Detectar cambio en los radio buttons
    document.querySelectorAll('input[name="opcionJuegaCon"]').forEach(radio => {
      radio.addEventListener("change", function() {
        juegaCon.disabled = !siJuega.checked;
      });
    });

    // Capturar los elementos
    const siPresenta = document.getElementById("siPresenta");
    const estereotipos = document.getElementById("estereotipos");
  
    // Detectar cambio en los radio buttons
    document.querySelectorAll('input[name="opcionPatrones"]').forEach(radio => {
      radio.addEventListener("change", function() {
        estereotipos.disabled = !siPresenta.checked;
      });
    });
