var imgAdd = document.getElementById("img");
var img = document.getElementById("imgAdd");
var btnAddImg = document.getElementById("fileIcon");
var conteudo = document.getElementById("conteudo");
var form = document.getElementById("formAdd");

var cards = document.getElementsByClassName("cards");

//Mostrar Imagem do Upload
imgAdd.addEventListener("change", function () {

	//Pegando valor
	const leitor = new FileReader(); 
	const arquivo = imgAdd.files[0];

	if (arquivo) {
		leitor.addEventListener("load", function () {

			//Adicionando link da imagem
			img.setAttribute("src", leitor.result);

			//Mostrando imagem
			btnAddImg.style.display = "none";
			img.style.display = "flex";
		});
		leitor.readAsDataURL(arquivo);
	}
});


//Ajax
window.addEventListener("load", function () {
	const ajax = new XMLHttpRequest();

	ajax.open("GET", "php/downloadCards.php");

	ajax.addEventListener("load", function () {

		//Verificando status do Ajax
		if (ajax.readyState = 4 && ajax.status == 200) {
			try {

			} catch (ex) {

				//Possíveis erros.
				console.warn(ex);
			}
		}
	});

	ajax.send();
});

