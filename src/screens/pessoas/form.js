import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Badge } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import pessoaService from 'services/pessoa-service';

export default function FormularioPessoa() {
    const history = useHistory();
    const { codigo } = useParams();
    const [state, setState] = useState({ codigo: '', nome: '', sobrenome: '', dataNascimento: '' });

    useEffect(() => {
        pessoaService
            .getPessoa(codigo)
            .then(pessoa => setState(pessoa))
            .catch(x => history.push('/pessoas'));
        ;
    }, [codigo, history]);

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const salvar = () => {
        let operation;
        if (state.codigo)
            operation = pessoaService.atualizaPessoa(state.codigo, state)
        else
            operation = pessoaService.adicionaPessoa({ ...state, codigo: Math.floor(Math.random() * 999999) });

        operation.then(x => history.push('/pessoas'));
    }

    return (
        <>
            <Badge variant="dark">{state.codigo ? `Editando: ${state.codigo}` : 'Novo'}</Badge>
            <Form.Row>
                <Form.Group as={Col} md="4">
                    <Form.Label htmlFor="nome">Nome</Form.Label>
                    <Form.Control
                        type="text"
                        name="nome"
                        defaultValue={state.nome}
                        onChange={handleChange}
                        isValid={(state.nome?.trim() || '')}
                    />
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    {/* <Form.Control.Feedback type="invalid">
                        {errors?.username}
                    </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label htmlFor="nome">Sobrenome</Form.Label>
                    <Form.Control
                        type="text"
                        name="sobrenome"
                        defaultValue={state.sobrenome}
                        onChange={handleChange}
                        isValid={(state.sobrenome?.trim() || '')}
                    />
                </Form.Group>

                <Form.Group as={Col} md="4">
                    <Form.Label htmlFor="nome">Data de Nascimento</Form.Label>
                    <Form.Control
                        type="date"
                        name="dataNascimento"
                        defaultValue={state.dataNascimento}
                        onChange={handleChange}
                        isValid={(state.dataNascimento?.trim() || '')}
                    />
                </Form.Group>
            </Form.Row>
            <Button onClick={salvar}>Salvar</Button>
        </>
    )
}