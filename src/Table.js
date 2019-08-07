import React, {useState} from 'react';

const Table = () => {

    const [data, setData] = useState( [
        {name: 'Poland', prefix: 48},
        {name: 'Mexico', prefix: 52},
        {name: 'UK', prefix: 44},
        {name: 'US', prefix: 1},
        {name: 'Italy', prefix: 39}
    ]);

    const [sorting, setSorting] = useState({ sorting: {
            column: null,
            direction: 'desc',
        }});

    const onSort = column  => {
        const direction = sorting.column ? (sorting.direction === 'asc' ? 'desc' : 'asc') : 'desc';
        const sortedData = data.sort((a, b) => {
            if (column === 'name') {
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                return 0;
            } else {
                return a.prefix - b.prefix;
            }
        });

        if (direction === 'desc') {
            sortedData.reverse();
        }

        setData(sortedData);
        setSorting({
            column,
            direction,
        });
    };

        return (
            <table>
                <thead>
                <tr>
                    <th onClick={() => onSort('name')}>Name</th>
                    <th onClick={() => onSort('prefix')}>Prefix</th>
                </tr>
                </thead>
                <tbody>
                {data.map(function(item, index) {
                    return (
                        <tr key={index} data-item={item}>
                            <td data-title="Name">{item.name}</td>
                            <td data-title="Prefix">{item.prefix}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
}

export default Table;