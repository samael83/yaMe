import React from 'react';

import './Editor.scss';

export const Editor = ({ text, setText }) => {

    const handleTextChange = (e) => {
        setText(e.target.value);
    };
    
    const handleTab = (e) => {
        if (e.keyCode == 9) {
            e.preventDefault();
            setText(e.target.value.concat("\t"));
        }
    };

    return (
        <textarea
            value={text}
            autoFocus
            id="editor"
            className="editor"
            onChange={(e) => handleTextChange(e)}
            onKeyDown={(e) => handleTab(e)}
        >
        </textarea>
    );

};
