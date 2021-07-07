import css from './VideoCard.module.scss'
export const VideoCard = () => {
    return (
        <div className={css.videoGrid__item}>
            <a href='https://www.youtube.com/watch?v=hkGHaPwj29Y'>
                <img  alt='VideoCover' src="https://biteable.com/content/uploads/2021/05/video-downloaders-cover_social-media-ls-1200x630-c-center.png" />
                <div className={css.videoInfo}>
                    <div className={css.videoInfo__header}>
                        <div>
                            <img className={css.videoInfo__img}  alt='Avatar'
                                src='https://yt3.ggpht.com/ytc/AAUvwniNcj7dsdmooO6x7NoI01OQRlM1Rk9PqYue1LN7=s68-c-k-c0x00ffffff-no-rj' />
                        </div>
                        <span className={css.videoInfo__title}>Software Engineering Interns Be Like</span>
                    </div>
                    <div className={css.videoInfo__text}>
                        <span> Nicholas T.  <br />244 054 перегляди <br /> 24 трав. 2021 р</span>
                    </div>
                </div>
            </a>
        </div>)
}
export default VideoCard