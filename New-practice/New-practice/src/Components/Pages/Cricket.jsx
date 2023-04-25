import React, { useState, useEffect } from 'react';
import Header from '../Organisms/Header';
import Backtotop from '../Molecules/Backtotop';
import Footer from '../Organisms/Footer';
import Modal from '../Molecules/Modal';
import Overlay from '../Atoms/Overlay';
import './Cricket.scss';
import Slider from "react-slick";
import Cards from '../Molecules/Cards';

const criclink = [
    {
        id: 'id1',
        content: 'some links',
    },
    {
        id: 'id2',
        content: 'some links',
    },
    {
        id: 'id3',
        content: 'some links',
    },
    {
        id: 'id4',
        content: 'some links',
    },
    {
        id: 'id5',
        content: 'some links',
    },
    {
        id: 'id6',
        content: 'some links',
    },
    {
        id: 'id7',
        content: 'some links',
    },
    {
        id: 'id8',
        content: 'some links',
    },
    {
        id: 'id9',
        content: 'some links',
    },
    {
        id: 'id10',
        content: 'some links',
    },
    {
        id: 'id11',
        content: 'some links',
    },
];

const cricsecondlink = [
    {
        id: 'id1',
        content: 'some second links',
    },
    {
        id: 'id2',
        content: 'some second links',
    },
    {
        id: 'id3',
        content: 'some second links',
    },
    {
        id: 'id4',
        content: 'some second links',
    },
    {
        id: 'id5',
        content: 'some second links',
    },
    {
        id: 'id6',
        content: 'some second links',
    },
    {
        id: 'id7',
        content: 'some second links',
    },
    {
        id: 'id8',
        content: 'some second links',
    },

];



const Cricket = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!localStorage.getItem('modal')) {
                setShowModal(true);
            }
        }, 6000);

        return () => clearTimeout(timeoutId);
    }, []);

    const closeModal = () => {
        setShowModal(false);
        localStorage.setItem('modal', true);
    };

    const criclinkpos = (links) =>
        links.map((link) => (
            <li key={link.id}>
                <a href="#">{link.content}</a>
            </li>
        ));

    return (
        <>

            <Header />

            <div className="cricket-main container">
                <div className="links-tray">
                    <ul>{criclinkpos(criclink)}</ul>
                </div>
                <div className="section-main">
                    <div className='slick-block'>
                        <Slider {...settings}>
                            <div>
                                <Cards headerText="this is a slider item" text="cricket is a best game" btntxt="btntxt" />
                            </div>
                            <div>
                                <Cards headerText="this is a slider item" text="cricket is a best game" btntxt="btntxt" />
                            </div>
                            <div>
                                <Cards headerText="this is a slider item" text="cricket is a best game" btntxt="btntxt" />
                            </div>
                            <div>
                                <Cards headerText="this is a slider item" text="cricket is a best game" btntxt="btntxt" />
                            </div>
                            <div>
                                <Cards headerText="this is a slider item" text="cricket is a best game" btntxt="btntxt" />
                            </div>
                            <div>
                                <Cards headerText="this is a slider item" text="cricket is a best game" btntxt="btntxt" />
                            </div>
                        </Slider>
                    </div>



                </div>
                <div className="links-tray-two">
                    <ul> {criclinkpos(cricsecondlink)}</ul>


                </div>
            </div>
            <Backtotop />
            {showModal && (
                <>
                    <Modal onClick={closeModal} />
                    <Overlay />
                </>
            )}
            <Footer />
        </>
    );
};

export default Cricket;
