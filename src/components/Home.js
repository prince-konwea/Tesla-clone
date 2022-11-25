import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section 
      title="Model X"
      description="Order Online For Touchless Delivery"
      backgroundImg="model-x.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      />
      <Section 
       title="Model S"
       description="Order Online For Touchless Delivery"
       backgroundImg="model-s.jpg"
       leftBtnText="Custom Order"
       rightBtnText="Existing Inventory"
      />
      <Section 
       title="Model Y"
       description="Order Online For Touchless Delivery"
       backgroundImg="model-y.jpg"
       leftBtnText="Custom Order"
       rightBtnText="Existing Inventory"
      />
      <Section 
       title="Model 3"
       description="Order Online For Touchless Delivery"
       backgroundImg="model-3.jpg"
       leftBtnText="Custom Order"
       rightBtnText="Existing Inventory"
      />
      <Section 
       title="Lowest Cost Solar Panels In America"
       description="Money Back Guarantee"
       backgroundImg="solar-panel.jpg"
       leftBtnText="order now"
       rightBtnText="learn more"
      />
      <Section 
       title="Solar For New Roofs"
       description="solar-roof cost less than a new roof"
       backgroundImg="solar-roof.jpg"
       leftBtnText="order now"
       rightBtnText="learn more"
      />
      <Section 
       title="Accessories"
       description=""
       backgroundImg="accessories.jpg"
       leftBtnText="order now"
      
      />
    </Container>
  )
}

const Container= styled.div`
  height:
`

export default Home;