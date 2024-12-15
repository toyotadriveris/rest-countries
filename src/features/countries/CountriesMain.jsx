import styled from "styled-components";
import { GetCountries } from "./getCountries";
import Country from "./Country";

const CountriesLayout = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 0 auto;
  gap: 10rem;
`;

function CountriesMain() {
  const { data, isLoading } = GetCountries();

  return (
    <CountriesLayout>
      {data?.map((country) => (
        <Country
          key={country.flag}
          code={country.cca2}
          countryName={country.name.official}
          region={country.region}
          population={country.population}
          capital={country.capital}
        />
      ))}
    </CountriesLayout>
  );
}

export default CountriesMain;
