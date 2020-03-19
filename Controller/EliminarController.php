<?php
include_once 'MasterModel.php';

$objSeccion= new MasterModel();

$codigo = $_GET["codigo"];

if ($codigo === '1'){

    $seccion = $_GET["seccion"];
    $objSeccion->eliminar("seccion","sec_id=".$seccion);

    echo ("se ha eliminado la seccion exitosamente");

    

}else{
    
    $seccion = $_GET["seccion"];
    $columna = "2".$seccion;
    $objSeccion->eliminar("columna","col_id=".$columna);

    echo ("Se ha eliminado la columna exitosamente");
    

}




?>