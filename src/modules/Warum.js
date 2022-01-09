import "../files/css/WarumPage.scss"

import pic1 from "../files/images/gr202190.jpg"

const WarumPage = () => {
    return ( <div className="WarumPage">
        <div className="c">

            <h3>Warum wollten die Menschen auswandern?</h3>
                <p>Die ersten deutschen Auswanderer wurden von religiösen, politischen oder wirtschaftlichen Gründe angetrieben. Religiöse Splittergruppen erhofften sich zum Beispiel im "Land der unbegrenzten Möglichkeiten" mehr Religionsfreiheit. Viele politisch Aktive hatten nach der gescheiterten Revolution im Jahre 1848 die Hoffnung auf ein demokratisches Deutschland verloren und verließen deshalb die Heimat.</p>
                <img id="first" src={pic1} alt="Deutsche Revolution 1848"/>
                <br />
                <p>Hauptgrund für die meisten Auswanderer ist und war aber die wirtschaftliche Situation. Im 19. Jahrhundert bewirkten Hungersnöte in den Städten und die Landknappheit – durch ein Erbrecht, das das Land in immer kleinere Parzellen aufteilte –, dass vielen ein Überleben in Deutschland kaum möglich war. Durch die beginnende Industrialisierung starben außerdem ganze Berufszweige aus.</p>
                <br />
                <p>Auch heute treiben drohende Arbeitslosigkeit und das Gefühl der Perspektivlosigkeit viele zur Flucht nach vorne. Es gibt natürlich auch persönliche Motive, die Heimat zu verlassen: Liebe, Liebeskummer, Abenteuerlust, die Sehnsucht nach besserem Wetter oder nach einem ruhigeren Leben.</p>
           </div>
    </div> );
}
 
export default WarumPage;