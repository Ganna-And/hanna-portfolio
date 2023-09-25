
import MusicAppImg from '../img/musicApp.png'
import MusicAppImg1 from '../img/musicApp1.png';
import Bahasa1 from '../img/bahasa1.jpg';
import Bahasa4 from '../img/bahasa4.jpg';
import Bahasa2 from '../img/bahasa2.jpg';
import MusicAppImg2 from '../img/musicApp2.png'
import Reddit from '../img/Fronten_Reddit.png'
import Reddit1 from '../img/Fronten_Reddit1.png'
import Reddit2 from '../img/Fronten_Reddit2.png';
import Store from '../img/ecommerce.png';
import Store1 from '../img/ecommerce1.png'
import Store2 from '../img/ecommerce2.png';
import Coffe1 from '../img/coffe-shop1.png';
import Coffe2 from '../img/coffe-shop2.png';
import Coffe3 from '../img/coffe-shop3.png';





export const myProjects = [{
    img:[MusicAppImg, MusicAppImg1, MusicAppImg2],
    title:'Jammming: Spotify Playlist Manager',
    description:"Using my skills in React components and working with the Spotify API, I built a tool that lets users explore Spotifys music collection.",
   features:[
     "Search songs",
     "Preview tracks",
     "Create and manage playlists",
     "Add selected songs to playlists",
     "Securely sync changes with Spotify"
   ],
   links:['https://github.com/Ganna-And/musicApp.git','https://music-app-delta-han.vercel.app/'],
 technologies:'React.js, Spotify API, Asynchronous JavaScript, Redux, ChakraUi'},
   
   {
   img: [Bahasa1, Bahasa4, Bahasa2 ],
    title:"Learn Bahasa Flashcards",
    description:'This project was my own creation for persanal usage. Its a learning tool that consists of small cards with english-bahasa phrases on them, and 10 different topics to start your learning process',
    technologies:'React, Recoil, React-Bootstrap, Firebase, Styled Components',
    features:['Data with 10 diverse topics with 10 prases on each saved in Firestore, available for all users', 'Ability to shift cards from the "Learned" category back to "Study" that gives more control over learning process.','Authentication with Firebase sign up, login experience.'],
    links:['https://github.com/Ganna-And/learn-bahasa.git','https://learn-bahasa.vercel.app']
   },
   {
    img: [Coffe1, Coffe2, Coffe3],
    title: 'Coffee Shop: Online Coffee Store',
    description: 'I developed an online coffee shop using React and Redux, offering both English and Ukrainian language support. Customers can browse coffee products, add them to the cart, and remove items from the cart. The project includes custom login and signup pages.',
    features: [
      'Browse coffee products',
      'Add and remove products from the cart',
      'English and Ukrainian language support',
      'Customized login and signup pages',
    ],
    links: [
      'https://github.com/Ganna-And/cofee-shop-300af22d2e844cbf3ff9bce6086e01e773e5623b.git',
      'https://coffee-shop-drab.vercel.app/',
    ],
    technologies: 'React.js, Redux, Custom CSS, Multilingual Support (English and Ukrainian)',
  },
   
   { img: [Reddit, Reddit1, Reddit2 ],
 title:'Frontend Reddit',
 description:'A front-end web app displaying data fetched from Reddit API.This project helped me to understand better  React, Redux and  Reddit Json API.',
 technologies:'React, Recoil, Tailwind, NextJs, DaisyUI',
 features:["Fetch and display posts and comments from Reddit API",
 "Search functionality",
 "Filtering by predefined categories",
 "Detailed view for selected items",
 "Responsive design for all devices"],
 links:['https://github.com/Ganna-And/frontend_reddit', 'https://frontend-reddit.vercel.app/']
 },
   { img: [Store, Store1, Store2 ],
 title:'Ecommerce Admin & Store',
 description:'This E-Commerce admin dashboard allows easy management of vendors and stores. You can control categories, products, filters, images, and billboards effortlessly. The project includes Clerk Authentication and Stripe integration for payments.',
 technologies:'React, NextJs, Typescript, Tailwind + Shadcn UI, Prisma + PlanetScale, Clerk authentication, Stripe',
 features:[
  "Browse multiple stores from a single dashboard.",
  "Customize products with various sizes, colors, and filters.",
  "Track orders and gain insights into sales data."
 ],
 links:['https://github.com/Ganna-And/ecommerse-dashboard.git', 'https://ecommerse-dashboard.vercel.app', 
 'https://github.com/Ganna-And/ecommerce-store.git', 'ecommerce-store-tau-blue.vercel.app']
 }]
 