import React from 'react';
import PropTypes from 'prop-types';
import FilterMenu from './FilterMenu';

const Filter = ({ filters }) =>
    filters.map((filter, filterIndex) => {
        const filterMapKey = `${filter.name}-${filterIndex}`;
        return (
            <FilterMenu
                key={filterMapKey}
                items={filter.items}
                name={filter.name}
                onChange={filter.onChange}
                onClose={filter.onClose}
            />
        );
    });

Filter.propTypes = {
    filters: PropTypes.array,
};

export default Filter;
