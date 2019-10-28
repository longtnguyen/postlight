import React from "react";
import PaginatedTable from './shared/PaginatedTable';
import { testData } from '../../testData.js'
import { transform } from '../util.js';
export const Search = () => {
  return (
    <PaginatedTable data={transform(testData)} />
  )
}