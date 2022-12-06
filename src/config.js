import {MapPinIcon} from "@heroicons/react/24/solid";
import {EnvelopeIcon} from "@heroicons/react/20/solid";
import {GithubIcon, TwitterIcon} from "./components/utils";

const config = {
    profile: {
        username: "mikailaydogdu",
        contact: [
            {
                link: null,
                data: {
                    text: "Based in",
                    value: "Ankara"
                },
                icon: (<MapPinIcon className="h-4 w-4"/>)
            },
            {
                link: "https://github.com/mikailaydogdu",
                data: {
                    text: "GitHub",
                    value: "mikailaydogdu"
                },
                icon: (<GithubIcon className="h-4 w-4"/>)
            },
            {
                link: "https://twitter.com/MikailAydogduu",
                data: {
                    text: "Twitter",
                    value: "MikailAydogduu"
                },
                icon: (<TwitterIcon className="h-4 w-4"/>)
            },
            {
                link: "mailto:mikail.aydogdu96@gmail.com",
                data: {
                    text: "Email",
                    value: "mikail.aydogdu96@gmail.com"
                },
                icon: (<EnvelopeIcon className="h-4 w-4"/>)
            },
        ],
        techStack: ["Python", "Django", "JavaScript", "TypeScript", "React.js", "MySQL","Postgresql", "Git"],
        experience: [
            {
                period: "2022 - Today",
                position: "Backend Developer",
                institution: ""
            },
        ],
        eduction: [
            {
                period: "2016 - 2019",
                position: "Bilgisayar Programcılığı",
                institution: "Kocaeli Üniversitesi"
            },
        ],
        tryProjects: [
            {
                image: "https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/contact-icon.png",
                link: "https://redux-contacts-app.netlify.app",
                title: "Contacts app",
                description: "A React Js contacts app website.",
                date: "Still in development",
                techStack: ["React","redux", "Bootstrap","React Router","Redux Toolkit createEntityAdapter"]
            },
            {
                image: "https://www.shareicon.net/data/2015/09/22/644647_cart_512x512.png",
                link: "https://react-fakeshopapp.netlify.app",
                title: "Fakeshop app",
                description: "A React Js e-commerce website.",
                date: "Still in development",
                techStack: ["React", "Bootstrap","React Router","Context Api"]
            },
            {
                image: "http://cdn.onlinewebfonts.com/svg/img_534714.png",
                link: "https://notes-redux-app.netlify.app/",
                title: "Notes app",
                description: "A React Js Notes app.",
                date: "Still in development",
                techStack: ["React","redux", "Bootstrap","React Router"]
            },
        ]
    }
};

export default config