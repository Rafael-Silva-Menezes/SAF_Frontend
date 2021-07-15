/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { math } from 'polished';
import { ListBranchesDTO } from '../../../interfaces/branches';
import api from '../../../services/api';

import CardBranch from '../../../components/CardBranch';
import Button from '../../../components/Button';

import { Container, Content, ContainerButton } from './styles';

const ListBranch: React.FC = () => {
  const [branches, SetBranches] = useState<ListBranchesDTO[]>([]);

  useEffect(() => {
    api.get(`/branches/index`).then(response => {
      SetBranches(response.data);
    });
  }, []);

  return (
    <Container>
      <h1>Filiais cadastradas</h1>
      <ContainerButton>
        <Link to="/createBranch">
          <Button>Cadastrar filial</Button>
        </Link>
      </ContainerButton>
      <Content>
        {branches.map(branch => (
          <CardBranch
            id={`${branch.id.substring(0, 4)}  ${Math.floor(
              Math.random() * 65536,
            )}`}
            link={[
              `/listEmployees/${branch.id}`,
              `/editBranch/${branch.id}`,
              `/deleteBranch/${branch.id}`,
            ]}
            name={branch.name}
            number={Number(branch.total_staff)}
            key={branch.id}
          />
        ))}
      </Content>
    </Container>
  );
};

export default ListBranch;
