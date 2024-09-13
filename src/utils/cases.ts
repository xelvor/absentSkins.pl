export const caseTypes = {
    trophy: {
        name: "Trophy Case",
        price: 8.40,
        drop: [
            {
                rarity: "red",
                chance: 0,
                id: "skin-34406636"
            },
            {
                rarity: "red",
                chance: 0,
                id: "skin-1049596"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "skin-460712"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "skin-590548"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "skin-853680"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "skin-2231864"
            },
            {
                rarity: "red",
                chance: 0,
                id: "skin-2362008"
            },
            {
                rarity: "red",
                chance: 0,
                id: "skin-525408"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "skin-1245264"
            },
            {
                rarity: "blue",
                chance: 0,
                id: "skin-2098504"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "skin-2296624"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "skin-2165564"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "skin-3937052"
            },
            {
                rarity: "blue",
                chance: 0,
                id: "skin-1706040"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "skin-2560508"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "skin-267052"
            },
            {
                rarity: "blue",
                chance: 0,
                id: "skin-2361896"
            },
            {
                rarity: "blue",
                chance: 0,
                id: "skin-201120"
            }
        ]
    },

    colorful: {
        name: "Colorful Case",
        price: 2.10,
        drop: [
            {
                rarity: "red",
                chance: 0,
                id: "sticker-7245"
            },
            {
                rarity: "red",
                chance: 0,
                id: "sticker-5957"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "sticker-4864"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "sticker-4862"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "sticker-4870"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "sticker-5943"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "sticker-7251"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "sticker-5960"
            },
            {
                rarity: "red",
                chance: 0,
                id: "sticker-5935"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "sticker-4918"
            },
            {
                rarity: "pink",
                chance: 0,
                id: "sticker-3981"
            },
            {
                rarity: "pink",
                chance: 0,
                id: "sticker-5958"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "sticker-368"
            },
            {
                rarity: "pink",
                chance: 0,
                id: "sticker-3965"
            },
            {
                rarity: "pink",
                chance: 0,
                id: "sticker-5949"
            },
            {
                rarity: "pink",
                chance: 0,
                id: "sticker-3958"
            },
            {
                rarity: "pink",
                chance: 0,
                id: "sticker-2934"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "sticker-4692"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "sticker-6601"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "sticker-3978"
            },
            {
                rarity: "blue",
                chance: 0,
                id: "sticker-267"
            },
            {
                rarity: "blue",
                chance: 0,
                id: "sticker-175"
            },
            {
                rarity: "pink",
                chance: 0,
                id: "sticker-5954"
            },
            {
                rarity: "blue",
                chance: 0,
                id: "sticker-3968"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "sticker-4510"
            },
            {
                rarity: "purple",
                chance: 0,
                id: "sticker-981"
            },
            {
                rarity: "blue",
                chance: 0,
                id: "sticker-3950"
            },
            {
                rarity: "blue",
                chance: 0,
                id: "sticker-36"
            },
            {
                rarity: "blue",
                chance: 0,
                id: "sticker-5927"
            },
            {
                rarity: "blue",
                chance: 0,
                id: "sticker-7239"
            },
            {
                rarity: "blue",
                chance: 0,
                id: "sticker-4688"
            },
            {
                rarity: "blue",
                chance: 0,
                id: "sticker-5930"
            },
            {
                rarity: "blue",
                chance: 0,
                id: "sticker-5909"
            },
            {
                rarity: "blue",
                chance: 0,
                id: "sticker-7241"
            },

        ]
    },
}

export function randomString(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export const cases = [
    {
        name: "Regular Case",
        cases: [
            {
                name: 'Daily Case',
                href : '/case/daily',
                price: 0,
                image: "https://i.imgur.com/Qd16cW7.png"
            },
            {
                name: "Low Case",
                href : '/case/low',
                price: 1.26,
                image: "https://i.imgur.com/B72mIJW.png"
            },
            {
                name: "Indirect Case",
                href : '/case/indirect',
                price: 2.10,
                image: "https://i.imgur.com/nLF3gxB.png"
            },
            {
                name: "Medium Case",
                href : '/case/medium',
                price: 3.15,
                image: "https://i.imgur.com/Yy2bz5Q.png"
            },
            {
                name: "Ultra Case",
                href : '/case/ultra',
                price: 4.20,
                image: "https://i.imgur.com/1mcTPiV.png"
            },
            {
                name: "Rust Case",
                href : '/case/rust',
                price: 4.62,
                image: "https://i.imgur.com/Jjpndf4.png"
            },
            {
                name: "Chocolate Case",
                href : '/case/chocolate',
                price: 5.88,
                image: "https://i.imgur.com/wXho6Rz.png"
            },
            {
                name: "Ember Case",
                href : '/case/ember',
                price: 6.30,
                image: "https://i.imgur.com/ykrc6Tb.png"
            },
            {
                name: "Neon Case",
                href : '/case/neon',
                price: 8.40,
                image: "https://i.imgur.com/RjBOnLQ.png"
            },
            {
                name: "Plague Case",
                href : '/case/plague',
                price: 8.40,
                image: "https://i.imgur.com/QcljpLT.png"
            },
            {
                name: "Trophy Case",
                href : '/case/trophy',
                price: 8.40,
                image: "https://i.imgur.com/s4m8TBa.png"
            },
            {
                name: "Toolbox Case",
                href : '/case/toolbox',
                price: 8.40,
                image: "https://i.imgur.com/QcljpLT.png"
            },
            {
                name: "Spring Case",
                href : '/case/spring',
                price: 12.60,
                image: "https://i.imgur.com/ok4C0K9.png"
            },
            {
                name: "Lovely Case",
                href : '/case/lovely',
                price: 12.60,
                image: "https://i.imgur.com/DXWFNMc.png"
            },
            {
                name: "Ninja Case",
                href : '/case/ninja',
                price: 14.28,
                image: "https://i.imgur.com/DXWFNMc.png"
            },
            {
                name: "Striking Ninja Case",
                href : '/case/striking-ninja',
                price: 16.80,
                image: "https://i.imgur.com/4GQlGXf.png"
            },
            {
                name: "Duck Case",
                href : '/case/duck',
                price: 21.00,
                image: "https://i.imgur.com/UrGUb35.png"
            },
            {
                name: "Ruthless Case",
                href : '/case/ruthless',
                price: 27.30,
                image: "https://i.imgur.com/RXZLWAq.png"
            },
            {
                name: "Water Case",
                href : '/case/water',
                price: 31.50,
                image: "https://i.imgur.com/4YVqt03.png"
            },
            {
                name: "G2a Case",
                href : '/case/g2a',
                price: 42.00,
                image: "https://i.imgur.com/hWDK849.png"
            },
            {
                name: "Cyber Case",
                href : '/case/cyber',
                price: 50.40,
                image: "https://i.imgur.com/tt3u1RA.png"
            },
            {
                name: "Elegant Case",
                href : '/case/elegant',
                price: 63.00,
                image: "https://i.imgur.com/zBW7lYZ.png"
            },
            {
                name: "Death Case",
                href : '/case/death',
                price: 84.00,
                image: "https://i.imgur.com/nQjNc7g.png"
            },
            {
                name: "Beast Case",
                href : '/case/beast',
                price: 126.00,
                image: "https://i.imgur.com/nQjNc7g.png"
            },
            {
                name: "Anarchy Case",
                href : '/case/anarchy',
                price: 210.00,
                image: "https://i.imgur.com/nZzqNVj.png"
            },
            {
                name: "Luxurious Case",
                href : '/case/luxurious',
                price: 420.00,
                image: "https://i.imgur.com/nZzqNVj.png"
            },
            {
                name: "Royal Case",
                href : '/case/royal',
                price: 630.00,
                image: "https://i.imgur.com/ohq4yIT.png"
            },
            {
                name: "Amethyst Case",
                href : '/case/amethyst',
                price: 840.00,
                image: "https://i.imgur.com/2UGUz7K.png"
            }
        ]
    }
]