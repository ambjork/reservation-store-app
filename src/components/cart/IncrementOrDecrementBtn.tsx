import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { getLocalCart } from '../../utils/helpers';
import { CartItem } from '../../interfaces/interfaces';
import { ProductItem } from '../../interfaces/interfaces';
import styled from 'styled-components';

interface Props {
  id: string;
  amount: number;
  inStock: number;
  option: string;
}

function IncrementOrDecrementBtn({ id, amount, inStock, option }: Props) {
  const { dispatch } = useContext(AppContext);

  let localStorageCart = getLocalCart();
  let localStorageProducts = JSON.parse(localStorage.getItem('products')!);

  const buttonHandler = () => {
    if (option === 'increase' && inStock === 0) {
      return;
    }

    if (option === 'decrease' && amount <= 1) {
      const newCart = localStorageCart.filter((item: CartItem) => item.id !== id);

      localStorage.setItem('cart', JSON.stringify(newCart));

      dispatch({
        type: 'SET_CART_AMOUNT',
        payload: newCart,
      });

      localStorageProducts.map((item: ProductItem) => {
        if (item.id === id) {
          return {
            ...item,

            inStock: item.inStock++,
          };
        }
        return item;
      });

      localStorage.setItem('products', JSON.stringify(localStorageProducts));

      dispatch({
        type: 'SET_PRODUCTS',
        payload: localStorageProducts,
      });

      return;
    }

    localStorageCart.map((item: CartItem) => {
      if (item.id === id) {
        if (option === 'increase') {
          return {
            ...item,
            amount: item.amount++,
            inStock: item.inStock--,
          };
        }
        if (option === 'decrease') {
          return {
            ...item,
            amount: item.amount--,
            inStock: item.inStock++,
          };
        }
      }
      return item;
    });

    localStorageProducts.map((item: ProductItem) => {
      if (item.id === id) {
        if (option === 'increase') {
          return {
            ...item,
            inStock: item.inStock--,
          };
        }
        if (option === 'decrease') {
          return {
            ...item,
            inStock: item.inStock++,
          };
        }
      }
      return item;
    });

    localStorage.setItem('cart', JSON.stringify(localStorageCart));
    localStorage.setItem('products', JSON.stringify(localStorageProducts));

    dispatch({
      type: 'SET_CART_AMOUNT',
      payload: localStorageCart,
    });

    dispatch({
      type: 'SET_PRODUCTS',
      payload: localStorageProducts,
    });
  };

  return (
    <IncrementOrDecrementBtnWrapper styleProp={option} onClick={buttonHandler}>
      {option === 'increase' ? '+' : '-'}
    </IncrementOrDecrementBtnWrapper>
  );
}

const IncrementOrDecrementBtnWrapper = styled.button<{ styleProp: string }>`
  all: unset;
  border: solid 2px #ccc;
  padding: 0.5rem 0.8rem;
  margin-top: 0.3rem;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: red;
  }

  ${(props) => {
    if (props.styleProp === 'increase')
      return `
           &:hover {color: green;}
        `;
  }}
`;

export default IncrementOrDecrementBtn;
