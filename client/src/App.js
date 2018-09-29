import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import logo from './logo.svg';
import TitleCard from './components/TitleCard';
import './App.scss';
import Header from './components/Header';
import { Paper, DialogTitle } from '@material-ui/core';

class App extends Component {

  componentWillMount() {
    this.setState({ titles: [], open: false });
  }

  componentDidMount() {
    this.searchSubmitted("");
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleOpen = (title) => {

    this.setState({ open: true, selected: title });
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSearchButtonClick = (event) => {
    document.querySelector('body').classList.add('search-active');
    document.getElementById('search-input').focus();
  }

  handleCloseButtonClick = (event) => {
    document.querySelector('body').classList.remove('search-active');
  }

  searchSubmitted = (title) => {
    const url = (title && title.length > 0) ? `/api/titles/${title}` : `/api/titles`;
    axios.get(url).then((response) => this.setState({ titles: response.data }));
  }

  expandTitle = (title) => {
    console.log("Expand:", title.TitleName);
  }

  render() {
    const { titles } = this.state;

    const titleList = titles.map((title) => {
      return (<Grid item><TitleCard title={title} key={title._id} expandTitle={this.expandTitle}/></Grid>);
    });

    return (
      <Fragment>
        <Grid container justify="center">
        <Grid item xs={12}>
          <Header search={this.searchSubmitted}/>
        </Grid>
          <Grid item md={10} xs={12} className="main">
            <Grid container spacing={16} justify="center">
              {titleList}
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default App;
