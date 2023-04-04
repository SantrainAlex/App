import React from 'react';
import { Col, Spinner } from 'reactstrap';

const SpinnerIcon = ({text }) => (
    <div id='spinner-icon'>
        <Col className='col-12'>
            <Spinner className='spinner'/>
        </Col>
        <Col className='col-12' >
            <span>{text}</span>
        </Col>
    </div>
);

export default SpinnerIcon;
