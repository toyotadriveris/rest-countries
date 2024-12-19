import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

function BackButton() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }
  return (
    <StyledButton onClick={handleGoBack}>
      <FaArrowLeftLong />
      Back
    </StyledButton>
  );
}

export default BackButton;
