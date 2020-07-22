import React from 'react';

import { HTTPservices } from './HTTPservices';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from './components/Header';
import { MonthsGrid } from './components/MonthsGrid';

export const App = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const response = await HTTPservices.getAllUsers();
        setUsers(response);
      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  const sortUsersByMonths = users.reduce(
    (acc, curr) => {
      acc[new Date(curr.dob).getMonth()].users.push(curr);
      return acc;
    },
    [...Array(12)].map((n, i) => ({
      month: new Date(0, i).toLocaleString('en-EN', { month: 'long' }),
      users: [],
    }))
  );

  return (
    <div className="container">
      <Header />
      <ErrorBoundary>
        <MonthsGrid loading={loading} sortUsersByMonths={sortUsersByMonths} />
      </ErrorBoundary>
    </div>
  );
};
