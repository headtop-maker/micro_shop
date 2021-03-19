import React from 'react';
import style from './ItemBox.module.css';

interface IProps {
    imgSrc?:string;
    price?:number;
}

class ItemBox extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

    render() {
      const  {imgSrc} = this.props;
      const  {price} = this.props;
      return (
        <div className={style.grid_item_box}>
         <div className={style.box_img}>
           <img src={imgSrc}/>
         </div>
         <div className={`${style.box_btn_l}`}>{price}p. </div>
         <div className={` ${style.box_btn_r}`}>Купить</div>
        </div>
        
        );
    }
  }

export default ItemBox;