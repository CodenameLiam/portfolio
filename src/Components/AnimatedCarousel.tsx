import React, { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Carousel } from 'react-responsive-carousel';

interface AnimatedCarouselProps {
	children:
		| (ReactChild[] & (boolean | ReactChild | ReactFragment | ReactPortal | null))
		| undefined;
	identifier: string;
	fade: 'fadeInLeft' | 'fadeInRight';
}

export const AnimatedCarousel = ({ children, identifier, fade }: AnimatedCarouselProps) => {
	const [animateCarousel, setAnimateCarousel] = useState(false);
	const [animateCarouselKey, setAnimateCarouselKey] = useState(false);

	useEffect(() => {
		animateCarousel && setTimeout(() => setAnimateCarouselKey(true), 1000);
	}, [animateCarousel]);

	return (
		<ScrollAnimation
			animateIn={fade}
			animateOnce
			// @ts-ignore
			afterAnimatedIn={() => setAnimateCarousel(true)}
			className='project-image-container'>
			<Carousel
				key={identifier + animateCarouselKey.toString()}
				autoPlay={animateCarousel}
				showThumbs={false}
				infiniteLoop={true}
				interval={5000}
				transitionTime={800}>
				{children}
			</Carousel>
		</ScrollAnimation>
	);
};
