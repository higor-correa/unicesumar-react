import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Badge } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import pessoaService from 'services/pessoa';

export default function FormularioPessoa() {
    const history = useHistory();
    const { codigo } = useParams();
    const [state, setState] = useState({ codigo: '', nome: '', sobrenome: '', dataNascimento: '' });

    useEffect(() => {
        const pessoa = pessoaService.getPessoa(codigo);
        setState({ ...pessoa });
    }, [codigo]);

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const salvar = () => {
        if (state.codigo)
            pessoaService.atualizaPessoa(state.codigo, state);
        else
            pessoaService.adicionaPessoa({ ...state, codigo: Math.floor(Math.random() * 999999) });

        history.push('/pessoas');
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