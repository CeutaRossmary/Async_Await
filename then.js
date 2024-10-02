var usuarios = [];

function consulta1() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((usuario) => {
        usuarios.push(usuario);
      });
    })
    .catch((error) => console.error("Error", error));
}

function agregar1() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Nuevo registro",
      body: "Este es el nuevo registro",
      userId: 1,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error", error));
}

function actualizar2() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 1,
      title: "Titulo actualizado",
      body: "Este es el contenido actualizado",
      userId: 1,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error", error));
}

function eliminar2() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        console.log("Registro eliminado");
      } else {
        console.error("Error al eliminar el registro");
      }
    })
    .catch((error) => console.error("Error", error));
}

async function usuario2(id) {
  try {
    let respuesta = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!respuesta.ok) {
      throw new Error(`Error: ${respuesta.status}`);
    }

    let usuario = await respuesta.json();

    console.log(usuario);
  } catch (error) {
    console.error("Error al ejecutar la consulta", error);
  }
}
