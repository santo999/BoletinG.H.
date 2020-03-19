<?php
include_once 'MasterModel.php';


$objBoletin= new MasterModel();

	

$year = $_POST['year'];
$mes = $_POST['mes'];
$boletin = $mes.$year;

$dato=$objBoletin->consultar("*","boletin","bol_id=$boletin");
if ($dato->num_rows > 0 ) {
	echo "0";
}else{

	
	$objBoletin->insertar("boletin","bol_id,bol_mes,bol_year","$boletin,$mes,$year");
	echo ("ok");
}

	
	

?>