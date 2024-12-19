import styled from "styled-components";

const Container = styled.div`
  padding: 3rem 0;
  margin-bottom: auto;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  max-width: 550px;

  p {
    font-size: 1.6rem;
    font-weight: var(--medium);
    white-space: nowrap;
    span {
      font-weight: var(--thin);
    }
  }

  @media only screen and (max-width: 973px) {
    flex-direction: column;
  }
`;

function CountryDetails({
  countryName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  countryCurrencies,
  countryLanguages,
}) {
  return (
    <Container>
      <div className="country-geo-details">
        <p>
          Native Name: <span>{countryName}</span>
        </p>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Sub Region: <span>{subRegion}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
      <div className="country-other-info">
        <p>
          Top Level Domain: <span>{topLevelDomain}</span>
        </p>
        <p>
          Currencies: <span>{countryCurrencies.join(",")}</span>
        </p>
        <p>
          Languages: <span>{countryLanguages.join(",")}</span>
        </p>
      </div>
    </Container>
  );
}

export default CountryDetails;
