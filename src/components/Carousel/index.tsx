import React from 'react';
import Carousel from 'react-elastic-carousel';

import signInBgImg from '../../assets/sign-in-background.png';

import { Item } from './styles';
import './styles.css';

const CarouselComponent: React.FC = () => (
  <>
    <Carousel isRTL={false} enableAutoPlay showArrows={false}>
      <Item>
        <img src={signInBgImg} alt="" />
        <h2>Marcenas mattis egestas</h2>

        <p>
          Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
          porta.
        </p>
      </Item>

      <Item>
        <img src={signInBgImg} alt="" />

        <h2>Marcenas mattis egestas</h2>

        <p>
          Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
          porta.
        </p>
      </Item>

      <Item>
        <img src={signInBgImg} alt="" />
        <h2>Marcenas mattis egestas</h2>

        <p>
          Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
          porta.
        </p>
      </Item>
    </Carousel>
  </>
);

export default CarouselComponent;
