import React from 'react';

interface RangeFieldProps {
    min: number;
    max: number;
}

const RangeField: React.FC<RangeFieldProps> = ({ min = 2, max = 10 }) => {
    const options = Array.from({ length: max - min + 1 }, (_, i) => min + i);
    return (
        <div>
            <div className="rangeField">
                <input type="range" min={min} max={max} />
                <select>
                    {options.map((value) => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <span className='font1EM'>EM</span>
                <span className='font1point5EM'>EM</span>
                <span className='font2EM'>EM</span>
                <span className='font5EM'>EM</span>
            </div>
            {/* <div>
                <span className='topAligned font1REM'>EM</span>
                <span className='topAligned font1point5REM'>EM</span>
                <span className='topAligned font2REM'>EM</span>
                <span className='topAligned font5REM'>EM</span>
            </div> */}
        </div>
    );
};

export default RangeField;