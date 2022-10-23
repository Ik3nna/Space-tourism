export const links = [
    {
        id: 1,
        linkTo: "/home",
        number: "00",
        text: "home"
    },
    {
        id: 2,
        linkTo: "/destination",
        number: "01",
        text: "destination"
    },
    {
        id: 3,
        linkTo: "/crew",
        number: "02",
        text: "crew"
    },
    {
        id: 4,
        linkTo: "/technology",
        number: "03",
        text: "technology"
    }
]

export const destination = [
    {
        id: 1,
        name: "Moon",
        images: {
          png: "/assets/destination/image-moon.png",
          webp: "/assets/destination/image-moon.webp"
        },
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days"
      },
      {
        id: 2,
        name: "Mars",
        images: {
          png: "/assets/destination/image-mars.png",
          webp: "/assets/destination/image-mars.webp"
        },
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months"
      },
      {
        id: 3,
        name: "Europa",
        images: {
          png: "/assets/destination/image-europa.png",
          webp: "/assets/destination/image-europa.webp"
        },
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years"
      },
      {
        id: 4,
        name: "Titan",
        images: {
          png: "/assets/destination/image-titan.png",
          webp: "/assets/destination/image-titan.webp"
        },
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years"
    }
]

export const crew = [
  {
    id: 1,
    name: "Douglas Hurley",
    images: {
      png: "/assets/crew/image-douglas-hurley.png",
      webp: "/assets/crew/image-douglas-hurley.webp"
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    id: 2,
    name: "Mark Shuttleworth",
    images: {
      png: "/assets/crew/image-mark-shuttleworth.png",
      webp: "/assets/crew/image-mark-shuttleworth.webp"
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    id: 3,
    name: "Victor Glover",
    images: {
      png: "/assets/crew/image-victor-glover.png",
      webp: "/assets/crew/image-victor-glover.webp"
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    id: 4,
    name: "Anousheh Ansari",
    images: {
      png: "/assets/crew/image-anousheh-ansari.png",
      webp: "/assets/crew/image-anousheh-ansari.webp"
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
]