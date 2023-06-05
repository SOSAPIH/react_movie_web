import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({coverImg, title, summary, genres, year, id}) {
    return(
    <div>
        <h2><Link to={`/movie/${id}`}>{title} ({year})</Link></h2>
        <img src={coverImg} alt={title} />
        <p>{summary.length>235 ? `${summary.slice(0, 300)}...`: summary}</p>
        {genres && genres.length > 0 ? <ul>
          {genres.map(g => <li key={g}>{g}</li>)}
        </ul> : null}
    </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
}

export default Movie;