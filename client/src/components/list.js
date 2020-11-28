import React from 'react';
// import { Container } from "../components/grid";
import moment from 'moment';

const List = (props) => {
  const { repos } = props;
  var count = 0;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Meetinghouse Movers</h2>
      <div>
        <table class="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">New Address</th>
              <th scope="col">Info</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="table-container">
        {repos.map((repo) => {
          count++;
          return (
            <div>
              <table key={repo.id} class="table-data table">
                <tbody>
                  <tr>
                    <th scope="row">{count}</th>
                    <td>{repo.name}</td>
                    <td>{repo.email}</td>
                    <td>{repo.phone}</td>
                    <td>{repo.newAddress}</td>
                    <td>{repo.info}</td>
                    <td>{moment(repo.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
            // <li key={repo.id} className='list'>
            //   <span className='repo-text'>{repo.name} </span>
            //   <span className='repo-email'>{repo.email} </span>
            //   <span className='repo-balance'>{repo.balance}</span>
            // </li>
          );
        })}
      </div>
    </ul >
  );
};
export default List;