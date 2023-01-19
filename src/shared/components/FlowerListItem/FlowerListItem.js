import React from 'react';
import { LongRightArrow } from '../../../assets/images';

const FlowerListItem = ({ title, description, img }) => {
  return (
    <div className="flex flex-col md:flex-row gap-[24px] md:items-center mb-[40px] md:mb-[25px] last:mb-0">
      <img src={img} alt="" />
      <div className="md:max-w-[350px] w-full">
        <h3 className="text-[25px] font-frank text-400 leading-[31px]">{title}</h3>
        <p className="mt-[13px] mb-4 font-light">{description}</p>
        <a href="#!" className="text-lg leading-25 block">
          <span>Read More</span>
          <img src={LongRightArrow} alt="" />
        </a>
      </div>
    </div>
  );
};

export default FlowerListItem;
