var titulo = document.getElementsByClassName("titulo");

for(let i = 0; i < titulo.length; i++) {
	titulo[i].addEventListener("click", function () {
	});
};

/* Sintaxe

	<-- Selecionar Elementos -->

document.getElementById("") 
Seleciona ID's;

document.getElementsByClassName("")[x] 
Seleciona Classes;

document.getElementsByTagName("")[x] 
Seleciona Tag's;

document.querySelector("") ("#Id", ".Class", "p Tag")
seleciona somente o primeiro;

document.querySelectorAll(".cards")[x] 
Seleciona todos elementos;

document.getElementsByClassName("cards")[x].querySelectorAll("h1")[x]
Seleciona um elemento especifico;

document.createElement("tag")
Cria elementos;

appendChild()
Cria elementos dentro de outros;

removeChild(a)
Remove elementos dentro de outros;

parentNode
Acessa o elemento anterior;

	<-- Variáveis -->

typeof
Mostra o tipo de variável;

var x
Define uma variável global(Global = pode ser usada por todo o código);

const x
Define uma constante;

let x
Define uma variável local(Local = só pode ser usada em uma determinada parte do código);

	<-- Objeto -->

var nome = {
	nome: "",
	nome: x,
	nome: {
		nome: ""
	}
};
Armazena outras variáveis;

	<-- Arrays -->

var nome = [nome, nome, [nome, nome], {nome: x, nome: ""}];
Armazena outras variáveis e objetos;

	<-- Condicionais -->

if (condição) {
	conteudo;
}
else if (condição) {
	conteudo;
}
else {
	conteudo;
};

switch (var) {
	case "x":
	break;

	case "x":
	break;

	default:
	break;
};

	<-- Loops -->

for (let i = 0; i < x; i++) {
	conteudo;
}

array.forEach(function(Elemento, Indice){
	conteudo;
})

while(i < x){
	conteudo;
}

	<-- Function -->

function nome() {
	conteudo;
}

	<-- Eventos -->

window.onload = function () {
	alert("");
};
Ao carregar a página;

nomeVar.addEventListener("click", function () {
	alert("");
});
Adiciona um evento ao clicar;

nomeVar.addEventListener("mouseover", function () {
	nomeVar.classList.add("");
})
Adiciona um evento ao passar o mouse emcima;

nomeVar.addEventListener("mouseleave", function () {
	nomeVar.classList.add("");
})
Adiciona um evento quando o mouse sai de cima do elemento;

*/



/* Exemplos Práticos

<-- Mudar Elemento -->
Ex[0]:
	var btn_cadastrar = document.getElementsByClassName("menu")[0].getElementsByTagName("a")[3];
	btn_cadastrar.innerHTML = "Login";
	btn_cadastrar.href = "login.html";
	btn_cadastrar.target = "_blank";

	console.log (btn_cadastrar);


<-- createElement("") -->
Ex[0]: 
	var p = document.createElement("p");
	p.innerHTML = "Hello World";

	console.log (
		p.innerHTML
	)

Ex[1]:
	var a = document.createElement("a");
	a.href = "index.html";
	a.innerHTML = "Início";

	console.log(
		a
	)


<-- appendChild() -->
Ex[0]:
	var a = document.createElement("a");
	a.innerHTML = "Login";
	a.id = "menu_pc";
	a.href = "index.html";
	a.target = "_blank";

	console.log(
		document.getElementsByClassName("menu")[0].appendChild(a)
	)


<-- parentNode -->
Ex[0]:
	document.getElementsByClassName("parcela")[0].parentNode.parentNode


<-- Var Objeto -->
Ex[0]:
	var escola = {
		nome: "ETEC de Francisco Morato",
		alunos: {
			n2: "Breno",
			n4: "Caique",
			n8: "Erick",
		},
		carteiras: 10,
		diretor: "Renatão",
		segurança: {
			dia: "Renato",
			noite: "Fernando",
		},
		professores: {
			bd: "Carol",
			pw: "Kelly",
			dw: "Rafael",
		}
	};

	console.log (escola.nome);


<-- Var Array -->
Ex[0]:
	var array = [
	"Erick", 16, {dia: 06, mes: "Dezembro", ano: 2003},
	["escola", {nome_escola: "ETEC de Francisco Morato", N: 08}
	]
	];

	console.log(array[3][1].nome_escola);


<-- If, Else If, Else -->
Ex[0]:
	var status_cadastrado = false;

	if (status_cadastrado == true) {
		var btn_cadastrar = document.getElementsByClassName("menu")[0].getElementsByTagName("a")[3];
		btn_cadastrar.innerHTML = "Login";
		btn_cadastrar.href = "login.html";

		console.log (btn_cadastrar);
	}


<-- Switch -->
Ex[0]:
	var a = 3;

	switch (a) {
		case 1:
		console.log("1");
		break;
		case 2:
		console.log("2");
		break;
		case 4:
		console.log("4");
		break;
		default:
		console.log("Ih Rapaz... Deu erro.");
		break;
	}


<-- For -->
Ex[0]:
	var menu = document.getElementsByClassName("menu")[0].getElementsByTagName("a");

	for (let i = 0; i < 4; i++) {
		let texto = menu[i].innerHTML;
		menu[i].innerHTML = "< " + texto + " />";
	}

	console.log(menu);


<-- forEach -->
Ex[0]:
	var numero_chamada = [1, 2, 3, 4, 5, 6, 7, 8];

	numero_chamada.forEach(function(elemento, indice) {
		console.log(elemento, indice);
	})


<-- While -->
Ex[0]:
	var numeros = [1, 2, "b", 4, "a"];
	var i = 0;

	while(i < 5){
		console.log(numeros[i]);
		i++;
	};


<-- Function -->
Ex[0]:
	function calculadora(soma) {
		return ++soma;
	}

Ex[1]:
	var carro = {
		nome: "Corsa",
		marca: "Chevrolet",
		ano: 2005,
		cor: "Preto"
	}

	function alterarCarro(novoCarro){
		carro = novoCarro;
		return novoCarro;
	}


<-- onload -->
Ex[0]:
	window.onload = function () {
		confirm("Olá, mundo.");
	};


<-- click -->
Ex[0]:
	var btnMenu = document.getElementById("btnMenu");

	btnMenu.addEventListener("click", function () {
		var logo = document.getElementsByClassName("logo")[0];
		logo.remove();
	});

Ex[1]:
	var titulo = document.getElementsByClassName("titulo");

	for(let i = 0; i < titulo.length; i++) {
		titulo[i].addEventListener("click", function () {
			let texto = this.innerHTML;
			this.innerHTML = texto + "<br> Selecionado";
		});
	};


<--  -->

*/