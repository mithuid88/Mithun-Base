import React from 'react'
import Composition from '../Atoms/Composition.jsx'
import Header from '../Organisms/Header.jsx'
import Backtotop from '../Molecules/Backtotop.jsx'
import Footer from '../Organisms/Footer.jsx'
import HomeBanner from '../Molecules/HomeBanner.jsx'
import Modal from '../Molecules/Modal.jsx'
import Overlay from '../Atoms/Overlay.jsx'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [showComponent, setShowComponent] = useState(false);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!localStorage.getItem('modal')) {
                setShowComponent(true);
            }

        }, 6000);

        return () => clearTimeout(timeoutId);
    }, []);

    const closeModal = () => {
        setShowComponent(false);
        localStorage.setItem("modal", true);
    }
    return (
        <>
            <Composition class="cs">
                <Header />
                <HomeBanner class="maroon">
                    <Link to="/cricket">Cricket</Link>
                </HomeBanner>
                <HomeBanner class="lime-green">
                    <Link to="/shoes">Shoes</Link>
                </HomeBanner>
                <HomeBanner class="aqua">
                    <Link to="/football">Football</Link>
                </HomeBanner>
                <HomeBanner class="red">
                    <Link to="/cinema">Cinema</Link>
                </HomeBanner>
                <HomeBanner class="orange">
                    <Link to="/registerexhibit">Exhibition Register</Link>
                </HomeBanner>
                <HomeBanner class="yellow">
                    <Link to="/foodorder">Food Order</Link>
                </HomeBanner>
                <HomeBanner class="blue">
                    <Link to="/registration">School Registration</Link>
                </HomeBanner>
                <Backtotop />


                {showComponent && (
                    <>
                        <Modal onClick={closeModal} />
                        <Overlay />
                    </>
                )}
                <Footer />
            </Composition >
        </>

    )

}


export default Home
