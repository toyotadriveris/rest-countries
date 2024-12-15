import { useQuery } from "@tanstack/react-query";

export function GetCountries() {
  const getCountriesReq = async () => {
    const res = await fetch(
      "https://restcountries.com/v3.1/independent?status=true&fields=name,topLevelDomain,capital,region,subregion,population,timezones,borders,nativeName,currencies,languages,flag,cca2"
    );
    return res.json();
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountriesReq,
  });

  return { isLoading, data, error };
}
