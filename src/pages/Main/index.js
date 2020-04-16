import React from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, SubmitButton, Form } from './styles';

export default function Main() {
    return (
        // EXEMPLO
        // <Title error={false}>
        //     Main
        //     <small> Outro Texto</small>
        // </Title>

        <Container>
            <h1>
                <FaGithubAlt />
                Repositórios
            </h1>

            <Form onSubmit={() => {}}>
                <input type="text" placeholder="Adicionar Repositório" />
                <SubmitButton>
                    <FaPlus color="#FFF" size={14} />
                </SubmitButton>
            </Form>
        </Container>
    );
}
