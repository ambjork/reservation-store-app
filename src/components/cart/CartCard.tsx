import { CartItem } from '../../interfaces/interfaces';
import styled from 'styled-components';
import DeleteAllProductsBtn from './DeleteAllProductsBtn';
import IncrementOrDecrementBtn from './IncrementOrDecrementBtn';
import useWindowSize from '../../hooks/useWindowSize';

function CartCard({ id, imageUrl, name, price, inStock, amount }: CartItem) {
  const windowSize = useWindowSize();

  return (
    <CartItemWrapper>
      <div className='cart-item-container' data-testid={'cart-item-card'}>
        <div className='img-container'>
          {windowSize.width <= 750 ? <DeleteAllProductsBtn id={id} /> : null}
          <img src={imageUrl} alt='product' />
        </div>
        <div className='name-container'>
          <h1>{name.toUpperCase()}</h1>
          {/* <p>{inStock}kg in stock</p> */}
          <div className='counter-container'>
            <IncrementOrDecrementBtn id={id} amount={amount} inStock={inStock} option={'decrease'} />
            <p>{amount}</p>
            <IncrementOrDecrementBtn id={id} amount={amount} inStock={inStock} option={'increase'} />
          </div>
        </div>
        <div className='price-container'>
          {windowSize.width >= 750 ? <DeleteAllProductsBtn id={id} /> : null}
          <h1>{price} kr /st</h1>
        </div>
      </div>
      <hr className='solid' />
    </CartItemWrapper>
  );
}

const CartItemWrapper = styled.div`
  overflow: hidden;
  hr.solid {
    width: auto;
    border: 1px solid #ccc;
  }

  .cart-item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 600px;
    padding: 1rem;
    margin: 0.5rem;

    @media screen and (max-width: 750px) {
      flex-direction: column;
      width: 250px;
      .img-container {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
      }
      .name-container {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
    }

    h1 {
      font-size: 1.2rem;
    }

    h1,
    p {
      padding-bottom: 0.2rem;
    }

    .name-container {
      width: 180px;
    }

    .counter-container {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 180px;
    }

    .price-container {
      min-height: 100px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-direction: column;
    }

    img {
      width: 100px;
    }
  }
`;

export default CartCard;
