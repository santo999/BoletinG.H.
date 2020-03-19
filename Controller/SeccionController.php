<?php
include_once 'MasterModel.php';

$objSeccion= new MasterModel();
// $boletin = $_POST["boletin"];

$boletin= $objSeccion->autoincrement("bol_id","boletin");

if (isset($boletin)) {

    $sesion= $objSeccion->consultar("*","seccion","bol_id=".$boletin);
    $sec = $sesion->num_rows+1;
    $sesion_id = $sec.$boletin;
    $objSeccion->insertar( "seccion","sec_id,bol_id","$sesion_id,$boletin");

    $columna= $objSeccion->consultar("*","columna","sec_id=".$sesion_id);
    $col = $columna->num_rows+1;
    $columna_id = $col.$sesion_id;
    $objSeccion->insertar("columna","col_id,sec_id","$columna_id,$sesion_id");
    $objSeccion->insertar("info_columna","id,titulo,imagen,texto,enlace","$columna_id,NULL,NULL,NULL,NULL");


    $colu= $objSeccion->consultar("*","columna","sec_id=".$sesion_id);
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