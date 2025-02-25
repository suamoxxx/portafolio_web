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
  
//Texto dinamico//
setInterval(()=>{
      const owner = 'Don Felipe Limas';
      document.getElementById('textDinamic').innerText = `Esta web la realizo ${owner}`;
},3000); 

//Escritura tipea texto en pantalla usando charAt
const text = document.getElementById('p2-sec1');
let str = text.innerHTML;
text.innerHTML= "";
let i = 0;
const speed = 100;
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
submitForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  const n = document.getElementById('name');
  const email = document.getElementById('email');
  const m = document.getElementById('message');
  const name = n.value;
  const mail = email.value; 
  const message = m.value;
  const response = fetch('http://127.0.0.1:3001/mailer', {
      method: 'POST',
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ name, mail, message })
    }); 
    n.value = ''
    email.value = ''
    m.value = ''
    
})

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
