/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const TableTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/single-select-table-tests/default">Single Select Table - Default</Link></li>
      <li><Link to="/tests/single-select-table-tests/single-row">Single Select Table - Single Row</Link></li>
      <li><Link to="/tests/single-select-table-tests/no-rows">Single Select Table - No Rows</Link></li>
      <li><Link to="/tests/single-select-table-tests/onchange">Single Select Table - OnChange</Link></li>
      <li><Link to="/tests/single-select-table-tests/subheaders">Single Select Table - Subheaders</Link></li>
      <li><Link to="/tests/single-select-table-tests/preselected">Single Select Table - Preselected Row</Link></li>
      <li><Link to="/tests/single-select-table-tests/non-selectable">Single Select Table - Non-Selectable Row</Link></li>
    </ul>
  </div>
);

export default TableTests;
