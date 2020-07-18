<?php

$mensagem = 0;

//Abrindo conexão com o Banco de Dados
include("conexao.php");

if ($_POST['Enviar']) {
	//Recebendo dados do usuário
	$nome = mysqli_real_escape_string($conexao, strip_tags(trim($_POST['nome'])));
	$preco = mysqli_real_escape_string($conexao, strip_tags(trim($_POST['preco'])));
	$descricao = mysqli_real_escape_string($conexao, strip_tags(trim($_POST['descricao'])));

	//Consultando Banco de dados
	@$consulta_nome = mysqli_query($conexao, "SELECT nome FROM cards WHERE nome = $nome");
	@$nome_bd = mysqli_fetch_array($consulta_nome);

	if ($nome == $nome_bd) {
		$mensagemErro = "O nome digitado já está em uso.";
	}
	else {

		//UPLOAD IMG
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
				$nomeImg = uniqid().".$extensao";

				// Movendo o arquivo
				if (move_uploaded_file($pastaTmp, $pasta.$nomeImg)) {
					$mensagem++;
				}
				else {
					$mensagemErro = "Erro, não foi efetuado o Upload";
				}
			}
			else {
				$mensagemErro = "Formato inválido.";
			}
		}

		//Insert
		$insert = mysqli_query($conexao, "INSERT INTO cards (nome, preco, descricao, nomeImg) VALUES ('$nome', '$preco', '$descricao', '$nomeImg')");

		if ($insert) {
			$mensagem++;
		}
		else {
			$mensagemErro = "Erro. Não foi possível inserir os dados ao BD.";
		}
	}

	if ($mensagem == 2) {
		echo "<script>
		alert('Upload feito com sucesso!');
		history.back()
		</script>";
	}

	// Mensagem de Erro
	if (isset($mensagemErro)) {
		echo "<script>
		alert(".$mensagemErro.");
		history.back()
		</script>";
	}
}


