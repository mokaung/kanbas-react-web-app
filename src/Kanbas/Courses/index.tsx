import { Navigate, Route, Routes } from "react-router";
import Modules from "./Modules";
import CoursesNavigation from "./navigation";
import Home from "./Home";
import AssignmentEditor from "./Assignments/Editor";
import Assignments from "./Assignments";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";

//assignment said to use a breadcrumb so I learned how to make a simple breadcrumb

export default function Courses() {
  return (
    <div id="wd-courses">
      <div className="d-flex align-items-center">
        <h2 className="text-danger d-flex">
          <FaAlignJustify className="me-2 fs-4" />
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item active" aria-current="page">
                AB1000 Intro to Airbending
              </li>
            </ol>
          </nav>
        </h2>
      </div>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
