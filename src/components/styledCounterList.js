import styled from 'styled-components';

export const StyledCounterList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
`;

export const CounterNumber = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const CounterButton = styled.button`
  padding: 8px 12px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: grey;
  }
`;
