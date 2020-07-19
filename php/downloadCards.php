<?php

$json = array();

//Abrindo conexão com o Banco de Dados
include("conexao.php");

//Consultando o banco de dados
$consulta_bd = mysqli_query($conexao, "SELECT * FROM cards");

//Varrendo dados do BD
while ($consulta = mysqli_fetch_assoc($consulta_bd)) {
	$consulta['preco'] = floatval($consulta['preco']);
	$json[] = $consulta;
}

//Mandando dados
echo json_encode($json);
	
