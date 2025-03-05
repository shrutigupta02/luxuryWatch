import { Link } from 'react-router-dom';

function WatchCard({ watch }) {
  return (
    <div className="watch-card">
      <img src={watch.image} alt={watch.name} />
      <div className="watch-info">
        <h3>{watch.name}</h3>
        <p className="price">${watch.price}</p>
        <p className="description">{watch.description.substring(0, 100)}...</p>
        <Link to={`/watch/${watch.id}`} className="view-button">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default WatchCard;