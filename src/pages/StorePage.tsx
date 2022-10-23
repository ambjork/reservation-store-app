import styled from 'styled-components';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

// Component
import Store from '../components/store/Store';

function StorePage() {
  const { state } = useContext(AppContext);

  return (
    <StorePageWrapper>
      <Store />
    </StorePageWrapper>
  );
}

const StorePageWrapper = styled.div`
  min-height: 80vh;
  min-width: 100%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
  margin-bottom: 2rem;

  input {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.8rem 1.5rem;
    border: 0;
    background-color: #f0e9e9;
    border-radius: 0.5rem;
    width: 16rem;
  }
`;

export default StorePage;
