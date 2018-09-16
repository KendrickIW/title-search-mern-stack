import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({titles: []});
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }
  
  searchSubmitted(event) {
    event.preventDefault();
    axios.get(`/api/titles/${this.state.name}`).then((response) => this.setState({titles: response.data}));
  }

  render() {
    const { titles } = this.state;
    
    const titleList = titles.map((title) => {
      return (<li>{title.TitleName}</li>);
    });

    return (
      <div className="App">
        {/* <p className="App-intro">
          <form onSubmit={(event) => this.searchSubmitted(event)}>
            <input type="search" onChange={this.handleChange}/>
            <button type="submit">Search</button>
          </form>
          <ul>
            {titleList}
          </ul>
        </p> */}
<div className='container container-dark p-y-md'>
  <div className='header-content'>
    <h1>Material Search Animation</h1>
    <h2>Usign CSS Transitions</h2>
  </div>
</div>



<div className='container p-y-md'>
  <div className='control'>
    <div className='btn-material'></div>
    <i className='material-icons icon-material-search'>search</i>
  </div>

  <div id='h2'>by <a href="https://codepen.io/hone">Luca Dimola</a></div>
</div>

<i className='icon-close material-icons'>close</i>
<div className='search-input'>
  <input className='input-search' placeholder='Start Typing' type='text' />
</div>
      </div>
    );
  }
}

export default App;
