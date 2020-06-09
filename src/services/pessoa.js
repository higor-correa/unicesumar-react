const pessoas = [
    { codigo: 10, nome: 'Higor', sobrenome: 'Correa', dataNascimento: '1995-12-19' },
    { codigo: 12, nome: 'Felipe', sobrenome: 'Ceoli', dataNascimento: '1990-06-10' },
    { codigo: 13, nome: 'Jozé', sobrenome: 'Tissei', dataNascimento: '1990-06-10' },
];

const getPessoas = () => [...pessoas];

const getPessoa = (codigo) => {
    codigo = parseInt(codigo)

    const pessoa = pessoas.find(x => x.codigo === codigo);
    return pessoa ? { ...pessoa } : null;
}

const adicionaPessoa = ({ codigo, nome, sobrenome, dataNascimento }) => {
    pessoas.push({ codigo, nome, sobrenome, dataNascimento });
}

const atualizaPessoa = (codigo, { nome, sobrenome, dataNascimento }) => {
    const pessoa = getPessoa(codigo);
    if (!pessoa) return;

    const pessoaIdx = pessoas.findIndex(x => x.codigo === codigo);
    pessoas.splice(pessoaIdx, 1);
    pessoas.push({ codigo, nome, sobrenome, dataNascimento })
}

const removePessoa = (codigo) => {
    const pessoa = getPessoa(codigo);
    if (!pessoa) return;

    const pessoaIdx = pessoas.findIndex(x => x.codigo === codigo);
    pessoas.splice(pessoaIdx, 1);
}

export default {
    getPessoas: getPessoas,
    getPessoa: getPessoa,
    adicionaPessoa: adicionaPessoa,
    atualizaPessoa: atualizaPessoa,
    removePessoa: removePessoa,
}