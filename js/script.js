var imgAdd = document.getElementById("img");
var img = document.getElementById("imgAdd");
var btnAddImg = document.getElementById("fileIcon");
var conteudo = document.getElementById("conteudo");

//Upload Imagem
imgAdd.addEventListener("change", function () {
	const leitor = new FileReader(); 
	const arquivo = imgAdd.files[0];

	if (arquivo) {
		leitor.addEventListener("load", function () {
			img.setAttribute("src", leitor.result);
			btnAddImg.style.display = "none";
			img.style.display = "flex";
		});
		leitor.readAsDataURL(arquivo);
	}
});

//Ajax
const ajax = new XMLHttpRequest();

ajax.open("GET", "php/downloadCards.php");

ajax.addEventListener("load", function () {
	if (ajax.readyState = 4 && ajax.status == 200) {
		try {
			var json = JSON.parse(ajax.responseText);
			conteudo.innerHTML += json;
		} catch (ex) {
			console.warn(ex);
		}
	}
});

ajax.send();
