const root = document.getElementById("root");
let array = [];

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    createModal();
    cargar();
  });
})();

document.getElementById("add").addEventListener("click", () => {
  let titule = document.getElementById("titulo").value;
  let description = document.getElementById("descrition").value;

  if (titule === "" || description === "") return alert("rellene los campos");

  const objectData = {
    id: Date.now(),
    titule,
    description,
  };
  array = [...array, objectData];

  localStorage.setItem("notes", JSON.stringify(array));
  cargar();

  titule = "";
  description = "";
});

const cargar = () => {
  const data = JSON.parse(localStorage.getItem("notes"));
  array = data;

  root.innerHTML = "";

  if (!localStorage.getItem("notes") || data.length === 0) {
    infoHtml("No tiene Notas, añada una nota Porfavor");
    return;
  }

  root.classList.add("gri");
  data.map((item) => {
    addNotaCart(item.id, item.titule, item.description);
  });
};

const addNotaCart = (id, titulo, description) => {
  root.innerHTML += `
    <div class="card transition" data-id=${id}>
      <div class="card-header card-header-text text-center card-header-primary">
        <div class="card-text">
          <h4 class="card-title">${titulo}</h4>
        </div>
      </div>
      <div class="card-body">
      <p class="card-text">
          ${description}
      </p>
          <button class="btn btn-danger" onclick="eliminar(event)" >eliminar</button>
      </div>
    </div>
    `;
};

const infoHtml = (info) => {
  const div = document.createElement("div");
  div.innerHTML = `<h2 class="noNotas">${info}</h2>`;
  root.appendChild(div);
  root.classList.remove("gri");
};

const eliminar = (event) => {
  const element = event.target.parentNode.parentNode;
  element.classList.add("delite");

  setTimeout(() => {
    const deliter = array.filter(
      (item) => item.id != element.getAttribute("data-id")
    );
    localStorage.setItem("notes", JSON.stringify(deliter));
    cargar();
  }, 800);
};
