import React from "react";
import ReactDOM from 'react-dom';
import styles from './nav-tab.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";


function TabL() {
  const [current, setCurrent] = React.useState('one')
  return (
    <div className={`${ styles.navtab }`}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
}
export default TabL;