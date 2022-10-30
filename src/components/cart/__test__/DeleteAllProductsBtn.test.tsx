import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '../../../context/AppContext';
import DeleteAllProductsBtn from '../DeleteAllProductsBtn';

const MockDeleteAllProductsBtn = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <DeleteAllProductsBtn id={'1'} />
      </BrowserRouter>
    </AppContextProvider>
  );
};

describe('DeleteAllProductsBtn', () => {
  it('Renders without crashing', () => {
    render(<MockDeleteAllProductsBtn />);
  });

  it('Renders a button with the text content (X)', () => {
    render(<MockDeleteAllProductsBtn />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveTextContent('X');
  });
});
