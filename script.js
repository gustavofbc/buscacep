// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const formulario = document.querySelector('#buscadorDeCep');
const btnBuscar = document.querySelector('.buscar');

const cepValue = document.querySelector('#cep-value');
const cidadeValue = document.querySelector('#cidade-value');
const bairroValue = document.querySelector('#bairro-value');
const logradouroValue = document.querySelector('#logradouro-value');
const ufValue = document.querySelector('#uf-value');
const dddValue = document.querySelector('#prefixo-value');
const siafiValue = document.querySelector('#siafi-value');

function buscarCep(event) {
  event.preventDefault();
  const cep = formulario.cep.value;
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response =>response.json())
  .then(body => {
    if(body.erro == true){
      console.log(Error('Digite um CEP válido'))
    } else {
      cepValue.innerText = body.cep;
      cidadeValue.innerText = body.localidade;
      bairroValue.innerText = body.bairro;
      logradouroValue.innerText = body.logradouro;
      ufValue.innerText = body.uf;
      dddValue.innerText = body.ddd;
      siafiValue.innerText = body.siafi;
    }
  })
}

btnBuscar.addEventListener('click', buscarCep);