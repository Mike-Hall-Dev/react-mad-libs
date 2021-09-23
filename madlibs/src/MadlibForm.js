import React, { useState } from 'react';

const MadlibForm = ({ addItem, storyIsShowing }) => {
    const INITIAL_STATE = {
        noun: '',
        noun2: '',
        adjective: '',
        color: ''
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ ...formData });
        storyIsShowing();
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                id="noun"
                type="text"
                name="noun"
                value={formData.noun}
                onChange={handleChange}
                placeholder="noun"
            />
            <input
                id="noun2"
                type="text"
                name="noun2"
                value={formData.noun2}
                onChange={handleChange}
                placeholder="noun2"
            />
            <input
                id="adjective"
                type="text"
                name="adjective"
                value={formData.adjective}
                onChange={handleChange}
                placeholder="adjective"
            />
            <input
                id="color"
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                placeholder="color"
            />
            <button>Get a story</button>
        </form>
    );
};

export default MadlibForm;