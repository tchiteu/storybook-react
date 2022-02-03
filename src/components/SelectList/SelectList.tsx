import React, { useEffect, useRef, useState } from 'react';
import './style.css';

interface SelectListProps {
  options: Array<any>;
  itemText: string;
  itemValue: string;
}

const SelectList: React.FC<SelectListProps> = (props) => {
  const selectInput = useRef<HTMLInputElement>(null);

  let text = props.itemText || 'text';
  let value = props.itemValue || 'id';

  let [active, setActive] = useState<Boolean>(false);
  let [selected, setSelected] = useState<any>(null);
  let [indexSelected, setIndexSelected] = useState<number>();

  const selectOption = (index: number): void => {
    if (indexSelected === index) {
      setSelected(null);
      setIndexSelected(undefined);
    } else {
      setSelected(props.options[index][value]);
      setIndexSelected(index);

      if (selectInput.current) {
        selectInput.current.value = props.options[index][text];
      }
    }

    setActive(false);
  }

  const listOptions = (
    <section className='h-options-list'>
      {props.options.map((option, index) => {
        let selectClass = '';

        if (index === indexSelected) {
          selectClass = 'selected';
        }

        return (
          <small
            className={`h-option ${selectClass}`}
            onMouseDown={() => {selectOption(index)}}
          >
            {option[text]}
          </small>
        )
      })}
    </section>
  )

  return (
    <div className='h-select-list-container'>
      <input
        type="text"
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        ref={selectInput}
      />

      {active && listOptions}
    </div>
  )
}

export default SelectList;