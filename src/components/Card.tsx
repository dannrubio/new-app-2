'use client';
import React, { useState } from 'react';

interface CardDetailProps {
    name?: string;
    value?: string;
    on?: boolean;
    onClick?: () => void;
}

const Card: React.FC<CardDetailProps> = ({ name, value, on, onClick }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <button
            id={name}
            className={`card ${on ? 'flipped' : ''}`} 
            onClick={onClick}
        >
            {value ? value : '-1,-1'}
        </button>
    );
}

export default Card;