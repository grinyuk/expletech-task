import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs(props => ({
    type: "text",
    size: props.small ? 5 : undefined
}))`
    height: 34px;
    width: 200px;
    border-radius: 3px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid #e5e5e5;
    padding: 0 32px 0 16px;

    &:focus {
        outline: none;
        border: 1px solid #0148d5;
    }
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

const FilterComponent = ({filterText, onFilter, onClear}) => {

    return (
        <div className="d-flex justify-content-end w-100">
            <div className="d-flex">
                <Input
                    id="search"
                    type="text"
                    placeholder="Search"
                    value={filterText}
                    onChange={onFilter}
                />
                <ClearButton onClick={onClear}>X</ClearButton>
            </div>
        </div>
    )
}

export {FilterComponent};