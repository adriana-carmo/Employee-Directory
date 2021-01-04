import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="container">
        <div className="table-filter">
          <div className="row">
            <div className="col-sm-4">
              <div className="filter-group">
                <label htmlFor="search">Search:</label>
                <input
                  onChange={props.handleInputChange}
                  value={props.search}
                  name="search"
                  type="text"
                  className="form-control"
                  placeholder="Search for a name"
                  id="search"
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="filter-group">
                <label htmlFor="location">Location</label>
                <select className="form-control" name="country" id="country" onChange={props.change} value={props.location}>
                  <option value="AU,BR,CA,ES,US">All</option>
                  <option value="AU">Australia</option>
                  <option value="BR">Brazil</option>
                  <option value="CA">Canada</option>
                  <option value="ES">Spain</option>
                  <option value="US">United States</option>								
                </select>
              </div>
            </div>
            <div className="col-sm-4">
              <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                Reload New Employees
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;