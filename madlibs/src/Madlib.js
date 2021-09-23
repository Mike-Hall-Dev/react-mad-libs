import React, { useState } from "react";
import NewMadlibForm from './MadlibForm';
import Story from './Story';

function Madlib() {
    const INITIAL_STATE = [{ noun: '', noun2: '', adjective: '', color: '' }];
    const [items, setItems] = useState(INITIAL_STATE);
    const [storyShowing, setStoryShowing] = useState(false);

    const addItem = (newItem) => {
        setItems((items) => [...items, { ...newItem }]);
    };

    const storyIsShowing = () => {
        setStoryShowing(true);
    }

    if (!storyShowing) {
        return (
            <div>
                <h1>Madlibs!</h1>
                <NewMadlibForm addItem={addItem} storyIsShowing={storyIsShowing} />
            </div>
        )
    } else {
        return (
            <div>
                {items.map(({ noun, noun2, adjective, color }) => (
                    <Story
                        noun={noun}
                        noun2={noun2}
                        adjective={adjective}
                        color={color}
                    />
                ))}
            </div>
        )
    }
}

export default Madlib
