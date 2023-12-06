const Navigation = () => {
  return (
    <nav>
      <div>
        <img src="/images/icon-menu.svg" alt="menu icon" />
      </div>
      <div>
        <img src="/images/icon-close-menu.svg" alt="close menu icon" />
      </div>
      <ul>
        <li>
          Feature{" "}
          <img
            src="/images/icon-arrow-down.svg"
            alt="icon representing sub navigation"
          />
          <ul>
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
        <li>
          Company{" "}
          <img
            src="/images/icon-arrow-down.svg"
            alt="icon representing sub navigation"
          />
          <ul>
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </ul>
        </li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <span>login</span>
      <span>Register</span>
    </nav>
  );
};

export default Navigation;
