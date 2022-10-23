import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

function Footer() {
  const { pathname } = useLocation();

  return <TestWrapper pathname={pathname}></TestWrapper>;
}

const TestWrapper = styled.div<{ pathname: string }>`
    height: 10vh;
    width: 100%;
    background-color: #363636;
    color: #ffffff;
    `;

export default Footer;