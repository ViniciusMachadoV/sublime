import { Link } from "react-router-dom";

import styles from "../Header.module.css";

export function MobileNav(props) {
  return (
    <>
      <div className={`dropdown ${props.className}`}>
        <button
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Menu
        </button>

        <ul className="dropdown-menu">
          <li>
            <Link
              className={`dropdown-item nav-link px-3 ${styles.navLink}`}
              to="/feminino"
            >
              Feminino
            </Link>
          </li>
          <li>
            <Link
              className={`dropdown-item nav-link px-3 ${styles.navLink}`}
              to="/masculino"
            >
              Masculino
            </Link>
          </li>
          <li>
            <Link
              className={`dropdown-item nav-link px-3 ${styles.navLink}`}
              to="/bolsas"
            >
              Bolsas
            </Link>
          </li>
          <li>
            <Link
              className={`dropdown-item nav-link px-3 ${styles.navLink}`}
              to="/outlet"
            >
              Outlet
            </Link>
          </li>
          <li>
            <Link
              className={`dropdown-item nav-link px-3 ${styles.navLink}`}
              to="/lookbook"
            >
              Lookbook
            </Link>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="d-flex text-end justify-content-around">
            <Link
              className="btn btn-light d-inline-flex align-items-center"
              to="/buscar"
              title="Buscar"
            >
              <i className="bi bi-search" />
            </Link>
            <Link
              className="btn btn-light d-inline-flex align-items-center"
              to="/carrinho"
              title="Carrinho"
            >
              <i className="bi bi-basket2" />
            </Link>{" "}
          </li>
        </ul>
      </div>
    </>
  );
}
