import React from 'react';
import Filter from './components/Filter'

function App() {
  const filters = [
    {
      name: 'Ano',
      items: [
        {
          name: '2019',
          value: 2019,
        },
        {
          name: '2018',
          value: 2018,
        },
      ],
    },
  ];
  return (
      <Filter filters={filters} />
  );
}

export default App;
