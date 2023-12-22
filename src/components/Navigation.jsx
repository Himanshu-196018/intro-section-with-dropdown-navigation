import { useState } from "react";

const Navigation = () => {
  const [isDd1Open, setIsDd1Open] = useState(false);
  const [isDd2Open, setIsDd2Open] = useState(false);

  const handleClickFeature = () => {
    setIsDd1Open(!isDd1Open);
  };

  const handleClickCompany = () => {
    setIsDd2Open(!isDd2Open);
  };

  return (
    <nav>
      <div className="hide">
        <img src="/images/icon-menu.svg" alt="menu icon" />
      </div>
      <div className="hide">
        <img src="/images/icon-close-menu.svg" alt="close menu icon" />
      </div>
      <ul className="nav-content-main">
        <li className="dd" onClick={handleClickFeature}>
          <span>
            Features{" "}
            <img
              src={`/images/icon-arrow-${isDd2Open ? "up" : "down"}.svg`}
              alt="icon representing sub navigation"
            />
          </span>
          {isDd1Open && (
            <ul className="drop-down dd1">
              <li>
                <img src="/images/icon-todo.svg" alt="todo list icon" /> Todo
                List
              </li>
              <li>
                <img src="/images/icon-calendar.svg" alt="calendar icon" />{" "}
                Calendar
              </li>
              <li>
                <img src="/images/icon-reminders.svg" alt="reminders icon" />{" "}
                Reminders
              </li>
              <li>
                <img src="/images/icon-planning.svg" alt="planning icon" />{" "}
                Planning
              </li>
            </ul>
          )}
        </li>
        <li className="dd" onClick={handleClickCompany}>
          <span>
            Company{" "}
            <img
              src={`/images/icon-arrow-${isDd2Open ? "up" : "down"}.svg`}
              alt="icon representing sub navigation"
            />
          </span>
          {isDd2Open && (
            <ul className="drop-down dd2">
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          )}
        </li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <div>
        <span className="login">Login</span>
        <span className="register">Register</span>
      </div>
    </nav>
  );
};

export default Navigation;
