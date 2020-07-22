import React from 'react';

import { UserItem } from '../UserItem';
import { Spinner } from '../Spinner';

export const MonthsGrid = ({ sortUsersByMonths, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {sortUsersByMonths.map((item) => (
        <UserItem key={item.month} item={item} />
      ))}
    </section>
  );
};
