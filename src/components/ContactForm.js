import React from 'react';

const ContactForm = (props) => (
    
    
    <form className="center">
        <p><label>Nombre: </label>
        <input type="text"  value={props.valueName} onChange={props.onNameChange}/></p>
        <p><label>Apellido: </label>
        <input type="text" value={props.valueLastname} onChange={props.onLastnameChange}/></p>
        <p><label>Telefono: </label>
        <input type="text" value={props.valuePhone} onChange={props.onPhoneChange}/></p>
        <div className="text-center">
            <button className="btn btn-primary" onClick={()=>props.saveContact({
                    firstName:props.valueName,
                    lastName:props.valueLastname,
                    phone:props.valuePhone
                })}>Guardar</button>
          </div>
    </form>
);

export default ContactForm;