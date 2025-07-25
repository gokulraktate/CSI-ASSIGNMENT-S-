// src/constants.js

import laptopImg from './assets/Images/Laptop.jpg';
import cmf from './assets/Images/cmf.png';
import iphone16pro from './assets/Images/iphone16pro.png';



import mobile from './assets/Images/categories/mobile.png';
import laptop from './assets/Images/categories/laptop.png';
import earbud from './assets/Images/categories/earbud.png';
import monitor from './assets/Images/categories/monitor.png';
import speaker from './assets/Images/categories/speaker.png';
import tablet from './assets/Images/categories/tablet.png';
import smartwatch from './assets/Images/categories/smartwatch.webp';

export const heroBanners = [
  {
    id: 1,
    title: "HP Laptop 13th Gen",
    subtitle: "Core i3 | Fast Charge | Anti-glare",
    offer: "From ₹32,499",
    image: laptopImg,
    tag: "Limited time deal!",
    bgColor: "bg-gray-100",
  },
  {
    id: 2,
    title: "CMF Phone 2 Pro",
    subtitle: "Powerful camera | Flipkart Exclusive",
    offer: "From ₹16,999",
    image: cmf, // you can replace this with actual phone image
    tag: "Exclusive Offer",
    bgColor: "bg-orange-100",
  },
  {
  id: 3,
  title: "iPhone 16 Pro Max",
  subtitle: "A17 Pro Chip | Stunning Titanium Design",
  offer: "From ₹1,39,999",
  image: iphone16pro, // replace with actual iPhone 16 Pro Max image
  tag: "New Launch",
  bgColor: "bg-slate-100",
}

];


export const topCategories = [
  {
    id: 1,
    name: "Mobiles",
    image: mobile,
  },
  {
    id: 2,
    name: "Laptops",
    image: laptop,
  },
  {
    id: 3,
    name: "Earbuds",
    image: earbud,
  },
  {
    id: 4,
    name: "Smartwatches",
    image: smartwatch,
  },
  {
    id: 5,
    name: "Monitors",
    image: monitor,
  },
  {
    id: 6,
    name: "Speakers",
    image: speaker,
  },
  {
    id: 7,
    name: "Tablets",
    image: tablet,
  },
];




export const topBrands = [
  {
    id: 1,
    name: "Apple",
    image: "./src/assets/Images/brands/apple.png",
  },
  {
    id: 2,
    name: "Samsung",
    image: "./src/assets/Images/brands/samsung.svg",
  },
  {
    id: 3,
    name: "Sony",
    image: "./src/assets/Images/brands/sony.png",
  },
  {
    id: 4,
    name: "LG",
    image: "./src/assets/Images/brands/lg.svg",
  },
  {
    id: 5,
    name: "HP",
    image: "./src/assets/Images/brands/hp.svg",
  },
  {
    id: 6,
    name: "Dell",
    image: "./src/assets/Images/brands/dell.png",
  },
  {
    id: 7,
    name: "Lenovo",
    image: "./src/assets/Images/brands/lenovo.png",
  },
];
