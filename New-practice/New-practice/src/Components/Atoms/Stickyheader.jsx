import React, { useEffect, useState } from 'react'
import "./Stickyheader.scss"

function Stickyheader(props) {
    const [pos, setPos] = useState(false);

    useEffect(() => {
        const headerHeight = document.querySelector(".header").offsetHeight;
        console.log(headerHeight);
        const handlePos = () => {
            if (window.scrollY > headerHeight) {
                setPos(true);
            } else {
                setPos(false);
            }
        };

        window.addEventListener('scroll', handlePos);

        return () => {
            window.removeEventListener('scroll', handlePos);
        };
    }, []);

    return (
        <div className={`sticky-header ${pos ? 'is-sticky' : ''}`}>
            {props.children}
        </div>
    )
}

export default Stickyheader;
