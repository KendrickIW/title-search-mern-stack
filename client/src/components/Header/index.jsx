import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import LocalMovies from '@material-ui/icons/LocalMoviesOutlined';
import SearchIcon from '@material-ui/icons/Search';
import './Header.scss';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class SearchAppBar extends React.Component {
    state = {
        loading: true,
        searchTitle: ""
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1000);
    }

    handleSearchChange = (event) => {
      this.setState({ searchTitle: event.target.value });
    }

    handleSearchBlur = () => {
      console.log('blur');
      this.props.search(this.state.searchTitle);
    }
    render () {
  const { classes } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={`title-search-header ${ this.state.loading ? "loading" : ""}`}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
            <LocalMovies className="site-icon loading" />
          </IconButton>
          <Typography className={classes.title} variant="title" color="inherit" noWrap>
            Title Search
          </Typography>
          <div className={classes.grow} />
          <div className={`${classes.search} input-search-bar`}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <Input
              placeholder="Search…"
              disableUnderline
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={this.state.searchTitle}
              onBlur={this.handleSearchBlur}
              onChange={this.handleSearchChange}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar);
