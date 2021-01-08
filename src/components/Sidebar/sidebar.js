import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faPinterestSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './sidebar.css'
import "../../font-awesome"

const Sidebar = () => {
    return (
        <>
            <aside>
            <FontAwesomeIcon icon={faInstagramSquare} className='fab' />
            <FontAwesomeIcon icon={faTwitterSquare} className='fab' />
            <FontAwesomeIcon icon={faPinterestSquare} className='fab' />
            <FontAwesomeIcon icon={faFacebookSquare} className='fab' />
            </aside>
        </>

    )}
export default Sidebar
