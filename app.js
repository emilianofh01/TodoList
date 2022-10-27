const btnGuardar = document.querySelector("#btnGuardar");

btnGuardar.addEventListener("click", function (e) {
	e.preventDefault();
	const elemento = document.querySelector("#tbxElemento");
	elemento.value = elemento.value.trim()

	if (elemento.value !== "") {
		let scroll = document.querySelector("#lista");
		agregarElemento(elemento.value);
		elemento.value = "";
		scroll.scrollTo(0,scroll.scrollHeight)
		return;
	}
	alert("Para guardar un elemento debes llenar el campo")
});

function agregarElemento(texto) {
	const lista = document.querySelector("#lista");
	const elemento = document.createElement("li");
	elemento.appendChild(document.createTextNode(texto));
	lista.appendChild(elemento);
}




















