import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.scss';

class App extends Component {

  componentWillMount() {
    this.setState({titles: []});
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleSearchButtonClick = (event) => {
    document.querySelector('body').classList.add('search-active');
  }

  handleCloseButtonClick = (event) => {
    document.querySelector('body').classList.remove('search-active'); 
  }
  
  searchSubmitted(event) {
    event.preventDefault();
    axios.get(`/api/titles/${this.state.name}`).then((response) => this.setState({titles: response.data}));
    document.querySelector('body').classList.remove('search-active');
    event.target.reset();
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
    <h1>Title Search</h1>
  </div>
</div>



<div className='container p-y-md'>
  <div className='control' onClick={this.handleSearchButtonClick}>
    <div className='btn-material'></div>
    <i className='material-icons icon-material-search'>search</i>
  </div>

  <ul>
            {titleList}
          </ul>
</div>

<i className='icon-close material-icons' onClick={this.handleCloseButtonClick}>close</i>
<div className='search-input'>
  <form onSubmit={(event) => this.searchSubmitted(event)}>
  <input className='input-search' placeholder='Start Typing' type='text' onChange={this.handleChange} />
  </form>
</div>
      </div>
    );
  }
}

export default App;
