// eslint-disable-next-line



import React from 'react';
import styled from 'styled-components';
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"


function Header() {
  return (
    <Container>
      <a href='#'>
        <img  src='/images/logo.svg' alt="" />
      </a>

     <Menu>
      <a href='#'>MOdel S</a>
      <a href='#'>MOdel 3</a>
      <a href='#'>MOdel X</a>
      <a href='#'>MOdel Y</a>
     </Menu>

     <RightMenu>
       <a href="#">Shop</a>
       <a href="#">Tesla Account</a>

     <CustomMenu />

     </RightMenu>

     <BurgerNav>
      <CloseWrapper>
      <CustomClose />
      </CloseWrapper>
      <li><a href='#'>Existing Inventory</a></li>
      <li><a href='#'>Used Inventory</a></li>
      <li><a href='#'>Trade-IN</a></li>
      <li><a href='#'>Cyber-Trucks</a></li>
      <li><a href='#'>Roadaster</a></li>
      <li><a href='#'>Existing Inventory</a></li>
     </BurgerNav>


    </Container>
  )
}



const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;

`
const Menu =styled.div`
  display: flex;
  align-items: center;
  flex:1;
  justify-content:center;
  

  a{
    font-weight:600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media(max-width: 768px){
    display: none;
  }
`

const RightMenu = styled.div`
  display:flex;
  align-items: center;

a{
  font-weight:600;
  text-transform: uppercase;
  padding: 0 10px;

}
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
position: fixed;
  top:0;
  bottom:0;
  right:0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display:flex;
  flex-direction: column;
  text-align: start;
  li{
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0,0,0,2);
  }

  a{
    font-weight: 600;
  }

`

const CustomClose = styled(CloseIcon)`

`

export default Header;