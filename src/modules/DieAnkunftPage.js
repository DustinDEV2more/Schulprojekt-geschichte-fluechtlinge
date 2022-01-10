import "../files/css/DieAnkunftPage.scss"
import Pic from "../files/images/auswanderer-amerika-freiheitsstatue-100__v-gseapremiumxl.jpg"

const DieAnkunftPage = () => {
    return ( <div className="DieAnkunftPage box">
        <h3>Die Ankunft in Amerika</h3>
        <p>Nach der Ankunft sahen viele Deustche New York als Anfangspunkt und waren dort auf der Suche nach einem gesicherten Einkommen. Viele Einwanderer wechselten oft den Beruf sowie Wohnort und konnten sich nirgends richtig niederlassen. Die meisten deutschen ließen sich am Ende jedoch in Lowa, Minnesota, Nebraska, Nord- und Süd Dakota und Wisconsin nieder.</p> <br />
        <p>Die Amerikaner waren sehr skeptisch gegenüber den Neuankömligen. Nicht zu selten wurden die Deutschen als dümmlich hingestellt und bemogelt. "Die Eingewanderten seien nur gut zum Arbeiten" sagten sich die Amerikaner hinter hervorgehaltener Hand. Sie wurden als Menschen niederen grades angesehen. Zumdem wurden mit Menschen welche die Überfahrt nicht bezaheln konnten, und dennoch nach Amerika gereist sind fast schon eine ähnliche Form der Sklavenarbeit betrieben. Man nennt es das Pähmonen der "Käuflinge". Sie wurden in Amerika als Arbeitskräfte an Amerikaner angeboten, wenn diese die Überfahrt bezahlten. "Wenn du zwei Jahre in meinem Laden hilfst bezahle ich deine Überfahrt". Heute besteht die Bevölkerung von Pennsylvania aus knapp einen Viertel deutscher Wurzeln</p> <br />
        <img src={Pic} alt="Ankunft in Amerika" />
    </div> );
}
 
export default DieAnkunftPage;