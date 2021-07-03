import React from 'react';
import "../assets/css/Panel1.css"
import { Select } from '@material-ui/core';

const Panel1 = ({ message = {}, selected, image, onChange = () => {}}) => (
  <div className="panel">
    <Select className="select" value={selected} onChange={onChange} native>
      <option>Selecciona una Raza</option>
      {
        Object.keys(message).map(can => (
            <option key={can}>{can}</option>
        ))
      }
    </Select> <br/> <br/>
    <div>
      <img src={image} alt="raza"/>
    </div>
  </div>
)

export default Panel1;
