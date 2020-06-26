let variavel

var teste2 = fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => {

        //variavel = data
        preencherGrid(data)
    })
    .catch(error => console.error(error))


function PostJASON() {

    var teste3 = fetch('https://jsonplaceholder.typicode.com/comments', {
                method: 'post',
                body: JSON.stringify(opts)
            }

        )
        .then(response => response.json())
        .then(data => {


            Alert("Enviado com sucesso");
        })
        .catch(error => console.error(error))
}





function preencherGrid(data) {

    let Dados = eval(data);
    let dtData = [];
    $.each(Dados, function(cp) {
        dtData.push([

            Dados[cp].name === null ? '&nbsp;' : Dados[cp].name,

            Dados[cp].body === null ? '&nbsp;' : Dados[cp].body

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
        "aoColumnDefs": [

            { "sTitle": " Nome", "bSortable": true, "sName": "name", "aTargets": [0] },

            { "sTitle": "Body", "bSortable": true, "sName": "body", "aTargets": [1] }

        ]

    });
}


$(document).ready(function() {

});