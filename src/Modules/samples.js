// TODO: convert to function to return snippets
export const sampleMarkdown = 
`# yaMe - Yet Another Markdown Editor

A very simple one - like there aren't enough out there already 🙄. 

Write your markdown in the editor on left, view HTML on the right. Save, load or download your markdown text via the sidebar controls as well as adding markdown snippets.

Markdown is a lightweight markup language with plain-text-formatting syntax, [would you like to know more?](https://en.wikipedia.org/wiki/Markdown).

A quick and dirty reference:

- Headers
- Emphasis
- Links & Images
- Code
- Lists
- Blockquotes
- Tables
- Comments

![image](/path/to/image.png)

## Headers

---

Use \`#\` for headers:

\`\`\`markdown
# Header H1 Tag
## Header H2 Tag
### Header H3 Tag
#### Header H4 Tag
##### Header H5 Tag
###### Get the idea?
\`\`\`



## Emphasis

---

Use asterisk \`*\`, underscore \`_\`, or tilde \`~\`to set text attributes:

\`\`\`markdown
basic:
*italic* or _italic_
**bold** or __bold__
***bold italic*** or ___bold italic___
~~strike through text~~
do combos:
**bold text with _italic_ inside it**
*something smart with a **bold** statement*
go crazy:
*some crazy **~~stuff~~** here...*
\`\`\`



## Links & Images

---

To include links:

\`\`\`markdown
[google homepage](https://www.google.com)
\`\`\`

Add \`!\` in front to insert image instead:

\`\`\`markdown
![image_alt_text](/path/to/image.png)
\`\`\`

 

---

## Code

Use a backtick for inline monospaced text:

\`\`\`markdown
inline \`monospaced\` text
\`\`\`

Use triple backticks to include code block:

\`\`\`markdown
​\`\`\`python
def print_awesome_stuff(stuff):
	print(f'Awesome {stuff}')
​\`\`\`
\`\`\`

 

## Lists

---

### Numbered List

Use numbers to for an ordered list:

\`\`\`markdown
1. list item one
2. list item two
3. list item three
\`\`\`

### Bullet List

Use either \`-\`, \`+\` or \`*\` for an unordered list:

\`\`\`markdown
- list item 
- list item 
or 
* list item
* list item
or
+ list item
+ list item
\`\`\`

### Combining & Nesting

You can combine both numbered and bullet list, or nest them (using \`tab\`):

\`\`\`markdown
1. to do
	- shopping
		1. eggs
		2. bacon
		3. cheese
	- cooking
	- coding
	- gaming
2. to read
	* Fantasy
		+ Vampire Hunter D
		+ Mortal Engines
	* Professional
		- Open Data Structures: An Introduction
\`\`\`



## Blockquote

---

Use \`>\` to add a blockquote:

\`\`\`markdown
A true story:
> Unless life also hands you sugar and water, your lemonade is going to suck.
\`\`\`



## Tables

---

Divide table head from body with hyphens \`-\`, use pipes \`|\` to separate cells:

\`\`\`markdown
ID | Name | Role
-- | ---- | ----
1 | Winniw the Pooh | The mastermind
2 | Tigger | The arrogant
3 | Piglet | The confused
4 | Eeyore | The earful
\`\`\`

By default, text is aligned to the left. Use colons on the hyphens to align text:

\`\`\`markdown
ID | Name | Role
-- | :--: | ---:
1 | Winniw the Pooh | The mastermind
2 | Tigger | The arrogant
3 | Piglet | The confused
4 | Eeyore | The fearful
\`\`\`

Note:

- Number of hyphens is irrelevant, minimum of one is required.
- Number of pipes **does** matter. Each one declares a cell.



## Comments

---

Comments will not be rendered:

\`\`\`markdown
[comment]: <> (everything in the parenthesis will not be displayed)	
\`\`\`



## Conclusion

> There is direct correlation between your knowledge of markdown and how badass you are, especially if you are a head hunter.

`
