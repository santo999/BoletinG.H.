<?php
include_once 'MasterModel.php';

$objSeccion= new MasterModel();
$sec = $_GET["seccion"];



if (isset($sec)) {

    $columna = "2".$sec;
    $objSeccion->insertar("columna","col_id,sec_id","$columna,$sec");
    $objSeccion->insertar("info_columna","id,titulo,imagen,texto,enlace","$columna,NULL,NULL,NULL,NULL");


    $colu= $objSeccion->consultar("*","columna","col_id=".$columna);
    $col = array();

    while($row = mysqli_fetch_array($colu))
    {
        $col = [

            "seccion" => $row['sec_id'],
            "columna" => $row['col_id'],

        ];
    }

    mysqli_free_result($colu);

    $myObj = new \stdClass();

  
    $myObj->columnas= $col;

    $myJSON = json_encode($myObj);

    return print_r($myJSON);

}else{

    echo ("no hay boletin");

};

// echo $mensaje;

?>





















