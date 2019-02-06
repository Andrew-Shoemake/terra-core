# Terra Table

The Terra Table is a structural component used to create standard html tables.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-table`
  - `yarn add terra-table`

## Usage

```jsx
import React from 'react';
import Table, { Row, Cell } from 'terra-table';

<Table>
  <Row isSelectable key="row-0">
    <Cell key="row-0-cell-0">
      <p>Table row text</p>
    </Cell>
    <Cell key="row-0-cell-0">
      <p>Table row text</p>
    </Cell>
  </Row>
  <Row isSelectable key="row-1">
    <Cell key="row-1-cell-0">
      <p>Table row text</p>
    </Cell>
    <Cell key="row-1-cell-1">
      <p>Table row text</p>
    </Cell>
  </Row>
</Table>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)