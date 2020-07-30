import React from 'react';
import Guest from './guest.jsx';

const GuestList = (props) => {
  return (
    <div>
      <ul>
        {
          props.namelist.map( name => (
            <Guest name={name}/>
          )
          )
        }
      </ul>
    </div>
  )
}

export default GuestList;
