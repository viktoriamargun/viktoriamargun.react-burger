import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import styles from './nav-tab.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { setCurrentTab } from '../../../../services/ingredients/tabs/tab-slice';

function TabL({ currentTab, setCurrentTab, bunTabTop, sauceTabTop, mainTabTop }) {
  const dispatch = useDispatch();
  const [current, setCurrent] = React.useState('one'); 

  const handleTabClick = (tab) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    const top = element?.offsetTop;
    setCurrentTab(top);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <div className={`${ styles.navtab }`}>
      <Tab value="one" active={current === 'one'} onClick={() => handleTabClick('one')}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={() => handleTabClick('two')}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={() => handleTabClick('three')}>
        Начинки
      </Tab>
    </div>
  )
}
export default TabL;
