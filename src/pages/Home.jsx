import styled from "styled-components";
import Countries from "./Countries";

const StyledSection = styled.section`
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
`;

function Home() {
  return (
    <StyledSection>
      <Countries />
    </StyledSection>
  );
}

export default Home;
