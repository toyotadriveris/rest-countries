import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledCountry = styled.div`
  background-color: var(--elements);
  padding-bottom: 2rem;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 4px 14px 0px #1616162e;

  .flagContainer {
    width: 100%;
    height: 180px;
    overflow: hidden;
    img {
      max-width: auto !important;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .country-details {
    padding: 1rem 2rem;
    cursor: pointer;
    color: var(--text);
    h1 {
      font-size: 2rem;
      padding: 1rem 0;
    }
    p {
      padding: 0.2rem 0;
      font-size: 1.15rem;
      font-weight: var(--medium);
      opacity: 0.9;
      span {
        font-weight: normal;
        opacity: 0.75;
      }
    }
  }
`;

function Country({ code = "🏳", countryName, population, region, capital }) {
  const countryCode = code.toLowerCase() || "🏳";

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/countries/${countryName.toLowerCase()}`);
  }

  return (
    <StyledCountry>
      <div className="flagContainer">
        <img
          src={`https://flagcdn.com/${countryCode}.svg`}
          alt={`The flag of ${countryName}`}
        />
      </div>

      <div onClick={handleClick} className="country-details" role="button">
        <h1>{countryName}</h1>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </StyledCountry>
  );
}

export default Country;
