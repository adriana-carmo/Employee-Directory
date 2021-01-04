import React from "react"; 


function ResultList(props) {

  return (
      <div className="container"> 
          <table className="table">
              <thead>
                <tr>
                  <th colSpan="5" className="table-title" style={{textAlign: "center"}}>List of 150 Employees</th>
                </tr>
              </thead>
              <thead className="thead-light">
                  <tr>
                      <th scope="col"></th>
                      <th scope="col"><button onClick={props.sorting}>Name</button></th>
                      <th scope="col">E-mail</th>
                      <th scope="col">Phone</th>
                      <th scope="col">City / State / Country</th>
                  </tr>
              </thead>
              <tbody className="customtable">
                {props.results.map(result => (
                  <tr key={result.login.uuid}>
                      <td><img src={result.picture.thumbnail} className="avatar" alt={result.name.first}/></td>
						          <td>{result.name.title}. {result.name.first} {result.name.last}</td>
                      <td>{result.email}</td>
                      <td>{result.phone}</td>
                      <td>{result.location.city} / {result.location.state} / {result.location.country}</td>
                  </tr>
                ))}
              </tbody>
          </table>
      </div>
  );
}

export default ResultList;