

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addAssignment, updateAssignment } from "./reducer";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );

  const existingAssignment = assignments.find((a: any) => a._id === aid);

  const [assignment, setAssignment] = useState(
    existingAssignment || {
      _id: aid || "TBD",
      course: cid || "TBD",
      title: "",
      points: 100,
      group: "ASSIGNMENTS",
      displayGradeAs: "Percentage",
      submissionType: "Online",
      onlineEntryOptions: {
        textEntry: false,
        websiteURL: false,
        mediaRecordings: false,
        studentAnnotation: false,
        fileUpload: false,
      },
      assignTo: "Everyone",
      availyear: "2000",
      availmonth: "01",
      availday: "01",
      dueyear: "2000",
      duemonth: "01",
      dueday: "01",
    }
  );

  const saveAssignment = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = await assignmentsClient.createAssignment(cid, assignment);
    dispatch(addAssignment(newAssignment));
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-4 float-end" style={{ width: "80%" }}>
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          type="text"
          id="wd-name"
          value={assignment.title}
          className="form-control"
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
      </div>
      <div className="mb-4 float-end" style={{ width: "80%" }}>
        <textarea
          id="wd-description"
          className="form-control"
          style={{ height: "200px" }}
          placeholder="Write a description..."
        />
      </div>
      <div className="row float-end" style={{ width: "80%" }}>
        <div className="col-md-12">
          <div className="d-flex flex-column align-items-end">
            <div className="d-flex mb-3 w-100">
              <label
                htmlFor="wd-points"
                className="form-label me-3 w-25 text-end"
                style={{ whiteSpace: "nowrap" }}
              >
                Points
              </label>
              <input
                type="number"
                id="wd-points"
                className="form-control"
                style={{ width: "70%" }}
                value={assignment.points}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    points: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="d-flex mb-3 w-100">
              <label
                htmlFor="wd-group"
                className="form-label me-3 w-25 text-end"
                style={{ whiteSpace: "nowrap" }}
              >
                Assignment Group
              </label>
              <select
                id="wd-group"
                className="form-select"
                style={{ width: "70%" }}
                value={assignment.group}
                onChange={(e) =>
                  setAssignment({ ...assignment, group: e.target.value })
                }
              >
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="PROJECTS">PROJECTS</option>
              </select>
            </div>
            <div className="d-flex mb-3 w-100">
              <label
                htmlFor="wd-display-grade-as"
                className="form-label me-3 w-25 text-end"
                style={{ whiteSpace: "nowrap" }}
              >
                Display Grade as
              </label>
              <select
                id="wd-display-grade-as"
                className="form-select"
                style={{ width: "70%" }}
                value={assignment.displayGradeAs}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    displayGradeAs: e.target.value,
                  })
                }
              >
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
                <option value="Fraction">Fraction</option>
              </select>
            </div>
            <div className="d-flex mb-3 w-100">
              <label
                htmlFor="wd-submission-type"
                className="form-label me-3 w-25 text-end"
                style={{ whiteSpace: "nowrap" }}
              >
                Submission Type
              </label>
              <div className="border p-3 mb-3" style={{ width: "70%" }}>
                <div className="d-flex mb-3">
                  <select
                    id="wd-submission-type"
                    className="form-select mb-2"
                    value={assignment.submissionType}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        submissionType: e.target.value,
                      })
                    }
                  >
                    <option value="Online">Online</option>
                    <option value="In Person">In Person</option>
                    <option value="Asynchronous">Asynchronous</option>
                  </select>
                </div>
                <div>
                  <label className="form-label fw-bold">
                    Online Entry Options
                  </label>
                  <div className="form-check mb-3 mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="wd-text-entry"
                      checked={assignment.onlineEntryOptions.textEntry}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          onlineEntryOptions: {
                            ...assignment.onlineEntryOptions,
                            textEntry: e.target.checked,
                          },
                        })
                      }
                    />
                    <label className="form-check-label" htmlFor="wd-text-entry">
                      Text Entry
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="wd-website-url"
                      checked={assignment.onlineEntryOptions.websiteURL}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          onlineEntryOptions: {
                            ...assignment.onlineEntryOptions,
                            websiteURL: e.target.checked,
                          },
                        })
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="wd-website-url"
                    >
                      Website URL
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="wd-media-recordings"
                      checked={assignment.onlineEntryOptions.mediaRecordings}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          onlineEntryOptions: {
                            ...assignment.onlineEntryOptions,
                            mediaRecordings: e.target.checked,
                          },
                        })
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="wd-media-recordings"
                    >
                      Media Recordings
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="wd-student-annotation"
                      checked={assignment.onlineEntryOptions.studentAnnotation}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          onlineEntryOptions: {
                            ...assignment.onlineEntryOptions,
                            studentAnnotation: e.target.checked,
                          },
                        })
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="wd-student-annotation"
                    >
                      Student Annotation
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="wd-file-upload"
                      checked={assignment.onlineEntryOptions.fileUpload}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          onlineEntryOptions: {
                            ...assignment.onlineEntryOptions,
                            fileUpload: e.target.checked,
                          },
                        })
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="wd-file-upload"
                    >
                      File Uploads
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex mb-3 w-100">
              <label
                htmlFor="wd-assign-to"
                className="form-label me-3 w-25 text-end"
                style={{ whiteSpace: "nowrap" }}
              >
                Assign
              </label>
              <div className="border p-3 mb-3" style={{ width: "70%" }}>
                <label htmlFor="wd-due-date" className="form-label fw-bold">
                  Assign To
                </label>
                <div className="d-flex mb-3">
                  <input
                    type="text"
                    id="wd-assign-to"
                    className="form-control"
                    style={{ width: "70%" }}
                    value={assignment.assignTo}
                    onChange={(e) =>
                      setAssignment({ ...assignment, assignTo: e.target.value })
                    }
                  />
                </div>
                <label htmlFor="wd-due-date" className="form-label fw-bold">
                  Due
                </label>
                <div className="d-flex mb-3">
                  <input
                    type="date"
                    id="wd-due-date"
                    className="form-control"
                    style={{ width: "70%" }}
                    value={`${
                      assignment.dueyear
                    }-${assignment.duemonth.padStart(
                      2,
                      "0"
                    )}-${assignment.dueday.padStart(2, "0")}`}
                    onChange={(e) => {
                      const [year, month, day] = e.target.value.split("-");
                      setAssignment({
                        ...assignment,
                        dueyear: year,
                        duemonth: month,
                        dueday: day,
                      });
                    }}
                  />
                </div>
                <div className="row">
                  <div className="col">
                    <label
                      htmlFor="wd-available-from"
                      className="form-label fw-bold"
                    >
                      Available From
                    </label>
                    <input
                      type="date"
                      id="wd-available-from"
                      className="form-control"
                      value={`${
                        assignment.availyear
                      }-${assignment.availmonth.padStart(
                        2,
                        "0"
                      )}-${assignment.availday.padStart(2, "0")}`}
                      onChange={(e) => {
                        const [year, month, day] = e.target.value.split("-");
                        setAssignment({
                          ...assignment,
                          availyear: year,
                          availmonth: month,
                          availday: day,
                        });
                      }}
                    />
                  </div>
                  <div className="col">
                    <label
                      htmlFor="wd-available-until"
                      className="form-label fw-bold"
                    >
                      Available Until
                    </label>
                    <input
                      type="date"
                      id="wd-available-until"
                      className="form-control"
                      value={`${
                        assignment.dueyear
                      }-${assignment.duemonth.padStart(
                        2,
                        "0"
                      )}-${assignment.dueday.padStart(2, "0")}`}
                      onChange={(e) => {
                        const [year, month, day] = e.target.value.split("-");
                        setAssignment({
                          ...assignment,
                          dueyear: year,
                          duemonth: month,
                          dueday: day,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="float-end" style={{ width: "80%", marginTop: "30px" }} />
      <div className="text-end float-end" style={{ width: "80%" }}>
        <button
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
          className="btn btn-outline-secondary me-2"
        >
          Cancel
        </button>
        <button
          onClick={async () => {
              if (existingAssignment) {
                await saveAssignment(assignment); 
              } else {
                await createAssignmentForCourse();
              }
              navigate(`/Kanbas/Courses/${cid}/Assignments`);
          }}
          className="btn btn-danger"
        >
          Save
        </button>
      </div>
    </div>
  );
}
