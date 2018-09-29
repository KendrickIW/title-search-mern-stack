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

class App extends Component {

  componentWillMount() {
    this.setState({ titles: [], open: false });
  }

  componentDidMount() {
    axios.get(`/api/titles/the`).then((response) => this.setState({ titles: response.data }));
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

  searchSubmitted(event) {
    event.preventDefault();
    axios.get(`/api/titles/${this.state.name}`).then((response) => this.setState({ titles: response.data }));
    document.querySelector('body').classList.remove('search-active');
    event.target.reset();
  }

  render() {
    const { titles } = this.state;

    const titleList = titles.map((title, index) => {
      return (<Grid item><TitleCard title={title} key={title._id} /></Grid>);
    });

    return (
      <Fragment>
        <Header />
        <Grid container spacing={24} justify="center">
        <Grid item>
          
        </Grid>
          <Grid item md={10} xs={12}>
            <Grid container spacing={16} justify="space-around">
              {titleList}
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default App;
