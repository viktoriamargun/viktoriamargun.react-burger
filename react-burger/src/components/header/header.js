// import React, {useState} from "react";
import styles from "./header.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";

import NavHeaderBtns from './nav-header/nav-header.jsx';
import Profile from './profile/profile.jsx';

function AppHeader() {
    return (
      <header className={`${ styles.header } ${ 'pl-4' } ${ 'pr-4' } ${ 'pb-4' } ${ 'pt-4' }`}>
        <NavHeaderBtns />
        <div className={ styles.logo }>
          <Logo />
        </div>
        <Profile />
      </header>
    );
}

export default AppHeader;
