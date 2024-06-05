
import styled from 'styled-components';

export const StyledBody = styled.div`
  padding: 20px;
  text-align: center;
`;

export const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
`;

export const ProductItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.div`
  text-align: center;
`;

