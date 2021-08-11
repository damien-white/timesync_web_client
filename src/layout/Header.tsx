import Logo from '../logo.svg';

export function Header(): JSX.Element {
  const appName = 'TimeSync';

  return (
    <header className="navbar">
      <nav className="navbar-nav">
        <div className="navbar-brand">
          <img src={Logo} height={40} alt="logo" />
          <span>{appName}</span>
        </div>
        <ul className="nav-items-start">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
        <div className="spacer" />
        <ul className="nav-items-end">
          <li>
            <a href="/account">Notifications</a>
          </li>
          <li>
            <a href="/account">My Account</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
