import Header from './components/Header';
import Entry from './components/Entry'
import data from './components/data'

function App(){
    const entry = data.map(entry => <Entry
        img = {entry.img}
        title = {entry.title}
        country = {entry.country}
        googleMapsLink = {entry.googleMapsLink}
        dates = {entry.dates}
        text = {entry.text}
        />)
    
    return (
    <>
        <Header />
        {entry}
    </>
    )
}

export default App