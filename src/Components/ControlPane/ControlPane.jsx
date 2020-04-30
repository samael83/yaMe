import React, { Fragment } from 'react';
import * as IconsButtons from 'react-icons/ai';
import { IconContext } from 'react-icons';

import './ControlPane.scss';

export const ControlPane = () => {
    return (
        <Fragment>

            <IconContext.Provider value={{ color: "#9400d3", className: "yame-logo", size: "2em" }}>
			    <IconsButtons.AiFillFileMarkdown />
            </IconContext.Provider>

            {/* TODO: Implement functionality save, load, download and markdown code snippets >>>
            <IconContext.Provider value={{ color: "#708090", className: "icons-btns", size: "1.75em" }}>
                <IconsButtons.AiOutlineSave />
                <IconsButtons.AiOutlineDownload />
                <IconsButtons.AiOutlineUpload />
            </IconContext.Provider>

            <IconContext.Provider value={{ color: "#ffffff", className: "icons-btns", size: "1.75em" }}>
                <IconsButtons.AiOutlineFileUnknown />
            </IconContext.Provider>
            */}

            <IconContext.Provider value={{ color: "#ffffff", className: "icons-btns", size: "2em" }}>
                <a title="Visit repo" href="https://github.com/samael83/yaMe" target="_blank" rel="noopener noreferrer">
                    <IconsButtons.AiFillGithub />
                </a>
            </IconContext.Provider>

        </Fragment>
    );
};
