'use client';
import React, { useState } from "react";

interface RangeFieldProps {
    title: string;
    min?: number;
    max?: number;
    onChange?: (value: number) => void;
}

const RangeField: React.FC<RangeFieldProps> = ({ title, min = 2, max = 10, onChange }) => {
    const safeMin = Math.min(min, max);
    const safeMax = Math.max(min, max);

    const [value, setValue] = useState(safeMin);

    const options = Array.from({ length: max - min + 1 }, (_, i) => min + i);

    const handleChange = (v: number) => {
        const newValue = Math.min(safeMax, Math.max(safeMin, v));
        setValue(newValue);
        onChange?.(newValue);
    };

    return (
        <div className="rangeField">
            <span className="label">
                {title} 
            </span>                            
            {/* <span className="component">
                <input 
                    type="range" 
                    min={safeMin} 
                    max={safeMax}
                    onChange={(e) => handleChange(Number(e.target.value))}
                    value={value}
                />
            </span> */}
            <select 
                value={value} 
                onChange={(e) => handleChange(Number(e.target.value))}
            >
                {options.map((v) => (
                    <option key={v} value={v}>
                        {v}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default RangeField;