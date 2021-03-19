import React from 'react';
import style from './Navigation.module.css';

interface IProps {
  count?: number;
}

interface IState {
  num?: number;
}

class Navigation extends React.Component<IProps,IState> {
  constructor(props: IProps,state:IState) {
    super(props);
    this.state = {num: 0};
    
  }

    render() {
      const { num } = this.state;
      return (
        <div className={`${style.grid_item2}`}>
        <nav >
          <div> <a href="#"> item1 { num }  </a></div>
          <div> <a href="#"> item2 { num } </a></div>
          <div> <a href="#"> item3 { num } </a></div>
          <div> <a href="#"> item4 { num } </a></div>
        </nav>
      </div>
      );
    }
  }

export default Navigation;