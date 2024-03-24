import { useLoaderData } from "react-router-dom";
import TableItem from "./TableItem";

const ShowTheStudent = () => {

    const students = useLoaderData();

    const datas = students.data.slice(1)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Roll</th>
                            <th>Section</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map((data, idx) => <TableItem key={idx} data={data} idx={idx}></TableItem>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowTheStudent;