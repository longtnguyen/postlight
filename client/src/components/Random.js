import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core';
import { Employee } from './shared/Employee';

export const Random = () => {
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [data, setData] = useState(null);

  //TODO: Refactor this whenever possible, this is duplicated code but I ran out of time
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
  const handleOnclick = () => {
    setCurrentEmployee(data[Math.floor(Math.random() * 250)])
  }
  return (
    <div>
      <Button onClick={handleOnclick} color="secondary">Randomize</Button>
      {currentEmployee && <Employee data={currentEmployee} />}
    </div>
  )
}