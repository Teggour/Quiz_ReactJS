import React from 'react'

function Modal({ result, isOpen, onCancel, onRestart }) {
    return (
        <React.Fragment>
            { isOpen &&
                <div className='modalOverlay'>
                    <div className='modalWindow'>
                        <div className='modalBody'>
                            <p>{result}</p>
                            <p>Do you want to restart?</p>
                        </div>
                        <div className='moddalFooter'>
                            <button onClick={onCancel}>Cancel</button>
                            <button onClick={onRestart}>Restart</button>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default Modal;