<?php
@session_start();
function getUrl($modulo,$controlador,$funcion,$parametros=false, $ajax=false)
{
    if($ajax==false)
    {
        $pagina="index";
    }
    else
    {
        $pagina="ajax";
    }

    $url="$pagina.php?modulo=$modulo&controlador=$controlador&funcion=$funcion";

    if($parametros!=false){
            foreach($parametros as $key=>$valor){
                    $url.="&$key=$valor";
            }
    }

    return $url;
}

function getTitle($modulo,$funcion)
{

	$return="";

	return $return;
}

function dd($variable){
	echo "<pre>";
	die(print_r($variable));
}

function redirect($url){
	echo "<script type='text/javascript'>
	window.location.href='$url';</script>";
}

/*function setErrores($errores = array()) {

    $mensajeError = "";

    if (is_array($errores) && count($errores) > 0) {

        $mensajeError = "<h6><strong>Por favor corregir los siguientes errores: </strong></h6>"
                . "<ul>";

        foreach ($errores as $error) {

            $mensajeError .= "<li>* " . $error . "</li>";
        }

        $mensajeError .= "</ul>";
    }

    $_SESSION['mensajeError'] = $mensajeError;
}
*/
function getErrores() {

    $mensajeError = "";

    if (isset($_SESSION['mensajeError'])) {

        $mensajeError = $_SESSION['mensajeError'];
        unset($_SESSION['mensajeError']);
    }

    return $mensajeError;
}


function cargarForms()
{

  if(!isset($_GET['modulo']) && !isset($_GET['controlador']) && !isset($_GET['funcion'])){
    //echo "llega aqui";
    @include 'view/dashboard/inicio.php';
  }
  else
  {

    $modulo= $_GET['modulo'];
    $controlador= $_GET['controlador'];
    $funcion= $_GET['funcion'];
    //echo "<h3>la ruta que llega ---> MODULO: ".$modulo." CONTROLADOR: ".$controlador."</h3>";

    if(is_dir("Controller/" . $modulo))
    {
      if(file_exists("Controller/" . $modulo . "/" . $controlador . "controller.php"))
      {
        include_once('Controller/' . $modulo . '/' . $controlador .'controller.php');
        $nombreClase= $controlador ."controller";
        $objcontrolador= new $nombreClase();

        if(method_exists($objcontrolador,$funcion))
        {
          $objcontrolador->$funcion();
        }
        else
        {
          echo ("La funcion especificada no existe");
        }

      }
      else
      {
        echo("El controlador especificado no existe");
      }
    }
    else
    {
      echo ("El modulo especificado no existe");
    }
  }
}

function comprobarCaracteresEspeciales($cadena){
   if (preg_match("/^[a-zA-Z0-9\-_@. ]{1,70}$/", $cadena)) {
      return true;
   } else {
      return false;
   }
}

function alertas($mensaje){
	echo "<script type='text/javascript'>
		alert('$mensaje');
	</script>";
}

function sumar60Dias($dia1)
{
    $cad_fecha=explode("-",$dia1);
    $exp_ano=$cad_fecha[0];
    $exp_mes=$cad_fecha[1];
    $exp_dia=$cad_fecha[2];

    $mes=$exp_mes +2;
    if($mes > 12)
    {
        $mes=$mes -12;
        $exp_ano=$exp_ano +1;
    }

    $fecha=$exp_ano."-".$mes."-".$exp_dia;
    return $fecha;
}

 function CalcularDiasEntreDosFechas($fecha_Max, $fecha_Min)
    {
        $cad_fecha=explode("-",$fecha_Min);
        $exp_ano=$cad_fecha[0];
        $exp_mes=$cad_fecha[1];
        $exp_dia=$cad_fecha[2];

        $cad_fecha2=explode("-",$fecha_Max);
        $exp_ano2=$cad_fecha2[0];
        $exp_mes2=$cad_fecha2[1];
        $exp_dia2=$cad_fecha2[2];

        //calculo timestam de las dos fechas
        $timestampMax = mktime(0,0,0,$exp_mes2,$exp_dia2,$exp_ano2)+ 5184000;
        $timestampMin = mktime(0,0,0,$exp_mes,$exp_dia,$exp_ano);

        //resto a una fecha la otra
        $segundos_diferencia = $timestampMax - $timestampMin;

        //convierto segundos en días
       $dias_diferencia = $segundos_diferencia / (60 * 60 * 24);


        $dias = floor($dias_diferencia);
        return $dias;


    }

    function nombreMes($mes)
{
    $nom_mes="";
    switch ($mes)
    {
        case 1:
            $nom_mes="Enero";
        break;

        case 2:
            $nom_mes="Febrero";
        break;

        case 3:
            $nom_mes="Marzo";
        break;

        case 4:
            $nom_mes="Abril";
        break;

        case 5:
            $nom_mes="Mayo";
        break;

        case 6:
            $nom_mes="Junio";
        break;

        case 7:
            $nom_mes="Julio";
        break;

        case 8:
            $nom_mes="Agosto";
        break;


        case 9:
            $nom_mes="Septiembre";
        break;

        case 10:
            $nom_mes="Octubre";
        break;

        case 11:
            $nom_mes="Noviembre";
        break;

        case 12:
            $nom_mes="Diciembre";
        break;
    }

    return $nom_mes;
}


?>
