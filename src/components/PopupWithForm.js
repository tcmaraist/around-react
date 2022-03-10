import React from 'react';

function PopupWithForm() {
    return (
        <div className={`modal modal_type_${name} ${isOpen ? "modal_is-opened" : ""}`}>
            <div className="">
                <button
                    type="button"
                    className=""
                    onClick={onClose}></button>
                <h3 className={/* popup title */}></h3>
                <form className="/* popup form */" name={name} noValidate>
                    {children}
                    <button type="submit" className="button /* popup button */">
                        {buttonText}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;