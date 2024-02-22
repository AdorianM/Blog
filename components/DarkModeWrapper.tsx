"use client";
import { useEffect, useState } from "react";

export const DarkModeWrapper = ({ children }: any) => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const localStorageTheme = window.localStorage.getItem("theme");
        if (localStorageTheme) {
        setDarkMode(localStorageTheme === "dark");
        } else {
        setDarkMode(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
    }, []);
    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            {children}
        </div>
    );
};