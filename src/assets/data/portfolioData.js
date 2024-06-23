import College_Website from "/college-website-ui-1.png";
import Ecommerce_Website from "/Ecommerce-website-ui-2.png";

const portfolios = [
  {
    id: "01",
    imgUrl: College_Website,
    category: "Web Design",
    title: "College website",
    description:
      "As the front-end developer of this college website, I focused on creating a modern and responsive user experience using React for dynamic content rendering and Vite for optimized build times. With a clean, CSS-based design.",
    technologies: ["React", "css", "vite", "Node.js"],
    siteUrl: "https://ilmcollege.netlify.app/",
  },
  {
    id: "02",
    imgUrl: Ecommerce_Website,
    category: "Web Design",
    title: "Ecommerce website",
    description:
      "Explore our responsive e-commerce site, crafted with HTML, CSS, and Bootstrap 5, ensuring seamless browsing on any device. Discover a diverse range of products where each product card features detailed descriptions, prices, and more.",
    technologies: ["html", "css", "Bootstrap5"],
    siteUrl: "https://ecommerce-website-bootstrap5.netlify.app/",
  },
];

export default portfolios;
