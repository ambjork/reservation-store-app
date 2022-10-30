import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '../../../context/AppContext';
import IncrementOrDecrementBtn from '../IncrementOrDecrementBtn';

const MockIncrementOrDecrementBtn = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <IncrementOrDecrementBtn id={'1'} amount={2} inStock={9} option={'increase'} />
      </BrowserRouter>
    </AppContextProvider>
  );
};

describe('IncrementOrDecrementBtn', () => {
  it('Renders without crashing', () => {
    render(<MockIncrementOrDecrementBtn />);
  });

  it('Renders a btn with the text content (+) if the option parameter is (increase)', () => {
    render(<MockIncrementOrDecrementBtn />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveTextContent('+');
  });

  it('Renders a btn with the text content (-) if the option parameter is (decrease)', () => {
    render(
      <AppContextProvider>
        <BrowserRouter>
          <IncrementOrDecrementBtn id={'1'} amount={2} inStock={9} option={'decrease'} />
        </BrowserRouter>
      </AppContextProvider>
    );

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveTextContent('-');
  });
});
