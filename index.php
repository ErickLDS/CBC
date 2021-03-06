<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title>Computer Builder Company</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="author" content="Computer Builder Company">
	<meta name="description" content="Computadores para Designer, Logística e Gamers.">
	<meta name="keywords" content="Computador, logística, gamer">
	<link rel="stylesheet" href="css\style.css">
	<link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet">
	<script src="https://kit.fontawesome.com/b0f93b5f5f.js" crossorigin="anonymous"></script>
	<link rel="icon" href="imagens\Logo.png">
</head>
<body>

<!-- Menu -->
<header>
	<nav>
		<a href="index.html" class="logo"><img src="imagens\Logo.png"></a>
		<label for="checkbox" class="label" id="btnMenu"><i class="fas fa-bars icon"></i></label>
		<input type="checkbox" name="checkbox" id="checkbox">
		<div class="menu">
			<a href="index.html" class="logo_pc"><img src="imagens\Logo.png"></a>
			<a href="#" id="menu_pc"> Home </a>
			<a href="#" id="menu_pc"> Carrinho </a>
			<a href="#" id="menu_pc"> Cadastrar </a>
			<a href="#" id="menu_pc"> Sobre </a>
		</div>
	</nav>
</header>

<!-- Banner -->
<img class="banner" src="imagens\banner.jpg">
<img class="banner_pc" src="imagens\Banner_pc.jpg">

<section id="conteudo">

<?php

//Abrindo conexão com o Banco de Dados
include("php/conexao.php");

//Consultando o banco de dados
$consulta_bd = mysqli_query($conexao, "SELECT * FROM cards");

//Varrendo dados do BD
while ($consulta = mysqli_fetch_assoc($consulta_bd)) {
	$consulta['preco'] = floatval($consulta['preco']);
	$parcela = $consulta['preco'] / 12;
	$parcela = number_format($parcela, 2, ",", ".");
	$consulta['preco'] = number_format($consulta['preco'], 2, ",", ".");
	echo "<article class='cards'>
	<a href='' class='img_prod'><img src='imagens/Produtos/". $consulta['nomeImg'] ."'></a>
	<div class='text'><h1 class='titulo'>". $consulta['nome'] ."</h1>
	<p>". $consulta['descricao'] ."</p>
	<h2>Preço: R$". $consulta['preco'] ."<br><span class='parcela'>Ou 12 x R$". $parcela ."</span></h2>
	<a href='#''>Comprar</a></div>
	</article>";
}

?>

</section>

<!-- Adicionar cards -->
<div id="conteudo">
	<article class="cards">
		<form name="add" method="POST" enctype="multipart/form-data" action="php/upload.php" id="formAdd">

			<!-- Importar Imagem -->
			<label for="img" id="labelFile"><img src="" id="imgAdd"><i class="fas fa-plus" id="fileIcon"></i></i></label>
			<input type="file" name="img" id="img" required="required">


			<!-- Título -->
			<label><p class="addText">Nome:</p></label>
			<input type="text" name="nome" required="required" autocomplete="off" placeholder="Digite o nome...">

			<!-- Preço -->
			<label><p class="addText">Preço:</p></label>
			<input type="text" name="preco" required="required" autocomplete="off" placeholder="Digite o preço...">

			<!-- Descrição -->
			<label><p class="addText">Descrição:</p></label>
			<textarea name="descricao" required="required" autocomplete="off" placeholder="Digite a descrição..."></textarea>

			<input class="btnEnviarAdd" type="submit" name="Enviar" value="Enviar">
		</form>
	</article>
</div>

<div class="newsletter">
	<h2>Cadastre seu Email para receber novidades!</h2>
	<form method="POST" action="#">
		<input type="email" name="email" placeholder="Insira seu email aqui...">
		<input type="submit" name="Enviar">
	</form>
</div>


<footer>
	<p> Copyright © CBC 2020. Todos os direitos reservados.</p>
</footer>

<script type="text/javascript" src="js/script.js"></script>
<script type="text/javascript" src="js/funcoes.js"></script>

</body>
</html>