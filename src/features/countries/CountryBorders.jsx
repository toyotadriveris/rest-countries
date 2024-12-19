import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 1.2rem;
  align-items: center;
  font-size: 1.6rem;
  font-weight: var(--medium);
  @media only screen and (max-width: 973px) {
    flex-direction: column;
  }
`;

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  width: 100%;
  text-align: center;
  gap: 1rem;
  button {
    all: unset;
    padding: 0.5rem 2rem;
    background-color: var(--elements);
    border-radius: 5px;
    font-size: 1.4rem;
    box-shadow: 0px 4px 14px 0px #1616162e;
    cursor: pointer;
    user-select: none;
  }
`;

function CountryBorders({ borderCountries }) {
  const navigate = useNavigate();

  function goToCountry(country) {
    navigate(`/countries/${country.toLowerCase()}`);
  }

  return (
    <Container>
      <span>Border Countries:</span>
      {borderCountries ? (
        <ButtonsWrapper>
          {borderCountries.map((border) => (
            <button
              onClick={() => goToCountry(border)}
              key={border}
              type="button"
            >
              {border}
            </button>
          ))}
        </ButtonsWrapper>
      ) : (
        "Hmmm can't find any 🤔"
      )}
    </Container>
  );
}

export default CountryBorders;
