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
            onChange: selectedValues => {console.log(selectedValues)},
            onClose: selectedValues => {console.log(selectedValues)},
        },
        {
            name: 'Semestre',
            items: [
                {
                    name: '1 Semestre',
                    value: 1,
                },
                {
                    name: '2 Semestre',
                    value: 2,
                },
            ],
            onChange: selectedValues => {console.log(selectedValues)},
            onClose: selectedValues => {console.log(selectedValues)},
        },
    ];
  return (
      <Filter filters={filters} />
  );
}

export default App;
