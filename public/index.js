// Configuración Observador de interseccion con la API de Intersection Observer
const opcion = {
  root:null, 
  threshold:0.9
}
let objetivoOculto = document.querySelectorAll('.targets');
// Instancia del intersecion observer

let interseccionObsevada = new IntersectionObserver(
  entries=>{
     entries.forEach((entry)=>{
        entry.target.classList.toggle('showObserver',entry.isIntersecting);
      })
  }, opcion);
  objetivoOculto.forEach((seccion)=>interseccionObsevada.observe(seccion)); 
  
//Escritura tipea texto en pantalla usando charAt
const text = document.getElementById('p2-sec1');
let str = text.innerHTML;
text.innerHTML= "";
let i = 0;
const speed = 90;
const typeText = ()=> {
      if(i < str.length) {
          text.innerHTML += str.charAt(i);
          i++;
          setTimeout(typeText,speed);
      }
};
setInterval(() => {
     setTimeout(typeText,speed);
}, 3000);

// Enviar correo al backend
const submitForm = document.getElementById('form-contact')
submitForm.addEventListener('submit', async (e)=>{
  e.preventDefault()

  const n = document.getElementById('name');
  const mail = document.getElementById('email');
  const m = document.getElementById('message');

  const name = n.value;
  const email = mail.value; 
  const message = m.value;

try {
  const response = await fetch('/mailer', {
    method: 'POST',
    headers: { 
      "Content-Type": "application/json", 
      "Accept": "application/json" 
    },
    body: JSON.stringify({ name, email, message })
  }); 

  if(response.ok){
    alert("¡Correo enviado con éxito!")
    n.value = ''
    email.value = ''
    m.value = ''
  } else {
      alert("Error en el servidor al enviar el correo.");
    }

} catch (error){
    console.error("Error de red:", error);
    alert("No se pudo conectar con el servidor.");
}
});

// Muestra el modal del portafolio
const btnModal = document.getElementById("btn_one")
btnModal.addEventListener("click", (e)=>{
  e.preventDefault()
  const elements = document.querySelectorAll('.modal-hidden');
  elements.forEach(element=> {
      element.style.opacity= 0
      document.getElementById("form-modal").style.opacity = 1
      document.getElementById("btn_one").style.display = "none"
      document.getElementById("sec1").style.backgroundColor = "#424242"      
  })
})

// Cierre del modal 
const closeModal = document.getElementById("closed-modal")
closeModal.addEventListener('click',(e)=>{
  e.preventDefault()
  const elements = document.querySelectorAll('.modal-hidden');
  elements.forEach(element=> {
      element.style.opacity= 1
      document.getElementById("form-modal").style.opacity = 0
      document.getElementById("btn_one").style.display = "block"
      document.getElementById("sec1").style.backgroundColor = "white"
      typeText()

  })
})

//Capturar tamaño de pantalla
const screenData = {
    width: window.screen.width,
    height: window.screen.height,
    availWidth: window.screen.availWidth, // Espacio real disponible sin barras de sistema
    availHeight: window.screen.availHeight
};

// Enviarlo al servidor (ejemplo con fetch)
fetch('/screen-size', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(screenData)
});

/*
const verViewport = () => {
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  alert(`Viewport actual: ${ancho}px de ancho x ${alto}px de alto`);
};
verViewport()
*/