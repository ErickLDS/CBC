<?php

// Verificando se a imagem foi recebida
if (isset($_POST['Enviar'])) {

	// Formatos permitidos
	$formatosImg = ["jpg", "png", "webp", "gif"];

	// Extensão da imagem recebida
	$extensao = pathinfo($_FILES['img']['name'], PATHINFO_EXTENSION);

	// Verificar se a extensão é válida
	if (in_array($extensao, $formatosImg)) {

		// Pasta de destino
		$pasta = "../imagens/Produtos/";

		// Pasta temporária do usuário
		$pastaTmp = $_FILES['img']['tmp_name'];

		// Criando nome do arquivo com id unico
		$nome = uniqid().".$extensao";

		// Movendo o arquivo
		if (move_uploaded_file($pastaTmp, $pasta.$nome)) {
			$mensagem = "Upload feito com sucesso!";
		}
		else {
			$mensagem = "Erro, não foi efetuado o Upload";
		}
	}
	else {
		$mensagem = "Formato inválido.";
	}
}

// Mensagem de Erro
if (isset($mensagem)) {
	echo $mensagem;
}