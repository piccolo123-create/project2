import React from 'react';

import Navigation from './Navigation';
import Search from './Search';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
        <h1>Management</h1>
        <Search />
      <Navigation />
    </header>

  );
};

export default MainHeader;