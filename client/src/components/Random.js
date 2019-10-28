import React, { useState } from "react";
import { Button } from '@material-ui/core';
import { Employee } from './shared/Employee';
import { testData } from '../../testData.js';
import { transform } from '../util.js';
const data = transform(testData)
export const Random = () => {
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const handleOnclick = () => {
    setCurrentEmployee(data[Math.floor(Math.random() * 250)])
  }
  return (
    <div>
      <Button onClick={handleOnclick}>Randomize</Button>
      {currentEmployee && <Employee data={currentEmployee} />}
    </div>
  )
}