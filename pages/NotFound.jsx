import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="section">

      <div className="not-found">

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry! The page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <button className="home-btn">
            Back to Home
          </button>
        </Link>

      </div>

    </div>
  );
}

export default NotFound;