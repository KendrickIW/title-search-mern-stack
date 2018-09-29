import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.scss';

class App extends Component {

  componentWillMount() {
    this.setState({titles: [], open: false});
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleOpen = (title) => {

    this.setState({ open: true, selected: title });
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
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
    axios.get(`/api/titles/${this.state.name}`).then((response) => this.setState({titles: response.data}));
    document.querySelector('body').classList.remove('search-active');
    event.target.reset();
  }

  render() {
    const { titles } = this.state;
    
    const titleList = titles.map((title, index) => {
      return (<Card className="results-card" key={title._id}>
                <CardMedia
                  className="result-image"
                  image="https://thenextdoor.org/wp-content/uploads/2016/11/placeholder-815x458.png"
                  title={title.TitleName}
                />
                <CardContent>
                  <Typography variant="headline" component="h2">
                    {title.TitleName}
                  </Typography>
                  <Typography variant="caption">
                    {title.ReleaseYear}
                  </Typography>
                  <Typography component="p">
                    {title.Storylines[0].Description}
                  </Typography>
                </CardContent>
                <CardActions>
        <Button size="small" color="primary" data-index={index} onClick={() => this.handleOpen(title)}>
          Learn More
        </Button>
      </CardActions>
              </Card>
             );
    });

    return (
      <div className="App">
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
    <div className="results-container">
      {titleList}
    </div>
</div>

<i className='icon-close material-icons' onClick={this.handleCloseButtonClick}>close</i>
<div className='search-input'>
  <form onSubmit={(event) => this.searchSubmitted(event)}>
  <input id='search-input' className='input-search' placeholder='Start Typing' type='text' onChange={this.handleChange} />
  </form>
</div>
 <Modal
           aria-labelledby="simple-modal-title"
           aria-describedby="simple-modal-description"
          open={this.state.open}
           onClose={this.handleClose}
         >
           <div className="results-modal">
             <Typography variant="title" id="modal-title">
               {this.state.open && this.state.selected.TitleName}
             </Typography>
             <Typography variant="subheading" id="simple-modal-description">
             More details coming soon
             </Typography>
           </div>
         </Modal>
      </div>

    );
  }
}

export default App;
