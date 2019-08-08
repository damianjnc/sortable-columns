import React, {useState, useEffect} from 'react';
import { phoneCodes } from './data/phoneCodes';

import { TableWrapper, TdWrapper, ThWrapper } from "./styled";



const Table = () => {

    const [data, setData] = useState( []);

    const [sorting, setSorting] = useState({
            column: null,
            direction: 'desc',
        });

    useEffect( ()=>  {
/*        axios.get('https://country.io/phone.json')
            .then(res => console.log(res))
            .catch(err => console.log(err));
          //  gives CORS error, can't change to https
            */

            phoneCodes().then(
                res =>{
                    const loadedCodes = [];
                    for(let el of res){
                        loadedCodes.push({
                            id: el.name,
                            name: el.name,
                            prefix: el.dial_code.replace(' ', '') //some codes look like that: +1 868
                        });
                    }
                    setData(loadedCodes);
                }

            );


    }, []);


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
            <>
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
                </>
        );
}

export default Table;