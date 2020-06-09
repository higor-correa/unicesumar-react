import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pessoaService from 'services/pessoa';
import ModalRemocao from './modal-remocao';

export default function ListaPessoa() {
    const [pessoas, setPessoas] = useState([]);
    const [pessoaRemover, setPessoaRemover] = useState(null);

    const removerPessoa = (pessoa) => {
        pessoaService.removePessoa(pessoa.codigo);
        setPessoaRemover(null);
        setPessoas(pessoaService.getPessoas());
    };

    useEffect(() => {
        setPessoas(pessoaService.getPessoas());
    }, []);

    return (<>
        <Row>
            <Col><h1>Pessoas</h1></Col>
            <Col md={{ span: 2, order: 'last' }}>
                <Link to={'/pessoa/nova'}><Button>Cadastrar Nova</Button></Link>
            </Col>
        </Row>
        <Row>
            <Col>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Data de Nascimento</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {pessoas.map(x => (
                            <tr>
                                <td>{x.codigo}</td>
                                <td>{x.nome}</td>
                                <td>{x.sobrenome}</td>
                                <td>{x.dataNascimento}</td>
                                <td>
                                    <Link to={`/pessoa/${x.codigo}`}><Button>Editar</Button></Link>
                                    <Button variant="danger" onClick={() => setPessoaRemover(x)}>Remover</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>

        <ModalRemocao
            pessoa={pessoaRemover}
            onCancel={() => setPessoaRemover(null)}
            onConfirm={() => removerPessoa(pessoaRemover)}
        />
    </>)
}