// src/constants.js

// ✅ Proper image imports
import macbookImg from './assets/Images/mackbookairm2.png';
import cmf from './assets/Images/cmf.png';
import iphone16pro from './assets/Images/iphone16pro.png';
import earbuds from './assets/Images/earbuds.webp';
import smartwatch1 from './assets/Images/smartwatch.webp';
import monitor1 from './assets/Images/monitor.avif';
import speaker1 from './assets/Images/speaker.png';

// ✅ Categories
import mobile from './assets/Images/categories/mobile.png';
import laptop from './assets/Images/categories/laptop.png';
import earbud from './assets/Images/categories/earbud.png';
import monitor from './assets/Images/categories/monitor.png';
import speaker from './assets/Images/categories/speaker.png';
// import tablet from './assets/Images/categories/tablet.png';
import smartwatch from './assets/Images/categories/smartwatch.webp';

// ✅ Brands (fixed)
import apple from './assets/Images/brands/apple.png';
import samsung from './assets/Images/brands/samsung.svg';
import sony from './assets/Images/brands/sony.png';
import lg from './assets/Images/brands/lg.svg';
import hp from './assets/Images/brands/hp.svg';
import dell from './assets/Images/brands/dell.png';
import lenovo from './assets/Images/brands/lenovo.png';

export const heroBanners = [
  {
    id: 1,
    title: "MacBook Air M2",
    subtitle: "Apple Silicon | Sleek & Powerful | Retina Display",
    offer: "From ₹89,900",
    image: macbookImg,
    tag: "Student Favourite",
    bgColor: "bg-gray-100",
  },
  {
    id: 2,
    title: "CMF Phone 2 Pro",
    subtitle: "Powerful Camera | Flipkart Exclusive",
    offer: "From ₹16,999",
    image: cmf,
    tag: "Exclusive Offer",
    bgColor: "bg-orange-100",
  },
  {
    id: 3,
    title: "iPhone 16 Pro Max",
    subtitle: "A17 Pro Chip | Stunning Titanium Design",
    offer: "From ₹1,39,999",
    image: iphone16pro,
    tag: "New Launch",
    bgColor: "bg-slate-100",
  },
  {
    id: 4,
    title: "boAt Airdopes 141 Pro",
    subtitle: "40H Playback | ASAP Charge | ENx Tech",
    offer: "From ₹999",
    image: earbuds,
    tag: "Hot Deal",
    bgColor: "bg-pink-50",
  },
  {
    id: 5,
    title: "Fire-Boltt Ninja Call Pro",
    subtitle: "1.83” Display | Bluetooth Calling | 120+ Sports Modes",
    offer: "From ₹1,199",
    image: smartwatch1,
    tag: "Trending Now",
    bgColor: "bg-green-50",
  },
  {
    id: 6,
    title: "Samsung 27” Monitor",
    subtitle: "Full HD | Eye Saver Mode | Slim Design",
    offer: "From ₹7,999",
    image: monitor1,
    tag: "Work from Home",
    bgColor: "bg-blue-50",
  },
  {
    id: 7,
    title: "Zebronics Bluetooth Speaker",
    subtitle: "RGB Lights | Deep Bass | 10W Sound",
    offer: "From ₹1,499",
    image: speaker1,
    tag: "Party Essential",
    bgColor: "bg-yellow-50",
  },
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
  // {
  //   id: 7,
  //   name: "Tablets",
  //   image: tablet,
  // },
];

export const topBrands = [
  {
    id: 1,
    name: "Apple",
    image: apple,
  },
  {
    id: 2,
    name: "Samsung",
    image: samsung,
  },
  {
    id: 3,
    name: "Sony",
    image: sony,
  },
  {
    id: 4,
    name: "LG",
    image: lg,
  },
  {
    id: 5,
    name: "HP",
    image: hp,
  },
  {
    id: 6,
    name: "Dell",
    image: dell,
  },
  {
    id: 7,
    name: "Lenovo",
    image: lenovo,
  },
];
