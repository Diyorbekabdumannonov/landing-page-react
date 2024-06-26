import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import githubLogo from './assets/GitHub-Logo.png'
import upworkLogo from './assets/upwork.jpg'
import vercelLogo from './assets/vercel.jpg'
import mdnLogo from './assets/mdn.png'
import phpLogo from './assets/php.png'
import reactLogo from './assets/react-logo.png'
import nodeLogo from './assets/nodejs.webp'
import angularLogo from './assets/angular-logo.png'
import userImg from './assets/example5.png'
import fiverLogo from './assets/fiver.jpg'
import { FaFacebook, FaPhone, FaPrint } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoMdMail } from 'react-icons/io'

export const platforms = [
    { title: "Web", description: "A Web App", imgUrl: phpLogo },
    { title: "Web", description: "A Web App", imgUrl: reactLogo },
    { title: "Web", description: "A Web App", imgUrl: nodeLogo },
    { title: "Web", description: "A Web App", imgUrl: angularLogo },
]

export const cards = [
    githubLogo, upworkLogo, vercelLogo, fiverLogo, mdnLogo
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
        rate: [1, 1, 1, 1, 1], comment: "What you don't want as a CEO is to be burning time on operations when you're driving for sales & revenue. Once we committed to AngularCh, it changed the game for us.", user: {
            imgUrl: userImg,
            name: "Jhonny Wolff",
            occupation: "Founder and CEO at Homeroom"
        }
    },
    {
        rate: [5], comment: "What you don't want as a CEO is to be burning time on operations when you're driving for sales & revenue. Once we committed to AngularCh, it changed the game for us.", user: {
            imgUrl: userImg,
            name: "Jhonny Wolff",
            occupation: "Founder and CEO at Homeroom"
        }
    },
    {
        rate: [5], comment: "What you don't want as a CEO is to be burning time on operations when you're driving for sales & revenue. Once we committed to AngularCh, it changed the game for us.", user: {
            imgUrl: userImg,
            name: "Jhonny Wolff",
            occupation: "Founder and CEO at Homeroom"
        }
    }
]


export const links = [
    {
        columnName: 'PRODUCTS', links: [
            { name: 'Angular', href: '#' },
            { name: 'React', href: '#' },
            { name: 'Vue', href: '#' },
            { name: 'Laravel', href: '#' },
        ]
    },
    {
        columnName: 'USEFUL LINKS', links: [
            { name: 'Pricing', href: '#' },
            { name: 'Settings', href: '#' },
            { name: 'Orders', href: '#' },
            { name: 'Help', href: '#' },
        ]
    },
    {
        columnName: 'CONTACT', links: [
            { icon: <FaHome />, name: 'New York, NY 10012, US', href: '#' },
            { icon: <IoMdMail />, name: 'info@example.com', href: '#' },
            { icon: <FaPhone />, name: '+01 234 567 88', href: '#' },
            { icon: <FaPrint />, name: '+01 234 567 89', href: '#' },
        ]
    },
]

export const navLinks = [
    { name: "Research", href: "#" },
    { name: "Products", href: "#" },
    { name: "Safety", href: "#" },
    { name: "Company", href: "#" },
]

export const languages = [
    { languageName: "FrontEnd", langs: ['html/css', 'bootstrap/tailwind', 'react/nextjs', 'angular'] },
    { languageName: "Backend", langs: ['nodejs', 'php', 'mongodb'] },
]

export const icons = [
    <FaFacebook />,
    <FaXTwitter />,
    <FaGoogle />,
    <FaLinkedin />,
    <FaInstagram />,
    <FaGithub />
]


export const highlightedText = [
    `Lorem ipsum, dolor sit amet consectetur
adipisicing elit. Itaque reprehenderit
vero sint explicabo eligendi, porro ratione
excepturi magnam ad, veritatis quaerat officiis
nisi quam iusto quibusdam. Exercitationem
perferendis maiores reiciendis iure.
Numquam eligendi quidem laudantium. Incidunt
obcaecati perspiciatis assumenda illum nobis
sit animi aut ad veniam fugiat, eos laborum ullam.
obcaecati perspiciatis assumenda illum nobis
sit animi aut ad veniam fugiat, eos laborum ullam.`,
    `
import { JsonObject } from '@angular-devkit/core';
  
interface Options extends JsonObject {
    source: string;
    destination: string;
}
    
export default createBuilder(copyFileBuilder);
    
  async function copyFileBuilder(
    options: Options,
    context: BuilderContext,
  Promise<BuilderOutput> {}</code>`,
    `<?php
// create an object
$Lightning = new Car();

// show object properties
echo $Lightning->model;
// prints: mysql link
$c = mysql_connect();
echo get_resource_type($c) . "\n";
    
// prints: stream
$fp = fopen("foo", "w");
echo get_resource_type($fp) . "\n";
    
// prints: domxml document
$doc = new_xmldoc("1.0");
echo get_resource_type($doc->doc) . "\n";
?>`
] 