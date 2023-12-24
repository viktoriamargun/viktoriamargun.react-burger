import React, {useState} from "react";
import "./header.css";
import { Logo, Button, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

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
      <div className="navdiv">
        <nav className="nav_header pl-5 pr-2">
          <div className="head_btn"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}>
          <a href='#' className="nav_btn" htmlType="button" style={{color: '#F2F2F3',}}>
            <span className="pr-1">
              <BurgerIcon type={buttonType0}/>
            </span>
            Конструктор
          </a>
          </div>
          <div className="head_btn pl-5 pr-2"
          onMouseEnter={handleMouseEnter1} 
          onMouseLeave={handleMouseLeave1}>
          <a href="#" className="nav_btn" htmlType="button" style={buttonType2}>
            <span className="pr-1">
              <ListIcon type={buttonType3}/>
            </span>
            Лента заказов
          </a>
          </div>
        </nav>
      </div>
    );
  }

  function Profile() {
    const [buttonType1, setButtonType1] = useState({color: '#8585AD',});
    const [buttonType2, setButtonType2] = useState("secondary");

    const handleMouseEnter = () => {
      setButtonType1({ color: '#F2F2F3', });
      setButtonType2('primary');
    }
  
    const handleMouseLeave = () => {
      setButtonType1({ color: '#8585AD', });
      setButtonType2('secondary');
    }

    return (
      <nav className="profile" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}>
        <a href="#" className="nav_btn" htmlType="button" size="small" style={buttonType1}>
          <span className="pr-1">
            <ProfileIcon type={buttonType2}/>
          </span>
          <p className="text text_type_main-small">Личный кабинет</p>
        </a>
      </nav>
    );
}


function AppHeader() {
    return (
      <header className="header pl-4 pr-4 pb-4 pt-4">
        <NavHeaderBtns />
        <div className="logo">
          <Logo />
        </div>
        <Profile />
      </header>
    );
}


export default AppHeader;
