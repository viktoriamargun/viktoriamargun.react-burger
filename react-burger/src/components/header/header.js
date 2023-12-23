import React from "react";
import "./header.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

class NavHeaderBtns extends React.Component {
  render() {
    const buttonStyle = {
      padding: "0",
    };
    return (
      <div className="navdiv">
        <nav className="nav_header">
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            style={buttonStyle}
          >
            <span className="pr-1">
              <BurgerIcon />
            </span>
            Конструктор
          </Button>

          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            style={buttonStyle}
          >
            <span className="pr-1">
              <ListIcon />
            </span>
            Лента заказов
          </Button>
        </nav>
      </div>
    );
  }
}

class Profile extends React.Component {
  render() {
    return (
      <nav className="profile">
        <Button htmlType="button" type="secondary" size="small">
          <span className="pr-1">
            <ProfileIcon />
          </span>
          <p className="text text_type_main-small">Личный кабинет</p>
        </Button>
      </nav>
    );
  }
}

class AppHeader extends React.Component {
  render() {
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
}

export default AppHeader;
