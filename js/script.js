var imgAdd = document.getElementById("img");
var img = document.getElementById("imgAdd");
var btnAddImg = document.getElementById("fileIcon");
var conteudo = document.getElementById("conteudo");
var form = document.getElementById("formAdd");

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

	ajax.open("GET", "php/downloadCards.php", true);

	ajax.addEventListener("load", function () {

		//Verificando status do Ajax
		if (ajax.readyState = 4 && ajax.status == 200) {
			try {

				//Recebendo valores
				var json = JSON.parse(ajax.responseText);

				//Apresentando card
				for (let i = 0; i < json.length; i++) {

					//Preparando valor da parcela
					var preco = json[i].preco;
					var parcela = preco / 12;
					preco = preco.toFixed(2).toString().replace(".", ",");
					parcela = parcela.toFixed(2).toString().replace(".", ",");

					//Colocando card na página
					var card = "<article class='cards'><a href='' class='img_prod'><img src='imagens/Produtos/"+ json[i].nomeImg +"'></a><div class='text'><h1 class='titulo'>"+ json[i].nome +"</h1><p>"+ json[i].descricao +"</p><h2>Preço: R$"+ preco +"<br><span class='parcela'>Ou 12 x R$"+ parcela +"</span></h2><a href='#''>Comprar</a></div></article>";
					conteudo.innerHTML += card;
				}

			} catch (ex) {

				//Possíveis erros.
				console.warn(ex);
			}
		}
	});

	ajax.send();
});




