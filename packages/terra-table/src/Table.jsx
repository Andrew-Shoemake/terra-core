import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * The header passed to the table
   */
  header: PropTypes.element,
  /**
   * Whether or not the rows should be zebra striped
   */
  isStriped: PropTypes.bool,
  /**
   * Whether or not the table cells should be padded
   */
  isPadded: PropTypes.bool,
  /**
   * Function callback for the ref of the table.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  isStriped: true,
  isPadded: true,
};

const Table = ({
  children,
  header,
  isStriped,
  isPadded,
  refCallback,
  ...customProps
}) => {
  const tableClassNames = cx([
    'table',
    customProps.className,
  ]);

  return (
    <table {...customProps} data-table-padded={isPadded} className={tableClassNames} ref={refCallback}>
      {header}
      <tbody data-table-striped={isStriped} className={cx(['body'])}>
        {children}
      </tbody>
    </table>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
