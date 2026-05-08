import Physics from '../assets/Photos/labs/physics_lab.webp'
import Chemistry from '../assets/Photos/labs/chemistry_lab.webp'
import CompositScience from '../assets/Photos/labs/compostie_science_lab.webp'
import Computer from '../assets/Photos/labs/computer_lab.webp'
import CentralLibrary from '../assets/Photos/labs/central_library.webp'
import Biology from '../assets/Photos/labs/biology_lab.webp'
import Maths from '../assets/Photos/labs/maths_lab.webp'
import ComputerLab1 from '../assets/Photos/labs/computer_lab_1.webp'
import ComputerLab2 from '../assets/Photos/labs/computer_lab_2.webp'
import r1 from '../assets/Photos/robotics/r1.jpeg'
import skating from '../assets/Photos/skating.jpeg'
import shooting from '../assets/Photos/shooting/shooting_3.webp'
import yoga1 from "../assets/Photos/yoga_day/yoga_1.jpeg";
import karate from '../assets/Photos/karate/karate_3.webp'

export const labData = [
  {
    title: "Physics Lab",
    description: "Well-equipped lab for practical physics experiments.",
    tag: "Physics",
    image: Physics,
  },
  {
    title: "Chemistry Lab",
    description: "Modern lab with safety equipment and quality chemicals.",
    tag: "Chemistry",
    image: Chemistry,
  },
  {
    title: "Composite Science Lab",
    description: "Integrated space for interdisciplinary science exploration.",
    tag: "Science",
    image: CompositScience,
  },
  {
    title: "Computer Lab",
    description: "Advanced systems and high-speed internet for digital learning.",
    tag: "Tech",
    image: Computer,
  },
  {
    title: "Central Library",
    description: "Hundrerds of books, journals, and quiet study spaces.",
    tag: "Library",
    image: CentralLibrary,
  },
  {
    title: "Biology Lab",
    description: "Hands-on learning with specimens, models, and microscopes.",
    tag: "Biology",
    image: Biology,
  },
  {
    title: "Maths Lab",
    description: "Interactive tools and models to make numbers come alive.",
    tag: "Maths",
    image: Maths,
  },
//   {
//     title: "Computer Lab — Wing 1",
//     description: "Dedicated programming and coding environment for seniors.",
//     tag: "Tech",
//     image: ComputerLab1,
//   },
//   {
//     title: "Computer Lab — Wing 2",
//     description: "Junior computing wing with beginner-friendly setups.",
//     tag: "Tech",
//     image: ComputerLab2,
//   },

];


export const facilityData = {
  innovation: [
    {
      title: "Robotics",
      tag: "Innovation",
      highlight: true,   // ✅ ADD THIS
      image: r1,
      description: "Coding, robotics & automation learning."
    }
  ],

  sports: [
    {
      title: "Hawkings Cricket Academy",
      tag: "Featured",
      highlight: true,   // ✅ ADD THIS
      image: "",
      description: "Professional cricket coaching with structured training programs.",
    }
  ],

  activities: [
    {
      title: "Yoga",
      tag: "Wellness",
      image: yoga1,
      description: "Enhances mental focus, flexibility, and emotional balance.",
    },
    {
      title: "Karate",
      tag: "Martial Arts",
      image: karate,
      description: "Builds discipline, confidence, and self-defense skills.",
    },
    {
      title: "Skating",
      tag: "Sports Activity",
      image: skating,
      description: "Improves balance, coordination, and physical strength.",
    }, {
      title: "Shooting",
      tag: "Sports Activity",
      image: shooting,
      description: "",
    }
  ]
};


