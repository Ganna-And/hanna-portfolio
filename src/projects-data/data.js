
import MusicAppImg from '../img/tune1.png'
import MusicAppImg1 from '../img/tune2.png';
import Bahasa1 from '../img/lb.png';
import Bahasa4 from '../img/lB1.png';
import Bahasa2 from '../img/lb2.png';
import MusicAppImg2 from '../img/tune3.png'
import Reddit from '../img/red3.png'
import Reddit1 from '../img/red1.png'
import Reddit2 from '../img/red2.png';
import Store from '../img/ecommerce.png';
import Store1 from '../img/ecommerce1.png'
import Store2 from '../img/ecommerce2.png';
import Coffe1 from '../img/cf1.png';
import Coffe2 from '../img/cf2.png';
import Coffe3 from '../img/cf3.png';
import Ang from '../img/image2.png';
import Ang2 from '../img/img3.png';
import Ang3 from '../img/Group 14.png';




export const myProjects = [{
    img:[MusicAppImg, MusicAppImg1, MusicAppImg2],
    title:'Tune Truve: Spotify app clone',
    description:" Music platform that allows subscribed users to upload and play songs and enjoy features like favorites and playlists. It supports Stripe recurring payments, and in server React components, accesses the database directly. Real-time handling of server-child component relations and Stripe subscription cancellations add to its comprehensive functionality.",
   features:[
     "Search songs and add to favorites",
     "Upload your own songs in mp3 format with Image",
     "Authentication through Guthub, magic link or email/password",
     "Fully functioning player for 1 or multiple songs",
     "Implementation of paid subscriptions through stripe"
   ],
   links:['https://github.com/Ganna-And/tune-truve','https://tune-truve.vercel.app/'],
 technologies:'Next, Supabase, Tailwind CSS, Stripe, PostgreSQL '},
{
    img:[Ang, Ang2, Ang3],
    title:'Blog app& Dashbord',
    description:"Blog application with an integrated backend Content Management System (CMS) connected to the frontend. Dynamic filtering options for posts based on categories, creation time, and featured content. Enabled newsletter subscription functionality for users. ",
   features:[
     "CRUD operation with Firebase",
     "Firebase Athentication",
     "Fully responsive design",
     "Filtering Posts by date, category",
   ],
   links:['https://blo-ang-dashboard.web.app','https://dashboardposts.web.app'],
 technologies:'Angular, TypeScript, Firebase, Bootstrap'},
   
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
 