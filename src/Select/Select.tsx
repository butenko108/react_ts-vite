import React from 'react';
import { Select as MaterialSelect } from '@mui/material';
import './select.css';

interface Props {
  className?: string;
  multiple?: boolean;
  displayEmpty?: boolean;
  value: never[];
  variant: string;
  // renderValue: ;
  // inputProps: ;
  // onChange: ;
  // MenuProps: ;
  // onClose: ;
  // onOpen: ;
  // open: ;
}

const Select = (props) => (
    <MaterialSelect
        displayEmpty={props.displayEmpty}
        multiple={props.multiple}
        value={props.value}
        variant={props.variant}
        renderValue={props.renderValue}
        inputProps={props.inputProps}
        onChange={props.changed}
        MenuProps={props.MenuProps}
        className={`select-form-control ${props.className}`}
        onClose={props.onClose}
        onOpen={props.onOpen}
        open={props.open}
    >
        {props.children}
    </MaterialSelect>
);

export default React.memo(Select);
