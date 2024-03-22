import PropTypes from 'prop-types';

const TableItem = ({data, idx}) => {
    const {name, roll, section} = data
    return (
        <>
            <tr>
                <th>{idx+1}</th>
                <td>{name}</td>
                <td>{roll}</td>
                <td>{section}</td>
            </tr>
        </>
    );
};



TableItem.propTypes = {
    data: PropTypes.object,
    idx: PropTypes.number,
}
export default TableItem;