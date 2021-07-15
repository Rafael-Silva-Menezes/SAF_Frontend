/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import api from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';

import { EmployeeFormData } from '../../../interfaces/employees';
import { useToast } from '../../../hooks/toast';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, AnimationContainer, Header } from './styles';
import { ParamTypes } from '../../../interfaces/params';

const CreateEmploye: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { id } = useParams<ParamTypes>();

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: EmployeeFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post(`/employees/create/${id}`, data);

        history.push(`/listEmployees/${id}`);

        addToast({
          type: 'success',
          title: 'Funcionário cadastrada!',
          description: 'Funcionário cadastrada com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history, id],
  );

  return (
    <Container>
      <Header>
        <Link to={`/listBranch/${id}`}>
          <FiArrowLeft size={40} />
        </Link>
      </Header>
      <AnimationContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Cadastrar Funcionário</h1>

          <Input name="name" placeholder="Nome do Funcionário" />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </AnimationContainer>
    </Container>
  );
};

export default CreateEmploye;
