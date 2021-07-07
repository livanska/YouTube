
import css from './Header.module.scss';
import Logo from '../../../assets/YouTube_logo.png';


interface HeaderProps {
    setIsOpenSidebar(value: boolean): void;
}

export const Header = ({ setIsOpenSidebar }: HeaderProps) => {

    return (
        <div className={css.header}>
            <div className={css.header__content}>
                <div className={css.header__content__item}>
                    <span className="fas fa-bars" onClick={() => setIsOpenSidebar(true)}></span>
                    <img alt='Logo' className={css.logo} src={Logo} />
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
                    <img  alt='Avatar'
                        src='https://yt3.ggpht.com/ytc/AAUvwniNcj7dsdmooO6x7NoI01OQRlM1Rk9PqYue1LN7=s68-c-k-c0x00ffffff-no-rj' />
                </div>
            </div>
        </div>
    )

}
export default Header;