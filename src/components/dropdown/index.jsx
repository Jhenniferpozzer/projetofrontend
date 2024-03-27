import React, { useState, useEffect, useMemo } from "react";
import "./styles.css";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SelectDropdown = () => {
  const options = useMemo(
    () => [
      { value: "option1", label: "Analise e Desenvolvimento de sistemas" },
      { value: "option2", label: "Engenharia de software" },
      { value: "option3", label: "Ciencias contabeis" },
      { value: "option4", label: "Engenharia civil" },
    ],
    []
  );

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (selectedOptions.length === options.length) {
      setIsOpen(false);
    }
  }, [selectedOptions, options]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    const isOptionSelected = selectedOptions.includes(option.value);

    if (isOptionSelected) {
      setSelectedOptions(
        selectedOptions.filter((item) => item !== option.value)
      );
    } else {
      setSelectedOptions([...selectedOptions, option.value]);
    }
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  return (
    <section id="select-preference-dropdown">
      <div className="select-with-dropdown">
        <div className="selected-option" onClick={toggleDropdown}>
          {selectedOptions.length > 0
            ? selectedOptions.map((optionValue) => (
                <div
                  key={optionValue}
                  className="option"
                  onClick={() => handleRemoveOption(optionValue)}
                >
                  {options.find((item) => item.value === optionValue).label}{" "}
                  <span className="remove">x</span>
                </div>
              ))
            : " Cursos"}

          {/* {isOpen ? (
            <IoIosArrowUp className="button-close" />
          ) : (
            <IoIosArrowDown className="button-open" />
          )} */}
        </div>

        {isOpen && (
          <div className="dropdown-container">
            <div className="dropdown">
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`dropdown-option ${
                    selectedOptions.includes(option.value) ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SelectDropdown;
