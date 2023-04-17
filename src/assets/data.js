import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'
import icon from './images/place-point.svg'
import socialTourquoise1 from './images/social-turquoise/facebook.svg'
import socialTourquoise2 from './images/social-turquoise/twitter.svg'
import socialTourquoise3 from './images/social-turquoise/instagram.svg'
import socialWhite1 from './images/social-white/facebook.svg'
import socialWhite2 from './images/social-white/twitter.svg'
import socialWhite3 from './images/social-white/instagram.svg'

export const pageLinks = [
  { id: 1, href: '#hero', text: 'Home' },
  { id: 2, href: '#about', text: 'About' },
  { id: 3, href: '#services', text: 'Services' },
  { id: 4, href: '#tours', text: 'Tours' }
]

export const socialLinks = [
  {
    id: 1,
    img1: socialTourquoise1,
    img2: socialWhite1,
    desc: 'Facebook logo'
  },
  {
    id: 2,
    img1: socialTourquoise2,
    img2: socialWhite2,
    desc: 'Twitter logo'
  },
  {
    id: 3,
    img1: socialTourquoise3,
    img2: socialWhite3,
    desc: 'Instagram logo'
  }
]

export const services = [
  {
    img: './src/assets/images/service-1.svg',
    title: 'Saving Money',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    id: 1
  },
  {
    img: './src/assets/images/service-2.svg',
    title: 'Endless Hiking',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia. ',
    id: 2
  },
  {
    img: './src/assets/images/service-3.svg',
    title: 'Amazing Comfort',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia. ',
    id: 3
  }
]

export const tours = [
  {
    img: tour1,
    desc: 'village in the mountains',
    title: 'Tibet Adventure',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: icon,
    date: `August 26th, ${new Date().getFullYear()}`,
    country: 'China',
    duration: 6,
    price: 2100,
    id: 1
  },
  {
    img: tour2,
    desc: 'person on a road surrounded by lush greenery',
    title: 'Best Of Java',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: icon,
    date: `October 1st, ${new Date().getFullYear()}`,
    country: 'Indonesia',
    duration: 11,
    price: 1400,
    id: 2
  },
  {
    img: tour3,
    desc: 'large city at night',
    title: 'Explore Hong Kong',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: icon,
    date: `September 15th, ${new Date().getFullYear()}`,
    country: 'Hong Kong',
    duration: 8,
    price: 5000,
    id: 3
  },
  {
    img: tour4,
    desc: 'elephant on a savanna',
    title: 'Kenya Highlights',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: icon,
    date: `December 5th, ${new Date().getFullYear()}`,
    country: 'Kenya',
    duration: 20,
    price: 3300,
    id: 4
  },
  {
    img: tour5,
    desc: 'two zebras surrounded by lush greenery',
    title: 'Magical Africa',
    body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
  vitae tempore voluptatum maxime reprehenderit eum quod
  exercitationem fugit, qui corporis.`,
    icon: icon,
    date: `November 15th, ${new Date().getFullYear()}`,
    country: 'Africa',
    duration: 15,
    price: 7300,
    id: 5
  },
  {
    img: tour6,
    desc: 'Taj Mahal',
    title: 'Wonders of India',
    body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
  vitae tempore voluptatum maxime reprehenderit eum quod
  exercitationem fugit, qui corporis.`,
    icon: icon,
    date: `April 28th, ${new Date().getFullYear()}`,
    country: 'India',
    duration: 14,
    price: 4500,
    id: 6
  }
]
