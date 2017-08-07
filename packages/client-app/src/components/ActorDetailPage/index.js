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
  },
  name: {
    marginBottom: '15px',
    fontFamily: 'sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  movies: {
    marginBottom: '15px',
    fontFamily: 'sans-serif',
  },
};

const withActorData = graphql(
  gql`
    query actorById($id: ID!) {
      actorById(id: $id) {
        name
        movies {
          title
        }
      }
    }
  `,
  {
    options: (props) => ({
      variables: { id: props.actorId }
    })
  }
);

const ActorDetailPage = ({ classes, data, onBackButtonClick }) => {
  const { loading, error, actorById: actor } = data;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ooops, an  error happened: {error.message}</div>
  }

  return (
    <div>
      <button className={classes.backButton} onClick={onBackButtonClick} >Back to catalogue</button>
      <div className={classes.container}>
        <div className={classes.name}>{actor.name}</div>
        <div className={classes.movies}>
          <strong>Appears on:</strong> {actor.movies.map(movie => movie.title).join(', ')}
        </div>
      </div>
    </div>
  );
};


export default withActorData(injectSheet(styles)(ActorDetailPage));
