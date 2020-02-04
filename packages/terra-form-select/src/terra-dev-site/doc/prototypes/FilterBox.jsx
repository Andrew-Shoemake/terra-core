import React from 'react';
import PropTypes from 'prop-types';
import List, { Item } from 'terra-list';
import ContentContainer from 'terra-content-container';
import SearchField from 'terra-search-field'
import VisuallyHiddenText from 'terra-visually-hidden-text';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import classNames from 'classnames/bind';
import styles from './FilterBox.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  onSearch: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectItem: PropTypes.func,
  selectAllTitle: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    metaData: PropTypes.object,
    node: PropTypes.node,
  })),
};

const defaultProps = {
  isLoading: false,
  items: [],
};

const FilterBox = ({
  id,
  description,
  title,
  isLoading,
  onSearch,
  onSelectAll,
  onSelectItem,
  selectAllTitle,
  items,
  ...customProps
}) => {
  const listItems = items.map(item => {
    return (
      <Item
        key={item.key}
        isSelectable
        metaData={item.metaData}
        onSelect={onSelectItem}
      >
        {item.node}
      </Item>
    );
  })

  return (
    <div className={cx('filter')}>
      <ContentContainer
        fill
        header={
          onSearch ? (
          <div className={cx('header')}>
            <div>{title}</div>
            <SearchField onSearch={onSearch} className={cx('input')} />
          </div>
          ) : undefined
        }
        footer={onSelectAll ? <button className={cx('footer')} onClick={onSelectAll}>{selectAllTitle}</button> : undefined}
      >
        {
          isLoading ? 
          <LoadingOverlay isOpen isAnimated isRelativeToContainer /> :
          <List role="listbox">
            {listItems}
          </List>
          // <VisuallyHiddenText aria-atomic="true" aria-live="polite" text={description} /> // use for loading words
        }
      </ContentContainer>
    </div>
  );
};

FilterBox.propTypes = propTypes;
FilterBox.defaultProps = defaultProps;

export default FilterBox;
