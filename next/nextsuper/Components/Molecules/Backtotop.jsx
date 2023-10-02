import React from 'react'
import { useState, useEffect } from 'react';
import Links from '../Atoms/Links'
import './Backtotop.scss'

function Backtotop() {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backtoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            {showButton && (
                <div className="back-to-top" onClick={backtoTop}>
                    <Links />
                </div>
            )}
        </>
    );
}

export default Backtotop;
