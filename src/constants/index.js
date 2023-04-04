import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  eicher,
  threejs,
  relevel,
  ui,
  server,
  dsa,
 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  
  
];

const experiences = [
  {
    title: "Eicher motors spare part shop",
    company_name: "Ashit motors",
    icon: eicher,
    iconBg: "#383E56",
    date: "2019 - july 2022",
    points: [
      "managing customer",
      "managing inventory",
      "gst billing , billing",
      "using chasis number finding spare parts"

    ],
  },
 
];

const qualification =[
{
  title : "full stack development",
  company_name : "relevel",
  icon : relevel,
  iconbag : "#383E56",
  date : "july 2022 - july 2023",
  points : [
     "javascript",
     "frontend : HTML , css , React ,",
     "backend : node js , express , MySQL ",
     "DSA ",
  ]

},
{
  title : "javascript",
  company_name : "",
  icon : javascript,
  iconbag : "#383E56",
  date : "",
  points : [
    "ES2015 - ES2022",
    "classes , function and scopes",
    "Values and Variables in JS",
    "Arrays and objects",
    "Data Types in JavaScript",
    " Expressions and Operators",
    " Control Statements , iterative statements and Loops",
    "Arrays and object in javascript" ,
    "strings , data and time , math object in js",
    "DOM , BOM , WINDOW OBJECT"  ,
    "Events , timing based events in js",
    "Advanced javascript",
    " synchronus ,Asynchronus in js",
    "Event loop in js",
    ]

},
{
  title : "frontend",
  company_name : "",
  icon :ui,
  iconbag : "#383E56",
  date : "",
  points : [
     "HTMl : HTMl basics ,HTML form , HTML graphics , HTML media ,HTML APIs , HTML reference",
     "css : css basics , css Advanced , css Responsice , css Grid , css SASS , css Reference ,tailwind css",
     "React : React basics , React Hooks , vite , redux toolkit ",
      "Bootstrap 4,5"
  ]

},
{
  title : "backend",
  company_name : "",
  icon :server,
  iconbag : "#383E56",
  date : "",
  points : [
     "Nodejs :-   Nodejs basics , Nodejs MySQl , Nodejs MongoDB , Routing , Middlewares , Controllers , Models , fs module , npm ,Postman , Expressjs , APIs" ,
     
  ]

},
{
  title : "Data structure and Alogorithm",
  company_name : "",
  icon :dsa,
  iconbag : "#383E56",
  date : "",
  points : [
     
  ]

},
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ajay proved me wrong.",
    name: "katrina",
    designation: "Founder",
    company: "beauty company",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ajay does.",
    name: "takluman",
    designation: "founder",
    company: "takla organisation",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    testimonial:
      "After Ajay optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "chota chatri",
    designation: "undergound artist",
    company: "kandivali",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
];

const projects = [
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
 
];

export { services, technologies, experiences,qualification, testimonials, projects };
