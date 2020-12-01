import React from 'react';
import './Money.scss';

const Money = (props: { value: number }) => {
    return (
        <span className="Money-root Money-ru">{Number(props.value).toLocaleString('ru')}</span>
    );
}

export default Money;
