import React from 'react'
import Header from '../Organisms/Header.jsx'
import Backtotop from '../Molecules/Backtotop.jsx'
import Footer from '../Organisms/Footer.jsx'

import Modal from '../Molecules/Modal.jsx'
import Overlay from '../Atoms/Overlay.jsx'
import { useState, useEffect } from 'react'
import RegisterForm from '../Organisms/RegisterForm.jsx'

const RegisterExhibit = () => {
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
            <RegisterForm />
            <Backtotop />
            <h1>RegisterExhibit</h1>
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


export default RegisterExhibit
