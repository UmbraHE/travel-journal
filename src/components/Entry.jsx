import './Entry.css';

function Entry(props){
    
    return(
        <>
        <section className="section-1">
        <img src={props.img.src} alt={props.img.alt} className="fuji"/>
        <div className="container-1">
            <div className="top-section">
            <img src="./images/marker.svg" className="marker" alt="geo-marker"/>
            <h2 className='top-section-h2'>{props.country}</h2>
           <a href={props.googleMapsLink}><h3 className='google-h'>View in Google Maps</h3></a>
           </div>
           <div className='content'>
            
            <h1 className='fuji-h1'>
                {props.title}
            </h1>

            <h3 className='date'>
                {props.dates}
            </h3>

            <p className='content-p'>
            {props.text}
            </p>

           </div>
        </div>
        </section>  
        <br/><br/><br/>
        <hr/>
        </>
    )
}

export default Entry