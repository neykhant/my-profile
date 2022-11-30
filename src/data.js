import galaxy from "./components/ProjectsGallery/imgs/galaxy.png";
import epos from "./components/ProjectsGallery/imgs/epos.png";
import second from "./components/ProjectsGallery/imgs/secondtaproot.png";
import organic from "./components/ProjectsGallery/imgs/organic.png";

const skillsList = [
  { title: "React JS", value: 75 },
  { title: "Futter", value: 80 },
  { title: "Material UI", value: 80 },
  { title: "Javascript", value: 80 },
  { title: "Laravel ", value: 60 },
  { title: "AntDesign ", value: 70 },
  { title: "Firebase", value: 70 }
];
const projectList = [
  {
    id: 1,
    title: "Organic Shop Nail Admin Dashboard",
    technologies: ["React JS", "Laravel", "Mysql", "Redux"],
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    // frontImage: "https://i.ibb.co/L0F7mKX/tunflix.png",
    frontImage: organic
  },
  {
    id: 2,
    title: "Galaxy Web App",
    technologies: ["React JS", "Laravel", "Redux", "Mysql"],
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    frontImage: galaxy
  },
  {
    id: 3,
    title: "EPOS",
    technologies: ["React JS", "Laravel", "Mysql", "Flutter"],
    backgroundImage:
      "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
    frontImage: epos
  },
  {
    id: 4,
    title: "SecondTapRoot",
    technologies: ["React JS", "Laravel", "Mysql"],
    backgroundImage:
      "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
    frontImage: second
  }
];

const experienceList = [
  {
    id: 0,
    company: "Real Code Solutions",
    links: {
      website: "https://rcs-mm.com/",
      // facebook: "https://www.facebook.com/codehubtn/",
      // instagram: "https://www.instagram.com/codehub.coworking/"
      // instagram: ""
    }
  },
  {
    id: 1,
    company: "AndFund Yangon",
    links: {
      instagram: ""
    }
  }
];

export { skillsList, projectList, experienceList };
