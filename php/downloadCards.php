<?php

$card = [];

//Abrindo conexão com o Banco de Dados
include("conexao.php");

//Consultando o banco de dados
$consulta_bd = mysqli_query($conexao, "SELECT * FROM cards");

while ($consulta = mysqli_fetch_assoc($consulta_bd)) {
	$nome = $consulta['nome'];
	$preco = doubleval($consulta['preco']);
	$parcela_bd = $preco / 12;
	$parcela = number_format($parcela_bd, 2, ",", ".");
	$descricao = $consulta['descricao'];
	$nomeImg = $consulta['nomeImg'];

	$card = ["<article class='cards'>
		<a href='' class='img_prod'><img src='imagens/Produtos/".$nomeImg."'></a>
		<div class='text'>
			<h1 class='titulo'>".$nome."</h1>
			<p>".$descricao."</p>
			<h2>Preço: R$".$preco."<br><span class='parcela'>Ou 12 x R$".$parcela."</span></h2>
			<a href='#''>Comprar</a>
		</div>
		</article>"];

		echo json_encode($card[0]);
}