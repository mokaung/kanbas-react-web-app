export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - Mental Fortitude
            </a><br />
            <span className  = "wd-assignment-information">Multiple Modules | <b>Not available until</b> Sep 30 6 at 12:00am |</span><br />
            <span className  = "wd-assignment-information"><b>Due</b> Oct 05 at 11:59pm | 50 pts</span>
          </li>
          <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2 - Small Gusts
            </a><br />
            <span className  = "wd-assignment-information">Multiple Modules | <b>Not available until</b> Oct 20 at 12:00am |</span><br />
            <span className  = "wd-assignment-information"><b>Due</b> Oct 25 at 11:59pm | 100 pts</span>
          </li>
          <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3 - Big Wind
            </a><br />
            <span className  = "wd-assignment-information">Multiple Modules | <b>Not available until</b> Oct 26 at 12:00am |</span><br />
            <span className  = "wd-assignment-information"><b>Due</b> Oct 31 at 11:59pm | 100 pts</span>
          </li>
        </ul>
      </div>
  );}
  