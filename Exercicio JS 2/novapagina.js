let variavel

var teste2 = fetch('https://ghibliapi.herokuapp.com/films/')
    .then(response => response.json())
    .then(data => {

        variavel = data
    })
    .catch(error => console.error(error))


$(document).ready(function() {
    $('#example').DataTable();
    console.log("oie");
});