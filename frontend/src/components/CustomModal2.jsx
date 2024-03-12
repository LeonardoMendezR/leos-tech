import React from 'react';
import './ComponentsStyles.css'
const CustomModal2 = ({ showModal2, closeModal2, closeModal22, content2 }) => {
    return (
        <>
            {showModal2 && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal2}>&times;</span>
                        <p>{content2}</p>
                        <button className='buttonModal' onClick={closeModal2}>Aceptar</button>
                        <button className='buttonModal' onClick={closeModal22}>Cancelar</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default CustomModal2;