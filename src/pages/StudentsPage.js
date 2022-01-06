import React from "react";
import { Link } from "react-router-dom";

const StudentsPage = ({ students }) => {
    const studentLinks = students.map((student, index) => {
        const linkNav = `/students/${student.toString()}`;
        return (
            <li key={index}>
                <Link to={linkNav}>{student}</Link>
            </li>
        );
    });

    return (
        <div>
            <h1>All students</h1>
            <ul>{studentLinks}</ul>
        </div>
    );
};

export default StudentsPage;
