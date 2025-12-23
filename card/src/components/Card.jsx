import React from 'react'

const Card = () => {

const marvelProfiles = [
  {
    name: "Iron Man",
    description: "Genius billionaire, philanthropist, and armored Avenger.",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg",
    coverProfile:
      "https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%282008_film%29_poster.jpg",
    isFollowed: true,
  },
  {
    name: "Captain America",
    description: "The First Avenger and symbol of freedom.",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/9/91/CaptainAmerica109.jpg",
    coverProfile:
      "https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg",
    isFollowed: false,
  },
  {
    name: "Thor",
    description: "God of Thunder.",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
    coverProfile:
      "https://upload.wikimedia.org/wikipedia/en/f/fc/Thor_poster.jpg",
    isFollowed: true,
  },
  {
    name: "Spider-Man",
    description: "Friendly neighborhood superhero.",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/0/0c/Spiderman50.jpg",
    coverProfile:
      "https://upload.wikimedia.org/wikipedia/en/2/26/Spider-Man_No_Way_Home_poster.jpg",
    isFollowed: true,
  },
  {
    name: "Hulk",
    description: "Green rage-powered Avenger.",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png",
    coverProfile:
      "https://upload.wikimedia.org/wikipedia/en/8/88/The_Incredible_Hulk_poster.jpg",
    isFollowed: false,
  },
  {
    name: "Black Panther",
    description: "King of Wakanda.",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png",
    coverProfile:
      "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_film_poster.jpg",
    isFollowed: true,
  },
  {
    name: "Doctor Strange",
    description: "Master of the Mystic Arts.",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/c/c7/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg",
    coverProfile:
      "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
    isFollowed: false,
  },
  {
    name: "Scarlet Witch",
    description: "Wielder of chaos magic.",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/6/6d/Scarlet_Witch_%28Marvel_Comics%29.png",
    coverProfile:
      "https://upload.wikimedia.org/wikipedia/en/3/3d/Scarlet_Witch_Multiverse_of_Madness.jpg",
    isFollowed: true,
  },
  {
    name: "Loki",
    description: "God of Mischief.",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/8/8a/Loki_%28Marvel_Comics%29.png",
    coverProfile:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Loki_season_2_poster.jpg",
    isFollowed: false,
  },
];


  return (
    <div>
      {marvelProfiles.map((elem, idx)=>{
        return(
          <div key={idx}>
                <h1>{elem.name}</h1>
                <img src={elem.profilePic} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default Card
