'use client';
import React, { useState } from 'react';

interface CardDetailProps {
    name?: string;
    value?: string;
}

const Card: React.FC<CardDetailProps> = ({ name, value }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <button
            id={name}
            className={`card ${flipped ? 'flipped' : ''}`} 
            onClick={() => setFlipped(!flipped)}
        >
            {value ? value : '-1,-1'}
        </button>
    );
}

export default Card;