import React from 'react';
import styled from 'styled-components';
import deleteIcon from '../../../assets/icons/delete.svg';

const StyledIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-in-out;
`;

const StyledButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  width: 40px;
  height: 40px;
  background: linear-gradient(90deg, hsl(346, 100%, 63%) 0%, hsl(9, 100%, 58%) 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  z-index: 2;

  &:hover ${StyledIcon} {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

const DeleteButton = ({ className, handleDelete }) => (
  <StyledButton onClick={handleDelete} className={className}>
    <StyledIcon src={deleteIcon} alt="" />
  </StyledButton>
);

export default DeleteButton;
