import React from 'react';
import Table, {
  Row, Cell, Header, HeaderCell,
} from 'terra-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Placeholder from 'terra-doc-template/lib/Placeholder';
import mockData from './mock-data/mock-select';

const createCell = cell => (
  <Cell key={cell.key}>
    <Placeholder title={cell.title} style={{ height: '50px', padding: '0' }} />
  </Cell>
);

const createCellsForRow = cells => cells.map(cell => createCell(cell));

class SingleSelectTable extends React.Component {
  constructor(props) {
    super(props);
    this.createTableRow = this.createTableRow.bind(this);
    this.createTableRows = this.createTableRows.bind(this);
    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.state = { selectedKey: null };
  }

  handleRowSelection(event, metaData) {
    event.preventDefault();
    if (this.state.selectedKey !== metaData.key) {
      this.setState({ selectedKey: metaData.key });
    }
  }

  createTableRow(itemData) {
    return (
      <Row
        key={itemData.key}
        isSelectable
        isSelected={this.state.selectedKey === itemData.key}
        metaData={{ key: itemData.key }}
        onSelect={this.handleRowSelection}
      >
        {createCellsForRow(itemData.cells)}
      </Row>
    );
  }

  createTableRows(data) {
    return data.map(childItem => this.createTableRow(childItem));
  }

  render() {
    return (
      <Table
        fill
        style={{ height: '200px' }}
        paddingStyle="standard"
        header={(
          <Header>
            <HeaderCell>Column 0</HeaderCell>
            <HeaderCell>Column 1</HeaderCell>
            <HeaderCell>Column 2</HeaderCell>
          </Header>
        )}
      >
        {this.createTableRows(mockData)}
      </Table>
    );
  }
}

export default SingleSelectTable;
