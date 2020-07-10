import React from 'react'
import 'marked'

const marked = require('marked')
marked.setOptions({
  breaks: true
})
const renderer = new marked.Renderer()
renderer.link = (href, title, text) =>
  `<a target="_blank" href="${href}" title=${title}>${text}</a>`

const Preview = props => {
  return (
    <div
      id='preview'
      dangerouslySetInnerHTML={{ __html: marked(props.markdown, { renderer }) }}
    />
  )
}

export default Preview
