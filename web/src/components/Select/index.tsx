import React, {SelectHTMLAttributes, Component} from "react";
import ReactSelect from 'react-select';
import './style.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  onChange: any;
  options: Array<{
    value: string;
    label: string;
  }>
}

const Select: React.FC<SelectProps> = ({label, name, options, onChange, ...rest }) => {

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#EBEBF5' : 'var(--color-input-background)',
      fontWeight: state.isSelected ? 'bold' : '100',
      padding: 12,
      color: 'var(--color-text-base)',
      borderLeft: state.isSelected ? '2px solid var(--color-primary-darker)' : 'none',
    }),
    control: () => ({
      width: '100%',
      height: '5.6rem',
      marginTop: '0.8rem',
      borderRadius: '0.8rem',
      paddingLeft: '0.8rem',
      backgroundColor: 'var(--color-input-background)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid var(--color-line-in-white)',
    }),
    
    dropdownIndicator: (base: any) => ({
      ...base,
      color: "black"
    }),
  }
  
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <ReactSelect styles={customStyles} options={options} onChange={onChange} placeholder="Selecione..." />
      {/* <select value="" id={name} {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>
        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })}
      </select> */}
    </div>
  );
}

export default Select;
