import React, { useEffect } from 'react';
import parseHTML from '../../Modules/parseHTML';
import Prism from 'prismjs';

import './Preview.scss';

export const Preview = ({ text }) => {

    // TODO: Implement PrismJS for syntax highlighting.
    //useEffect(() => {
    //    Prism.highlightAll();
    //});

    return (
        <div
            id="preview"
            className="preview"
            dangerouslySetInnerHTML={{__html: parseHTML(text)}}
        >
        </div>
    );
};
