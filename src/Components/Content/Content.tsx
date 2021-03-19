import React from 'react';
import ItemBox from '../ItemBox/ItemBox';
import style from './Content.module.css';

  let items = [
    {imgSrc:"https://images.ru.prom.st/756674635_w640_h640_zhenskie-krossovki-nike.jpg",price:1500},
    {imgSrc:"https://images.ru.prom.st/740676391_w200_h200_muzhskie-krossovki-crocs.jpg",price:1500},
    {imgSrc:"https://www.tvtshop.ru/upload/store/Products/Products66873/2069d8.jpg",price:1500},
    {imgSrc:"https://avatars.mds.yandex.net/get-marketpic/1876493/market_5viF66HXiJ6novhb5m8oTA/orig",price:1500},
    {imgSrc:"https://media2.24aul.ru/imgs/5b45ebfb6241400001f60b5f/",price:1500},
    {imgSrc:"https://media2.24aul.ru/imgs/400x800/5b17cf6b23bbeb410cc4eaa4/krossovki-nike-air-presto-artikul-10662-1-11628458.jpg",price:1500},
    {imgSrc:"https://avatars.mds.yandex.net/get-marketpic/172106/market_vujJu5qiG_xbq_l1Kexwgg/orig",price:1500},
  ];

  let itemElement = items.map(i=><ItemBox imgSrc={i.imgSrc} price={i.price}/>);

class Content extends React.PureComponent {
 
    render() {
      return (
        <div className={style.grid_box}>
          {itemElement}
      </div>
      );
    }
  }

export default Content;