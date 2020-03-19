function crearBoletin() {
    var formulario = document.getElementById('formulario');
    console.log(formulario);

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('mediste un click');

        var datos = new FormData(formulario);

        console.log(datos);
        console.log(datos.get('mes'));

        fetch('Controller/BoletinController.php', {
            method: 'POST',
            body: datos
        })
            .then(function (response) {
                console.log(response);
                return response.text();
            })
            .then(function (data) {
                console.log(data);
                if (data === 'ok') {
                    window.location.href = 'plantilla.html';
                } else {
                    window.location.href = 'index.html';
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    })
}

function crearSeccion() {

    fetch('Controller/SeccionController.php')
        .then(function (response) {
            // console.log(response);
            return response.json();
        })
        .then(function (data) {

            var sec = templateForm(data.columnas.seccion, data.columnas.columna);
            console.log(sec);
            var tem = crearTemplate(sec);
            console.log(tem);
            const acordion = document.getElementById('acordion');
            console.log(acordion);
            acordion.append(tem);
            var col = templateCol(data.columnas.seccion, data.columnas.columna);
            var temCol = crearTemplate(col);
            const seccion = document.getElementById('secciones');
            seccion.append(temCol);
            return console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        })

    function templateCol(seccion, columna) {
        return (`<div class='row row-cols-1 row-cols-md-1' id='sec${seccion}'>
                    <div class='col' id='col${columna}'>
                    
                    </div>
                </div>
                <br>`);

    }

    function templateForm(seccion_id, col_id) {
        var numeroSeccion = '';
        if (seccion_id.length === 6){
            numeroSeccion = seccion_id.substr(0,1);
        }else{
            numeroSeccion = seccion_id.substr(0,2);
        }
        return (`<div class='card seccion' id='${seccion_id}'>
                    <button class='accordionSanto' type='button' onclick='acordion("${seccion_id}")' id='btn${seccion_id}'> Sección #${numeroSeccion}</button>
                    <div id='acordion${seccion_id}' class='panel' style=''>
                        <form id='formul${col_id}'>
                        <br>
                            <div class='form-group'>
                                <h6>Columna # 1</h6>
                            </div>
                            <div class='form-group'>
                                <div class='col col-mb-12 col-md-12'>
                                    <label>TITULO</label>
                                    <input type='text' class='form-control' id='titulo' name='titulo'>
                                    <input type='hidden' class='form-control' id='columna' name='columna' value='${col_id}'>
                                </div>
                            </div>
                            <div class='form-group'>
                                <div class='col col-mb-12 col-md-12'>
                                    <label>IMAGEN</label>
                                    <input type='file' class='form-control' id='imagen' name='imagen' >
                                </div>
                            </div>
                            <div class='form-group'>
                                <div class='col col-mb-12 col-md-12'>
                                    <label>TEXTO</label>
                                    <textarea class='form-control' id='texto' name='texto' cols='30' rows='5'></textarea>
                                </div>
                            </div>
                            <div class='form-group'>
                                <div class='col col-mb-9 col-md-9'>
                                    <label class='labelCheckbox' >Agregar enlace en la nota ?</label>
                                </div>
                                <div class='col col-mb-3 col-md-3'>
                                        Si <input type='checkbox'  id='check${col_id}' onchange='chekea("${col_id}")' class='inputCheckbox'>
                                </div>
                            </div>
                            <div class='form-group'>
                                <div class='col col-mb-12 col-md-12'>
                                    <label>ENLACE</label>
                                    <input type='text' class='form-control' id='enlace${col_id}' name='url' readOnly>
                                </div>
                            </div>
                            <div class='form-group'>
                                <div class='col col-mb-12 col-md-12'>
                                    <button class='btn btn-primary' type='submit' onclick=guardarColumna('formul${col_id}')>Enviar</button>
                                </div>
                            </div>
                            <div class='form-group'>
                                <h6>Agregar o Eliminar columna  -> 
                                <button type='button' class='btn btn-success pull-right' id='new' onclick=nuevaColum("${seccion_id}")> + </button>
                                <button type='button' class='btn btn-danger pull-right' id='new' onclick=quitarColum("${seccion_id}")> - </button></h6> 
                            </div>
                        </form>
                        <form id='formul2${seccion_id}' style='display:none;'>
                            <div class='form-group'>
                                    <h6>Columna # 2</h6>
                                    <input type='hidden' class='form-control' id='sec' value='${seccion_id}'>
                            </div>
                            <div class='form-group'>
                                <div class='col col-mb-12 col-md-12'>
                                    <label>TITULO</label>
                                    <input type='text' class='form-control' id='titulo' name='titulo'>
                                    <input type='hidden' class='form-control' id='columna' name='columna' value='2${seccion_id}'>
                                </div>
                            </div>
                            <div class='form-group'>
                                <div class='col col-mb-12 col-md-12'>
                                    <label>IMAGEN</label>
                                    <input type='file' class='form-control' id='img2${seccion_id}' name='imagen' >
                                </div>
                            </div>
                            <div class='form-group'>
                                <div class='col col-mb-12 col-md-12'>
                                    <label>TEXTO</label>
                                    <textarea class='form-control' id='texto2${seccion_id}' name='texto' cols='30' rows='5'></textarea>
                                </div>
                            </div>
                            <div class='form-group'>
                                <div class='col col-mb-9 col-md-9'>
                                    <label class='labelCheckbox' >Agregar enlace en la nota ?</label>
                                </div>
                                <div class='col col-mb-3 col-md-3'>
                                    Si <input type='checkbox'  id='check2${seccion_id}' onchange='chekea("2${seccion_id}")' class='inputCheckbox'>
                                </div>
                            </div>
                            <div class='form-group'>
                                <div class='col col-mb-12 col-md-12'>
                                    <label>ENLACE</label>
                                    <input type='text' class='form-control' id='enlace2${seccion_id}' name='url' readOnly>
                                </div>
                            </div>
                            <div class='form-group'>
                                <div class='col col-mb-12 col-md-12'>
                                    <button class='btn btn-primary' type='submit' onclick=guardarColumna('formul2${seccion_id}')>Enviar</button>
                                </div>
                            </div>
                        </form>
                </div>`);

    }


    function crearTemplate(htmlString) {

        const html = document.implementation.createHTMLDocument();
        html.body.innerHTML = htmlString;
        const secciones = html.body.children[0];
        return secciones;

    }

}

function eliminarSeccion() {


    var secciones = document.getElementsByClassName('seccion');
    var ultimo = secciones.length - 1;
    var seccion = secciones[ultimo];
    var seccionPk = seccion.id;

    fetch(`Controller/EliminarController.php?seccion=${seccionPk}&codigo=1`)
        .then(function (response) {
            // console.log(response);
            return response.text();
        })
        .then(function (data) {
            return console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        })



    var acordionPadre = document.getElementById('acordion');
    var sec = document.getElementById('secciones');
    acordionPadre.removeChild(secciones[ultimo]);
    hijo = document.getElementById(`sec${seccionPk}`)
    sec.removeChild(hijo);
}

function guardarColumna(form) {
    console.log(form);
    var formulario = document.getElementById(form);
    console.log(formulario);

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('mediste un click');

        var datos = new FormData(formulario);

        console.log(datos);
        console.log(datos.get('imagen'));
        console.log(datos.get('columna'));

        fetch('Controller/ColumnaController.php', {
            method: 'POST',
            body: datos
        })
            .then(function (response) {
                // console.log(response);
                return response.json();
            })
            .then(function (data) {

                var seccion = document.getElementById('col' + data.colum.id);
                while (seccion.firstChild) {
                    seccion.removeChild(seccion.firstChild);
                }
                var sec = templateForm(data.colum.id, data.colum.titulo, data.colum.imagen, data.colum.texto, data.colum.url);
                var tem = crearTemplate(sec);
                seccion.append(tem);
                return console.log(data);
            })
            .catch(function (error) {
                console.log(error);
            })

    });


    function templateForm(id, titulo, imagen, texto, url) {
        var checkbox = document.getElementById(`check${id}`);
        var enlace = document.getElementById(`enlace${id}`);
        // var footerUrl = document.getElementById(`footer${pk}`);
        var checked = checkbox.checked;

        if(checked){
            return (`
            <div class='card' id=${id}>
                <img src='Controller/${imagen}' class='card-img'>
                <div class='card-body'>
                    <h5 class='card-title'>${titulo}</h5>
                    <p class='card-text'>${texto}</p>
                </div>
                <div class='card-footer' id='footer${id}'>
                    <a href='${url}' class='card-link'>link</a>
                </div>
            </div><br>`);
        }else{
            return (`
            <div class='card' id=${id}>
                <img src='Controller/${imagen}' class='card-img'>
                <div class='card-body'>
                    <h5 class='card-title'>${titulo}</h5>
                    <p class='card-text'>${texto}</p>
                </div>
            </div><br>`);
        }
       
    }

    function crearTemplate(htmlString) {

        const html = document.implementation.createHTMLDocument();
        html.body.innerHTML = htmlString;
        const secciones = html.body.children[0];
        return secciones;

    }

}

function nuevaColum(sec) {

    form2 = document.getElementById(`formul2${sec}`);
    console.log(form2);
    form2.style.display = 'block';

    seccion = document.getElementById(`sec${sec}`).className = 'row row-cols-1 row-cols-md-2';

    fetch(`Controller/Columna2Controller.php?seccion=${sec}`)
        .then(function (response) {
            // console.log(response);
            return response.json();
        })
        .then(function (data) {


            var col = templateCol(data.columnas.columna);
            var temCol = crearTemplate(col);
            var sec = data.columnas.seccion;
            seccion_padre = document.getElementById(`sec${sec}`);
            console.log(seccion_padre);
            seccion_padre.append(temCol);
            return console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        })



    function templateCol(columna) {
        return (`<div class='col' id='col${columna}'>
                </div>
                <br>`);

    }

    function crearTemplate(htmlString) {

        const html = document.implementation.createHTMLDocument();
        html.body.innerHTML = htmlString;
        const secciones = html.body.children[0];
        return secciones;

    }

}

function quitarColum(sec) {

    padre = document.getElementById(`sec${sec}`);
    hijo = document.getElementById(`col2${sec}`);
    padre.removeChild(hijo);
    seccion = document.getElementById(`sec${sec}`).className = 'row row-cols-1 row-cols-md-1';
    form2 = document.getElementById(`formul2${sec}`);
    form2.reset();
    form2.style.display = 'none';

    fetch(`Controller/EliminarController.php?seccion=${sec}&codigo=2`)
        .then(function (response) {
            // console.log(response);
            return response.text();
        })
        .then(function (data) {
            return console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function chekea(pk){
    var checkbox = document.getElementById(`check${pk}`);
    var enlace = document.getElementById(`enlace${pk}`);
    var checked = checkbox.checked;

    if(checked){
        enlace.readOnly = false;
    }else{
        enlace.readOnly = true;
    }
  }


  function acordion(pk){

    console.log(pk)
    var body = document.getElementById(`acordion${pk}`);
    var btn = document.getElementById(`btn${pk}`);
    console.log(body);
    console.log(btn);

    btn.classList.toggle('active');
    if (body.style.display) {
      body.style = '';
    } else {
      body.style.display ='block';
    } 
  

}


function crearHtml(){
    // elemento.outerHTML
    var boletin = document.getElementById('boletin');
    texto = boletin.outerHTML;

    const data = new FormData();
    data.append('boletin', texto);

    fetch('Controller/GuardarBoletin.php', {
       method: 'POST',
       body: data
    })
    .then(function(response) {
       if(response.ok) {
           return response.text()
       } else {
           throw "Error en la llamada Ajax";
       }
    
    })
    .then(function(texto) {
       console.log(texto);
    })
    .catch(function(err) {
       console.log(err);
    });
}
