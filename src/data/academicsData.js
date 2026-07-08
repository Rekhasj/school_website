
import srkg1 from '../assets/Photos/academics/srkg1.jpeg'
import srkg2 from '../assets/Photos/kids_expo/7.webp'
import srkg3 from '../assets/Photos/kids_expo/8.webp'
import prekg from '../assets/Photos/kids_expo/3.webp'
import prekg1 from '../assets/Photos/colors_day/color_10.webp'
import srkg from '../assets/Photos/kids_expo/5.webp'
import jrkg from '../assets/Photos/kids_expo/10.webp'
import jrkg1 from '../assets/Photos/kids_expo/11.webp'
import jrkg2 from '../assets/Photos/kids_expo/2.webp'
import primary from '../assets/Photos/science_expo_photos/science_expo_3.webp'
import banner from '../assets/banner_images/banner_2.webp'
import banner2 from '../assets/Photos/staff/1.webp'
import sports from '../assets/Photos/sports_meet/sports_3.webp'
import middleSchool from '../assets/Photos/academics/middle_school_1.JPG'
import secondarySchool from '../assets/Photos/academics/secondary_school_1.JPG'

 const BLUE  = "rgb(24,55,105)";
const GREEN = "#00594c";
const YELLOW= "rgb(254,201,3)";
const RED   = "rgb(242,103,36)";
const SKY   = "rgb(130,210,223)";
const LGREEN= "rgb(149,199,114)";


export const SECTIONS = [
    {
      group: "early",
      id: "playschool",
      tag: "Play School",
      title: "PREKG",
      subtitle: "Ages 3 years",
      color: RED,
      textColor: "#fff",
      image:prekg,
      gallery: [
        prekg1,
        "/images/academics/playschool-2.jpg",
        "/images/academics/playschool-3.jpg",
      ],
      description:
        "Our Play School introduces the youngest learners to a warm, stimulating environment filled with sensory play, music, storytelling, and structured free time. Children develop social skills, curiosity, and confidence in a nurturing space designed for their earliest years.",
      subjects: ["Sensory Play", "Rhymes & Music", "Motor Skills", "Story Time", "Colour & Art", "Social Play"],
      highlights: [
        "Safe, child-proofed classrooms with tactile materials",
        "Dedicated outdoor play area with age-appropriate equipment",
        "Trained early-years educators following Montessori principles",
        "Daily structured and free-play balance",
      ],
    },
    {
      group: "early",
      id: "lowerkg",
      tag: "Lower School",
      title: "JRKG",
      subtitle: "Ages 4",
      color: YELLOW,
      textColor: BLUE,
      image: jrkg,
      gallery: [
        jrkg1,
        jrkg2,
        "/images/academics/kg-3.jpg",
      ],
      description:
        "Kindergarten at Hawkings blends Play-Way and Montessori techniques aligned with the CBSE national curriculum. Children are introduced to alphabet sounds, numbers, and short sentences through tracing, role-play, and nature walks — building confidence before they enter Grade 1.",
      subjects: [
        // "English Phonics", 
        "Numbers & Tracing", "EVS & Nature", "Rhymes & Drama", "Fine Motor Skills", "Circle Time"],
      highlights: [
        "Play-Way methodology integrated with Montessori EPL",
        "Nature walks and outdoor gardening on campus",
        "Tri-lingual readiness: English, Hindi, and regional language",
        "Rich storytelling and role-play for language development",
      ],
    },
    {
      group: "early",
      id: "srkg",
      tag: "Senior KG",
      title: "SRKG",
      subtitle: "Ages 5",
      color: LGREEN,
      textColor: BLUE,
      image: srkg,
      gallery: [
        srkg2,
        srkg,
        srkg3,
      ],
      description:
        "Senior KG marks the phase where children read, write, and form short sentences confidently. Drama, music, and outdoor gardening round out a curriculum that prepares every child for the transition to Grade 1 with confidence, curiosity, and strong foundational skills.",
      subjects: ["Reading & Writing", "Basic Mathematics", 
        // "Music & Drama", "Outdoor Gardening", 
        "Storytelling", "Social Skills"],
      highlights: [
        "Children read and write alphabets and short sentences",
        "Drama and role-play develop public speaking confidence",
        "Smooth transition programme into Grade 1",
        "Individual attention with small class sizes",
      ],
    },
    {
      group: "school",
      id: "primary",
      tag: "Primary",
      title: "Primary School",
      subtitle: "Grades I – V · Ages 6–11",
      color: BLUE,
      textColor: "#fff",
      image: primary,
      gallery: [
        "/images/academics/primary-1.jpg",
        "/images/academics/primary-2.jpg",
        "/images/academics/primary-3.jpg",
      ],
      description:
        "Grades I to V follow a unique thematic integrated transdisciplinary approach across all subject areas. Our programme emphasises foundational literacy and numeracy while weaving in environmental awareness, technology, and three languages to build well-rounded learners.",
      subjects: ["English", "Hindi", "Telugu/Tamil/Kannada", "EVS", "Mathematics", "Computer Science"],
      highlights: [
        "Thematic cross-subject integrated curriculum",
        "Digital classrooms with multimedia content",
        "Tri-lingual language programme from Grade I",
        "Activity-based and project-led learning approach",
      ],
    },
    {
      group: "school",
      id: "middle",
      tag: "Middle School",
      title: "Middle School",
      subtitle: "Grades VI – VIII · Ages 11–14",
      color: GREEN,
      textColor: "#fff",
      image: middleSchool,
      gallery: [
        "/images/academics/middle-1.jpg",
        "/images/academics/middle-2.jpg",
        "/images/academics/middle-3.jpg",
      ],
      description:
        "Middle School introduces subject-specific learning with dedicated Science and Social Studies streams. Students begin lab-based experiments, critical thinking exercises, and technology integration, preparing them for the rigour of secondary education.",
      subjects: ["English", "Hindi", "Science (PCB)", "Social Studies", "Mathematics", "Computer Science"],
      highlights: [
        "Fully equipped Physics, Chemistry, and Biology labs",
        "Social Studies field trips and project work",
        "Internet-enabled computer labs with senior coding tracks",
        "CCTV-monitored safe campus environment",
      ],
    },
    {
      group: "school",
      id: "secondary",
      tag: "Secondary",
      title: "Secondary School",
      subtitle: "Grades IX – X · Ages 14–16",
      color: SKY,
      textColor: BLUE,
      image: secondarySchool,
      gallery: [
        "/images/academics/secondary-1.jpg",
        "/images/academics/secondary-2.jpg",
        "/images/academics/secondary-3.jpg",
      ],
      description:
        "Secondary School is where academic excellence meets Board examination preparation. Aligned with CBSE national standards, students receive deep subject teaching, analytical reasoning development, and exam-oriented practice to ensure every scholar achieves their potential.",
      subjects: ["English", "Hindi", "Physics", "Chemistry", "Biology", "Mathematics & Social Studies"],
      highlights: [
        "CBSE Board exam preparation with mock tests",
        "Individual academic counselling for each student",
        "Resource bank with past papers and study guides",
        "Strong alumni mentorship and career guidance programme",
      ],
    },
  ];


  export const HIGHLIGHTS = [
//   {
//     title: "About School",
//         color: GREEN,

//     items: [
//       "1st CBSE School in Kuppam Constituency",
//       "Candidates can choose Telugu / Tamil / Kannada as second language",
//       "Assured quality education with various extra curricular activities",
//     ],
//   },
  {
    title: "Extra Curricular Activities",
        color: BLUE,

    items: [
      "Extra care for slow learners",
      "Debate",
      "Elocution",
      "Spell Well & Spell Bee",
      "Essay Writing",
      "Quiz Competition",
      "Calligraphy",
      "Digital Smart Classrooms",
    ],
  },
  {
    title: "Special Features",
        color: SKY,

    items: [
      "Karate",
      "Shooting / Firing",
      "Skating",
      "Archery",
      "Kids Play Park",
      "Food Festival",
      "Educational Field Trip",
      "Music & Dance",
      "Mid-Day Meal",
      "Yoga & Meditation",
      "Creativity Skills",
      "Nutritious Food (Junk Food Prohibited)",
    ],
  },
];

export const heroHighlights = [
  {
    text: "1st CBSE School in Kuppam Constituency",
    icon: "🏆",
    gradient: ["rgb(24,55,105)", "rgb(130,210,223)"], // BLUE → SKY
    image: banner2,
  },
  {
    text: "Choose Telugu / Tamil / Kannada as Second Language",
    icon: "🌐",
    gradient: ["#00594c", "rgb(149,199,114)"], // GREEN → LGREEN
    image: sports,
  },
  {
    text: "Assured Quality Education with Extra Curricular Excellence",
    icon: "✨",
    gradient: ["rgb(242,103,36)", "rgb(254,201,3)"], // RED → YELLOW
    image: banner,
  },
];