import React, { Fragment } from "react";

// Styling
import { DivStyle } from "./search-box.style";
import { InputStyle } from "./search-box.style";

const SearchBox = ({ onInputChange }) => {
  return (
    <Fragment>
      <form
        //autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <DivStyle>
          <InputStyle id="user" type="search" placeholder="Search user" name="user" onChange={onInputChange} />
        </DivStyle>
      </form>
    </Fragment>
  );
};

export default SearchBox;
