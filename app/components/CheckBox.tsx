import { useState } from 'react';
import styles from './CheckBox.module.css'

interface CheckboxType {
    onChange: () =>void;
    size?: 'small' | 'medium' | 'large';
    label: string;
    checked: boolean;
}

export const Checkbox = ({size, label, checked, onChange}: CheckboxType) => {
  return (
    <label className={ styles[size] }>
      <input
        type='checkbox' 
        checked={checked}
        onChange={onChange}
      />
      <span className=''>{label}</span>
    </label>
  )
};
