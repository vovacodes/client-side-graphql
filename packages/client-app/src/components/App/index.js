import React from 'react';
import MoviesPage from '../MoviesPage';
import MovieDetailPage from '../MovieDetailPage';
import ActorDetailPage from '../ActorDetailPage';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.goToMovies = this.goToMovies.bind(this);
    this.goToMovieDetail = this.goToMovieDetail.bind(this);
    this.goToActorDetail = this.goToActorDetail.bind(this);

    this.state = {
      page: 'movies',
      selectedMovieId: null,
      selectedActorId: null,
    };
  }

  goToMovies() {
    this.setState({
      page: 'movies',
      selectedMovieId: null,
      selectedActorId: null,
    });
  }

  goToMovieDetail(movieId) {
    this.setState({
      page: 'movieDetail',
      selectedMovieId: movieId,
      selectedActorId: null,
    });
  }

  goToActorDetail(actorId) {
    this.setState({
      page: 'actorDetail',
      selectedMovieId: null,
      selectedActorId: actorId,
    });
  }

  render() {
    const { page, selectedMovieId, selectedActorId } = this.state;

    switch (page) {
      case 'movies':
        return (
          <MoviesPage onMovieSelected={this.goToMovieDetail} />
        );

      case 'movieDetail':
        return (
          <MovieDetailPage
            movieId={selectedMovieId}
            onBackButtonClick={this.goToMovies}
            onActorClick={this.goToActorDetail}
          />
        );

      case 'actorDetail':
        return (
          <ActorDetailPage
            actorId={selectedActorId}
            onBackButtonClick={this.goToMovies}
          />
        );

      default:
        return <div>Not found</div>
    }
  }
}


export default App;
