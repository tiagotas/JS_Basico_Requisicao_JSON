<?php

$clientes = array();

$c = array('nome' => 'tiago', 'idade' => 70, 'profissao' => 'professor');
array_push($clientes, $c);


$c1 = ['nome' => 'jesus', 'idade' => 2018, 'profissao' => 'filho de deus'];
array_push($clientes, $c1);


header("Content-type: application/json; charset=utf-8");
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Pragma: public");            

exit(json_encode($clientes));

?>