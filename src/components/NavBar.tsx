import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import Menu from './Menu';


function NavBar() {
    const { pathname } = useLocation();
  
    return (
      <NavBarWrapper pathname={pathname}>
        <div className='logo-container'>
          {/* <img className='logo' src={logo} alt='logo' /> */}
          <h1 className='header-text'>Weekend</h1>
        </div>
        <Menu />
      </NavBarWrapper>
    );
  }
  
  const NavBarWrapper = styled.nav<{ pathname: string; }>`
    min-height: 10vh;
    background-color: #363636;
    color: #ffffff;
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Aldrich', sans-serif;
    `;

export default NavBar