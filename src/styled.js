import styled from 'styled-components';

const myStyle = ' border: 1px solid lightgrey;';
const colors = {
    alto: '#d5d5d5',
    concrete: '#f2f2f2',
    cornflowerBlue: '#14a2e8',
    denim: '#0f7bb0',
    mineShaft: '#333333',
    scorpion: '#5c5c5c',
    veniceBlue: '#095e9f',
    white: '#ffffff'
};

export const TableWrapper = styled.table`
    ${myStyle}
`;

export const ThWrapper = styled.th`
    ${myStyle}
`;

export const TdWrapper = styled.td`
    ${myStyle}
`;


export const NiceButton = styled.button`
  background: ${colors.denim};
  border: 1px ${colors.denim} solid;
  padding: 5px 10px;
  border-radius: 2px;
  font-weight: bold;
  font-size: 9pt;
  outline: none;
  width: 25%;
  margin-left: 30%;
  margin-right: 30%;
  color: ${colors.concrete};
  box-shadow: inset 0 1px 0 ${colors.cornflowerBlue};
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${colors.white};
    cursor: pointer;
    background: ${colors.denim};
    border: 1px ${colors.veniceBlue} solid;
    box-shadow: 0 1px 1px ${colors.alto}, inset 0 1px 0 ${colors.cornflowerBlue};
   }
   &:active {
    box-shadow: inset 1px 1px 1px ${colors.alto};   
   }
`