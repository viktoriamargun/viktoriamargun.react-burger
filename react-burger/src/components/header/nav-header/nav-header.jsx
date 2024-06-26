import {useState} from "react";
import styles from "./nav-header.module.css";
import { BurgerIcon, ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function NavHeaderBtns() {
    const [buttonType0, setButtonType0] = useState({color: '#8585AD',});
    const [buttonType2, setButtonType2] = useState({color: '#8585AD',});
    const [buttonType1, setButtonType1] = useState("secondary");
    const [buttonType3, setButtonType3] = useState("secondary");

    const handleMouseEnter = () => {
      setButtonType0({color: '#F2F2F3',});
      setButtonType1('primary');
    }  
    const handleMouseLeave = () => {
      setButtonType0({ color: '#8585AD', });
      setButtonType1('secondary');
    }
    const handleMouseEnter1 = () => {
      setButtonType2({ color: '#F2F2F3', });
      setButtonType3('primary');
    }  
    const handleMouseLeave1 = () => {
      setButtonType2({ color: '#8585AD', });
      setButtonType3('secondary');
    }
    
    return (
      <div className={ styles.navdiv }>
         <nav className={`${styles.nav_header} ${ 'pl-5' } ${ 'pr-2' }`}>
          <div className={ styles.head_btn }
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}>
            
            <a href='#' className={ styles.navbtn } style={{color: '#F2F2F3',}}>
              <span className={`${ 'pr-1' }`}>
                <BurgerIcon type={buttonType0}/>
              </span>
              Конструктор
            </a>

          </div>

          <div className={`${styles.nav_header} ${ 'pl-5' } ${ 'pr-2' }`}
            onMouseEnter={handleMouseEnter1} 
            onMouseLeave={handleMouseLeave1}>
            
            <a href="#" className={ styles.navbtn } style={buttonType2}>
              <span className={`${ 'pr-1' }`}>
                <ListIcon type={buttonType3}/>
              </span>
              Лента заказов
            </a>

          </div>

        </nav>
      </div>
    );
  }
  export default NavHeaderBtns;