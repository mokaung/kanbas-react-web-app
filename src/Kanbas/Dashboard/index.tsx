import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FacultyProtection from "../Account/FacultyProtection";
import StudentProtection from "../Account/StudentProtection";
import { enroll, unenroll } from "./reducer";
import * as enrollmentsClient from "./client";
import * as coursesClient from "../Courses/client";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [currentCourses, setCourses] = useState<any[]>([]);
  const [enrollments, setEnrollments] = useState<any[]>([]);

  const [viewAllCourses, setViewAllCourses] = useState(false);
  const dispatch = useDispatch();

  const fetchCourses = async () => {
    if (viewAllCourses) {
      const allCourses = await coursesClient.fetchAllCourses();
      setCourses(allCourses);
    } else {
      const enrolledCourses = await enrollmentsClient.fetchEnrolledCourses(
        currentUser._id
      );
      setCourses(enrolledCourses);
    }
  };

  const fetchEnrollments = async () => {
    const userEnrollments = await enrollmentsClient.fetchEnrollmentsForUser(
      currentUser._id
    );
    setEnrollments(userEnrollments);
  };

  const enrollInCourse = async (userId: string, courseId: string) => {
    const newEnrollment = await enrollmentsClient.enrollUserInCourse(
      userId,
      courseId
    );
    dispatch(enroll(newEnrollment));
    fetchEnrollments();
    fetchCourses();
  };
  const unenrollFromCourse = async (userId: string, courseId: string) => {
    await enrollmentsClient.unenrollUserFromCourse(userId, courseId);
    dispatch(unenroll({ userId, courseId }));
    fetchEnrollments();
    fetchCourses();
  };

  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, [viewAllCourses]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <button
        onClick={() => setEnrolling(!enrolling)}
        className="float-end btn btn-primary"
      >
        {enrolling ? "My Courses" : "All Courses"}
      </button>{" "}
      <hr />
      <FacultyProtection>
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            {" "}
            Add{" "}
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>
        <br />
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <textarea
          value={course.description}
          className="form-control"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
        <hr />
      </FacultyProtection>
      <StudentProtection>
        <button
          className="btn btn-primary float-end"
          onClick={() => {
            setViewAllCourses(!viewAllCourses);
            fetchCourses();
          }}
        >
          {viewAllCourses ? "My Enrollments" : "All Courses"}
        </button>
      </StudentProtection>
      <h2 id="wd-dashboard-published">
        Published Courses ({currentCourses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {currentCourses.map((course) => {
            return (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
              >
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img src="/images/p3.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {enrolling && (
                          <button onClick={(event) => {
                            event.preventDefault();
                            updateEnrollment(course._id, !course.enrolled);
                          }}
                            className={`btn ${
                              course.enrolled ? "btn-danger" : "btn-success"
                            } float-end`}
                          >
                            {course.enrolled ? "Unenroll" : "Enroll"}
                          </button>
                        )}
                        {course.name}{" "}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}{" "}
                      </p>
                      <button className="btn btn-primary"> Go </button>
                      <FacultyProtection>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </FacultyProtection>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
