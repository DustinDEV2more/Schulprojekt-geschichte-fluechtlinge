import "../files/css/DieAnkunftPage.scss"
import Pic from "../files/images/auswanderer-amerika-freiheitsstatue-100__v-gseapremiumxl.jpg"

const DieAnkunftPage = () => {
    return ( <div className="DieAnkunftPage box" data-aos="fade-up">
        <h3>Die Ankunft in Amerika</h3>
        <p>Nach der Ankunft sahen viele Deutsche New York als Anfangspunkt und waren dort auf der Suche nach einem gesicherten Einkommen. Viele Einwanderer wechselten oft den Beruf sowie Wohnort und konnten sich nirgends richtig niederlassen. Die meisten Deutschen ließen sich am Ende jedoch in Lowa, Minnesota, Nebraska, Nord- und Süd Dakota und Wisconsin nieder.</p> <br />
        <p>Die Amerikaner waren sehr skeptisch gegenüber den Neuankömmlingen. Nicht zu selten wurden die Deutschen als dümmlich hingestellt und bemogelt. "Die Eingewanderten seien nur gut zum Arbeiten", sagten sich die Amerikaner hinter hervor gehaltener Hand. Sie wurden als Menschen niederen Grades angesehen. Zudem wurden mit Menschen, welche die Überfahrt nicht bezahlen konnten, und dennoch nach Amerika gereist sind, fast schon eine ähnliche Form der Sklavenarbeit betrieben. Man nennt es das "Pähnomem der Käuflinge" oder auch die Weißen Sklaven. Sie wurden in Amerika als Arbeitskräfte an Amerikaner angeboten, wenn diese die Überfahrt bezahlten. "Wenn du zwei Jahre in meinem Laden hilfst, bezahle ich deine Überfahrt". Heute besteht die Bevölkerung von Pennsylvania aus knapp einem Viertel deutscher Wurzeln.</p> <br />
        <img src={Pic} alt="Ankunft in Amerika" />
    </div> );
}
 
export default DieAnkunftPage;