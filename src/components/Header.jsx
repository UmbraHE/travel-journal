import './Header.css';


function Header(){
    return(
        <>
        <header className='header-container'>
            <img src='./images/globe.svg' className='globe' alt='GLOVE ICON'/>
            <h3 className='header'> my travel journal.</h3>
        </header>
        </>
    )
}

export default Header