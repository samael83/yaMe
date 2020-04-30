import MarkdownIt from 'markdown-it';
import dompurify from 'dompurify';

const markdownIt = new MarkdownIt();

const parseHTML = (markdownText) => {

    const parsedHTML = markdownIt.render(markdownText.replace(/\n/gi, '   \n'));
    const cleanHTML = dompurify.sanitize(parsedHTML);

    return cleanHTML;

};

export default parseHTML;