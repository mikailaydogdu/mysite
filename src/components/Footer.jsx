import {useContext, useLayoutEffect, useState} from "react";
import {ThemeContext} from "./Theme";
import themeConfig from "../config/theme";
import {getTheme} from "../helpers";

const Footer = () => {
    const {theme} = useContext(ThemeContext);
    const [themeSwitcher, setThemeSwitcher] = useState({
        link: ""
    });

    useLayoutEffect(() => {
        setThemeSwitcher({
            link: themeConfig[getTheme(theme)].footer["link"],
        });
    }, [theme]);

    return (
        <div className="flex items-center justify-center pb-7">
            <a
                href="https://github.com/mikailaydogdu"
                target="_blank"
                rel="noreferrer"
                className={`border ${themeSwitcher.link} px-4 py-3 text-sm border rounded-md shadow-lg`}
            >
                Inspired by <span className="text-indigo-600">GitProfile</span> and build with ❤️
            </a>
        </div>
    );
};

export default Footer;