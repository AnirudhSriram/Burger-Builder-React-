import React from 'react';
import Auxillary from '../../HOC/auxillary';
import classes from '../Layout/Layout.module.css';
const Layout = (props) => (
    <Auxillary>
        <div>Toolbar,sidebar,backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Auxillary>

)

export default Layout;