/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

import CardBranch from '../../../components/CardBranch';

import { Container, Content, ContainerButton } from './styles';

const ListBranch: React.FC = () => {
  return (
    <Container>
      <h1>Filiais cadastradas</h1>
      <ContainerButton>
        <Link to="/createBranch">
          <Button>Cadastrar filial</Button>
        </Link>
      </ContainerButton>
      <Content>
        <CardBranch
          id={258}
          link={['/listEmployees', `/editBranch/${258}`, '/deleteBranch']}
          name="Ricardo Eletro"
          number={4523}
          key={285}
        />
        <CardBranch
          id={258}
          link={['/listEmployees', `/editBranch/${258}`, '/deleteBranch']}
          name="Ricardo Eletro"
          number={4523}
          key={285}
        />
        <CardBranch
          id={258}
          link={['/listEmployees', `/editBranch/${258}`, '/deleteBranch']}
          name="Ricardo Eletro"
          number={4523}
          key={285}
        />
        <CardBranch
          id={258}
          link={['/listEmployees', `/editBranch/${258}`, '/deleteBranch']}
          name="Ricardo Eletro"
          number={4523}
          key={285}
        />
        <CardBranch
          id={258}
          link={['/listEmployees', `/editBranch/${258}`, '/deleteBranch']}
          name="Ricardo Eletro"
          number={4523}
          key={285}
        />
        <CardBranch
          id={258}
          link={['/listEmployees', `/editBranch/${258}`, '/deleteBranch']}
          name="Ricardo Eletro"
          number={4523}
          key={285}
        />
      </Content>
    </Container>
  );
};

export default ListBranch;
