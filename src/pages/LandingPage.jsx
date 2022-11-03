import styled from "styled-components";
import Header from "../components/Header";
import Hero from "../components/Hero";

const ContainerStyles = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

let LandingPage = () => {
  return (
    <ContainerStyles>
      <Header />
      <Hero />
    </ContainerStyles>
  )
}

export default LandingPage;