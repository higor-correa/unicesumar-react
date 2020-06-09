const pessoas = [
    { codigo: 10, nome: 'Higor', sobrenome: 'Correa', dataNascimento: '1995-12-19' },
    { codigo: 12, nome: 'Felipe', sobrenome: 'Ceoli', dataNascimento: '1990-06-10' },
    { codigo: 13, nome: 'Jozé', sobrenome: 'Tissei', dataNascimento: '1990-06-10' },
];

const getPessoas = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve([...pessoas]);
    }, 2000);
});

const getPessoa = (codigo) => new Promise((resolve, reject) => {
    setTimeout(function () {
        codigo = parseInt(codigo)

        const pessoa = pessoas.find(x => x.codigo === codigo);
        pessoa ? resolve(pessoa) : reject('Pessoa não encontrada');

    }, 2000);
});

const adicionaPessoa = ({ codigo, nome, sobrenome, dataNascimento }) => new Promise((resolve, reject) => {
    setTimeout(function () {
        pessoas.push({ codigo, nome, sobrenome, dataNascimento });
        resolve();
    }, 2000);
});

const atualizaPessoa = (codigo, { nome, sobrenome, dataNascimento }) => new Promise((resolve, reject) => {
    setTimeout(function () {
        const pessoa = getPessoa(codigo);
        if (!pessoa) return;

        const pessoaIdx = pessoas.findIndex(x => x.codigo === codigo);
        pessoas.splice(pessoaIdx, 1);
        pessoas.push({ codigo, nome, sobrenome, dataNascimento })
        resolve();
    }, 2000);
});

const removePessoa = (codigo) => new Promise((resolve, reject) => {
    setTimeout(function () {
        const pessoa = getPessoa(codigo);
        if (!pessoa) {
            reject();
            return;
        }

        const pessoaIdx = pessoas.findIndex(x => x.codigo === codigo);
        pessoas.splice(pessoaIdx, 1);
        resolve();
    }, 2000);
});

export default {
    getPessoas,
    getPessoa,
    adicionaPessoa,
    atualizaPessoa,
    removePessoa,
}