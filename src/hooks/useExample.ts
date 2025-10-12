import { useState, useEffect } from 'react';

const useExample = (initialValue: number) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        // Example effect: log the value whenever it changes
        console.log('Value changed:', value);
    }, [value]);

    const increment = () => {
        setValue(prevValue => prevValue + 1);
    };

    const decrement = () => {
        setValue(prevValue => prevValue - 1);
    };

    return { value, increment, decrement };
};

export default useExample;