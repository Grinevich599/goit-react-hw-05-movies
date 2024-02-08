import styled from '@emotion/styled';

export const StyledFormInput = styled.input`
display: inline-block;
width: 100%;
height: 40px;
font-family: 'Oxygen', sans-serif;
font-size: 18px;
border: 2px solid #ded9ff;
border-radius: 8px;
outline: none;
padding-left: 4px;
padding-right: 4px;
transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledFormButton = styled.button`
  padding: 10px 15px;
  background-color: #909214;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  :hover {
    box-shadow: 0 0 10px rgba(205, 92, 92, 0.8);
  }

  &.active {
    border-radius: 5px;
  }
`;

export const StyledFormDiv = styled.div`
  display: flex;
  margin-top: 20px;
`;
