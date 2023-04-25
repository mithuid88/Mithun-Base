import React from 'react'
import Header from '../Organisms/Header.jsx'
import Backtotop from '../Molecules/Backtotop.jsx'
import Footer from '../Organisms/Footer.jsx'
import Links from '../Atoms/Links.jsx'
import Modal from '../Molecules/Modal.jsx'
import Overlay from '../Atoms/Overlay.jsx'
import { useState, useEffect } from 'react'
import Stickyheader from '../Atoms/Stickyheader.jsx'
import './Foodorder.scss'
import Cart from '../Atoms/Cart.jsx'
import Cards from '../Molecules/Cards';

const Foodorder = () => {
    const [showComponent, setShowComponent] = useState(false);

    const [currentCount, setCurrent] = useState(0);
    const increment = () => {
        setCurrent(currentCount + 1)
    }
    const decrement = () => {
        setCurrent(currentCount - 1)
    }
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
                <Links />
                <Cart />
            </Stickyheader>

            <div className='card-wrap container'>
                <div className='card-parent'>
                    <Cards class="half" headerText="Milk" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={increment}>+</button>
                        <span>{currentCount}</span>
                        <button className='remove' onClick={decrement}>-</button>
                    </div>
                </div>

                <div className='card-parent'>
                    <Cards class="half" headerText="Biscuit" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={increment}>+</button>
                        <span>{currentCount}</span>
                        <button className='remove' onClick={decrement}>-</button>
                    </div>
                </div>
                <div className="card-parent">
                    <Cards class="half" headerText="Paneer" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={increment}>+</button>
                        <span>{currentCount}</span>
                        <button className='remove' onClick={decrement}>-</button>
                    </div>
                </div>
                <div className="card-parent">
                    <Cards class="half" headerText="Chips" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={increment}>+</button>
                        <span>{currentCount}</span>
                        <button className='remove' onClick={decrement}>-</button>
                    </div>
                </div>
                <div className="card-parent">
                    <Cards class="half" headerText="Cream" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={increment}>+</button>
                        <span>{currentCount}</span>
                        <button className='remove' onClick={decrement}>-</button>
                    </div>
                </div>
                <div className="card-parent">
                    <Cards class="half" headerText="Breads" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={increment}>+</button>
                        <span>{currentCount}</span>
                        <button className='remove' onClick={decrement}>-</button>
                    </div>
                </div>
                <div className="card-parent">
                    <Cards class="half" headerText="Berries" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={increment}>+</button>
                        <span>{currentCount}</span>
                        <button className='remove' onClick={decrement}>-</button>
                    </div>
                </div>
                <div className="card-parent">
                    <Cards class="half" headerText="Choclates" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={increment}>+</button>
                        <span>{currentCount}</span>
                        <button className='remove' onClick={decrement}>-</button>
                    </div>
                </div>
                <div className="card-parent">
                    <Cards class="half" headerText="Potatoes" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={increment}>+</button>
                        <span>{currentCount}</span>
                        <button className='remove' onClick={decrement}>-</button>
                    </div>
                </div>
                <div className="card-parent">
                    <Cards class="half" headerText="Mango" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={increment}>+</button>
                        <span>{currentCount}</span>
                        <button className='remove' onClick={decrement}>-</button>
                    </div>
                </div>
                <div className="card-parent">
                    <Cards class="half" headerText="Beetroot" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={increment}>+</button>
                        <span>{currentCount}</span>
                        <button className='remove' onClick={decrement}>-</button>
                    </div>
                </div>
                <div className="card-parent">
                    <Cards class="half" headerText="Coconut" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={increment}>+</button>
                        <span>{currentCount}</span>
                        <button className='remove' onClick={decrement}>-</button>
                    </div>
                </div>

                <Links href="#" class="more" text="Load more" />

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

export default Foodorder
