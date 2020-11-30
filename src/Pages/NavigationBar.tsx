import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as Hamburger } from "./../Media/Icons/Hamburger.svg";
import { ScrollContext } from "./Home";

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
	const scrollRefs: IScrollRef = useContext(ScrollContext);

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
		window.addEventListener("scroll", checkDisplayNavigation);
		return () => {
			window.removeEventListener("scroll", checkDisplayNavigation);
		};
	}, []);

	useEffect(() => {
		checkDisplayMobile();
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
		<div className='navigation' style={{ opacity: navigationOpacity }}>
			<div className={`navigation-item-container ${getNavigationClassname()}`}>
				<div className='navigation-blocker' />
				<div
					className={`navigation-item ${
						navigationMobile ? "navigation-item-first" : ""
					} ${props.activeHeader == "home" ? "navigation-item-active" : ""}`}
					onClick={() => {
						window.scrollTo(0, 0);
						setNavigationMobileOpen(false);
					}}>
					Home
				</div>
				<div
					className={`navigation-item  ${
						props.activeHeader == "about" ? "navigation-item-active" : ""
					}`}
					onClick={() => {
						setNavigationMobileOpen(false);
						scrollRefs.aboutScrollRef();
					}}>
					About
				</div>
				<div
					className={`navigation-item  ${
						props.activeHeader == "skills" ? "navigation-item-active" : ""
					}`}
					onClick={() => {
						setNavigationMobileOpen(false);
						scrollRefs.skillsScrollRef();
					}}>
					Skills
				</div>
				<div
					className={`navigation-item  ${
						props.activeHeader == "projects" ? "navigation-item-active" : ""
					}`}
					onClick={() => {
						setNavigationMobileOpen(false);
						scrollRefs.projectScrollRef();
					}}>
					Projects
				</div>
				<div
					className={`navigation-item  ${
						props.activeHeader == "awards" ? "navigation-item-active" : ""
					}`}
					onClick={() => {
						setNavigationMobileOpen(false);
						scrollRefs.awardsScrollRef();
					}}>
					Awards
				</div>
				<div
					className={`navigation-item  ${
						props.activeHeader == "cultural" ? "navigation-item-active" : ""
					}`}
					onClick={() => {
						setNavigationMobileOpen(false);
						scrollRefs.culturalScrollRef();
					}}>
					Cultural
				</div>
				<div
					className={`navigation-item  ${
						props.activeHeader == "contact" ? "navigation-item-active" : ""
					}`}
					onClick={() => {
						setNavigationMobileOpen(false);
						scrollRefs.contactScrollRef();
					}}>
					Contact
				</div>
				<Hamburger
					className='hamburger'
					onClick={() => setNavigationMobileOpen(!navigationMobileOpen)}
				/>
			</div>
		</div>
	);
};
