import React from 'react';

export const UserItem = (props) => {
  const {
    item: { month, users },
  } = props;

  let style = '';
  if (users.length <= 3) {
    style = 'gray';
  } else if (users.length >= 3 && users.length <= 6) {
    style = 'blue';
  } else if (users.length >= 7 && users.length <= 10) {
    style = 'green';
  } else if (users.length >= 11) {
    style = 'red';
  }

  return (
    <div className="card">
      <div className="card-inner">
        <h1 className="card-front" style={{ backgroundColor: style }}>
          {month}
        </h1>
        <table className="card-back">
          <thead>
            <tr>
              <th>Users Information</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.firstName} {user.lastName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
