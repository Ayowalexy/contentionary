import React, { useState, CSSProperties } from "react";
import Select, { StylesConfig } from "react-select";
import { useMediaQuery } from "@mui/material";


type MyOptionType = {
  label: string;
  value: string;
};

const SimpleSelect = () => {
  const matches = useMediaQuery("(min-width:600px)");

  const options = [
    { value: "General Inquiry", label: "General Inquiry" },
    { value: "Portugal Residency", label: "Portugal Residency" },
  ];

  const customControlStyles: CSSProperties = {
    borderColor: "pink",
    width: matches ? '430px' : "325px",
    height: "55px",
    borderRadius: "10px",
    border: "1px solid #d9dce0",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    color: "#676767",
    backgroundColor: "#FAFAFC",
  };

  type IsMulti = false;

  const selectStyle: StylesConfig<MyOptionType, IsMulti> = {
    control: (provided, state) => {
      return {
        ...provided,
        ...customControlStyles,
      };
    },
  };

  return (
    <Select
      options={options}
      styles={selectStyle}
      onChange={(values) => console.log(values)}
    />
  );
};

export default SimpleSelect;
