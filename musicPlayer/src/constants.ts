import {Track} from 'react-native-track-player'

export const playListData: Track[] = [
    {
        id: 1,
        title: 'Rahe Na Rahe Hum',
        artist: 'Legends',
        album: 'Classic',
        artwork: 'https://c.sop.saavncdn.com/Classic-Books-20200618170324-500x500.jpg',
        url: require('./assets/audio/RaheNaRaheHum.mp3'),
      },
      {
        id: 2,
        title: 'Vida Karo Cover',
        artist: 'Asif Javed',
        album: 'Chamkila',
        artwork: 'https://c.saavncdn.com/403/Amar-Singh-Chamkila-Hindi-2024-20240427083437-500x500.jpg',
        url: require('./assets/audio/VidaKaro.mp3'),
      }
]