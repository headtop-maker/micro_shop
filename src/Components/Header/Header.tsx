import React from 'react';
import style from './Header.module.css';

class Header extends React.PureComponent {
    render() {
      return (
        <div className={style.grid_item1}>
          <h1>header</h1>
          <div className={style.inputText}>
          <input type="text" ></input>
          <input type="submit" value="Поиск"></input>
          </div>

        </div>
      );
    }
  }

export default Header;