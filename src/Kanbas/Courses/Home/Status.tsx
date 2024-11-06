import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdHome } from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";
import { FaBullhorn } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import FacultyProtection from "../../Account/FacultyProtection";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <FacultyProtection>
            <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
              <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish{" "}
            </button>
          </FacultyProtection>
        </div>
        <div className="w-50">
          <FacultyProtection>
            <button className="btn btn-lg btn-success w-100">
              <FaCheckCircle className="me-2 fs-5" /> Publish{" "}
            </button>
          </FacultyProtection>
        </div>
      </div>
      <br />
      <FacultyProtection>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <BiImport className="me-2 fs-5" /> Import Existing Content{" "}
        </button>
      </FacultyProtection>
      <FacultyProtection>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons{" "}
        </button>
      </FacultyProtection>
      <FacultyProtection>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <MdHome className="me-2 fs-5" /> Choose Home Page{" "}
        </button>
      </FacultyProtection>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <RiBarChartFill className="me-2 fs-5" /> View Course Stream{" "}
      </button>
      <FacultyProtection>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <FaBullhorn className="me-2 fs-5" /> New Announcement{" "}
        </button>
      </FacultyProtection>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaDatabase className="me-2 fs-5" /> New Analytics{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBell className="me-2 fs-5" /> View Course Notifications{" "}
      </button>
    </div>
  );
}
