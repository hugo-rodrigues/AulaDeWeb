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

// for (i = 0; livrostotal.length; i++) {
//     console.log(livrostotal[i].titulo, livrostotal[i].autor)
//     if (livrostotal[i].livroLido == true) {
//         console.log("Livro Lido com sucesso")
//     } else {
//         console.log("Livro nao Lido com sucesso")
//     }
// }


var teste = fetch('https://api.github.com/users/KrunalLathiya')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))