import React from "react";
import styles from './nav-tab.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

function TabL({ currentTab, setCurrentTab, handleTabClick }) {
  return (
    <div className={`${ styles.navtab }`}>
      <Tab value="one" active={currentTab === 'one'} onClick={() => handleTabClick('one')}>
        Булки
      </Tab>
      <Tab value="two" active={currentTab === 'two'} onClick={() => handleTabClick('two')}>
        Соусы
      </Tab>
      <Tab value="three" active={currentTab === 'three'} onClick={() => handleTabClick('three')}>
        Начинки
      </Tab>
    </div>
  )
}
export default TabL;
