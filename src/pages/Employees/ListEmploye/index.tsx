/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

import CardEmployee from '../../../components/CardEmployee';

import { Container, Content, ContainerButton } from './styles';

const ListEmploye: React.FC = () => {
  return (
    <Container>
      <h1>Funcionários</h1>
      <ContainerButton>
        <Link to="/createEmployee">
          <Button>Cadastrar funcionário</Button>
        </Link>
      </ContainerButton>
      <Content>
        <CardEmployee
          id={258}
          link={[`/editEmployee/${258}`, '/deleteEmployee']}
          name="Flávio Adriel"
          branch="Ricardo Eletro"
          key={285}
        />
        <CardEmployee
          id={258}
          link={[`/editEmployee/${258}`, '/deleteEmployee']}
          name="Flávio Adriel"
          branch="Ricardo Eletro"
          key={285}
        />
        <CardEmployee
          id={258}
          link={[`/editEmployee/${258}`, '/deleteEmployee']}
          name="Flávio Adriel"
          branch="Ricardo Eletro"
          key={285}
        />
        <CardEmployee
          id={258}
          link={[`/editEmployee/${258}`, '/deleteEmployee']}
          name="Flávio Adriel"
          branch="Ricardo Eletro"
          key={285}
        />
      </Content>
    </Container>
  );
};

export default ListEmploye;
