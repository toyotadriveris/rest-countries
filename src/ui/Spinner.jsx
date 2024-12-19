import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
  place-content: center;
`;
function Spinner() {
  return (
    <Container>
      <span className="loader"></span>
    </Container>
  );
}

export default Spinner;
