import React from 'react';
import "../assets/css/Panel2.css";
import Message from "../components/Message";

const Panel2 = ({ subRaceList }) => (
    <ul>
        {
            subRaceList.length === 0
            ? <Message/>
            : subRaceList.map((subraza, index) => (
                <li key={index}>{subraza}</li>
            ))
        }
    </ul>
)

export default Panel2;