import React, { useState } from 'react';
import { sampleMarkdown } from './Modules/samples';

import Preview from './Components/Preview';
import Editor from './Components/Editor';
import ControlPane from './Components/ControlPane';

import './App.scss';

export default function App() {

	const [text, setText] = useState(sampleMarkdown);

	return (
		<section className="main-stage">

			<nav className="control-pane">
				<ControlPane />
			</nav>

			<div className="editor-container">
				<Editor text={text} setText={setText} />
			</div>

			<div className="preview-container">
				<Preview text={text} />
			</div>

		</section>
	);
}