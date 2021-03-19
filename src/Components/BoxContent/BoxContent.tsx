import React from 'react';
import Content from '../Content/Content';
import style from './BoxContent.module.css';

class BoxContent extends React.PureComponent {

  render() {
    return (
      <div className={style.grid_item3}>
        <Content />
      </div>
    );
  }
}

export default BoxContent;