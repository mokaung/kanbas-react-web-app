import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  const links = [
    { label: "Home", path: "Home" },
    { label: "Modules", path: "Modules" },
    { label: "Piazza", path: "Piazza" },
    { label: "Zoom", path: "Zoom" },
    { label: "Assignments", path: "Assignments" },
    { label: "Quizzes", path: "Quizzes" },
    { label: "Grades", path: "Grades" },
    { label: "People", path: "People" },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map(({ label, path }) => (
        <Link
          key={path}
          to={`/Kanbas/Courses/${cid}/${path}`}
          id={`wd-course-${path.toLowerCase()}-link`}
          className={`list-group-item border border-0 ${
            pathname.includes(path) ? "active" : "text-danger"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
);}
