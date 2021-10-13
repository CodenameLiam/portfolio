import React from 'react';
import { ReactComponent as BorderPath } from './../Media/Graphics/Border.svg';

interface ISectionProps {
    id?: string;
    className?: string;
    scrollRef?: any;
}

export const SectionBreak = (props: ISectionProps) => {
    return (
        <div id={props.id} className={`section-break ${props.className}`} ref={props.scrollRef}>
            <BorderPath className='section-border' />
        </div>
    );
};
