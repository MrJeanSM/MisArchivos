import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/Contacto';

const ContactoList = () => {

    const contac = new Contacto("Jean", "Sanchez", "karlos@gmail.com", false)

    return (
        <div>
            <ContactoComponent contacto={contac} ></ContactoComponent>
        </div>
    );
};

export default ContactoList;
