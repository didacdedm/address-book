import React from 'react';

const ContactForm = (props) => (
    
    
    <form className="center">
        <div>
        <p><label>Nombre: </label>
        <input type="text"  value={props.firstName} onChange={props.handleFirstNameChange}/></p>
        <p><label>Apellido: </label>
        <input type="text" value={props.Lastname} onChange={props.handleLastNameChange}/></p>
        <p><label>Telefono: </label>
        <input type="text" value={props.phone} onChange={props.handlePhoneChange}/></p>
        <div>
            <button className="btn btn-primary" onClick={() => props.saveContact({
                firstName: props.firstName,
                lastName: props.lastName,
                phone: props.phone
                })}
                >
                Guardar
                </button>
        </div>
    </div>
    </form>
);

export default ContactForm;