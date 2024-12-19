import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GetCountries } from "./getCountries";
import Spinner from "../../ui/Spinner";
import CountryBorders from "./CountryBorders";
import CountryDetails from "./CountryDetails";
import BackButton from "../../ui/BackButton";
import FlagImg from "../../ui/FlagImg";

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
  @media only screen and (max-width: 685px) {
    padding: 4em 3em;
    gap: 4em;
  }
`;

const CountryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 6%;

  @media only screen and (max-width: 685px) {
    flex-direction: column;
  }
`;

const CountryWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  min-height: 380px;
  color: var(--text);

  @media only screen and (max-width: 1440px) {
    width: 50%;
  }
  @media only screen and (max-width: 685px) {
    width: 100%;
  }
`;

const CountryName = styled.h1`
  font-size: 3rem;
`;

function CountryMoreDetails() {
  const { country: quiredCountry } = useParams();
  const { data, isLoading } = GetCountries();

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

  return (
    <Layout>
      <Container>
        <BackButton />

        <CountryContainer>
          <FlagImg countryCode={countryCode} quiredCountry={quiredCountry} />

          <CountryWrapper>
            <CountryName>{countryName}</CountryName>
            <CountryDetails
              countryName={countryName}
              population={population}
              region={region}
              subRegion={subRegion}
              capital={capital}
              topLevelDomain={topLevelDomain}
              countryCurrencies={countryCurrencies}
              countryLanguages={countryLanguages}
            />
            <CountryBorders borderCountries={borderCountries} />
          </CountryWrapper>
        </CountryContainer>
      </Container>
    </Layout>
  );
}

export default CountryMoreDetails;
