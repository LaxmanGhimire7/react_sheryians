import React from 'react'

const Card = () => {

    const marvelProfiles = [
  {
    name: "Iron Man",
    description: "Genius billionaire, philanthropist, and armored Avenger.",
    likesCount: 1250000,
    postCount: 342,
    views: 9850000,
    socialMedia: {
      reactions: { insta: 540000, x: 430000, thread: 280000 }
    },
    profilePic: "https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg",
    coverProfile: "https://upload.wikimedia.org/wikipedia/en/0/0c/Iron_Man_Mark_LXXXV.png",
    isFollowed: true
  },
  {
    name: "Captain America",
    description: "The First Avenger and symbol of freedom and leadership.",
    likesCount: 980000,
    postCount: 290,
    views: 7600000,
    socialMedia: {
      reactions: { insta: 410000, x: 360000, thread: 190000 }
    },
    profilePic: "https://upload.wikimedia.org/wikipedia/en/9/91/CaptainAmerica109.jpg",
    coverProfile: "https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_Endgame.png",
    isFollowed: false
  },
  {
    name: "Thor",
    description: "God of Thunder and protector of the Nine Realms.",
    likesCount: 1100000,
    postCount: 310,
    views: 8400000,
    socialMedia: {
      reactions: { insta: 470000, x: 390000, thread: 210000 }
    },
    profilePic: "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
    coverProfile: "https://upload.wikimedia.org/wikipedia/en/5/5a/Thor_Love_and_Thunder_poster.jpeg",
    isFollowed: true
  },
  {
    name: "Spider-Man",
    description: "Friendly neighborhood superhero with spider-like abilities.",
    likesCount: 1500000,
    postCount: 410,
    views: 12000000,
    socialMedia: {
      reactions: { insta: 680000, x: 520000, thread: 340000 }
    },
    profilePic: "https://upload.wikimedia.org/wikipedia/en/0/0c/Spiderman50.jpg",
    coverProfile: "https://upload.wikimedia.org/wikipedia/en/3/35/Spider-Man_No_Way_Home_poster.jpg",
    isFollowed: true
  },
  {
    name: "Hulk",
    description: "Scientist turned green rage-powered Avenger.",
    likesCount: 870000,
    postCount: 220,
    views: 6900000,
    socialMedia: {
      reactions: { insta: 360000, x: 300000, thread: 170000 }
    },
    profilePic: "https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png",
    coverProfile: "https://upload.wikimedia.org/wikipedia/en/8/88/Hulk_Endgame.png",
    isFollowed: false
  },
  {
    name: "Black Panther",
    description: "King of Wakanda and protector with enhanced abilities.",
    likesCount: 1020000,
    postCount: 275,
    views: 8200000,
    socialMedia: {
      reactions: { insta: 450000, x: 380000, thread: 220000 }
    },
    profilePic: "https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png",
    coverProfile: "https://upload.wikimedia.org/wikipedia/en/0/0c/Black_Panther_Film_Poster.jpg",
    isFollowed: true
  },
  {
    name: "Doctor Strange",
    description: "Master of the Mystic Arts and protector of reality.",
    likesCount: 930000,
    postCount: 260,
    views: 7300000,
    socialMedia: {
      reactions: { insta: 390000, x: 340000, thread: 200000 }
    },
    profilePic: "https://upload.wikimedia.org/wikipedia/en/c/c7/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg",
    coverProfile: "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
    isFollowed: false
  },
  {
    name: "Scarlet Witch",
    description: "Powerful wielder of chaos magic.",
    likesCount: 1150000,
    postCount: 300,
    views: 8900000,
    socialMedia: {
      reactions: { insta: 520000, x: 410000, thread: 260000 }
    },
    profilePic: "https://upload.wikimedia.org/wikipedia/en/6/6d/Scarlet_Witch_%28Marvel_Comics%29.png",
    coverProfile: "https://upload.wikimedia.org/wikipedia/en/3/3d/Scarlet_Witch_Multiverse_of_Madness.jpg",
    isFollowed: true
  },
  {
    name: "Loki",
    description: "God of Mischief with a sharp mind and magic tricks.",
    likesCount: 1080000,
    postCount: 330,
    views: 9100000,
    socialMedia: {
      reactions: { insta: 490000, x: 420000, thread: 250000 }
    },
    profilePic: "https://upload.wikimedia.org/wikipedia/en/8/8a/Loki_%28Marvel_Comics%29.png",
    coverProfile: "https://upload.wikimedia.org/wikipedia/en/0/0d/Loki_season_2_poster.jpg",
    isFollowed: false
  }
];

  return (
    <div>
      {marvelProfiles.map((elem)=>{
        return(
            <h1>{elem.name}</h1>
        )
      })}
    </div>
  )
}

export default Card
