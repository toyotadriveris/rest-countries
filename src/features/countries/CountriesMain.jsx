import styled from "styled-components";
import { GetCountries } from "./useCountries";
import Country from "./Country";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";

const CountriesLayout = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 280px));
  place-content: center;
  margin: 0 auto;
  gap: 5rem;
`;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

function CountriesMain() {
  const { data, isLoading } = GetCountries();

  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("query") || "none";

  const filteredValue = searchParams.get("region") || "all";

  if (isLoading) return <Spinner />;

  const filteredCountries = data.filter((country) => {
    return filteredValue !== "all"
      ? country.region.toLowerCase() === filteredValue
      : data;
  });

  const searchedCountries = filteredCountries?.filter((country) => {
    return searchQuery !== "none"
      ? country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      : filteredCountries;
  });

  const countriesToShow =
    searchedCountries.length > 0 ? searchedCountries : "none";

  return (
    <CountriesLayout>
      {countriesToShow !== "none" &&
        countriesToShow?.map((country) => (
          <Country
            key={country.flag}
            code={country.cca2}
            countryName={country.name.common}
            region={country.region}
            population={country.population}
            capital={country.capital}
          />
        ))}
      {countriesToShow === "none" && <StyledH1>Are you sure? 🤔</StyledH1>}
    </CountriesLayout>
  );
}

export default CountriesMain;
