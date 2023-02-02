import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <header className='header'>
            <FontAwesomeIcon icon={faCameraRetro} className="icon" />
            <p className='title'>Nick's 2022 Journal</p>
        </header>
    )
}