import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', {
    state: () => ({
        events: [
            {
                id: 1,
                image:
                    "https://res.cloudinary.com/rukkiecodes/image/upload/v1673565438/wanlainjo/events/leveraging_the_tech_space_afz954.jpg",
                name: "Leveraging the Tch space",
                description:
                    "This event is for those who are interested in learning how to leverage the tech space to build a career in tech",
                links: [
                    {
                        icon: "mdi-linkedin",
                        link: "https://www.linkedin.com/in/john-doe-123456789/",
                    },
                    {
                        icon: "mdi-twitter",
                        link: "https://twitter.com/johndoe",
                    },
                    {
                        icon: "mdi-instagram",
                        link: "https://www.instagram.com/johndoe/",
                    },
                ],
                gallery: [
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673642674/wanlainjo/events/leveraging%20the%20tech%20space/WhatsApp_Image_2023-01-13_at_12.16.58_gfxflz.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673642674/wanlainjo/events/leveraging%20the%20tech%20space/WhatsApp_Image_2023-01-13_at_21.34.32_qafkl8.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640664/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1119_pjsrqr.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640664/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1100_s62gbv.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640663/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1099_gycctg.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640663/wanlainjo/events/leveraging%20the%20tech%20space/IMG_0870_cyivi4.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640653/wanlainjo/events/leveraging%20the%20tech%20space/IMG_0852_vsftp6.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640646/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1045_abo0wi.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640644/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1021_tgyyhf.jpg'
                ],
                article: [
                    `Port Harcourt, the capital city of Rivers State, Nigeria, is slowly becoming a tech hub in Nigeria. The city is gradually leveraging the tech space, with more startups emerging and the government investing in the sector. Wanlainjo Tech Hub is one of the tech hubs in the city that is leading the charge.`,
                    `Recently, Wanlainjo Tech Hub hosted an event that brought together tech enthusiasts, startups, investors, and government officials to discuss ways to leverage the tech space in Port Harcourt. The event was aimed at fostering collaboration, innovation, and growth in the sector.`,
                    `The event featured several keynote speakers who shared their experiences and insights on the tech industry in Port Harcourt. One of the speakers, a successful entrepreneur who started a tech company in Port Harcourt, shared his journey and challenges he faced while growing his business. He encouraged startups to stay focused and committed to their goals, no matter the challenges they face.`,
                    `Another speaker, a government official, talked about the government's commitment to the tech sector in Port Harcourt. He highlighted the various initiatives and policies the government has put in place to support the growth of the sector. He also urged startups to take advantage of the government's programs and initiatives, such as tax incentives, to grow their businesses.`,
                    `The event also featured a panel discussion where startup founders shared their experiences and challenges in the tech industry. They discussed issues such as funding, talent acquisition, and mentorship. They urged the government to create more funding opportunities for startups and provide more support in terms of mentorship and skills development.`,
                    `Overall, the event was a success, with attendees leaving with a deeper understanding of the tech industry in Port Harcourt and the various opportunities available. It also provided a platform for networking and collaboration among startups, investors, and government officials.`,
                    `Leveraging the tech space in Port Harcourt is crucial for the city's economic growth and development. The tech sector has the potential to create jobs, attract investments, and contribute to the city's GDP. Therefore, it is important for the government, private sector, and startups to work together to create an enabling environment for the sector to thrive.`,
                    `In conclusion, the Wanlainjo Tech Hub event was a step in the right direction towards leveraging the tech space in Port Harcourt. It provided a platform for stakeholders to share ideas, collaborate, and learn from one another. With more initiatives like this, Port Harcourt is well on its way to becoming a tech hub in Nigeria.`
                ]
            },
            {
                id: 2,
                image:
                    "https://res.cloudinary.com/rukkiecodes/image/upload/v1676810027/wanlainjo/events/WhatsApp_Image_2023-02-13_at_12.36.38_ea7b9x.jpg",
                name: "Skills vs Physical Gifts",
                description:
                    "Our Valentine's Day special event where we discussed the importance of skills and how it can help you achieve your goals.",
                links: [
                    {
                        icon: "mdi-linkedin",
                        link: "https://www.linkedin.com/in/john-doe-123456789/",
                    },
                    {
                        icon: "mdi-twitter",
                        link: "https://twitter.com/johndoe",
                    },
                    {
                        icon: "mdi-instagram",
                        link: "https://www.instagram.com/johndoe/",
                    },
                ],
                gallery: [
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673642674/wanlainjo/events/leveraging%20the%20tech%20space/WhatsApp_Image_2023-01-13_at_12.16.58_gfxflz.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673642674/wanlainjo/events/leveraging%20the%20tech%20space/WhatsApp_Image_2023-01-13_at_21.34.32_qafkl8.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640664/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1119_pjsrqr.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640664/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1100_s62gbv.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640663/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1099_gycctg.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640663/wanlainjo/events/leveraging%20the%20tech%20space/IMG_0870_cyivi4.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640653/wanlainjo/events/leveraging%20the%20tech%20space/IMG_0852_vsftp6.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640646/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1045_abo0wi.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640644/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1021_tgyyhf.jpg'
                ],
                article: [
                    `Valentine's Day is a day that is celebrated all around the world as a day to show love and appreciation to those we care about. It is a day when people show their love and affection to their loved ones through various means, such as gifts, chocolates, flowers, and cards. However, when it comes to showing love, what matters most? Is it the physical gifts or the skills we possess?`,
                    `Wanlainjo Tech Hub recently hosted a Valentine's Day event live on radio, where they discussed this topic. The event focused on the idea of skills vs physical gifts and which one is more important when it comes to showing love and appreciation.`,
                    `The event was aimed at educating people about the importance of skills in relationships and how they can be used to show love and appreciation. The speakers at the event highlighted that while physical gifts are great, they are temporary and may not always be meaningful. Skills, on the other hand, are more valuable and long-lasting, and can be used to make a difference in the lives of those we care about.`,
                    `One of the speakers at the event, a relationship expert, explained that skills are the key to showing love and appreciation in relationships. She pointed out that skills such as listening, communication, empathy, and compromise are essential for building strong and healthy relationships. She emphasized that these skills can be learned and developed, and are more valuable than any physical gift.`,
                    `Another speaker, a successful entrepreneur, shared his experience of how his skills helped him to build a successful business and how he uses those skills to show love and appreciation to his loved ones. He stated that his skills, such as problem-solving, innovation, and creativity, have helped him to create a better life for himself and those around him.`,
                    `The discussion at the Wanlainjo Tech Hub Valentine's Day event highlighted the importance of skills in relationships and how they can be used to show love and appreciation. While physical gifts are great, they are not always the most meaningful way to show love. Skills such as communication, empathy, problem-solving, and creativity are more valuable in the long run.`,
                    `In conclusion, the Wanlainjo Tech Hub Valentine's Day event was a great way to celebrate love and appreciation. It provided a platform to discuss the importance of skills in relationships and how they can be used to show love and appreciation. While physical gifts are great, they are not always the most meaningful way to show love. Skills, on the other hand, are more valuable and long-lasting and can make a significant difference in the lives of those we care about.`
                ]
            },
            {
                id: 3,
                image:
                    "https://res.cloudinary.com/rukkiecodes/image/upload/v1676810026/wanlainjo/events/WhatsApp_Image_2023-02-14_at_08.26.49_qdtzqm.jpg",
                name: "Leveraging the Tch space",
                name: "Skills vs Physical Gifts",
                description:
                    "Our Valentine's Day special event where we discussed the importance of skills and how it can help you achieve your goals.",
                links: [
                    {
                        icon: "mdi-linkedin",
                        link: "https://www.linkedin.com/in/john-doe-123456789/",
                    },
                    {
                        icon: "mdi-twitter",
                        link: "https://twitter.com/johndoe",
                    },
                    {
                        icon: "mdi-instagram",
                        link: "https://www.instagram.com/johndoe/",
                    },
                ],
                gallery: [
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673642674/wanlainjo/events/leveraging%20the%20tech%20space/WhatsApp_Image_2023-01-13_at_12.16.58_gfxflz.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673642674/wanlainjo/events/leveraging%20the%20tech%20space/WhatsApp_Image_2023-01-13_at_21.34.32_qafkl8.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640664/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1119_pjsrqr.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640664/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1100_s62gbv.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640663/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1099_gycctg.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640663/wanlainjo/events/leveraging%20the%20tech%20space/IMG_0870_cyivi4.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640653/wanlainjo/events/leveraging%20the%20tech%20space/IMG_0852_vsftp6.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640646/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1045_abo0wi.jpg',
                    'https://res.cloudinary.com/rukkiecodes/image/upload/v1673640644/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1021_tgyyhf.jpg'
                ],
                article: [
                    `Valentine's Day is a time when people often show their affection and appreciation for their loved ones through gifts, acts of service, or other expressions of love. However, when it comes to choosing a gift, the age-old debate between skills and physical gifts arises. Which is better: a skill-based gift or a physical one?`,
                    `Wanlainjo Tech hub, in collaboration with a local radio station, recently held a Valentine's Day event that shed some light on this topic. The event featured discussions on the importance of skills and physical gifts in relationships, and how both can play a vital role in expressing love.`,
                    `Skills-based gifts refer to gifts that are related to one's abilities or talents. These gifts can include things like writing a heartfelt letter, cooking a delicious meal, or creating a handmade item such as a piece of art or jewelry. These types of gifts require time, effort, and creativity, but they can also be deeply meaningful to the recipient.`,
                    `On the other hand, physical gifts are more traditional and tangible, such as flowers, chocolates, or jewelry. While these gifts can be beautiful and thoughtful, they are often seen as more superficial and less personal than skill-based gifts.`,
                    `So, which is better? The answer is that it depends on the relationship and the individuals involved. While some people may prefer the thoughtfulness and effort of a skill-based gift, others may prefer the simplicity and practicality of a physical gift.`,
                    `Ultimately, the key to giving a successful gift is to understand your partner's preferences and needs. This requires communication, empathy, and a willingness to listen and understand what your partner values most.`,
                    `At the Wanlainjo Tech hub event, participants shared stories of successful gifts they had given or received. Some emphasized the importance of taking the time to understand their partner's interests and needs, while others spoke about the value of surprises and spontaneity.`,
                    `In the end, the message was clear: whether it's a skill-based gift or a physical one, what matters most is the love and thoughtfulness behind the gift. By taking the time to understand your partner's needs and desires, and by putting effort into your gift-giving, you can create a meaningful and lasting expression of your love.`
                ]
            },
        ]
    })
})