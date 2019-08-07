import React, {useState} from 'react';
import { TableWrapper, TdWrapper, ThWrapper } from "./styled";

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
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
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
            <TableWrapper>
                <thead>
                <tr>
                    <ThWrapper onClick={() => onSort('name')}>Name</ThWrapper>
                    <ThWrapper onClick={() => onSort('prefix')}>Prefix</ThWrapper>
                </tr>
                </thead>
                <tbody>
                {data.map(function(item, index) {
                    return (
                        <tr key={index} data-item={item}>
                            <TdWrapper data-title="Name">{item.name}</TdWrapper>
                            <TdWrapper data-title="Prefix">{item.prefix}</TdWrapper>
                        </tr>
                    );
                })}
                </tbody>
            </TableWrapper>
        );
}

export default Table;