import React from 'react';
import injectSheet from 'react-jss';
import { gql, graphql } from 'react-apollo';
import Poster from '../Poster';


const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};

let withMoviesData = graphql(gql`
  query allMovies {
    movies {
      id
      title
      year
      posterUrl
    }
  }
`);

const MoviesPage = (props) => {
  const {
    classes,
    data: { loading, error, movies },
    onMovieSelected,
  } = props;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ooops, an  error happened: {error.message}</div>
  }

  return (
    <div className={classes.container} >
      {movies.map((movie) => (
        <Poster
          key={movie.id}
          url={movie.posterUrl}
          title={movie.title}
          year={movie.year}
          onClick={() => onMovieSelected(movie.id)}
        />
      ))}
    </div>
  );
};


export default withMoviesData(injectSheet(styles)(MoviesPage));
