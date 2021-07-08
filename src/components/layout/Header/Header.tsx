
import css from './Header.module.scss';
import Logo from '../../../assets/YouTube_logo.png';
import { ReactElement, useEffect, useState } from 'react';
import { API_KEY, CLIENT_ID, DISCOVERY_URL, SCOPES } from '../../../constants'
import React from 'react';

var GoogleAuth: gapi.auth2.GoogleAuth;
interface HeaderProps {
    setIsOpenSidebar(value: boolean): void;
}

export const Header = ({ setIsOpenSidebar }: HeaderProps) => {

    const [signedIn, setSignedIn] = useState(false)
    const [user,setUser] = useState<gapi.auth2.BasicProfile>()
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/client.js";
        script.onload = () => {
            gapi.load('client:auth2', () => { initClient() });
        };
        document.body.appendChild(script);
    }, [])

    const initClient = () => {
        window.gapi.client.load('youtube', 'v3', () => {
            gapi.client.init({
                'apiKey': API_KEY,
                'clientId': CLIENT_ID,
                'scope': SCOPES,
                'discoveryDocs': DISCOVERY_URL
            })
        });

    }
    async function handleLogIn() {
        GoogleAuth = gapi.auth2.getAuthInstance();
        await GoogleAuth.signIn();
        GoogleAuth.isSignedIn && setSignedIn(true)
        setUser(GoogleAuth.currentUser.get().getBasicProfile())
    }
    async function handleLogOut() {
        
        await GoogleAuth.signOut()
        !GoogleAuth.currentUser.get().isSignedIn() && setSignedIn(false)
        window.location.reload();
    }

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
                    {user ? <React.Fragment><img alt='Avatar'
                        src={user.getImageUrl()} />
                    <button onClick={handleLogOut}>LogOut</button></React.Fragment>
                    :<button onClick={handleLogIn}>LogIn</button>
                   }
                    </div>
            </div>
        </div>
    )

}
export default Header;