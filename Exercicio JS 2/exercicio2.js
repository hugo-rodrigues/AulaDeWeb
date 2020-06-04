var receita = {
    titulo: 'teste',
    porcao: 1,
    ingredientes: ['valor 1', 'valor 2']
}


console.log(receita.titulo, receita.porcao, receita.ingredientes)

var livrostotal = []

var Livros1 = {
    titulo: 'teste1',
    autor: 'teste1',
    livroLido: true
}

var Livros2 = {
    titulo: 'teste2',
    autor: 'teste2',
    livroLido: false
}

var Livros3 = {
    titulo: 'teste3',
    autor: 'teste3',
    livroLido: false
}

var Livros4 = {
    titulo: 'teste4',
    autor: 'teste4',
    livroLido: true
}


livrostotal[0] = Livros1

livrostotal[1] = Livros2

livrostotal[2] = Livros3

livrostotal[3] = Livros4


var teste = fetch('https://api.github.com/users/KrunalLathiya')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))




var teste2 = fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))


var teste3 = fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        console.log("   <img src=" + data.message + " alt='Random Photo of a Dog' />")
    })
    .catch(error => console.error(error))

var teste4 = fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        var imagem = document.createElement("img");
        imagem.src = data.message;
        document.body.appendChild(imagem);

    })
    .catch(error => console.error(error))