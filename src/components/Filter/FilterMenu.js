import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  ListItem,
  Checkbox,
  Button,
  FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: 0,
  },
  label: {
    width: '100%',
    margin: 0,
    padding: 4,
  },
  button: {
    background: '#E2EAF1',
    marginRight: 20,
    color: theme.palette.primary.main,
    '& > .MuiButton-label': {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-around',
    },
  },
  menu: {
    '& > .MuiMenu-paper': {
      width: 250,
    },
  },
}));

const FilterMenu = ({ items, name, isMultiple, returnType }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedValues, setSelectedValues] = useState([]);
  const isMenuOpen = Boolean(anchorEl);

  function renderOptions() {
    return items.map((item, itemKey) => {
      const itemMapKey = `${item.name}-${itemKey}`;
      return (
        <ListItem
          key={itemMapKey}
          button
          component="li"
          className={classes.listItem}
        >
          <FormControlLabel
            control={<Checkbox value={item.value} onChange={event => handleChange(item.value, event)} />}
            label={item.name}
            className={classes.label}
          />
        </ListItem>
      );
    });
  }

  function createId() {
    return `${camelize(name)}Filter`;
  }

  function camelize(string) {
    return string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => {
      if (p2) return p2.toUpperCase();
      return p1.toLowerCase();
    });
  }

  function handleChange(value, event) {
    // console.log(value, event.target.checked)
    const id = value;
    const selectedIndex = selectedValues.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedValues, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedValues.slice(1));
    } else if (selectedIndex === selectedValues.length - 1) {
      newSelected = newSelected.concat(selectedValues.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedValues.slice(0, selectedIndex),
        selectedValues.slice(selectedIndex + 1),
      );
    }

    console.log(newSelected)
    // setSelectedValues(newSelected);
  }

  function handleOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <Button className={classes.button} onClick={handleOpen}>
        {name}
        <KeyboardArrowDownIcon />
      </Button>
      <Menu
        id={createId}
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleClose}
        className={classes.menu}
      >
        {renderOptions()}
      </Menu>
    </>
  );
};

FilterMenu.defaultProps = {
  isMultiple: false,
  returnType: 'value',
};

FilterMenu.propTypes = {
  items: PropTypes.array,
  name: PropTypes.string,
  isMultiple: PropTypes.bool,
  returnType: PropTypes.string,
};

export default FilterMenu;
