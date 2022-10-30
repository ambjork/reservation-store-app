import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../context/AppContext';
import CartCard from './CartCard';
import { getLocalCart } from '../../utils/helpers';
import { CartItem } from '../../interfaces/interfaces';

function Cart() {
  const { state } = useContext(AppContext);
  const cartState = state.cart && state?.cart;
  let localStorageCart = getLocalCart();

  const totalPrice = localStorageCart.reduce((total: number, item: CartItem) => {
    return total + item.price * item.amount;
  }, 0);

  return (
    <CartWrapper>
      {localStorageCart.length > 0 ? <h1>Varukorg</h1> : <h1>Du har ingenting i korgen just nu.</h1>}
      {cartState.map((item: CartItem) => (
        <CartCard key={item.id} {...item} />
      ))}
      {localStorageCart.length > 0 ? <h1>Totalt: {totalPrice.toFixed(2)} kr</h1> : null}
    </CartWrapper>
  );
}

const CartWrapper = styled.div`
  padding: 4rem;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 25px 40px #1687d933;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
  overflow-y: hidden;
  margin-top: 1rem;

  h1 {
    margin-top: 1rem;
  }
`;

export default Cart;
