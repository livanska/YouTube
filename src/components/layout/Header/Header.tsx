
import css from './Header.module.scss';
import Logo from '../../../assets/YouTube_logo.png';
export const Header = () => {
    return (
        <div className='header'>
            <div className= {css.header__content}>
                <div className={css.header__content__item}>
                    <span className="fas fa-bars"></span>
                    <img className={css.logo} src={Logo}/>
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
                        <img
                            src='https://yt3.ggpht.com/ytc/AAUvwniNcj7dsdmooO6x7NoI01OQRlM1Rk9PqYue1LN7=s68-c-k-c0x00ffffff-no-rj'/>
                    </div>
                </div>
            </div>
            )

}
            export default Header;