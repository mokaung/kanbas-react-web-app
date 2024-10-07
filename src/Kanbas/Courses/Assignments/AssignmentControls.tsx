import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AssignmentsControls() {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="input-group" style={{ width: "550px", height: "50px" }}>
        <span className="input-group-text bg-white border-end-0">
          <FaSearch className="text-muted" />
        </span>
        <input
          type="search"
          className="form-control border-start-0"
          placeholder="Search..."
        />
      </div>
      <div>
        <Link
          to="/Kanbas/Courses/1234/Assignments/Editor"
          className="btn btn-lg btn-danger me-1 float-end"
        >
          + Assignment
        </Link>
        <button className="btn btn-lg btn-secondary me-1 float-end">
          + Group
        </button>
      </div>
    </div>
  );
}
