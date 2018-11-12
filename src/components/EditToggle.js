import React from 'react';

export default function EditToggle(props) {
  return (
    <select className="dropDownContainer ml0" onChange={(event) => {props.updateEditStatus(event.target.value)}}>
      <option value=""> Allow Edit </option>
      <option value="disabled"> Disable Edit </option>
    </select>
  )
}