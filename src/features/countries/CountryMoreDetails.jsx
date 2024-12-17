import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { GetCountries } from "./getCountries";
import Spinner from "../../ui/Spinner";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Container = styled.div`
  padding: 4em 7em;
  display: flex;
  flex-direction: column;
  gap: 7em;
  flex-grow: 1;

  .flag-img {
    min-width: 300px;
    max-width: 500px;
    box-shadow: 0px 4px 14px 0px #1616162e;
  }
`;

const StyledButton = styled.button`
  all: unset;
  padding: 1rem 3rem;
  max-width: 60px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: var(--elements);
  color: var(--text);
  gap: 1rem;
  font-size: 1.4rem;
  box-shadow: 0px 4px 14px 0px #1616162e;
  cursor: pointer;
`;

const CountryContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 6%;
  .country-wrapper {
    padding: 2rem;
  }
`;

const CountryWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;

  min-height: 380px;
  color: var(--text);
  .country-name {
    font-size: 3rem;
  }

  .country-details-wrapper {
    padding: 3rem 0;
    margin-bottom: auto;
    display: flex;
    justify-content: space-between;
    max-width: 550px;

    p {
      font-size: 1.6rem;
      font-weight: var(--medium);
      span {
        font-weight: var(--thin);
      }
    }
  }
  .country-borders {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    font-size: 1.6rem;
    font-weight: var(--medium);
    .buttons-wrapper {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
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
    }
  }
`;

function CountryMoreDetails() {
  const { country: quiredCountry } = useParams();
  const { data, isLoading } = GetCountries();

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  if (isLoading) return <Spinner />;

  const countryData = data.filter((country) => {
    return country.name.common.toLowerCase() === quiredCountry;
  });

  const countryCode = countryData[0]?.cca2.toLowerCase();

  const countryName = countryData[0].name.common;

  const population = countryData[0].population;

  const region = countryData[0].region;

  const subRegion = countryData[0].subregion;

  const capital = countryData[0].capital[0];

  const topLevelDomain = countryData[0].tld[0];

  const currencies = countryData[0].currencies; // need loop

  const languages = countryData[0].languages; // need loop

  const borders = countryData[0].borders; // need loop

  function findCountries() {
    if (borders.length === 0) return;
    const ans = [];
    for (let i = 0; i < borders.length; i++) {
      const curr = borders[i];
      data.map((ctry) => {
        ctry.cca3 === curr ? ans.push(ctry.name.common) : "";
      });
    }
    return ans;
  }

  const borderCountries = findCountries();

  const countryLanguages = Object.values(languages).map((lang) => {
    return lang;
  });

  const countryCurrencies = Object.values(currencies).map((curr) => {
    return curr.name;
  });

  function goToCountry(country) {
    navigate(`/countries/${country.toLowerCase()}`);
  }

  return (
    <Layout>
      <Container>
        <StyledButton onClick={handleGoBack}>
          <FaArrowLeftLong />
          Back
        </StyledButton>

        <CountryContainer>
          <div className="flag-img">
            <img
              src={`https://flagcdn.com/${countryCode}.svg`}
              alt={`The flag of ${quiredCountry}`}
            />
          </div>

          <CountryWrapper>
            <h1 className="country-name">{countryName}</h1>
            <div className="country-details-wrapper">
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
            </div>
            <div className="country-borders">
              <span>Border Countries:</span>
              <div className="buttons-wrapper">
                {borderCountries.map((border) => (
                  <button
                    onClick={() => goToCountry(border)}
                    key={border}
                    type="button"
                  >
                    {border}
                  </button>
                ))}
              </div>
            </div>
          </CountryWrapper>
        </CountryContainer>
      </Container>
    </Layout>
  );
}

export default CountryMoreDetails;
