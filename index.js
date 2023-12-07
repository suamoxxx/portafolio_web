         //Observador de interseccion
         const opcion = {
            root:null, 
            threshold:1.0
           } 
           let objetivoOculto = document.querySelectorAll('.targets');
           let interseccionObsevada = new IntersectionObserver(
            entries=>{
              entries.forEach((entry)=>{
                  entry.target.classList.toggle('showObserver',entry.isIntersecting);
              })
            }, opcion);
           objetivoOculto.forEach((seccion)=>interseccionObsevada.observe(seccion)); 
            //Texto dinamico
            setInterval(()=>{
              const owner = 'Don Felipe Limas';
              document.getElementById('textDinamic').innerText = `Esta web la realizo ${owner}`;
            },3000); 
            //Escritura de texto en pantalla
            const text = document.getElementById('section1');
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