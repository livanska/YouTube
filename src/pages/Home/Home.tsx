import VideoCard from '../../components/VideoCard/VideoCard'
import css from './Home.module.scss'
const Home = () => {
    return(
        <div className={css.videoGrid}>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
        </div>
    )
}
export default Home;