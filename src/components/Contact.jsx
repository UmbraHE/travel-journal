import { getDefaultNormalizer } from "@testing-library/dom"

function Cat(props){
    return(
    <article className="contact-card">
                <img 
                    src={props.img}
                    alt="Photo of Mr. Cattson"
                />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img 
                        src="./images/phone.svg" 
                        alt="phone icon" 
                    />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="./images/mail.svg" 
                        alt="mail icon"
                    />
                    <p>{props.email}</p>
                </div>
            </article>
)
}

export default Cat