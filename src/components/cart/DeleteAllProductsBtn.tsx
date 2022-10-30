import { useContext } from 'react';
import styled from 'styled-components';
import { getLocalCart } from '../../utils/helpers';
import { AppContext } from '../../context/AppContext';
import { CartItem } from '../../interfaces/interfaces';
import { ProductItem } from '../../interfaces/interfaces';
import { numbersOnly } from '../../utils/helpers';

interface Props {
  id: string;
}

function DeleteAllProductsBtn({ id }: Props) {
  const { dispatch } = useContext(AppContext);

  let cartlocalState = getLocalCart();
  let productLocalState = JSON.parse(localStorage.getItem('products')!);

  const deleteProductHandler = () => {
    const deleteCartItemById = cartlocalState.filter((item: CartItem) => item.id !== id);

    const cartItemAmountById = cartlocalState.map((item: CartItem) => {
      if (item.id === id) {
        return item.amount;
      }
    });

    let numberedAmountFromCart = cartItemAmountById.filter(numbersOnly);

    const resetStockNumber = Number(numberedAmountFromCart);

    const resetStock = productLocalState.map((item: ProductItem) => {
      if (item.id === id) {
        return {
          ...item,
          inStock: item.inStock + resetStockNumber,
        };
      }
      return item;
    });

    localStorage.setItem('products', JSON.stringify(resetStock));

    dispatch({
      type: 'SET_PRODUCTS',
      payload: resetStock,
    });

    localStorage.setItem('cart', JSON.stringify(deleteCartItemById));

    dispatch({
      type: 'SET_CART_AMOUNT',
      payload: deleteCartItemById,
    });
  };

  return <DeleteAllProductsBtnWrapper onClick={deleteProductHandler}>X</DeleteAllProductsBtnWrapper>;
}

const DeleteAllProductsBtnWrapper = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 1.5rem;
  color: #ccc;

  &:hover {
    color: red;
  }
`;

export default DeleteAllProductsBtn;
