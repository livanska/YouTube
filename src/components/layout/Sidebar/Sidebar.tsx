import React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import css from './Sidebar.module.scss'
import cn from 'classnames'
import Logo from '../../../assets/YouTube_logo.png';

export interface SidebarProps {
    className?: string;
    isOpen: boolean;
    setIsOpen(value: boolean): void;
}

export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
    const sidebar = useRef<HTMLElement | null>(null);
    useEffect(() => {
        const closeSidebar = ({ target }: MouseEvent) => {
            if (target instanceof Node && isOpen && !sidebar.current?.contains(target)) {
                setIsOpen(false);
            }
        };
        window.addEventListener('click', closeSidebar);
        return () => {
            window.removeEventListener('click', closeSidebar);
        };
    }, [isOpen, setIsOpen]);

    return (
        <React.Fragment>
        <aside className={css.sideBarColumn}>
        <Link to='_blank' >
                    <div className={css.sideBarColumn__item}>
                        <span className="fas fa-home"></span>
                        <p className={css.sideBarColumn__item__text}>Головна</p>
                    </div>
                </Link>
                <Link to='_blank' >
                <div className={css.sideBarColumn__item}>
                    <span className="fas fa-compass"></span>
                    <p className={css.sideBarColumn__item__text}>Що нового</p>
                </div>
                </Link>
                <Link to='_blank' >
                <div className={css.sideBarColumn__item}>
                    <span className="fas fa-th-list"></span>
                    <p className={css.sideBarColumn__item__text}>Підписки</p>
                    
                </div>
                </Link>
                <Link to='_blank' >
                <div className={css.sideBarColumn__item}>
                    <span className="fas fa-clone"></span>
                    <p className={css.sideBarColumn__item__text}>Бібліотека</p>
                </div>
                </Link>
                <Link to='_blank' >
                <div className={css.sideBarColumn__item}>
                    <span className="fas fa-history"></span>
                    <p className={css.sideBarColumn__item__text}>Історія</p>
                </div>
                </Link>

        </aside>
        <aside className={cn(css.sideBar, {
            [css.isOpen]: isOpen,
            [css.isClosed]: !isOpen,
        })} ref={sidebar}>
           
            <div className={css.sideBar__grid}>
                <React.Fragment >
                    <div className={css.sideBar__grid__item}>
                        <span className="fas fa-bars" onClick={() => {isOpen?setIsOpen(false):setIsOpen(true)}}></span>
                        <img className={css.logo} alt='Logo' src={Logo} />
                    </div>
                    <Link to='_blank' >
                        <div className={css.sideBar__grid__item}>
                            <span className="fas fa-home"></span>
                            <span className={css.sideBar__grid__item__text}>Головна</span>
                        </div>
                    </Link>
                    <div className={css.sideBar__grid__item}>
                        <span className="fas fa-compass"></span>
                        <span className={css.sideBar__grid__item__text}>Що нового</span>
                    </div>
                    <div className={css.sideBar__grid__item}>
                        <span className="fas fa-th-list"></span>
                        <span className={css.sideBar__grid__item__text}>Підписки</span>
                    </div>
                    <div className={css.sideBar__grid__item}>
                        <span className="fab fa-youtube"></span>
                        <span className={css.sideBar__grid__item__text}>Originals</span>
                    </div>
                    <div className={css.sideBar__grid__item}>
                        <span className="fas fa-play-circle"></span>
                        <span className={css.sideBar__grid__item__text}>YouTube Music</span>
                    </div>
                    <hr />
                    <div className={css.sideBar__grid__item}>
                        <span className="fas fa-clone"></span>
                        <span className={css.sideBar__grid__item__text}>Бібліотека</span>
                    </div>
                    <div className={css.sideBar__grid__item}>
                        <span className="fas fa-history"></span>
                        <span className={css.sideBar__grid__item__text}>Історія</span>
                    </div>
                    <div className={css.sideBar__grid__item}>
                        <span className="far fa-caret-square-right"></span>
                        <span className={css.sideBar__grid__item__text}>Ваші відео</span>
                    </div>
                    <div className={css.sideBar__grid__item}>
                        <span className="fas fa-clock"></span>
                        <span className={css.sideBar__grid__item__text}>Переглянути пізніше</span>
                    </div>
                    <div className={css.sideBar__grid__item}>
                        <span className="fas fa-thumbs-up"></span>
                        <span className={css.sideBar__grid__item__text}>Відео, які сподобались</span>
                    </div>
                    <hr />
                    <span className={css.sideBar__grid__title}>ПІДПИСКИ</span>
                    <div className={css.sideBar__grid__item}>
                        <img alt='Avatar'
                            src='https://yt3.ggpht.com/ytc/AAUvwniNcj7dsdmooO6x7NoI01OQRlM1Rk9PqYue1LN7=s68-c-k-c0x00ffffff-no-rj' />
                        <span className={css.sideBar__grid__item__text}> Nicholas T.</span>
                    </div>
                    <div className={css.sideBar__grid__item}>
                        <img alt='Avatar'
                            src='https://yt3.ggpht.com/ytc/AAUvwniNcj7dsdmooO6x7NoI01OQRlM1Rk9PqYue1LN7=s68-c-k-c0x00ffffff-no-rj' />
                        <span className={css.sideBar__grid__item__text}> Nicholas T.</span>
                    </div>
                    <div className={css.sideBar__grid__item}>
                        <img alt='Avatar'
                            src='https://yt3.ggpht.com/ytc/AAUvwniNcj7dsdmooO6x7NoI01OQRlM1Rk9PqYue1LN7=s68-c-k-c0x00ffffff-no-rj' />
                        <span className={css.sideBar__grid__item__text}> Nicholas T.</span>
                    </div>
                    <div className={css.sideBar__grid__item}>
                        <img alt='Avatar'
                            src='https://yt3.ggpht.com/ytc/AAUvwniNcj7dsdmooO6x7NoI01OQRlM1Rk9PqYue1LN7=s68-c-k-c0x00ffffff-no-rj' />
                        <span className={css.sideBar__grid__item__text}> Nicholas T.</span>
                    </div>
                    <div className={css.sideBar__grid__item}>
                        <img alt='Avatar'
                            src='https://yt3.ggpht.com/ytc/AAUvwniNcj7dsdmooO6x7NoI01OQRlM1Rk9PqYue1LN7=s68-c-k-c0x00ffffff-no-rj' />
                        <span className={css.sideBar__grid__item__text}> Nicholas T.</span>
                    </div></React.Fragment >

            </div>
        </aside>
        
        </React.Fragment>

    )
}