function Loader() {
  return (
    <div className="loader-container" role="status" aria-live="polite">
      <div className="loader" aria-hidden="true"></div>
      <h2>Loading...</h2>
    </div>
  );
}

export default Loader;