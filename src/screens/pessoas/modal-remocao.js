import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function ModalRemocao({ pessoa, onCancel, onConfirm }) {
    return (
        <Modal show={pessoa} onHide={onCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmar Remoção de Pessoa</Modal.Title>
            </Modal.Header>
            <Modal.Body>Deseja realmente excluir a pessoa {`${pessoa?.codigo} - ${pessoa?.nome}`}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    Cancelar
            </Button>
                <Button variant="primary" onClick={onConfirm}>
                    Sim
                </Button>
            </Modal.Footer>
        </Modal>
    )
}