type Experience = {
  image: string;
  label: string;
  startYear: number | string;
  endYear: number | string;
  location: string;
  position: string;
};

export const ExperienceData: Experience[] = [
  {
    image: "/office.png",
    label: "Itiden",
    startYear: 2021,
    endYear: 2021,
    location: "Göteborg",
    position: "Intern",
  },
  {
    image: "/house.jpg",
    label: "Dagab",
    startYear: 2020,
    endYear: "Ongoing",
    location: "Göteborg",
    position: "Lagerarbetare",
  },
  {
    image: "/gear.png",
    label: "Frode Laursen",
    startYear: 2019,
    endYear: 2020,
    location: "Göteborg",
    position: "Lagerarbetare",
  },
  {
    image: "/post.jpg",
    label: "Postnord",
    startYear: 2019,
    endYear: 2019,
    location: "Göteborg",
    position: "Lagerarbetare",
  },
];
