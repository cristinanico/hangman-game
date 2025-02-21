import '../../styles/components/Footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li className="footer__menu-item">
            <NavLink to="/" className="footer__menu-link" href="#/">
              A jugar
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink
              to="/instructions"
              className="footer__menu-link active"
              href="#/instructions"
            >
              ¿Cómo se juega?
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink
              to="/options"
              className="footer__menu-link"
              href="#/options"
            >
              Más opciones
            </NavLink>
          </li>
        </ul>
      </nav>
      <small className="footer__copy">© cristinanico</small>
    </footer>
  );
};

export default Footer;
