import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         names: importedNames
      }
    }

    handleChange = (e) => {
        const inputText = e.target.value.toLowerCase();
        const filteredNames = importedNames.filter(name => {
            return name.toLocaleLowerCase().includes(inputText)
        })
        this.setState({
            names: filteredNames
        })
    }

  render() {
    return (
      <div>
        <h1>Name Searh</h1>
        <p>matching names found: {this.state.names.length}</p>
        <input type='text' placeholder='search names..' onChange={this.handleChange} />
        <div>
            {this.state.names.map(name => {
                return <p>{name}</p>
            })}
        </div>
      </div>
    )
  }
}

export default SearchBar