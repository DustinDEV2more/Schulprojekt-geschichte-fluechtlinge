import "../files/css/WohinPage.scss"
import diagram from "../files/images/Diagram Wohin.png"

const WohinPage = () => {
    return ( <div className="WohinPage" data-aos="fade-up">
        <div className="c box">
            <h3>Wohin wollten die Menschen auswandern?</h3>

            <p className="m">Besonders in der zweiten Hälfte des 19. Jahrhunderts dominierten als Zielland die USA: 90 Prozent der deutschen Auswanderer, nach Übersee, gingen in die Vereinigten Staaten, mit großem Abstand folgten Kanada, Brasilien, Argentinien.</p>
        
            {/* Mobile Content */}

            <div className="d">
            <p>Besonders in der zweiten Hälfte des 19. Jahrhunderts dominierten als Zielland die USA: 90 Prozent der deutschen Auswanderer, nach Übersee, gingen in die Vereinigten Staaten, mit großem Abstand folgten:</p>
            <ul>
                <li>Kanada</li>
                <li>Brasilien</li>
                <li>Argentinien</li>
            </ul>
            </div>

        <img className="d" src={diagram} alt="Auswanderungsorte Diagram" />

        </div>
    </div> );
}
 
export default WohinPage;