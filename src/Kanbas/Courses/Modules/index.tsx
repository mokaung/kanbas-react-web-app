export default function Modules() {
  return (
    <div>
      <button>Collapse All</button> <button>View Progress</button>&nbsp;
      <select id="wd-select-publishing">
        <option selected value="Publish All">
          Publish All
        </option>
        <option value="Unpublish All">Unpublish All</option>
      </select>
      &nbsp;
      <button>+ Module</button>
      <br />
      <br />
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Airbending</li>
              </ul>
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Lore of Avatar - Book 1 - The first Avatar
                </li>
                <li className="wd-content-item">
                  Lore of Avatar - Book 2 - Avatar Kyoshi
                </li>
              </ul>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Prepare your mind for Airbending
                </li>
                <li className="wd-content-item">
                  Gathering your first gusts of wind
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Flowing air into specific shapes
                </li>
                <li className="wd-content-item">
                  How to change the air temp around you
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
