import first_project from "./first_website.png";
import second_project from "./second_website.png";
import third_project from "./third-website.png";

const mywork_data2 = [
  {
    num: 1,
    name: "CinUA",
    photo: first_project,
    description:
      "This is an online cinema platform where users can explore various information about the cinema industry, discover the top-rated movies in the world based on IMDb (one of the most popular movie rating websites), and browse films sorted by year. This site was created in 2022.",
    technologies: "HTML, CSS",
    link: () => {
      window.open("https://elitlien.github.io/webCinema/");
    },
  },
  {
    num: 2,
    name: "ClearWeatherForecast",
    photo: second_project,
    description:
      "Clear Weather Forecast is a project that provides weather forecasts using a specialized API to access the latest weather data for locations worldwide. It also displays the city's location on a 3D object. This site was created in 2024.",
    technologies: "React, Three.js",
    link: () => {
      window.open("https://clear-weather-forecast.netlify.app/");
    },
  },
  {
    num: 3,
    name: "WorkoutCorner",
    photo: third_project,
    description:
      "Workout Corner is an online shop for sports goods. In the future, I plan to add a web-based platform to showcase exercises, sports product reviews, and body care tips. This project was built using React, Java (Spring Boot), and MariaDB. I was responsible for the front-end development and website design, while my colleague handled the back-end and database management. The site was launched in 2025.",
    technologies: "React, Java, MariaDB",
    link: () => {
      window.open("https://workout-corner.netlify.app/");
    },
  },
];

export default mywork_data2;
