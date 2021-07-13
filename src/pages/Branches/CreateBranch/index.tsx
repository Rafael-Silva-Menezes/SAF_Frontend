/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, AnimationContainer } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const CreateBranch: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = (data: object): void => {
    console.log('oi');
  };

  return (
    <Container>
      <AnimationContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Cadastrar Filial</h1>

          <Input name="name" placeholder="Nome da filial" />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </AnimationContainer>
    </Container>
  );
};

export default CreateBranch;
