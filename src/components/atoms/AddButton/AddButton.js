import styled from 'styled-components';

const AddButton = styled.button`
  width: 250px;
  height: 75px;
  font-size: 2.6rem;
  font-weight: 300;
  border-radius: 50px;
  color: ${({ theme }) => theme.lightGray};
  border: none;
  background: linear-gradient(90deg, hsl(346, 100%, 63%) 0%, hsl(9, 100%, 58%) 100%);
  box-shadow: 0px 0px 10px rgba(230, 230, 230, 0.3);
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 15px rgba(230, 230, 230, 0.4);
  }
`;

export default AddButton;
