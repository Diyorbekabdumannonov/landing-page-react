import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import githubLogo from '../assets/GitHub-Logo.png'
import upworkLogo from '../assets/upwork.jpg'
import vercelLogo from '../assets/vercel.jpg'
import mdnLogo from '../assets/mdn.png'
import phpLogo from '../assets/php.png'
import reactLogo from '../assets/react-logo.png'
import nodeLogo from '../assets/nodejs.webp'
import angularLogo from '../assets/angular-logo.png'
import userImg from '../assets/example5.png'

export const platforms = [
    { title: "Web", description: "A Web App", imgUrl: phpLogo },
    { title: "Web", description: "A Web App", imgUrl: reactLogo },
    { title: "Web", description: "A Web App", imgUrl: nodeLogo },
    { title: "Web", description: "A Web App", imgUrl: angularLogo },
]

export const cards = [
    githubLogo, upworkLogo, vercelLogo, mdnLogo
]

export const projects = [
    { title: "No More Maintenance Call", context: "We save your time by being your front line communications team.", imgUrl: project1 },
    { title: "No More Maintenance Call", context: "We save your time by being your front line communications team.", imgUrl: project2 },
    { title: "No More Maintenance Call", context: "We save your time by being your front line communications team.", imgUrl: project3 },
]

export const pricingInfo = [
    { title: "Full visibility", facilities: ['See all dashboard activity', 'Real time email notifications', 'Record and save whole process'] },
    { title: "Full visibility", facilities: ['See all dashboard activity', 'Real time email notifications', 'Record and save whole process'] }
]

export const comments = [
    {
        rate: 5, comment: "What you don't want as a CEO is to be burning time on operations when you're driving for sales & revenue. Once we committed to AngularCh, it changed the game for us.", user: {
            imgUrl: userImg,
            name: "Jhonny Wolff",
            occupation: "Founder and CEO at Homeroom"
        }
    },
    {
        rate: 5, comment: "What you don't want as a CEO is to be burning time on operations when you're driving for sales & revenue. Once we committed to AngularCh, it changed the game for us.", user: {
            imgUrl: userImg,
            name: "Jhonny Wolff",
            occupation: "Founder and CEO at Homeroom"
        }
    },
    {
        rate: 5, comment: "What you don't want as a CEO is to be burning time on operations when you're driving for sales & revenue. Once we committed to AngularCh, it changed the game for us.", user: {
            imgUrl: userImg,
            name: "Jhonny Wolff",
            occupation: "Founder and CEO at Homeroom"
        }
    }
]


export const links = [
    {
        columnName: 'Column One', links: [
            { name: 'Link One', href: '#' },
            { name: 'Link Two', href: '#' },
            { name: 'Link Three', href: '#' },
            { name: 'Link Four', href: '#' },
            { name: 'Link Five', href: '#' }
        ]
    },
    {
        columnName: 'Column Two', links: [
            { name: 'Link One', href: '#' },
            { name: 'Link Two', href: '#' },
            { name: 'Link Three', href: '#' },
            { name: 'Link Four', href: '#' },
            { name: 'Link Five', href: '#' }
        ]
    },
    {
        columnName: 'Column Three', links: [
            { name: 'Link One', href: '#' },
            { name: 'Link Two', href: '#' },
            { name: 'Link Three', href: '#' },
            { name: 'Link Four', href: '#' },
            { name: 'Link Five', href: '#' }
        ]
    },
]

export const navLinks = [
    { name: "Research", href: "#" },
    { name: "Products", href: "#" },
    { name: "Safety", href: "#" },
    { name: "Company", href: "#" },
]