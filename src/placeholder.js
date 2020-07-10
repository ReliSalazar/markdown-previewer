const placeholder =
`
# Welcome to my React Markdown Previewer!
---
## This is a project for the FreeCodeCamp Front End Libraries certification!
### You can do a lot of funny stuff with markdown
---
For example, this is a [link](https://www.freecodecamp.com)

also you can write inline code like this: \`<div></div>\` very cool right?

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

- And of course there are lists.
  - Indented with bulleted.
     - There are different bullets with different levels.
        - That look like this.

> Also you can write Block Quotes!

You can also make text **bold**
Or _italic_.
Or... **_both!_**
Also you can ~~crossing stuff out~~.

And shure, you can put embedded imagenes:
![React Logo w/ Text](https://goo.gl/Umyytc)
`
export default placeholder
