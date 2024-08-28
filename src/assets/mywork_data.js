import first_project from "./first_website3.svg"
import second_project from "./second_website3.svg"

const mywork_data2 = [
    {
        num: 1,
        name: "CinUA",
        photo: first_project,
        description: "This is an online cinema platform where users can explore various information about the cinema industry, discover the top-rated movies in the world based on IMDb (one of the most popular movie rating websites), and browse films sorted by year. This site was created in 2022.",
        technologies: "HTML, CSS",
        link: () => {
            window.open("https://elitlien.github.io/webCinema/")
        }
    },
    {
        num: 2,
        name: "ClearWeatherForecast",
        photo: second_project,
        description: "Weather Forecast Corner is a project that provides weather forecasts using a specialized API to access the latest weather data for locations worldwide. It also displays the city's location on a 3D object. This site was created in 2024.",
        technologies: "React, Three.js",
        link: () => {
            window.open("https://elitlien.github.io/ClearForecastCorner/")
        }
    }]

export default mywork_data2;
