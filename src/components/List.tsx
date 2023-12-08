import { Table } from "react-bootstrap";
// import ToDo from './td';
import { useState } from "react";


type ToDoListProps={
    // tdItems:TDItemType[];
    tdItem:string[];
}

export default function ToDoList({tdItem}:ToDoListProps):JSX.Element{


    return (
        <>
            <Table >
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>To-Do</th>
                    </tr>
                </thead>
                <tbody>
                    {tdItem.map( (task, index) => (
                        <tr key={task}>
                            <td>{index+1}</td>
                            <td>{task}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </Table>
        </>
    )
}