/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useState } from 'react';

import { FiSearch, FiEdit, FiDelete } from 'react-icons/fi';
import { ListBranchesDTO } from '../../interfaces/branches';
import api from '../../services/api';

import Button from '../ButtonActions';

import { Container, Buttons, BranchText } from './styles';

interface ICardBranchProps {
  id: string;
  name: string;
  number: Number;
  link: string[];
}

const CardBranch: React.FC<ICardBranchProps> = ({ id, name, number, link }) => {
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
        <span>Total de funcionários</span>
        <span>{number}</span>
      </BranchText>
      <Buttons>
        <Button icon={FiSearch} to={link[0]} />
        <Button icon={FiEdit} to={link[1]} />
        <Button icon={FiDelete} to={link[2]} />
      </Buttons>
    </Container>
  );
};

export default CardBranch;
