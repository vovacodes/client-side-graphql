import React from 'react';
import injectSheet from 'react-jss';


const styles = {
  poster: {
    width: '165px',
    margin: '15px',
  },
  image: {
    width: '165px',
    height: '225px',
  },
  detail: {
    width: '100%',
    padding: '5px 0 0 0',
  },
  title: {
    width: '100%',
    fontSize: '12px',
    fontFamily: 'sans-serif',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    cursor: 'default',
  },
  year: {
    marginTop: '2px',
    fontSize: '12px',
    fontFamily: 'sans-serif',
    color: 'rgba(0, 0, 0, 0.4)'
  }
};

const Poster = ({ classes, url, title, year, onClick }) => (
  <div className={classes.poster} onClick={onClick} >
    <img className={classes.image} src={url} />
    <div className={classes.detail} >
      <div className={classes.title} title={title} >{title}</div>
      <div className={classes.year} >{year}</div>
    </div>
  </div>
);


export default injectSheet(styles)(Poster);
