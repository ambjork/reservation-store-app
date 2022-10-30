import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '../../../context/AppContext';
import CartCard from '../CartCard';

const mockCartItem = {
  id: '1',
  imageUrl: 'apple-img',
  name: 'apples',
  price: 5.46,
  inStock: 10,
  amount: 1,
};

const MockCartCard = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <CartCard {...mockCartItem} />
      </BrowserRouter>
    </AppContextProvider>
  );
};

describe('CartCard', () => {
  it('Renders without crashing', () => {
    render(<MockCartCard />);
  });

  it('Renders a cart card if there is an item in the cart', () => {
    render(<MockCartCard />);

    const cartCardElement = screen.getByTestId('cart-item-card');

    expect(cartCardElement).toBeInTheDocument();
  });
});
