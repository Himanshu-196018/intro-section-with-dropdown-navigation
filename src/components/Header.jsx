import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <img
        className="logo-main"
        src="/images/logo.svg"
        alt="snap - organisation's logo"
      />
      <Navigation />
    </header>
  );
};

export default Header;
