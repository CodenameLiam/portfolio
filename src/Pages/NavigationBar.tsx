import React, { useEffect, useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';

interface INavBarProps {
    activeHeader: string;
    // homeScroll: any;
}

interface IScrollRef {
    aboutScrollRef: () => void;
    skillsScrollRef: () => void;
    projectScrollRef: () => void;
    awardsScrollRef: () => void;
    culturalScrollRef: () => void;
    contactScrollRef: () => void;
}

export const NavigationBar = (props: INavBarProps) => {
    const checkDisplayNavigation = (): void => {
        if (window.scrollY > window.innerHeight - 200) {
            setNavigationOpacity(1);
        } else {
            setNavigationOpacity(0);
        }
    };

    const checkDisplayMobile = (): void => {
        if (window.innerWidth < 800) {
            setNavigationMobile(true);
        } else {
            setNavigationMobile(false);
            setNavigationMobileOpen(false);
        }
    };

    const [navigationOpacity, setNavigationOpacity] = useState(0);
    const [navigationMobile, setNavigationMobile] = useState(false);
    const [navigationMobileOpen, setNavigationMobileOpen] = useState(false);

    useEffect(() => {
        checkDisplayNavigation();
        window.addEventListener('scroll', checkDisplayNavigation);
        return () => {
            window.removeEventListener('scroll', checkDisplayNavigation);
        };
    }, []);

    useEffect(() => {
        checkDisplayMobile();
        window.addEventListener('resize', checkDisplayMobile);
        return () => {
            window.removeEventListener('resize', checkDisplayMobile);
        };
    }, []);

    useEffect(() => {
        console.log(navigationMobileOpen);
    }, [navigationMobileOpen]);

    const getNavigationClassname = () => {
        return `${!!navigationMobile ? `navigation-item-container-mobile` : ``} ${
            !!navigationMobileOpen ? `navigation-item-container-mobile-open` : ``
        }`;
    };

    return (
        <div className='navigation' style={{ opacity: navigationOpacity }}>
            <div className={`navigation-item-container ${getNavigationClassname()}`}>
                <div className='navigation-blocker' />
                <div
                    className={`navigation-item ${
                        navigationMobile ? 'navigation-item-first' : ''
                    } ${props.activeHeader === 'home' ? 'navigation-item-active' : ''}`}
                    onClick={() => {
                        window.scrollTo(0, 0);
                        setNavigationMobileOpen(false);
                    }}>
                    Home
                </div>
                <a
                    href='#about'
                    className={`navigation-item  ${
                        props.activeHeader === 'about' ? 'navigation-item-active' : ''
                    }`}>
                    About
                </a>
                <a
                    href='#skills'
                    className={`navigation-item  ${
                        props.activeHeader === 'skills' ? 'navigation-item-active' : ''
                    }`}>
                    Skills
                </a>
                <a
                    href='#projects'
                    className={`navigation-item  ${
                        props.activeHeader === 'projects' ? 'navigation-item-active' : ''
                    }`}>
                    Projects
                </a>
                <a
                    href='#awards'
                    className={`navigation-item  ${
                        props.activeHeader === 'awards' ? 'navigation-item-active' : ''
                    }`}>
                    Awards
                </a>
                <a
                    href='#cultural'
                    className={`navigation-item  ${
                        props.activeHeader === 'cultural' ? 'navigation-item-active' : ''
                    }`}>
                    Cultural
                </a>
                <a
                    href='#contact'
                    className={`navigation-item  ${
                        props.activeHeader === 'contact' ? 'navigation-item-active' : ''
                    }`}>
                    Contact
                </a>
                <div className='hamburger'>
                    <Hamburger
                        toggled={navigationMobileOpen}
                        toggle={() => setNavigationMobileOpen(!navigationMobileOpen)}
                        rounded={true}
                        color='#fde6e6'
                        size={30}
                    />
                </div>
            </div>
        </div>
    );
};
