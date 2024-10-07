import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td>{" "}
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Lion</span>{" "}
              <span className="wd-last-name">El'Jonson</span>
            </td>
            <td className="wd-login-id">002945861K</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">PRIMARCH</td>
            <td className="wd-last-activity">41000-10-02</td>
            <td className="wd-total-activity">04:22:31</td>{" "}
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Shinji</span>{" "}
              <span className="wd-last-name">Ikari</span>
            </td>
            <td className="wd-login-id">EVA01NERV</td>
            <td className="wd-section">S103</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2023-02-12</td>
            <td className="wd-total-activity">12:09:01</td>{" "}
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Eikichi</span>{" "}
              <span className="wd-last-name">Onizuka</span>
            </td>
            <td className="wd-login-id">22ANDSING</td>
            <td className="wd-section">S104</td>
            <td className="wd-role">TEACHER</td>
            <td className="wd-last-activity">1999-12-23</td>
            <td className="wd-total-activity">42:17:08</td>{" "}
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Consort</span>{" "}
              <span className="wd-last-name">Miquella</span>
            </td>
            <td className="wd-login-id">999999999K</td>
            <td className="wd-section">S105</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">1432-09-11</td>
            <td className="wd-total-activity">01:01:01</td>{" "}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
