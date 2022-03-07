
function pegaPeloId(){
    alert('Você acessou este botão que contem um Id')
    const elemento = document.getElementById('exemplo-id')
    elemento.style.backgroundColor = 'red'
    elemento.innerHTML += 
    `
    <span>Você selecionou este elemento e mudou o seu fundo para vermelho pelo JavaScript!</span>
    <span>Foi possível acessar esse elemento por meio de um seletor chamado getElementById(),
    para acessar um elemento você tem que procurar ele dentro do document desta maneira: document.getElementById()</span>
    <span>dentro do parâmetro do seletor nós inserimos o Id, desta maneira:document.getElementById(ID)</span>
    `
}

function PegaPelaClasse(){
    alert('Você acessou este botão que contem um Class')

    const elemento = document.querySelector('.exemplo-classe')
    elemento.style.backgroundColor = 'brown'
    elemento.innerHTML += 
    `
    <span>Você selecionou este elemento e mudou o seu fundo para marrom pelo JavaScript!</span>
    <span>Foi possível acessar esse elemento por meio de um seletor chamado querySelector(),
    para acessar um elemento você tem que procurar ele dentro do document desta maneira: document.querySelector()</span>
    <span>dentro do parâmetro do seletor nós inserimos a classe, desta maneira:document.querySelector(Class)</span>
    `
}
function pegaNodeList(){
    const elementos = document.querySelectorAll('.exemplos div')
    for(i = 0; i < elementos.length; i++){
        console.log(elementos[i])
        elementos[i].style.backgroundColor = 'black'
    }
    elementos[2].innerHTML += 
    `
    <span>Você selecionou todos os elementos e mudou o fundo para preto pelo JavaScript!</span>
    <span>Foi possível acessar esses elementos por meio de um seletor chamado querySelectorAll(),
    para acessar todos os elementos você tem que procurar eles dentro do document desta maneira: document.querySelectorAll()</span>
    <span>dentro do parâmetro do seletor nós inserimos a classe em comum, desta maneira:document.querySelector(Class)</span>
    `
}

function pegaInnerHtml(){
    const quadro = document.querySelector('.quadro-branco1')
    const mensagem = window.prompt('Digite a mensagem')
    getHTML()
    quadro.innerHTML += `<span>${mensagem}</span>`
}
function pegaTextContent(){
    const quadro = document.querySelector('.quadro-branco2')
    const mensagem = window.prompt('Digite a mensagem')
    getTextContent()
    quadro.textContent += mensagem
}
function pegaInnerText(){
    const quadro = document.querySelector('.quadro-branco3')
    const mensagem = window.prompt('Digite a mensagem')
    getInnerText()
    quadro.innerText += mensagem
}

function getInnerText() {
    alert(`Retorno pelo innerText: ${document.querySelector('.quadro-branco1').innerText}`);
  }
  
  function getHTML() {
    alert(`Retorno pelo innerHTML: ${document.querySelector('.quadro-branco3').innerHTML}`);
  }
  
  function getTextContent() {
    alert(`Retorno pelo textContent: ${document.querySelector('.quadro-branco2').textContent}`);
  }