const Navigation = () => {
  return (
    <nav>
      <div className="hide">
        <img src="/images/icon-menu.svg" alt="menu icon" />
      </div>
      <div className="hide">
        <img src="/images/icon-close-menu.svg" alt="close menu icon" />
      </div>
      <ul className="nav-content-main">
        <li className="dd">
          Features{" "}
          <img
            src="/images/icon-arrow-down.svg"
            alt="icon representing sub navigation"
          />
          <ul className="drop-down dd1 hide">
            <li>
              <img src="/images/icon-todo.svg" alt="todo list icon" /> Todo List
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
        </li>
        <li className="dd">
          Company{" "}
          <img
            src="/images/icon-arrow-down.svg"
            alt="icon representing sub navigation"
          />
          <ul className="drop-down dd2">
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </ul>
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
