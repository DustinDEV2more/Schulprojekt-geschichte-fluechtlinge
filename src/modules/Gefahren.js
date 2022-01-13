import "../files/css/GefahrenDerReise.scss"

import Schiffsbild from "../files/images/Auswanderungsschiff.jpeg"

const GefahrenAufDerReise = () => {
    return ( <div className="GefahrenAufDerReisePage box" data-aos="fade-up">
        <h3>Die Gefahren auf der Reise nach Amerika</h3>
    
        <p>Etliche Europäer haben die Reise nach Amerika auf sich genommen. Alle mit demselben Ziel. Ein besseres Leben. Doch leider brachte alleine die Reise nach Amerika viele Opfer. Nur jeder zweite konnte die nicht unbedenkliche Reise erfolgreich beenden. Mit Dampf oder Segelschiffen wanderten die Europäer über den Atlantischen Ozean aus. Dabei wurden die Schiffe bis auf das Maximum mit Menschenmassen beladen. Auf kleinen Segelschiffen wurden teilweise bis zu 250 Menschen untergebracht. Dabei hatten sie nur ca. 45 cm Platz für sich selbst. Privatsphäre gab es nicht. Was auch dazu führte, dass auf den Schiffen Tumulte und Prügeleien entstanden. Der Platzmangel, die Verteilung des Essens oder das unausgewogene Essen ließ viele Menschen mit blauen Augen oder im Meer landen. Auch Hygiene konnte man auf den Auswanderungsschiffen nicht großschreiben. Dies hatte Krankheiten wie Shigellose (Ansteckender Durchfall u. Fieber) und Keuchhusten zu folge. Kinder, die an Bord wahren, überlebten solche Erkrankungen mitunter nicht. Wenn die Schiffsfahrten zu lange andauerten, und dadurch die Vorräte zur Neige gingen, war Mangelernährung ebenfalls eine häufige Todesursache. Vorräte waren meist bis zu 2 Monate geplant. Und zu guter Letzt musste das Schiff selbst auch standhalten. Die Menschen damals waren den Seestürmen hilflos ausgeliefert. Zudem war der Ärmelkanal ein kritischer Punkt der Reise, da er war durch viele Untiefen geprägt war, welche umschifft werden mussten.</p>
        <img src={Schiffsbild} alt="Auswanderungsschiff" />
    </div> );
}
 
export default GefahrenAufDerReise;