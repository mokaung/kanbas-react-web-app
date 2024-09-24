import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1000/Home"
          >
            <img src="/images/airbend.jpg" width={200} />
            <div>
              <h5>AB1000 Intro to Airbending</h5>
              <p className="wd-dashboard-course-title">
                Full Mastery of the Element Air
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/3000/Home"
          >
            <img src="/images/cook.jpg" width={200} />
            <div>
              <h5>CK3000 Advanced Gastronomical Techniques</h5>
              <p className="wd-dashboard-course-title">
                Analysis of Food Manipulation
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/3001/Home"
          >
            <img src="/images/draw.jpg" width={200} />
            <div>
              <h5>ART3001 Advanced 2D Art</h5>
              <p className="wd-dashboard-course-title">
                Very classy drawing skills
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/0001/Home"
          >
            <img src="/images/math.jpg" width={200} />
            <div>
              <h5>MATH0001 Intro to Elementary School Math</h5>
              <p className="wd-dashboard-course-title">For babies</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2000/Home"
          >
            <img src="/images/orbital.jpg" width={200} />
            <div>
              <h5>OB2000 Intro to Building Orbital Cannons</h5>
              <p className="wd-dashboard-course-title">NASA Employee</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2001/Home"
          >
            <img src="/images/spirits.jpg" width={200} />
            <div>
              <h5>SP2001 Intermediate Spiritcalling</h5>
              <p className="wd-dashboard-course-title">Advanced Spiritualist</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
      <div className="wd-dashboard-course">
        <Link
          className="wd-dashboard-course-link"
          to="/Kanbas/Courses/1200/Home"
        >
          <img src="/images/warcraft.jpg" width={200} />
          <div>
            <h5>WC1200 Intro to Warcrafting</h5>
            <p className="wd-dashboard-course-title">RTS Professional</p>
            <button> Go </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
