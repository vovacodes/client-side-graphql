import React from 'react';
import injectSheet from 'react-jss';
import { gql, graphql } from 'react-apollo';


const styles = {
  backButton: {
    padding: '10px 20px',
    background: 'transparent',
    fontSize: '20px',
    fontFamily: 'sans-serif',
    cursor: 'pointer',
    border: '1px solid black',
    borderRadius: '30px',
  },
  container: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  posterImage: {
    width: '220px',
    height: '300px',
    marginRight: '20px',
    flexShrink: 0,
  },
  detail: {
    marginRight: '20px',
  },
  title: {
    marginBottom: '15px',
    fontFamily: 'sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  storyline: {
    marginBottom: '15px',
    fontFamily: 'sans-serif',
    fontSize: '16px',
  },
  year: {
    marginBottom: '10px',
    fontFamily: 'sans-serif',
    fontSize: '16px',
  },
  cast: {
    marginBottom: '10px',
    fontFamily: 'sans-serif',
    fontSize: '16px',
  },
  actorLink: {
    border: '1px solid black',
    background: 'transparent',
    borderRadius: '15px',
    fontSize: '12px',
    cursor: 'pointer',
  }
};

const withMovieData = graphql(
  gql`
    query movieById($id: ID!) {
      movieById(id: $id) {
        id
        title
        storyline
        year
        actors {
          id
          name
        }
        posterUrl
      }
    }
  `,
  {
    options: (props) => ({
      variables: { id: props.movieId }
    })
  }
);

const MovieDetailPage = ({ classes, data, onBackButtonClick, onActorClick }) => {
  const { loading, error, movieById: movie } = data;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ooops, an  error happened: {error.message}</div>
  }

  const actorLinks = movie.actors.map(actor => (
    <button key={actor.id} className={classes.actorLink} onClick={() => onActorClick(actor.id)}>
      {actor.name}
    </button>
  ));

  return (
    <div>
      <button className={classes.backButton} onClick={onBackButtonClick} >Back to catalogue</button>
      <div className={classes.container} >
        <div className={classes.detail} >
          <div className={classes.title} >{movie.title}</div>
          <div className={classes.storyline} >{movie.storyline}</div>
          <div className={classes.year} ><strong>Year:</strong> {movie.year}</div>
          <div className={classes.cast} ><strong>Cast:</strong> {actorLinks}</div>
        </div>
        <img className={classes.posterImage} src={movie.posterUrl} />
      </div>
    </div>
  );
};


export default withMovieData(injectSheet(styles)(MovieDetailPage));
