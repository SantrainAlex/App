import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router";



const Menu = () =>{
    const [ isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();

    return(
        <div id="menu">
            {isOpen && 
            <>
                <button id="selectOne">Cartes championnat de france</button>
                <button id="selectTwo" onClick={()=> navigate('/lstEvent')}>Calendrier des tirs</button>
                <button id="selectThree">Galerie Photo</button>
            </>
            }
            
            <button onClick={() => setIsOpen(!isOpen)}><FontAwesomeIcon icon={faBars} /></button>
        </div>
        )
}
export default Menu;