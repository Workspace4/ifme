// @flow
import React from 'react';
import shortid from 'shortid';

import css from './Dropdown.scss';

export interface Option {
  key?: string;
  label: string;
  value: any;
  selected?: boolean;
}

export interface Props {
  onChange?: (event: Event) => any;
  options: Option[];
  value?: any;
  id: string;
  name: string;
}

export const DropdownFactory = (variationClassName: string) => {
  const DropdownComponent = (props: Props) => {
    const { onChange, options, value: propValue, id, name } = props;
    return (
      <select
        id={id}
        name={name}
        className={`${css.dropdown} ${variationClassName}`}
        onChange={onChange}
        value={propValue}
      >
        {options.map(({ key, label, value, selected }: Option) => (
          <option
            key={key || shortid.generate()}
            value={value}
            selected={!!selected}
          >
            {label}
          </option>
        ))}
      </select>
    );
  };
  return DropdownComponent;
};