import React from 'react';
import { StyledBody, ProductList, ProductItem, ProductImage, ProductDescription } from '../components/styledBody';
import CounterList from './CounterList';

import breadImage from '../components/assets/roti tawar.png';
import sweetBreadImage from '../components/assets/Roti Manis.png';
import wholeWheatBreadImage from '../components/assets/Roti Whole Wheat.png';
import cheeseBreadImage from '../components/assets/roti keju.png';
import chocolateBreadImage from '../components/assets/Roti Coklat.png';
import garlicBreadImage from '../components/assets/Roti Bawang.png';

const Body = ({ clickCount, handleClick }) => {
  const splitDescription = (description) => {
    const words = description.split(' ');
    const chunks = [];
    while (words.length) {
      chunks.push(words.splice(0, 3).join(' '));
    }
    return chunks;
  };

  return (
    <StyledBody>
      <h2>Produk Kami</h2>
      <ProductList>
        <ProductItem>
          <ProductImage src={breadImage} alt="Roti Tawar" />
          <ProductDescription>
            <h3>Roti Tawar</h3>
            {splitDescription('Roti yang terbuat dari gandum menghasilkan tekstur yang lembut').map((chunk, index) => (
              <p key={index}>{chunk}</p>
            ))}
            <CounterList handleClick={handleClick} />
          </ProductDescription>
        </ProductItem>
        <ProductItem>
          <ProductImage src={sweetBreadImage} alt="Roti Manis" />
          <ProductDescription>
            <h3>Roti Manis</h3>
            {splitDescription('Roti yang memiliki rasa manis dan lembut').map((chunk, index) => (
              <p key={index}>{chunk}</p>
            ))}
            <CounterList handleClick={handleClick} />
          </ProductDescription>
        </ProductItem>
        <ProductItem>
          <ProductImage src={wholeWheatBreadImage} alt="Roti Whole Wheat" />
          <ProductDescription>
            <h3>Roti Whole Wheat</h3>
            {splitDescription('Roti yang terbuat dari gandum menghasilkan tekstur yang lembut').map((chunk, index) => (
              <p key={index}>{chunk}</p>
            ))}
            <CounterList handleClick={handleClick} />
          </ProductDescription>
        </ProductItem>
        <ProductItem>
          <ProductImage src={cheeseBreadImage} alt="Roti Keju" />
          <ProductDescription>
            <h3>Roti Keju</h3>
            {splitDescription('Roti yang terbuat dari gandum menghasilkan tekstur yang lembut').map((chunk, index) => (
              <p key={index}>{chunk}</p>
            ))}
            <CounterList handleClick={handleClick} />
          </ProductDescription>
        </ProductItem>
        <ProductItem>
          <ProductImage src={chocolateBreadImage} alt="Roti Coklat" />
          <ProductDescription>
            <h3>Roti Coklat</h3>
            {splitDescription('Roti yang terbuat dari gandum menghasilkan tekstur yang lembut').map((chunk, index) => (
              <p key={index}>{chunk}</p>
            ))}
            <CounterList handleClick={handleClick} />
          </ProductDescription>
        </ProductItem>
        <ProductItem>
          <ProductImage src={garlicBreadImage} alt="Roti Bawang" />
          <ProductDescription>
            <h3>Roti Bawang</h3>
            {splitDescription('Roti yang terbuat dari gandum menghasilkan tekstur yang lembut').map((chunk, index) => (
              <p key={index}>{chunk}</p>
            ))}
            <CounterList handleClick={handleClick} />
          </ProductDescription>
        </ProductItem>
      </ProductList>
      <p>Jumlah Klik: {clickCount}</p>
    </StyledBody>
  );
};

export default Body;
