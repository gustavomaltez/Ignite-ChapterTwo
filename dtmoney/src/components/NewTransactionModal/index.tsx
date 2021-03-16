import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImage from '../../assets/close.svg';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import { useState } from 'react';
interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: newTransactionModalProps) {
    const [type, setType] = useState('deposit');

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                onClick={onRequestClose}
                className="react-modal-close">
                <img src={closeImage} alt="Fechar modal" />
            </button>
            <Container>

                <h2>Cadastrar transação</h2>

                <input type="text" placeholder="Título" />
                <input type="number" placeholder="Valor" />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        isActive={type === 'deposit'}
                        activeColor='green'
                        onClick={() => {
                            setType('deposit');
                        }}
                    >
                        <img src={incomeImage} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>
                    
                    <RadioBox
                        type="button"
                        isActive={type === 'withdraw'}
                        activeColor='red'
                        onClick={() => {
                            setType('withdraw');
                        }}
                    >
                        <img src={outcomeImage} alt="Outcome"/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input type="text" placeholder="Categoria" />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}