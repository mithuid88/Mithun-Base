import React from 'react'
import { useState, useEffect } from 'react'
import './Header.scss'
const Header = () => {
    const [mobActive, mobUpdateActive] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const toggleClass = () => {
        mobUpdateActive(!mobActive)
    }

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 991);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    function handleClick() {
        if (isMobile) {
            const clickedLi = event.target;
            clickedLi.classList.toggle('menu-mob');
            clickedLi.parentElement.querySelector("ul").classList.toggle("links-open");
        }
    }

    return (
        <div className='header'>
            <div className='container'>
                <nav>
                    <div className='left-nav'>
                        <img src="https://placehold.jp/70x50.png" />
                        <div className="toggle">
                            <div onClick={toggleClass} className={`clickbar ${mobActive ? "change" : ""}`}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                        </div>
                        <ul className={`${mobActive ? "open" : ""}`}>
                            <li><a href="#">Home</a></li>
                            <li onClick={handleClick}>
                                <a href="#">Shopping</a>
                                <ul>
                                    <li><a href="#">Clothes</a></li>
                                    <li><a href="#">Shoes</a></li>
                                </ul>
                            </li>
                            <li onClick={handleClick}>
                                <a href="#">Sports</a>

                                <ul>
                                    <li><a href="#">Football</a></li>
                                    <li><a href="#">F1</a></li>
                                    <li><a href="#">Cricket</a></li>
                                </ul>
                            </li>
                            <li onClick={handleClick}>
                                <a href="#">Entertainment</a>

                                <ul>
                                    <li><a href="#">Music</a></li>
                                    <li><a href="#">Cinema</a></li>

                                </ul>
                            </li>
                            <li><a href="#">Weather</a></li>
                            <li><a href="#">Food Order</a></li>
                            <li><a href="#">Registration/Login</a></li>

                            {width < 991 && (<input type="text" class="mobile-search" placeholder="Search..." />)}
                        </ul>
                    </div>
                    {width > 991 && (<div className='right-nav'>
                        <input type="text" placeholder="Search..." />
                    </div>)}
                </nav >
            </div >
        </div >
    )

}
export default Header
