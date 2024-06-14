import Countries from "./Countries";
import '../../stylesheets/css/main.css';

const Container = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <ul className="list">
                    <Countries />
                </ul>
            </div>
        </div>
    )
}
export default Container;