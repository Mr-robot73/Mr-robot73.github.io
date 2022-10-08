let datoB = []
let idco = 0

const addTares = document.getElementById("tares");

document.getElementById("add").addEventListener("click",()=>{
  let InpTitulo = document.getElementById("tituloInp")
  let InpDescri = document.getElementById("exampleFormControlTextarea1")
  let titulo = InpTitulo.value
  let descri = InpDescri.value

  document.getElementById("noNotas").innerHTML=""

  datoB.push({id:idco,titulo,descri})
  idco += 1

  addTares.innerHTML=""
  card()

  InpTitulo.value=""
  InpDescri.value=""

})


function card() {

  datoB.forEach(({id,titulo,descri}) => {

    addTares.innerHTML += `
    <div class="card" data-id=${id}>
       <div class="card-header card-header-text text-center card-header-primary">
         <div class="card-text">
           <h4 class="card-title">${titulo}</h4>
         </div>
       </div>
       <div class="card-body">
       <p class="card-text">
          ${descri}
       </p>
          <button class="btn btn-danger" onclick="eliminar(event)" >eliminar</button>
       </div>
    </div>
    `;
  });

}


function eliminar(event) {
  let ide = event.target.parentNode.parentNode.getAttribute('data-id')

  event.target.parentNode.parentNode.parentNode.innerHTML=""

  let r = datoB.filter(eli => eli.id != ide)

  datoB = r

  card()
}
