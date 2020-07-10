import React from 'react'
import './App.css'
import Editor from './Editor'
import Preview from './Preview'
import placeholder from './placeholder'

class ToRender extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      markdown: placeholder
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      markdown: e.target.value
    })
  }

  render () {
    return (
      <div className='flex-container'>
        <div className='editor-box'>
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        </div>
        <div className='preview-box'>
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    )
  }
}

function App () {
  return (
    <div className='App'>
      <ToRender />
    </div>
  )
}

export default App
