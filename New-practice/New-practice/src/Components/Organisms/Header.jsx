import React from 'react'
import { useState, useEffect } from 'react'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'
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
                            <li><NavLink to="/">Home</NavLink></li>
                            <li onClick={handleClick}>
                                <NavLink to="/">Shopping</NavLink>
                                <ul>
                                    <li><NavLink to="/clothes">Clothes</NavLink></li>
                                    <li><NavLink to="/shoes">Shoes</NavLink></li>
                                </ul>
                            </li>
                            <li onClick={handleClick}>
                                <NavLink to="/">Sports</NavLink>

                                <ul>
                                    <li><NavLink to="/football">Football</NavLink></li>
                                    <li><NavLink to="/cricket">Cricket</NavLink></li>
                                </ul>
                            </li>
                            <li onClick={handleClick}>
                                <NavLink to="/">Entertainment</NavLink>

                                <ul>
                                    <li><NavLink to="/music">Music</NavLink></li>
                                    <li><NavLink to="/cinema">Cinema</NavLink></li>

                                </ul>
                            </li>
                            <li><NavLink to="/registerexhibit">Exhibition Register</NavLink></li>
                            <li><NavLink to="/foodorder">Food Order</NavLink></li>
                            <li><NavLink to="/registration">Registration/Login</NavLink></li>

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
