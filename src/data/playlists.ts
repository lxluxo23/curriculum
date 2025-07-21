// Playlist original simplificada
interface Track {
  title: string;
  artist: string;
  url: string;
  image?: string;
}

export const matrixPlaylist: Track[] = [
  {
    title: "Direct Lounge",
    artist: "SleepCircle",
    url: "./sounds/matrix/Direct_Lounge_ENAwave.mp3",
    image: "./sounds/matrix/directLounge.png"
  },
  {
    title: "Synthepanzer", 
    artist: "Telan Devik",
    url: "./sounds/matrix/Telan_Devik_-_Music_for_Anti-Gravity_Racing_Games_-_05_Synthepanzer.mp3",
    image: "./sounds/matrix/Synthepanzer.png"
  },
  {
    title: "Yokai Disco",
    artist: "Telan Devik", 
    url: "./sounds/matrix/Telan_Devik_-_Yokai_disco.mp3",
    image: "./sounds/matrix/yokai-disco.png"
  },
  {
    title: "Technopolis",
    artist: "YMO (Isao Takaku cover)",
    url: "./sounds/matrix/YMO__Technopolis__mixed_2008.mp3",
    image: "./sounds/matrix/ymoTechnopolis.jpg"
  },
  {
    title: "Devik's First Colony",
    artist: "Permanent Moon Base",
    url: "./sounds/matrix/Permanent Moon Base - Devik's first colony.mp3",
    image: "./sounds/matrix/deviks-first-colony.png"
  }
];



export const playlists = {
  matrix: matrixPlaylist,
};