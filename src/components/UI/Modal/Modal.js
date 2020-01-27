import React from 'react';
import classes from '../Modal/Modal.module.css';
import Auxillary from '../../../HOC/auxillary';
import Backdrop from '../Backdrop/Backdrop';
const Modal = (props) => (
    <Auxillary>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div className={classes.Modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'traslateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
        {props.children}
    </div>
    </Auxillary>

);

export default Modal;