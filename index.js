
async function consulta() {
  try {
    let user = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(user);
    let data = await user.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function agregar() {
  try {
    let newUser = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Nuevo registro",
        body: "Este es el nuevo registro",
        userId: 1,
      }),
    });
    let data = await newUser.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function actualizar() {
    try{
  let actualizar= await fetch("https://jsonplaceholder.typicode.com/posts/1", {
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
  let dataActualizada = await actualizar.json();
  console.log(dataActualizada);
}catch(error){
    console.error("Error:", error);
  }
}

async function eliminar() {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    });
 console.log(respuesta);
    if (respuesta.ok) {
      console.log("Registro eliminado", respuesta);
    } else {
      console.error("Error al eliminar el registro");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

async function usuario(id) {
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
