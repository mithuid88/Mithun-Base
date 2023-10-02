import React from 'react'
import Header from '../Organisms/Header.jsx'
import Backtotop from '../Molecules/Backtotop.jsx'
import Footer from '../Organisms/Footer.jsx'
import Links from '../Atoms/Links.jsx'
import Modal from '../Molecules/Modal.jsx'
import Overlay from '../Atoms/Overlay.jsx'
import { useState, useEffect } from 'react'
import Stickyheader from '../Atoms/Stickyheader.jsx'
import Cards from '../Molecules/Cards.jsx'
import Ctabox from '../Molecules/Ctabox.jsx'

const Shoes = () => {
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
            <Header />
            <Stickyheader>
                <Links text="Banner-carousel" href="#slick-banner" />
                <Links text="Cards" href="#card-layout" />
                <Links text="Cta-box" href="#cta-box" />
                <Links text="Baloon" href="#baloon" />
            </Stickyheader>

            <div className='container'>

                <section className="slick-parent" id="slick-banner">

                </section>
                <section className="card-layout" id="card-layout">
                    <Cards class="half" headerText="This is one card" text="this is paragraph text" btntxt="this is a label not button" />
                    <Cards class="half" headerText="This is one card" text="this is paragraph text" btntxt="this is a label not button" />
                    <Cards class="half" headerText="This is one card" text="this is paragraph text" btntxt="this is a label not button" />
                    <Cards class="half" headerText="This is one card" text="this is paragraph text" btntxt="this is a label not button" />

                </section>
                <section className="cta-parent" id="cta-box">
                    <Ctabox text="This is the shoes section" btntxt="click !!" />

                </section>
                <section className="baloon" id="baloon">



                </section>

            </div>


            <Backtotop />


            {showComponent && (
                <>
                    <Modal onClick={closeModal} />
                    <Overlay />
                </>
            )}
            <Footer />

        </>

    )

}


export default Shoes