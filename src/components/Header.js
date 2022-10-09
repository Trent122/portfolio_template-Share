// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Trent Manager" />

            <div className='header__content'>
                <h1>Hey, I'm Trent Manager</h1>
                <p>Blockchain Developer</p>
                <button className='button'>Let's Chat!</button>
            </div>
        </section>
    );
}

export default Header;