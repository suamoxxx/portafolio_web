// Configuración Observador de interseccion
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

//Escritura de texto en pantalla
const text = document.getElementById('p2-sec1');
let str = text.innerHTML;//Valor del string
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