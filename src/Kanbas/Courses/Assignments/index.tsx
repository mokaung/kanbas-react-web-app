import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import * as db from "../../Database";
import GreenCheckmark from "../Modules/GreenCheckmark";
import AssignmentsControls from "./AssignmentControls";
import { BsChevronDown } from "react-icons/bs";
import { PiNotebookDuotone } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div>
      <AssignmentsControls />
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between">
            <div className="d-flex fw-bold align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <BsChevronDown className="me-2" />
              ASSIGNMENTS
            </div>
            <div className="d-flex align-items-center">
              <span className="badge border border-dark text-dark rounded-pill me-2">
                40% of Total
              </span>
              <Link
                to={`/Kanbas/Courses/${cid}/Assignments/Editor`}
                className="btn btn-transparent p-0 me-2"
              >
                <FaPlus />
              </Link>
              <button className="btn btn-transparent p-0">
                <IoEllipsisVertical className="fs-4" />
              </button>
            </div>
          </div>
          <ul id="wd-lessons" className="list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      <PiNotebookDuotone className="text-success me-2 fs-5" />
                      <div className="d-flex align-items-start ms-3">
                        <div className="d-flex flex-column">
                          <Link
                            to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                            className="fw-bold mb-0 text-decoration-none text-dark"
                          >
                            {assignment.title}
                          </Link>
                          <span>
                            <span className="text-danger me-3">
                              Multiple Modules
                            </span>
                            <span className="text-muted">|</span>
                            <span className="ms-3">Not available until </span>
                            <span className="text-muted me-3">
                              {`${
                                [
                                  "January",
                                  "February",
                                  "March",
                                  "April",
                                  "May",
                                  "June",
                                  "July",
                                  "August",
                                  "September",
                                  "October",
                                  "November",
                                  "December",
                                ][parseInt(assignment.availmonth) - 1]
                              } ${assignment.availday} at 11:59 pm`}
                            </span>
                            <span className="text-muted">|</span>
                          </span>
                          <span>
                            <span>Due </span>
                            <span className="text-muted">
                              {`${
                                [
                                  "January",
                                  "February",
                                  "March",
                                  "April",
                                  "May",
                                  "June",
                                  "July",
                                  "August",
                                  "September",
                                  "October",
                                  "November",
                                  "December",
                                ][parseInt(assignment.duemonth) - 1]
                              } ${assignment.dueday} at 11:59 pm`}
                            </span>
                            <span className="ms-3 text-muted">|</span>
                            <span className="text-muted ms-3">{`${assignment.points} pts`}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <GreenCheckmark />
                      <IoEllipsisVertical className=" ms-4 fs-4" />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
