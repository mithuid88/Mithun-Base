import React from 'react'
import Header from '../Organisms/Header.jsx'
import Backtotop from '../Molecules/Backtotop.jsx'
import Footer from '../Organisms/Footer.jsx'
import Links from '../Atoms/Links.jsx'
import Modal from '../Molecules/Modal.jsx'
import Overlay from '../Atoms/Overlay.jsx'
import { useState, useEffect, useReducer } from 'react'
import Stickyheader from '../Atoms/Stickyheader.jsx'
import './Foodorder.scss'
import Cart from '../Atoms/Cart.jsx'
import Cards from '../Molecules/Cards';
const initialState = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
    counter5: 0,
    counter6: 0,
    counter7: 0,
    counter8: 0,
    counter9: 0,
    counter10: 0,
    counter11: 0,
    counter12: 0,

};
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, [action.counterName]: state[action.counterName] + 1 };
        case 'decrement':
            const newValue = state[action.counterName] - 1;
            return {
                ...state,
                [action.counterName]: newValue < 0 ? 0 : newValue
            };
        default:
            return state;
    }
}
const Foodorder = () => {
    const [state, dispatch] = useReducer(reducer, initialState);


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
                <Links />
                <Cart />
            </Stickyheader>

            <div className='card-wrap container'>
                <div className='card-parent'>
                    <Cards class="half" headerText="Milk" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={() => dispatch({ type: 'increment', counterName: 'counter1' })}>+</button>
                        <span>{state.counter1}</span>
                        <button className='remove' onClick={() => dispatch({ type: 'decrement', counterName: 'counter1' })}>-</button>
                    </div>
                </div>
                <div className='card-parent'>
                    <Cards class="half" headerText="Biscuit" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={() => dispatch({ type: 'increment', counterName: 'counter2' })}>+</button>
                        <span>{state.counter2}</span>
                        <button className='remove' onClick={() => dispatch({ type: 'decrement', counterName: 'counter2' })}>-</button>
                    </div>
                </div>
                <div className='card-parent'>
                    <Cards class="half" headerText="Paneer" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={() => dispatch({ type: 'increment', counterName: 'counter3' })}>+</button>
                        <span>{state.counter3}</span>
                        <button className='remove' onClick={() => dispatch({ type: 'decrement', counterName: 'counter3' })}>-</button>
                    </div>
                </div>
                <div className='card-parent'>
                    <Cards class="half" headerText="Chips" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={() => dispatch({ type: 'increment', counterName: 'counter4' })}>+</button>
                        <span>{state.counter4}</span>
                        <button className='remove' onClick={() => dispatch({ type: 'decrement', counterName: 'counter4' })}>-</button>
                    </div>
                </div>
                <div className='card-parent'>
                    <Cards class="half" headerText="Cream" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={() => dispatch({ type: 'increment', counterName: 'counter5' })}>+</button>
                        <span>{state.counter5}</span>
                        <button className='remove' onClick={() => dispatch({ type: 'decrement', counterName: 'counter5' })}>-</button>
                    </div>
                </div>
                <div className='card-parent'>
                    <Cards class="half" headerText="Bread" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={() => dispatch({ type: 'increment', counterName: 'counter6' })}>+</button>
                        <span>{state.counter6}</span>
                        <button className='remove' onClick={() => dispatch({ type: 'decrement', counterName: 'counter6' })}>-</button>
                    </div>
                </div>
                <div className='card-parent'>
                    <Cards class="half" headerText="Berries" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={() => dispatch({ type: 'increment', counterName: 'counter7' })}>+</button>
                        <span>{state.counter7}</span>
                        <button className='remove' onClick={() => dispatch({ type: 'decrement', counterName: 'counter7' })}>-</button>
                    </div>
                </div>

                <div className='card-parent'>
                    <Cards class="half" headerText="Chocalates" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={() => dispatch({ type: 'increment', counterName: 'counter8' })}>+</button>
                        <span>{state.counter8}</span>
                        <button className='remove' onClick={() => dispatch({ type: 'decrement', counterName: 'counter8' })}>-</button>
                    </div>
                </div>
                <div className='card-parent'>
                    <Cards class="half" headerText="Potatoes" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={() => dispatch({ type: 'increment', counterName: 'counter9' })}>+</button>
                        <span>{state.counter9}</span>
                        <button className='remove' onClick={() => dispatch({ type: 'decrement', counterName: 'counter9' })}>-</button>
                    </div>
                </div>
                <div className='card-parent'>
                    <Cards class="half" headerText="Mangoes" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={() => dispatch({ type: 'increment', counterName: 'counter10' })}>+</button>
                        <span>{state.counter10}</span>
                        <button className='remove' onClick={() => dispatch({ type: 'decrement', counterName: 'counter10' })}>-</button>
                    </div>
                </div>

                <div className='card-parent'>
                    <Cards class="half" headerText="Beetroot" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={() => dispatch({ type: 'increment', counterName: 'counter11' })}>+</button>
                        <span>{state.counter11}</span>
                        <button className='remove' onClick={() => dispatch({ type: 'decrement', counterName: 'counter11' })}>-</button>
                    </div>
                </div>

                <div className='card-parent'>
                    <Cards class="half" headerText="Coconut" text="description" btntxt="" />
                    <div className="btn-wrap">
                        <button className='add' onClick={() => dispatch({ type: 'increment', counterName: 'counter12' })}>+</button>
                        <span>{state.counter12}</span>
                        <button className='remove' onClick={() => dispatch({ type: 'decrement', counterName: 'counter12' })}>-</button>
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
