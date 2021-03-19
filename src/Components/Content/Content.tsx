import React from 'react';
import ItemBox from '../ItemBox/ItemBox';
import style from './Content.module.css';

class Content extends React.PureComponent {
    render() {
      return (
        <div className={style.grid_box}>
            <ItemBox imgSrc="https://images.ru.prom.st/756674635_w640_h640_zhenskie-krossovki-nike.jpg" price={1500}/>
            <ItemBox imgSrc="https://images.ru.prom.st/740676391_w200_h200_muzhskie-krossovki-crocs.jpg"price={1900}/>
            <ItemBox imgSrc="https://www.tvtshop.ru/upload/store/Products/Products66873/2069d8.jpg"price={2500}/>
            <ItemBox imgSrc="https://avatars.mds.yandex.net/get-marketpic/1876493/market_5viF66HXiJ6novhb5m8oTA/orig"price={3500}/>
            <ItemBox imgSrc="https://media2.24aul.ru/imgs/5b45ebfb6241400001f60b5f/"price={6500}/>
            <ItemBox imgSrc="https://media2.24aul.ru/imgs/400x800/5b17cf6b23bbeb410cc4eaa4/krossovki-nike-air-presto-artikul-10662-1-11628458.jpg"price={4500}/>
            <ItemBox imgSrc="https://avatars.mds.yandex.net/get-marketpic/172106/market_vujJu5qiG_xbq_l1Kexwgg/orig"price={2500}/>
      </div>
      );
    }
  }

export default Content;