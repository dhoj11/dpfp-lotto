import React from 'react';
import './Checkbox.css';

interface CheckboxProps {
    isChecked: boolean;
    onChange: (value: number) => void;
    value: number;
}

const Checkbox: React.FC<CheckboxProps> = ({ isChecked, onChange, value }) => {
    const circleStyle = isChecked
        ? { backgroundColor: 'black', color: 'white' }
        : {};

    return (
        <label className="circle_wrap">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => onChange(value)}
            />
            <div className="circle" style={circleStyle}>
                {value}
            </div>
        </label>
    );
};

export default Checkbox;