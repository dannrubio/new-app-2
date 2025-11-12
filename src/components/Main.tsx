'use client';
import React, { useState } from 'react';
import '../styles/main.scss';
import Header from './Header';
import RangeField from './RangeField';
import Card from './Card';

const Main: React.FC = () => {
    const [rows, setRows] = useState(2);
    const [columns, setColumns] = useState(2);

    return (
        <div>
            <main className="Main">
                <div id="leftHandNav" className='leftHandNav' />
                <div id="mainBody" className='mainBody'>
                    <div className="input">
                        <RangeField min={2} max={10} title='Rows' onChange={(value) => setRows(value)} />
                        <RangeField min={2} max={10} title='Columns' onChange={(value) => setColumns(value)} />
                    </div>
                    <div className="output roundedBox topAligned padding">
                        <div className="cardGrid container"> 
                            { Array.from({ length: rows }, (_, i) => (<div key={`row-${i}`}> 
                                { Array.from({ length: columns }, (_, j) => (<span key={`row-${i} col-${j}`}>
                                    <Card 
                                        name={`row-${i} col-${j}`}
                                        value={`${i},${j}`}
                                     />
                                </span>))
                                } </div>))
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Main;