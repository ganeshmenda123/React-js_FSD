import { Link } from "react-router-dom";
function Menu() {
    return(
        <div>
            <Link to="home">Home</Link>|
            <Link to="about">About</Link>|
            <Link to="Service">Service</Link>|
            <Link to="contact">Contact</Link>|
            <Link to="trainees">Trainess</Link>|
            <Link to="count">Count</Link>|
            <Link to="events">Events</Link>|
            <Link to="hooks">Hooks</Link>|
            <Link to="from">From</Link>|
            <Link to="from1">From1</Link>|
            <Link to="products1">products1</Link>|
            <Link to="newproduct">Newproduct</Link>|
            <Link to="categories">Categories</Link>
        </div>
    )
}
export default Menu