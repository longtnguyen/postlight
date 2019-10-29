import React, { useState, useEffect } from "react";
import { TextField, Button, Select, MenuItem} from '@material-ui/core';
import axios from 'axios';
import PaginatedTable from './shared/PaginatedTable';
const validField = ['firstName', 'lastName', 'gender', 'state', 'city', 'address', 'phone', 'email'];
export const Browse = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [field, setField] = useState('firstName');
  const [input, setInput ] = useState('');

  useEffect(() => {
    let cache;
    try{
      cache = JSON.parse(window.sessionStorage.getItem('cache'));
    } catch(e) {}

    if(cache) {
      setData(cache);
    } else {
      axios.get('https://rlyke4qgza.execute-api.us-east-1.amazonaws.com/dev/')
      .then((response) => {
        window.sessionStorage.setItem('cache', JSON.stringify(response.data));
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch((err)=> {
        console.log(err);
      })
    }
  }, []);

  const handleInputChange = e => {
    setInput(e.target.value);
  }
  const handleChange = event => {
    setField(event.target.value);
  };
  const handleFilter = () => {
    setFilteredData(data.filter((obj) => {
      return obj[field].toLowerCase().indexOf(input.toLowerCase().trim()) > -1;
    }));
  };

  const renderMenuItem = () => {
    return validField.map(ele => <MenuItem key={ele} value={ele}>{ele}</MenuItem>)
  }
  
  return (
    <>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={field}
        onChange={handleChange}
      >
        {renderMenuItem()}
      </Select>
      <TextField
        onChange={handleInputChange}
      />
      <Button
        color="primary"
        onClick={handleFilter}
      >Search</Button>
      {(filteredData || data) ? <PaginatedTable data={filteredData || data}/> : <div>Loading data...</div>}
    </>
  )
}