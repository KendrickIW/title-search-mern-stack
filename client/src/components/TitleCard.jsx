import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './TitleCard.scss';

class TitleCard extends React.Component {

    state = {
        image: "https://thenextdoor.org/wp-content/uploads/2016/11/placeholder-815x458.png"
    }

    componentWillMount() {
        this.getImage(this.props.title.TitleName)
    }

    getImage = (movie) => {
        axios.get(`https://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=trilogy`)
            .then(res => res.data)
            .then(data => data.Poster && this.setState({image: data.Poster}));
    }

    handleOpen = () => {
        this.props.expandTitle(this.props.title)
    }

    render() {
        const { title } = this.props;
        return(
        <Card className="title-card" key={title._id}>
        <CardMedia
          className="result-image"
          style={{height: 0, paddingTop: '56.25%'}}
          image={this.state.image}
          title={title.TitleName}
        />
        <CardContent  className="title-content">
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
<Button size="small" color="primary" data-index={title._id} onClick={() => this.handleOpen()}>
  Learn More
</Button>
</CardActions>
      </Card>);
    }
}

export default TitleCard;
