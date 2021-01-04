import React, { Component } from 'react';
import ListEmployee from '../util/Api_third';
import SearchForm from './searchForm';
import ResultList from './listEmployee';

class Employee extends Component {
    state = {
      search: "",
      location: "",
      results: [],
      filterEmployee: [],
      sortAsc: false
    };
  
    // When this component mounts, search the Employees of those AU,BR,CA,ES,US country
    componentDidMount() {
      this.searchEmployee("AU,BR,CA,ES,US");
    }
  
    // Call the API 
    searchEmployee = query => {
        ListEmployee.search(query)
        .then(res => this.setState({ results : res.data.results, 
                                    filterEmployee : res.data.results,
                                    search : ""
                                    },))
        .catch(err => console.log(err));
    };


    // When the form is submitted, search the Employees API
    handleFormSubmit = event => {
        event.preventDefault();
        //this.searchEmployee(this.state.search);
        this.setState({ location: ""});
        
        this.searchEmployee("AU,BR,CA,ES,US");
    };

    // filter by location
    handleSelectLocation = event => {
        const itemLocation = event.target.value;
        
        this.setState({ location: itemLocation});
        this.searchEmployee(itemLocation);
        
    };

    // Sorting the name Asc and Desc
    handleSortClick = () => {

        if(this.state.sortAsc)
            this.NameDesc()
        else
            this.NameAsc()
    }

    // Sorting in ascending name order
    NameAsc(){
        let filtered = [];
        
        filtered = this.state.results.sort(
          function (a, b) {
            if (a.name.first > b.name.first) {
                return 1;
        
            }
            if (a.name.first < b.name.first) {
                return -1;
            
            }
            // a must be equal to b
            return 0;
          }
        );
   
        this.setState({ sortAsc: true })
        this.setState({ filterEmployee: filtered })
    }

    // Sorting descending name order
    NameDesc(){
        let filtered = [];
        
        filtered = this.state.results.sort(
          function (a, b) {
            if (a.name.first > b.name.first) {
                return -1;
        
            }
            if (a.name.first < b.name.first) {
                return 1;
            
            }
            // a must be equal to b
            return 0;
          }
        );
   
        this.setState({ sortAsc: false })
        this.setState({ filterEmployee: filtered })
    }

   
    // filter by name field
    handleInputChange = (event) => {
        let filtered = [];
        const searchType = event.target.value;
       
        filtered = this.state.results.filter(Employee => Employee.name.first.toLowerCase().includes(searchType.toLowerCase()));
        this.setState({ filterEmployee: filtered })
        this.setState({ search: searchType});
    };


    render() {
        return (
          <div>
            <SearchForm
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              change={this.handleSelectLocation} 
              location={this.state.location}
              />
            <ResultList results={this.state.filterEmployee}  sorting={this.handleSortClick}
            />
          </div>
        );
    }
}

export default Employee;