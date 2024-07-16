import React, { useState } from 'react'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false)

    return (
        <header className='navMenu'>
            {/* ====/Logo==== */}
            <div className='LogoContainer'>
                <h3 className='logo'>M&M</h3>
                <div className='logo-sub'>
                    <p>Associação</p>
                    <p>de Advogados</p>
                </div>
            </div>
            {/* ====/Icons==== */}
            <input type='checkbox' id='check'></input>
            <label htmlFor='check' className='iconMenu'
                onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? <CloseIcon fontSize='large' id='close-icon' /> : <ReorderIcon fontSize='large' id='menu-icon' />}

            </label>
            {/* ====/HiperLinks==== */}
            <div className='navBar'>
                <a href='#sobre'>Sobre</a>
                <a href='#atuacao'>Àreas de Atuação</a>
                <a href='#advocados'>Advogados</a>
                <a href='#contato'>Contato</a>
            </div>

        </header>
    )
}

export default Navbar