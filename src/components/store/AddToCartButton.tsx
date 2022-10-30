import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { CartItem } from '../../interfaces/interfaces';
import { ProductItem } from '../../interfaces/interfaces';
import styled from 'styled-components';

interface Props {
  id: string;
  inStock: number;
  setToogle: (active: boolean) => void;
}

function AddToCartBtn({ id, inStock, setToogle }: Props) {
  const { state, dispatch } = useContext(AppContext);

  const isInCart = () => {
    if (state && state.cart.find((item: CartItem) => item.id === id)) {
      return true;
    }
    return false;
  };

  const addToCartHandler = () => {
    let productArray = state && state?.initialProducts;
    let cartArry = state && state?.cart;
    const addProduct = productArray.find((item: ProductItem) => item.id === id)!;

    const cartItem: CartItem = { ...addProduct, amount: 1, inStock: inStock - 1 };

    localStorage.setItem('cart', JSON.stringify(cartArry));

    productArray.map((item: ProductItem) => {
      if (item.id === id) {
        return {
          ...item,
          inStock: item.inStock--,
        };
      }
      return item;
    });

    localStorage.setItem('products', JSON.stringify(productArray));

    dispatch({
      type: 'SET_CART',
      payload: cartItem,
    });

    dispatch({
      type: 'SET_PRODUCTS',
      payload: productArray,
    });

    setToogle(false);
  };
  return (
    <AddToCartBtnWrapper onClick={addToCartHandler} disabled={isInCart()}>
      {isInCart() ? 'Tillagd' : 'Lägg i korgen'}
    </AddToCartBtnWrapper>
  );
}

const AddToCartBtnWrapper = styled.button`
  border: none;
  outline: 0;
  padding: 10px;
  color: white;
  background-color: #2e3640;
  text-align: center;
  cursor: pointer;
  width: 50%;
  font-size: 14px;
  border-radius: 10px;

  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export default AddToCartBtn;
