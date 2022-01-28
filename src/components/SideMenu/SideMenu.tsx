import React from 'React';
import './style.css';

interface SideMenuProps {
  options: Array<Option>
}

const SideMenu: React.FC<SideMenuProps> = (props) => {
  return (
    <div className='h-side-menu'>
      {props.options.map(option => (
        <h3>{option.label}</h3>
      ))}
    </div>
  )
}

export default SideMenu;