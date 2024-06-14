import { useContext } from "react";
import ComponentContext from "../Component.js";
import '../../stylesheets/css/main.css'

const Countries = () => {
    const countries = useContext(ComponentContext)

    return (
        <>
            {countries.map((country, index) => {
                return (
                    <li key={index}>
                        <div className="section__item">
                            <div className="section__item_img">
                                <img src={country.flags.png} alt="flag" />
                            </div>
                            <div className="section__item_info">
                                <h3 className="section__item_title">{country.name.official}</h3>
                                <p className="section__item_text">Capital: <strong>{country.capital}</strong></p>
                            </div>
                        </div>
                    </li>
                )
            })}
        </>
    )
}

export default Countries;