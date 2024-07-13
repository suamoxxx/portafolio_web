
        const opcion = {
          root: document,
          rootMargin: "0px",
          threshold: 0.7
        } 
        let objetivoOculto = document.querySelectorAll('.targets');
        let interseccionObsevada = new IntersectionObserver(
            entries=>{
              entries.forEach((entry)=>{
                  entry.target.classList.toggle('showObserver',entry.isIntersecting);
              })
            }, opcion);

        objetivoOculto.forEach((seccion)=>interseccionObsevada.observe(seccion)); 
           
         function txtdyn(){
            setInterval(()=>{
            const owner = 'Don Felipe Limas';
            document.getElementById('textDinamic').innerText = `Esta web la realizo ${owner}`;
            },9000); 
        }

        txtdyn();

 
          const btn = document.getElementById('btn_contact2');
          btn.addEventListener("click", ()=> {
          window.location.href = "contacto.html";
          });
      