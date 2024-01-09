import React, {useState} from "react";
import styles from "./profile.module.css";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

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
    <nav className={ styles.profile }
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave}>
      <a href="#" className={ styles.navbtn } style={buttonType1}>
        <span className={`${ 'pr-1' }`}>
          <ProfileIcon type={buttonType2}/>
        </span>
        <p className={`${ 'text' } ${ 'text_type_main-small' }`}>Личный кабинет</p>
      </a>
    </nav>
  );
}

export default Profile;