const cuestionarioInfo =[
    {
        pregunta: '¿Cuáles de estas personas fueron presidentes argentinos?',
        a: 'Carlos Gardel, Jorge Luis Borges y Juan Domingo Perón.',
        b:
        'Evita y Cristina Fernández de Kirchner.',
        c:'Carlos Saúl Menem, Ricardo Alfonsín y Domingo Faustino Sarmiento.',
        correcta: 'c'
    },{
     pregunta:'¿Qué es un "cacerolazo"?',
     
     a:'Una comida típica argentina.',
     b:'Una forma de manifestación popular.',
     c:'Un tipo de música.',
     correcta:'b'
    },{
        pregunta:'¿En cuántas provincias está dividido el país?',
        a:'En 23 provincias.',
        b:'En 25 provincias.',
        c:'No está dividida en provincias sino en estados',
        correcta:'a'
    }
];

const cuestionario = document.getElementById("cuestionario")
const respuestaEls = document.querySelectorAll(".respuesta");
const preguntaEl = document.getElementById("pregunta");
const a_texto = document.getElementById("a_texto");
const b_texto = document.getElementById("b_texto");
const c_texto = document.getElementById("c_texto");
const enviarBtn = document.getElementById("enviar")

let cuestionarioActual = 0;
let resultado = 0;

cargarCuestionario();


function cargarCuestionario(){
    
    borrarRespuestas();
    
    const cuestionarioActualFormulario = cuestionarioInfo[cuestionarioActual];

    preguntaEl.innerText = cuestionarioActualFormulario.pregunta;
    a_texto.innerText =  cuestionarioActualFormulario.a;
    b_texto.innerText =  cuestionarioActualFormulario.b;
    c_texto.innerText =  cuestionarioActualFormulario.c;

}

function seleccionador(){
    let respuesta = undefined;
   
    respuestaEls.forEach((respuestaEl) => {
        if (respuestaEl.checked){
        respuesta = respuestaEl.id;
        }
    });
    return respuesta;
}

function borrarRespuestas(){ 
     respuestaEls.forEach((respuestaEl) => {
       respuestaEl.checked= false;
    });
}

enviarBtn.addEventListener("click", () => {
    const respuesta = seleccionador(); 
   
    if(respuesta){ 
        if(respuesta === cuestionarioInfo[cuestionarioActual].correcta){
            resultado++;
        }
         cuestionarioActual++;
         if(cuestionarioActual < cuestionarioInfo.length){
            cargarCuestionario();   
        }else{
           cuestionario.innerHTML = `<h2>Respondiste correctamente ${resultado}/${cuestionarioInfo.length} preguntas.</h2><button onclick="location.reload()">Cargar De Nuevo</button>`
        }
    }
});


