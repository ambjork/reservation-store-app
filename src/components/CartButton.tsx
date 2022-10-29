import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FiShoppingCart } from 'react-icons/fi';
import { CartItem } from '../interfaces/interfaces';

function CartButton() {
    const { state } = useContext(AppContext);

    const totalAmount = state?.cart.reduce((total: number, item: CartItem) => {
        return total + item.amount;
      }, 0);

    return (
        <button className='cart-btn'>
              <FiShoppingCart /> <p>{totalAmount >= 1 ? totalAmount : null}</p>
            </button>
    )
}

export default CartButton