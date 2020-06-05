let variavel

var teste2 = fetch('https://ghibliapi.herokuapp.com/films/')
    .then(response => response.json())
    .then(data => {

        //variavel = data
        preencherGrid(data)
    })
    .catch(error => console.error(error))




function preencherGrid(data) {

    let Dados = eval(data);
    let dtData = [];
    $.each(Dados, function(cp) {
        dtData.push([
            Dados[cp].id === null ? '&nbsp;' : Dados[cp].id,
            Dados[cp].title === null ? '&nbsp;' : Dados[cp].title,
            Dados[cp].description === null ? '&nbsp;' : Dados[cp].description,
            Dados[cp].director === null ? '&nbsp;' : Dados[cp].director,
            Dados[cp].producer === null ? '&nbsp;' : Dados[cp].producer,
            Dados[cp].release_date === null ? '&nbsp;' : Dados[cp].release_date

        ]);

    });



    let oTable = $('#example').dataTable({


        "aaData": dtData,
        "bFilter": true,
        "bInfo": true,
        "bStateSave": false,
        "oLanguage": {
            "sUrl": "pt.txt"
        },
        "bJQueryUI": true,
        "bDestroy": true,
        "bPaginate": true,
        "sPaginationType": "full_numbers",
        "bAutoWidth": true,
        "aoColumnDefs": [{ "sTitle": " Id", "bSortable": true, "sName": "id", "aTargets": [0] },
            { "sTitle": " Titulo", "bSortable": true, "sName": "cpf", "aTargets": [1] },

            { "sTitle": " Descricao", "bSortable": true, "sName": "numeroMigrado", "aTargets": [2] },
            { "sTitle": "Diretor", "bSortable": true, "sName": "dataRegistroOferta", "aTargets": [3] },
            { "sTitle": "Produtort", "bSortable": true, "sName": "datatermino", "aTargets": [4] },
            { "sTitle": "Data de Lancamento", "bSortable": true, "sName": "nome", "aTargets": [5] }
        ]

    });
}


$(document).ready(function() {

});