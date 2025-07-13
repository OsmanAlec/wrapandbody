"use client";
import { services } from '@/data/services';
import React, { useState } from 'react';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });

export interface Treatment {
  name: string;
  description: string;
  price: string;
}

export interface ServicesData {
  [key: string]: Treatment[];
}

export interface CategoryButton {
  key: string;
  title: string;
}

const categories: CategoryButton[] = [
  { key: 'bodywraps', title: 'Bodywraps' },
  { key: 'massages', title: 'Massage & Mechanical Therapies' },
  { key: 'fatreduction', title: 'Fat Reduction & Skin Tightening' },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(services)[0]);
  const activeTreatments: Treatment[] = services[activeCategory as keyof typeof services];

  return (
    <div>
      <h1 className={`text-7xl p-12 pb-5 bg-off-white ${merriweather.className}`}>Services</h1>
      <div className='my-0 m-10 py-5 flex-col inline-flex text-center'>
        <div className='card-outer'>
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`category-btn${activeCategory === category.key ? ' active' : ''}`}
              type="button"
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
      
      <div key={activeCategory} 
      className="treatments-list">
        {activeTreatments.map((treatment, index) => (
          <div className="treatment-card" key={treatment.name || index}>
            <h4>{treatment.name}</h4>
            <p>{treatment.description}</p>
            <p><strong>Price:</strong> {treatment.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;