let amigoSecreto = [];

function adicionarAmigo() {
    let aAmigo = document.querySelector('input')
    let amigo = aAmigo.value

    if (amigo == "") {
        alert('Digite o nome de um amigo.');
        return;
    } else {
        amigoSecreto.push(amigo);
        console.log(amigoSecreto);
        atualizarLista();
        aAmigo.value = ''
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigoSecreto.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    })
}

function sortearAmigo() {
    let sorteado = amigoSecreto[Math.floor(Math.random() * amigoSecreto.length)];
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '';

    let li = document.createElement('li');
    li.textContent = `O amigo secreto sorteado é: ${sorteado}`;
    resultado.appendChild(li);
}