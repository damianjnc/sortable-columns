import React, {useEffect, useReducer, useContext} from 'react'
import {phoneCodes} from './data/phoneCodes'
import {dataReducer} from './reducers/reducers'
import {sortReducer} from './reducers/reducers'
import {AuthContext} from "./context/auth-context"
import {TableWrapper, TdWrapper, ThWrapper, NiceButton} from "./styled"


const INITIAL_SORTING = {
    column: null,
    direction: 'desc'
}

const Table = () => {

    const authContext = useContext(AuthContext);

    const onLogoutHandler = () => authContext.logout();
    ;
    //const [data, setData] = useState( []);

    /*  const [sorting, setSorting] = useState({
        column: null,
        direction: 'desc'
    });
    */

    const [myDataState, dispatch] = useReducer(dataReducer, []);
    const [mySortingState, dispatchSorting] = useReducer(sortReducer, INITIAL_SORTING);

    useEffect(() => {
        /*   axios.get('https://country.io/phone.json')
            .then(res => console.log(res))
            .catch(err => console.log(err));
          //  gives CORS error, can't change to https
            */

        phoneCodes().then(
            res => {
                const loadedCodes = [];
                for (let el of res) {
                    loadedCodes.push({
                        id: el.name,
                        name: el.name,
                        prefix: el.dial_code.replace(' ', '') //some codes look like that: +1 868
                    });
                }
                dispatch({type: 'ADD', payload: loadedCodes});
            }
        );
    }, []);


    const onSort = column => {
        const direction = mySortingState.column ? (mySortingState.direction === 'asc' ? 'desc' : 'asc') : 'desc';
        const sortedData = myDataState.sort((a, b) => {
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

        dispatch({type: 'ADD', payload: sortedData});
        dispatchSorting({
            type: 'SET', payload: {
                column,
                direction,
            }
        })
    };

    return (
        <>
            <NiceButton onClick={onLogoutHandler}>Logout</NiceButton>
            <TableWrapper>
                <thead>
                <tr>
                    <ThWrapper onClick={() => onSort('name')}>Name</ThWrapper>
                    <ThWrapper onClick={() => onSort('prefix')}>Prefix</ThWrapper>
                </tr>
                </thead>
                <tbody>
                {myDataState.map(function (item, index) {
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