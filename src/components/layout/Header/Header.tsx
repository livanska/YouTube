import css from "./Header.module.scss";
import Logo from "../../../assets/YouTube_logo.png";
import { useEffect } from "react";
import React from "react";
import { AuthHelper } from "../../../api/auth/authHelper";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../../state/selectors/authSelector";

const auth = new AuthHelper();
interface HeaderProps {
  setIsOpenSidebar(value: boolean): void;
}

export const Header = ({ setIsOpenSidebar }: HeaderProps) => {
  const dispatch = useDispatch();
  const user = useSelector(authSelector);

  useEffect(() => {
    auth.initClient();
  }, []);

  async function handleLogIn() {
    dispatch(await auth.handleLogin());
  }
  async function handleLogOut() {
    dispatch(await auth.handleLogOut());
    window.location.reload();
  }

  return (
    <div className={css.header}>
      <div className={css.header__content}>
        <div className={css.header__content__item}>
          <span
            className="fas fa-bars"
            onClick={() => setIsOpenSidebar(true)}
          ></span>
          <img alt="Logo" className={css.logo} src={Logo} />
        </div>
        <div className={css.header__content__item}>
          <div className={css.header__content__item__search}>
            <input className={css.search} placeholder="Пошук" />
            <button>
              <span className="fas fa-search "></span>
            </button>
          </div>
          <span className="fas fa-microphone"></span>
        </div>
        <div className={css.header__content__item}>
          <span className="fas fa-video"></span>
          <span className="fas fa-th"></span>
          <span className="fas fa-bell"></span>
          {user.isLoggedIn ? (
            <React.Fragment>
              <img alt="Avatar" src={user.img} />
              <button onClick={handleLogOut}>LogOut</button>
            </React.Fragment>
          ) : (
            <button onClick={handleLogIn}>LogIn</button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
