import { connection } from "./database"

export const lastDrops = [
    // {
    //   name: "HOWL",
    //   time: "9 godzin temu",
    //   user: "IQ65",
    //   userAvatar: "https://cdn.discordapp.com/attachments/1027275122626797630/1234967742935728240/f095df25073111efb55b1b18f44c25fd.png?ex=6632a8d6&is=66315756&hm=499afe845dee6cd4ad7628f3e5923d5ae3ce741d81b8f85e0ec6dc64464da708&",
    //   image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f6pIl2-yYp9SnjA23-BBuNW-iLI-XJgFsZQyG_VW2lOq918e8uszLn2wj5HeAvkVdtQ",
    //   rarity: "gold"
    // },
    // {
    //   name: "HOWL",
    //   time: "10 godzin temu",
    //   user: "IQ65",
    //   userAvatar: "https://cdn.discordapp.com/attachments/1027275122626797630/1234967742935728240/f095df25073111efb55b1b18f44c25fd.png?ex=6632a8d6&is=66315756&hm=499afe845dee6cd4ad7628f3e5923d5ae3ce741d81b8f85e0ec6dc64464da708&",
    //   image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f6pIl2-yYp9SnjA23-BBuNW-iLI-XJgFsZQyG_VW2lOq918e8uszLn2wj5HeAvkVdtQ",
    //   rarity: "gold"
    // },
    // {
    //   name: "HOWL",
    //   time: "10 godzin temu",
    //   user: "IQ65",
    //   userAvatar: "https://cdn.discordapp.com/attachments/1027275122626797630/1234967742935728240/f095df25073111efb55b1b18f44c25fd.png?ex=6632a8d6&is=66315756&hm=499afe845dee6cd4ad7628f3e5923d5ae3ce741d81b8f85e0ec6dc64464da708&",
    //   image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f6pIl2-yYp9SnjA23-BBuNW-iLI-XJgFsZQyG_VW2lOq918e8uszLn2wj5HeAvkVdtQ",
    //   rarity: "gold"
    // },
    // {
    //   name: "DRAGON LORE",
    //   time: "12 godzin temu",
    //   user: "Chwyto",
    //   userAvatar: "https://media1.tenor.com/m/TChTx3WOUBYAAAAd/playboi-carti-playboi-carti-cute.gif",
    //   image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5cB1g_zMu9Wk2ATh_0tkMWrzLY7BIQM2NArQq1O9kL_qgJTt6Ziam3Bh6SR3sHfD30vgriIWFx4",
    //   rarity: "red"
    // },
    // {
    //   name: "HEDGE MAZE",
    //   time: "15 godzin temu",
    //   user: "IQ65",
    //   userAvatar: "https://cdn.discordapp.com/attachments/1027275122626797630/1234967742935728240/f095df25073111efb55b1b18f44c25fd.png?ex=6632a8d6&is=66315756&hm=499afe845dee6cd4ad7628f3e5923d5ae3ce741d81b8f85e0ec6dc64464da708&",
    //   image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eOxhoWOmcj5Nr_Yg2Yf6sYkie-UptWi0A3sqhdta2H0LNDEc1NsNV_W-Va-l73q1Ja96p6dz2wj5HevREuBKg",
    //   rarity: "red"
    // },
    // {
    //   name: "THE PRINCE",
    //   time: "16 godzin temu",
    //   user: "IQ65",
    //   userAvatar: "https://cdn.discordapp.com/attachments/1027275122626797630/1234967742935728240/f095df25073111efb55b1b18f44c25fd.png?ex=6632a8d6&is=66315756&hm=499afe845dee6cd4ad7628f3e5923d5ae3ce741d81b8f85e0ec6dc64464da708&",
    //   image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJH4t27kYy0mvLwOq7c2D4B7cQl3byS89um2Ffh_RE-Yzz3IYHDd1BoZ1yC_FLqyL2-gpa7u5jXiSw0eTyRlhg",
    //   rarity: "red"
    // },
    // {
    //   name: "HOWL",
    //   time: "9 godzin temu",
    //   user: "IQ65",
    //   userAvatar: "https://cdn.discordapp.com/attachments/1027275122626797630/1234967742935728240/f095df25073111efb55b1b18f44c25fd.png?ex=6632a8d6&is=66315756&hm=499afe845dee6cd4ad7628f3e5923d5ae3ce741d81b8f85e0ec6dc64464da708&",
    //   image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f6pIl2-yYp9SnjA23-BBuNW-iLI-XJgFsZQyG_VW2lOq918e8uszLn2wj5HeAvkVdtQ",
    //   rarity: "gold"
    // },
    // {
    //   name: "HOWL",
    //   time: "10 godzin temu",
    //   user: "IQ65",
    //   userAvatar: "https://cdn.discordapp.com/attachments/1027275122626797630/1234967742935728240/f095df25073111efb55b1b18f44c25fd.png?ex=6632a8d6&is=66315756&hm=499afe845dee6cd4ad7628f3e5923d5ae3ce741d81b8f85e0ec6dc64464da708&",
    //   image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f6pIl2-yYp9SnjA23-BBuNW-iLI-XJgFsZQyG_VW2lOq918e8uszLn2wj5HeAvkVdtQ",
    //   rarity: "gold"
    // },
    // {
    //   name: "HOWL",
    //   time: "10 godzin temu",
    //   user: "IQ65",
    //   userAvatar: "https://cdn.discordapp.com/attachments/1027275122626797630/1234967742935728240/f095df25073111efb55b1b18f44c25fd.png?ex=6632a8d6&is=66315756&hm=499afe845dee6cd4ad7628f3e5923d5ae3ce741d81b8f85e0ec6dc64464da708&",
    //   image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f6pIl2-yYp9SnjA23-BBuNW-iLI-XJgFsZQyG_VW2lOq918e8uszLn2wj5HeAvkVdtQ",
    //   rarity: "gold"
    // },
    // {
    //   name: "DRAGON LORE",
    //   time: "12 godzin temu",
    //   user: "Chwyto",
    //   userAvatar: "https://media1.tenor.com/m/TChTx3WOUBYAAAAd/playboi-carti-playboi-carti-cute.gif",
    //   image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5cB1g_zMu9Wk2ATh_0tkMWrzLY7BIQM2NArQq1O9kL_qgJTt6Ziam3Bh6SR3sHfD30vgriIWFx4",
    //   rarity: "red"
    // },
    // {
    //   name: "HEDGE MAZE",
    //   time: "15 godzin temu",
    //   user: "IQ65",
    //   userAvatar: "https://cdn.discordapp.com/attachments/1027275122626797630/1234967742935728240/f095df25073111efb55b1b18f44c25fd.png?ex=6632a8d6&is=66315756&hm=499afe845dee6cd4ad7628f3e5923d5ae3ce741d81b8f85e0ec6dc64464da708&",
    //   image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eOxhoWOmcj5Nr_Yg2Yf6sYkie-UptWi0A3sqhdta2H0LNDEc1NsNV_W-Va-l73q1Ja96p6dz2wj5HevREuBKg",
    //   rarity: "red"
    // },
    // {
    //   name: "THE PRINCE",
    //   time: "16 godzin temu",
    //   user: "IQ65",
    //   userAvatar: "https://cdn.discordapp.com/attachments/1027275122626797630/1234967742935728240/f095df25073111efb55b1b18f44c25fd.png?ex=6632a8d6&is=66315756&hm=499afe845dee6cd4ad7628f3e5923d5ae3ce741d81b8f85e0ec6dc64464da708&",
    //   image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJH4t27kYy0mvLwOq7c2D4B7cQl3byS89um2Ffh_RE-Yzz3IYHDd1BoZ1yC_FLqyL2-gpa7u5jXiSw0eTyRlhg",
    //   rarity: "red"
    // },
    // {
    //   name: "HOWL",
    //   time: "9 godzin temu",
    //   user: "IQ65",
    //   userAvatar: "https://cdn.discordapp.com/attachments/1027275122626797630/1234967742935728240/f095df25073111efb55b1b18f44c25fd.png?ex=6632a8d6&is=66315756&hm=499afe845dee6cd4ad7628f3e5923d5ae3ce741d81b8f85e0ec6dc64464da708&",
    //   image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f6pIl2-yYp9SnjA23-BBuNW-iLI-XJgFsZQyG_VW2lOq918e8uszLn2wj5HeAvkVdtQ",
    //   rarity: "gold"
    // },
    // {
    //   name: "HOWL",
    //   time: "9 godzin temu",
    //   user: "IQ65",
    //   userAvatar: "https://cdn.discordapp.com/attachments/1027275122626797630/1234967742935728240/f095df25073111efb55b1b18f44c25fd.png?ex=6632a8d6&is=66315756&hm=499afe845dee6cd4ad7628f3e5923d5ae3ce741d81b8f85e0ec6dc64464da708&",
    //   image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f6pIl2-yYp9SnjA23-BBuNW-iLI-XJgFsZQyG_VW2lOq918e8uszLn2wj5HeAvkVdtQ",
    //   rarity: "gold"
    // }
]

setInterval(() => {
  console.log('new drop')
}, 5000)
  
export const sorts = [
    {
      icon: 'https://i.imgur.com/o5ksUGM.png',
      type: 'time',
      active: true
    },
    {
      icon: 'https://i.imgur.com/jSYgz5n.png',
      type: 'likes'
    },
    {
      icon: 'https://i.imgur.com/CIskERk.png',
      type: 'best'
    }
]

export async function getLastDrops() {
  const [rows] = await connection.promise().query('SELECT * FROM last_drops')

  return rows
}
  
export const classes = {
    gold: {
      background: 'linear-gradient(0deg,rgba(228,174,57,.35) 0,transparent 200%),linear-gradient(0deg,rgba(8,27,58,.7) 0,rgba(8,27,58,.7) 100%)',
      color: '#E4AE39',
      image: ""
    },
    red: {
      background: 'linear-gradient(0deg,rgba(235,75,75,.35) 0,transparent 200%),linear-gradient(0deg,rgba(8,27,58,.7) 0,rgba(8,27,58,.7) 100%)',
      color: '#EB4B4B',
      image: "https://i.imgur.com/0Ol4M5n.png"
    },
    purple: {
      background: 'linear-gradient(0deg,rgba(131,57,157,.35) 0,transparent 200%),linear-gradient(0deg,rgba(8,27,58,.7) 0,rgba(8,27,58,.7) 100%)',
      color: '#83399D',
      image: 'https://i.imgur.com/RV8fwZ2.png'
    },
    pink: {
      background: 'linear-gradient(0deg,rgba(255,105,180,.35) 0,transparent 200%),linear-gradient(0deg,rgba(8,27,58,.7) 0,rgba(8,27,58,.7) 100%)',
      color: '#FF69B4',
      image: "https://i.imgur.com/BdxaBDx.png"
    },
    blue: {
      background: 'linear-gradient(0deg,rgba(75,105,235,.35) 0,transparent 200%),linear-gradient(0deg,rgba(8,27,58,.7) 0,rgba(8,27,58,.7) 100%)',
      color: '#4B69EB',
      image: "https://i.imgur.com/2dL3uvo.png"
    }
}