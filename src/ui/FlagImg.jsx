import styled from "styled-components";

const Flag = styled.div`
  min-width: 300px;
  max-width: 500px;

  img {
    object-fit: contain;
    box-shadow: 0px 4px 14px 0px #1616162e;
  }
  @media only screen and (max-width: 685px) {
    min-width: auto;
    max-width: auto;
  }
`;

function FlagImg({ countryCode, quiredCountry }) {
  return (
    <Flag>
      <img
        src={`https://flagcdn.com/${countryCode}.svg`}
        alt={`The flag of ${quiredCountry}`}
      />
    </Flag>
  );
}

export default FlagImg;
