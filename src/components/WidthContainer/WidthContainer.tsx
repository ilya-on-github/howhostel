import React from 'react';
import './WidthContainer.scss';

const WidthContainer = (props: any) => {
    return (
        <div className="WidthContainer-root">
            {props.children}
        </div>
    )
}

export default WidthContainer;
