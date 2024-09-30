// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

//selecionando o botão que muda frases
const newBtn = document.getElementById("btn-mudar-frases");

//evento de mudança de cada frase
newBtn.addEventListener("click", function(){
    const frases = document.getElementsByClassName("mensagem2");
    for (let i= 0; 1<frases.length; i++){
        frases[i].textContent = `Frase modificadaaa ${i + 1}`;
    }
});