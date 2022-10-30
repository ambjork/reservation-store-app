import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '../../../context/AppContext';
import Cart from '../Cart';

const MockCart = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    </AppContextProvider>
  );
};

describe('Cart', () => {
  it('Renders without crashing', () => {
    render(<MockCart />);
  });
});
