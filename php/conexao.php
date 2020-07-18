<?php

define("HOST", "localhost");
define("USER", "root");
define("SENHA", null);
define("BD", "CBC");

$conexao = mysqli_connect(HOST, USER, SENHA, BD) or die ("Erro de conexão!");

