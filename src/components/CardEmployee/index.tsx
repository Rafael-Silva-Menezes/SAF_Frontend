/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { FiEdit, FiDelete } from 'react-icons/fi';

import Button from '../ButtonActions';

import { Container, Buttons, BranchText } from './styles';

interface ICardEmployeeProps {
  id: Number;
  name: string;
  branch: string;
  link: string[];
}

const CardEmployee: React.FC<ICardEmployeeProps> = ({
  id,
  name,
  branch,
  link,
}) => {
  return (
    <Container>
      <BranchText>
        <span>ID</span>
        <span>{id}</span>
      </BranchText>
      <BranchText>
        <span>Nome</span>
        <span>{name}</span>
      </BranchText>
      <BranchText>
        <span>Nome da filial</span>
        <span>{branch}</span>
      </BranchText>
      <Buttons>
        <Button icon={FiEdit} to={link[0]} />
        <Button icon={FiDelete} to={link[1]} />
      </Buttons>
    </Container>
  );
};

export default CardEmployee;
