/*  Objetivo 1 - quando o usuario clicar no botao de seleção
de plataformas deve abrir uma caixa com os botoes
de seleção de plataformas
         passo 1 - pegar o botao de seleção de plataformas
        no JS para poder verificar quando o usuario
        clicar em cima dele.

        passo 2 - pegar o elemento do conteudo
        que precisa ser mostrado

        passo 3 - pegar o click do usuario no JS

        pásso 4 - quando o usuario clicar, adiconar a classe ativo
        na listagem de plataformas dentro do botao para que
        o conteudo apareça


Objetivo 2 - Se o botao de plataformas estiver aberto,
quando usuario clicar tem que ser oculto*/


/*passo 1 - pegar o botao de seleção de plataformas
        no JS para poder verificar quando o usuario
        clicar em cima dele.*/
var botao = document.querySelector(".btn-plataforma");

/*passo 2 - pegar o elemento do conteudo
que precisa ser mostrado*/
var elementoPlataformas = document.querySelector(".btn-plataforma .plataformas") 
// passo 3 - pegar o click do usuario no JS

botao.addEventListener('click', function() {
    /*elementoPlataformas.classList.contains('ativo')

    if(elementoPlataformas.classList.contains('ativo')){
        elementoPlataformas.classList.remove('ativo')
    } else{
        elementoPlataformas.classList.add('ativo')
    }*/
    elementoPlataformas.classList.toggle('ativo')
})


