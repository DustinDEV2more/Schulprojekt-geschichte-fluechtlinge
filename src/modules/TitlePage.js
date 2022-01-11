import "../files/css/TitlePage.scss"
import { BsChevronDoubleDown } from 'react-icons/bs';

import TitleImage from "../files/images/GermanEmigrantsBoardingAShipInHamburg.jpg"

const TitlePage = () => {
    return ( <div className="TitlePage">

        <div className="c">

            <img className="titleimage" src={TitleImage} alt="Deutsche Auswanderer im Hamburger Hafen" />


            <div className="text">
                <h1>Flüchtlingsbewegung nach Amerika im 19. Jhd.</h1>

                <h2>Eine Ausarbeitung von Arman, Dustin, Iven und Lucas.</h2>
            </div>

        </div>
        <BsChevronDoubleDown id="doubledown" size={"50px"} />

        
    </div> );
}
 
export default TitlePage;