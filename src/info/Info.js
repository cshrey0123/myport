import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export let singlePage = false;


 

export const info = {
    firstName: "Shreyansh",
    lastName: "Chaurasia",
    initials: "HI", 
    position: "A Front End Devoloper",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Noida'
        },
        {
            emoji: "💼",
            text: "student at Jssate Noida"
        },
        {
            emoji: "📧",
            text: "cshrey123@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://pdflink.to/2e6274d8/",
            icon: 'fa  fa-book',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/cshrey_/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/cshrey0123",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/shreyansh-chaurasia-1a81862b5/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/cshrey_",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "Hello! I'm Shreyansh. I'm a Frontend devoloper. I am currently studying Information Technology at at JSSATE Noida, I enjoy building real world websites, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Booklot",
            live: "https://booklot1.netlify.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/cshrey0123/book.lot", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "CryptoBillions",
            live: "https://cryptobillions.netlify.app",
            source: "https://github.com/cshrey0123/cryptobillions",
            image: mock2
        },
        {
            title: "TinDog",
            live: "https://tindog11111.netlify.app",
            source: "https://github.com/cshrey0123/TinDog",
            image: mock3
        },
        {
            title: "Gemini chat clone",
            live: "https://papaya-halva-f54856.netlify.app",
            source: "https://github.com/cshrey0123/clonegemini",
            image: mock4
        },
 
    ]
}