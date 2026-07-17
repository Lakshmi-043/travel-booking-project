function Filter({
  categories = [],
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="filter-container">

      <label>Category</label>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">
          All
        </option>

        {categories.map((category, index) => (
          <option
            key={index}
            value={category}
          >
            {category}
          </option>
        ))}

      </select>

    </div>
  );
}

export default Filter;