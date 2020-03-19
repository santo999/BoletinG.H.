<?php
include_once 'MasterModel.php';

$objColumna= new MasterModel();

$columna = $_POST["columna"];
$titulo = $_POST["titulo"];
$texto = $_POST["texto"];
$url = $_POST["url"];

// $imagen= $objColumna->consultar("imagen","info_columna","id=".$columna);

// if(isset($imagen)){
//     unlink($imagen);
// }

if (isset($columna)) {

    $img=explode(".",$_FILES['imagen']['name']);
    // $nombre_img_columna='imagen_'.$columna.'.'.end($img);
    $nombre_img_columna=$columna.'_'.$_FILES['imagen']['name'];

	$ruta_temp_img=$_FILES['imagen']['tmp_name'];
    $ruta_img='Cargas/'.$nombre_img_columna;
    
	if (move_uploaded_file($ruta_temp_img,$ruta_img)) {
		$ruta_col=$ruta_img;
	}else{
	    $ruta_col='null';
	}

    $objColumna->editar(
            'info_columna',
            "id='$columna'",
            array("titulo"=>"'$titulo'",
                    "imagen"=>"'$ruta_col'",
                    "texto"=>"'$texto'",
                    "enlace"=>"'$url'"));

    

    $col = array();

    $info_columna= $objColumna->consultar("*","info_columna","id=".$columna);

    while($row = mysqli_fetch_array($info_columna))
    {
        $col = [
            "id" => $row['id'],
            "titulo" => $row['titulo'],
            "imagen" => $row['imagen'],
            "texto" => $row['texto'],
            "url" => $row['enlace']
        ];
    }

    mysqli_free_result($info_columna);

    $myObj = new \stdClass();
  
    $myObj->colum = $col;

    $myJSON = json_encode($myObj);

    return print_r($myJSON);

}else{

    echo 'todo ha fallado';

};

?>























