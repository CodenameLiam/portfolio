import React, { useEffect, useState } from "react";
import { ReactComponent as Hamburger } from "./../Media/Icons/Hamburger.svg";

export const NavigationBar = () => {
    const checkDisplayNavigation = () => {
        if (window.scrollY > window.innerHeight - 100) {
            setNavigationOpacity(1);
        } else {
            setNavigationOpacity(0);
        }
    };

    const checkDisplayMobile = () => {
        if (window.innerWidth < 700) {
            setNavigationMobile(true);
        } else {
            return setNavigationMobile(false);
        }
    };

    const [navigationOpacity, setNavigationOpacity] = useState(0);
    const [navigationMobile, setNavigationMobile] = useState(false);
    const [navigationMobileOpen, setNavigationMobileOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", checkDisplayNavigation);
        return () => {
            window.removeEventListener("scroll", checkDisplayNavigation);
        };
    }, []);

    useEffect(() => {
        window.addEventListener("resize", checkDisplayMobile);
        return () => {
            window.removeEventListener("resize", checkDisplayMobile);
        };
    }, []);

    const getNavigationClassname = () => {
        return `${!!navigationMobile ? `navigation-item-container-mobile` : ``} ${
            !!navigationMobileOpen ? `navigation-item-container-mobile-open` : ``
        }`;
    };

    return (
        <div className="navigation" style={{ opacity: navigationOpacity }}>
            <div className={`navigation-item-container ${getNavigationClassname()}`}>
                <div className="navigation-item navigation-item-first">Home</div>
                <div className="navigation-item">About</div>
                <div className="navigation-item">Skills</div>
                <div className="navigation-item">Projects</div>
                <div className="navigation-item">Awards</div>
                <div className="navigation-item">Contact</div>
                <Hamburger
                    className="hamburger"
                    onClick={() => setNavigationMobileOpen(!navigationMobileOpen)}
                />
            </div>
        </div>
    );
};
