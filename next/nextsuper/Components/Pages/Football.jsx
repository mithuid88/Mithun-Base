import React from 'react'
import Header from '../Organisms/Header.jsx'
import Backtotop from '../Molecules/Backtotop.jsx'
import Footer from '../Organisms/Footer.jsx'
import Links from '../Atoms/Links.jsx'
import Modal from '../Molecules/Modal.jsx'
import Overlay from '../Atoms/Overlay.jsx'
import { useState, useEffect } from 'react'
import Stickyheader from '../Atoms/Stickyheader.jsx'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Football.scss'

const Football = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [tableData, setTableData] = useState([]);
    const [seriaTable, setSeriaTable] = useState([]);
    const [spanishTable, setSpanishTable] = useState([]);
    const [bundesTable, setBundesTable] = useState([]);

    useEffect(() => {
        const fetchApi = fetch("../../../src/json/pl.json")
        fetchApi.then(response => response.json())
            .then(data => setTableData(data.pltable.all))
            .catch(error => console.error(error));

        async function fetchTableData() {
            try {
                const response = await fetch("../../../src/json/seria.json");
                const data = await response.json();
                setSeriaTable(data.seriatable.all);
            } catch (error) {
                console.error(error);
            }
        }
        fetchTableData();

        async function fetchspanishData() {
            try {
                const response = await fetch("../../../src/json/laliga.json");
                const data = await response.json();
                setSpanishTable(data.spanishTable.all);
            } catch (error) {
                console.error(error);
            }
        }
        fetchspanishData();

        async function fetchbundesData() {
            try {
                const response = await fetch("../../../src/json/bundesliga.json");
                const data = await response.json();
                setBundesTable(data.bundesliga.all);
            } catch (error) {
                console.error(error);
            }
        }
        fetchbundesData();


    }, []);



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
                <Links href="#pl" text="Premier League" />
                <Links href="#seriaa" text="Italian league" />
                <Links href="#laliga" text="Spanish League" />
                <Links href="#bundesliga" text="German League" />
            </Stickyheader>

            <div className='date-section container'>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

            </div>

            <div className="fb-stats container premier-league" id="pl">
                <h1>Premier league table</h1>
                <table id="plTable">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Played</th>
                            <th>Wins</th>
                            <th>Loss</th>
                            <th>Points</th>

                            <th>Goal Difference</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map(item => (
                            <tr key={item.idx}>
                                <td>{item.idx}</td>
                                <td>{item.name}</td>
                                <td>{item.played}</td>
                                <td>{item.wins}</td>
                                <td>{item.losses}</td>
                                <td>{item.pts}</td>
                                <td>{item.goalConDiff}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="fb-stats container italian" id="seriaa">
                <h1>Seria table</h1>
                <table id="seriaTable">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Played</th>
                            <th>Wins</th>
                            <th>Loss</th>
                            <th>Points</th>

                            <th>Goal Difference</th>
                        </tr>
                    </thead>
                    <tbody>
                        {seriaTable.map(item => (
                            <tr key={item.idx}>
                                <td>{item.idx}</td>
                                <td>{item.name}</td>
                                <td>{item.played}</td>
                                <td>{item.wins}</td>
                                <td>{item.losses}</td>
                                <td>{item.pts}</td>
                                <td>{item.goalConDiff}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="fb-stats container spanish" id="laliga">
                <h1>Spanish table</h1>
                <table id="spanishTable">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Played</th>
                            <th>Wins</th>
                            <th>Loss</th>
                            <th>Points</th>

                            <th>Goal Difference</th>
                        </tr>
                    </thead>
                    <tbody>
                        {spanishTable.map(item => (
                            <tr key={item.idx}>
                                <td>{item.idx}</td>
                                <td>{item.name}</td>
                                <td>{item.played}</td>
                                <td>{item.wins}</td>
                                <td>{item.losses}</td>
                                <td>{item.pts}</td>
                                <td>{item.goalConDiff}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="fb-stats container german" id="bundesliga">
                <h1>Bundesiga table</h1>
                <table id="bundesTable">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Played</th>
                            <th>Wins</th>
                            <th>Loss</th>
                            <th>Points</th>

                            <th>Goal Difference</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bundesTable.map(item => (
                            <tr key={item.idx}>
                                <td>{item.idx}</td>
                                <td>{item.name}</td>
                                <td>{item.played}</td>
                                <td>{item.wins}</td>
                                <td>{item.losses}</td>
                                <td>{item.pts}</td>
                                <td>{item.goalConDiff}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
export default Football