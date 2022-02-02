import React, { useState } from 'react';
import './style.css';

interface SelectListProps {
  options: Array<SelectListOption>;
  itemText: keyof SelectListOption;
  itemValue: string;
}

const SelectList: React.FC<SelectListProps> = (props) => {
  let text = props.itemText || 'text';
  let value = props.itemValue || 'id';
  let [active, setActive] = useState<Boolean>(false);

  const listOptions = (
    <section className='h-options-list'>
      {props.options.map(option => (
        <div>{option[text]}</div>
      ))}
    </section>
  )

  return (
    <div className='h-select-list-container'>
      <input
        type="text"
        onFocus={() => setActive(true)}
        // onBlur={() => setActive(false)}
      />

      {active && listOptions}
    </div>
  )
}

export default SelectList;