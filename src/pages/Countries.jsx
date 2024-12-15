import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";
import CountriesMain from "../features/countries/CountriesMain";

const FilterValues = [
  { value: "all", label: "All" },
  { value: "africa", label: "Africa" },
  { value: "america", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const InputWithIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  gap: 1rem;
  border-radius: 5px;
  color: var(--text);
  width: fit-content;
  background-color: var(--elements);
  box-shadow: 0px 4px 14px 0px #1616162e;
  .icon {
    font-size: 20px;
    color: var(--text);
  }
  @media only screen and (max-width: 520px) {
    width: auto;
    flex-grow: 1;
  }
`;
const StyledInput = styled.input`
  background-color: transparent;
  color: var(--text);
  border: none;
  outline: none;
  padding: 1rem;
  width: 15rem;
  transition: width 0.3s;
  &:focus-within {
    width: 20rem;
    transition: width 0.3s;
  }
  &::placeholder {
    font-family: inherit;
    color: var(--text);
  }
  @media only screen and (max-width: 520px) {
    width: 100%;
    &:focus-within {
      width: 100%;
    }
  }
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0 2rem;
`;

const CustomDropdown = styled.div`
  position: relative;
  background-color: var(--elements);
  border-radius: 5px;
  font-size: 14px;
  box-shadow: 0px 4px 14px 0px #1616162e;

  .dropdown-btn {
    padding: 1rem 2.5rem;
    font-size: 15px;
    background-color: transparent;
    border: 0;
    outline: 0;
    color: var(--text);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;
    span {
      padding-top: 4px;
    }
  }

  ul {
    position: absolute;
    top: 45px;
    background-color: var(--elements);
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    padding: 1rem 0;
    box-shadow: 0px 4px 14px 0px #1616162e;

    border-radius: 5px;

    li {
      padding: 0.4rem 2rem;
      cursor: pointer;
      color: var(--text);
      transition: all 0.2s;
      &:hover {
        background-color: var(--inputs);
        color: var(--elements);
        transition: all 0.2s;
      }

      &.active {
        background-color: var(--inputs);
        color: var(--elements);
      }
    }
  }
`;

export default function Countries() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get("region") || FilterValues.at(0).value;
  const currentQuery = searchParams.get("query") || "false";

  function handleSetFilterValue(e) {
    searchParams.set("region", e.target.getAttribute("filter-value"));
    setSearchParams(searchParams);
    setIsOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchParams.set("query", e.target.value);
    setSearchParams(searchParams);
  }

  function handleOpenMenu(e) {
    e.preventDefault();
    setIsOpen((show) => !show);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
    }
  }
  const ref = useRef();
  const refBtn = useRef();
  useEffect(function () {
    function handleClickOutside(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        !refBtn.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <StyledForm onSubmit={(e) => e.preventDefault()} onChange={handleSubmit}>
        <InputWithIcon>
          <IoSearchOutline className="icon" />
          <StyledInput
            defaultValue={currentQuery === "false" ? null : currentQuery}
            type="text"
            placeholder="Search for a country..."
            onKeyDown={handleKeyDown}
          />
        </InputWithIcon>

        <CustomDropdown>
          <button
            ref={refBtn}
            onClick={handleOpenMenu}
            className="dropdown-btn"
          >
            {currentFilter === "all" ? "Filter by region" : currentFilter}
            {!isOpen ? (
              <span>
                <IoIosArrowDown />
              </span>
            ) : (
              <span>
                <IoIosArrowUp />
              </span>
            )}
          </button>
          {isOpen && (
            <ul ref={ref}>
              {FilterValues.map((option) => (
                <li
                  key={option.value}
                  // eslint-disable-next-line react/no-unknown-property
                  filter-value={option.value}
                  className={`${
                    currentFilter === option.value ? "active" : ""
                  }`}
                  onClick={handleSetFilterValue}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </CustomDropdown>
      </StyledForm>

      <CountriesMain />
    </>
  );
}
