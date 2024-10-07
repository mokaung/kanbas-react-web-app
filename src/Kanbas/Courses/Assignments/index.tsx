import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import AssignmentsControls from "./AssignmentControls";
import { BsChevronDown } from "react-icons/bs";
import { PiNotebookDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Assignments() {
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
                to="/Kanbas/Courses/1234/Assignments/Editor"
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
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <PiNotebookDuotone className="text-success me-2 fs-5" />
                  <div className="d-flex align-items-start ms-3">
                    <div className="d-flex flex-column">
                      <Link
                        to="/Kanbas/Courses/1234/Assignments/Editor"
                        className="fw-bold mb-0 text-decoration-none text-dark"
                      >
                        Era of Raava
                      </Link>
                      <span>
                        <span className="text-danger me-3">
                          Multiple Modules
                        </span>
                        <span className="text-muted">|</span>
                        <span className="ms-3">Not available until </span>
                        <span className="text-muted me-3">
                          April 2 at 12:00am
                        </span>
                        <span className="text-muted">|</span>
                      </span>
                      <span>
                        <span>Due </span>
                        <span className="text-muted">April 7 at 11:59pm</span>
                        <span className="ms-3 text-muted">|</span>
                        <span className="text-muted ms-3">100 pts</span>
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

            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <PiNotebookDuotone className="text-success me-2 fs-5" />
                  <div className="d-flex align-items-start ms-3">
                    <div className="d-flex flex-column">
                      <Link
                        to="/Kanbas/Courses/1234/Assignments/Editor"
                        className="fw-bold mb-0 text-decoration-none text-dark"
                      >
                        Air Ball
                      </Link>
                      <span>
                        <span className="text-danger me-3">
                          Multiple Modules
                        </span>
                        <span className="text-muted">|</span>
                        <span className="ms-3">Not available until </span>
                        <span className="text-muted me-3">
                          October 2 at 12:00am
                        </span>
                        <span className="text-muted">|</span>
                      </span>
                      <span>
                        <span>Due </span>
                        <span className="text-muted">
                          October 14 at 11:59pm
                        </span>
                        <span className="ms-3 text-muted">|</span>
                        <span className="text-muted ms-3">100 pts</span>
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

            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <PiNotebookDuotone className="text-success me-2 fs-5" />
                  <div className="d-flex align-items-start ms-3">
                    <div className="d-flex flex-column">
                      <Link
                        to="/Kanbas/Courses/1234/Assignments/Editor"
                        className="fw-bold mb-0 text-decoration-none text-dark"
                      >
                        Air Blast
                      </Link>
                      <span>
                        <span className="text-danger me-3">
                          Multiple Modules
                        </span>
                        <span className="text-muted">|</span>
                        <span className="ms-3">Not available until </span>
                        <span className="text-muted me-3">
                          December 17 at 12:00pm
                        </span>
                        <span className="text-muted">|</span>
                      </span>
                      <span>
                        <span>Due </span>
                        <span className="text-muted">
                          December 23 at 11:59pm
                        </span>
                        <span className="ms-3 text-muted">|</span>
                        <span className="text-muted ms-3">100 pts</span>
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
          </ul>
        </li>
      </ul>
    </div>
  );
}
