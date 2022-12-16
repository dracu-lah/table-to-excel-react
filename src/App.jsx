import React, { Component, useRef } from "react";
import axios from "axios";
import { DownloadTableExcel } from 'react-export-table-to-excel';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
    this.myRef = React.createRef(null);
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      // console.log(response.data);
      this.setState({ users: response.data });
    });
  }
  
  render() {
    return (
      <>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center"  ref={this.myRef}>
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Username
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Phone
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map((itm, k) => {
                      return (
                        <tr className="bg-white border-b" key={k}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {itm.id}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {itm.name}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {itm.username}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {itm.phone}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <DownloadTableExcel
        filename="users table"
        sheet="users"
        currentTableRef={this.myRef.current}
        >
        <div className="flex space-x-2 justify-center">
          <div>
            <button
              type="button"
              className="inline-block px-6 pt-2.5 pb-2 bg-gray-800 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="download"
                className="w-3 mr-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                ></path>
              </svg>
              Download
            </button>
          </div>
        </div>
        </DownloadTableExcel>
      </>
    );
  }
}

export default App;
