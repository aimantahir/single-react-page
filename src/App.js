import React from 'react';
import { LongRightArrow } from './assets/images';
import './assets/styles/style.min.css';
import FlowerListItem from './shared/components/FlowerListItem';
import Data from './shared/constants/flowerList';

const App = () => {
  return (
    <div className="container py-[50px] lg:py-[80px]">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[60%] lg:border-r pr-0 lg:pr-6">
          <h1 className="text-xl font-frank mb-[10px]">Keep Up With Flower Station</h1>
          <a href="text-[16px] leading-25">
            <span>Read all articles</span>
            <img src={LongRightArrow} alt="" />
          </a>
          <div className="list mt-[30px]">
            {Data.map((item, index) => (
              <FlowerListItem {...item} key={index} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[40%] mt-[40px] lg:mt-0 text-right pl-0 lg:pl-6">
          <div className="lg:max-w-[350px] w-full ml-auto">
            <h1 className="text-xl font-frank mb-[20px] border-b border-[#2D2D2D] leading-[54px]">
              Flowers
            </h1>
            <p className="font-light leading-6">
              Flower Station is considered by many to be one of the UK's best florist. This is an
              accolade that takes time and commitment to achieve, and it is something our team are
              constantly working towards. Although a large part of our focus as a company is on
              customer service, quick delivery and reasonable prices, the thing that we focus on the
              most is the quality of our flowers and bouquets.
              <br />
              <br />
              We only source the best flowers direct from sustainable farms and growers around the
              world, whether it be colourful tulips from Holland or exquisite Roses from Ecuador.
              Our flowers conform to the Fair Flowers Fair Plants (FFP) standards, stimulating the
              production of sustainable cut flowers and potted plants, minimizing the environmental
              impact of cut flower production on the natural environment and surrounding
              communities, and establishing good social conditions for workers on flower and plant
              farms.
              <br />
              <br />
              Moving forward, Flower Station is making huge strides in efforts to become the UK's
              first, fully carbon neutral florist and online flower retailer. In order to do this,
              we are working very closely with British flower farms and growers to source amazing,
              home grown, high quality flowers and plants.
            </p>
          </div>
          <ul className="footer-links">
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!">Local Florist Shops</a>
            </li>
            <li>
              <a href="#!">Delivery</a>
            </li>
            <li>
              <a href="#!">Questions & Answers</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
