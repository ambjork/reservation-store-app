import { useContext, useState } from 'react';
import StoreCard from './StoreCard';
import { AppContext } from '../../context/AppContext';
import styled from 'styled-components';
import { ProductItem } from '../../interfaces/interfaces';

function Store() {
  const [query, setQuery] = useState('');
  const { state } = useContext(AppContext);
  const productState = state?.initialProducts && state.initialProducts;

  const inputHandler = (query: string, items: ProductItem[]) => {
    if (!query) {
      return productState;
    }

    return items.filter((item: ProductItem) => item.name.includes(query.toLowerCase()));
  };

  const filteredProducts = inputHandler(query, productState);

  return (
    <>
      <input className='input' onChange={(e) => setQuery(e.target.value)} type='text' placeholder='Sök produkt' />
      {filteredProducts.length === 0 ? <h1>Ingen produkt matchar med din sökning.</h1> : null}
      <StoreWrapper>
        {filteredProducts.map((products: ProductItem) => (
          <StoreCard key={products.id} {...products} />
        ))}
      </StoreWrapper>
    </>
  );
}

const StoreWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Store;
