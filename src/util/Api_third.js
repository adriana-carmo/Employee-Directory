import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=150&nat=";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};

    