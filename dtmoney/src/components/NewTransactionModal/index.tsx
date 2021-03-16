import Modal from 'react-modal';

interface newTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:newTransactionModalProps) {

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h1>Cadastrar transação</h1>
        </Modal>
    )
}