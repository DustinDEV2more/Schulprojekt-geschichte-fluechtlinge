import { useState } from "react";
import "../files/css/Quizz.scss"
import {nanoid} from "nanoid"

const QuizzPage = () => {

    const [firstRight, setFirstRight] = useState(false)
    const [secondRight, setSecondRight] = useState(false)
    const [thirdRight, setThirdRight] = useState(false)
    const [fourthRight, setFourthRight] = useState(false)
    const [fifthRight, setFifthRight] = useState(false)
    const [sixthRight, setSixthRight] = useState(false)
    const [seventhRight, setSeventhRight] = useState(false)

    const [ShowResults, SetShowResults] = useState(false)

    return ( <div className="Quizz box" data-aos="fade-up">
        <div className="intro">
            <h3>Checke dein Wissen!</h3>
            <p>Gut im Vortrag aufgepasst? Alles gründlich durchgelsesen? Dann versuche dich an unserem Quizz und schau ob du alles verstanden hast.</p>
        </div>

       {ShowResults == false ? <div className="Questions">
            <Question Title='1. Was erhofften sich Religiöse Splittergruppen im "Land der unbegrenzten Möglichkeiten"?' rightAnswer="Mehr Religionsfreiheit"  Answers={["Mehr Gehalt", "Mehr Platz", "Mehr Mitstreiter", "Mehr Religionsfreiheit"]} state={setFirstRight} id={nanoid(5)}/>
            <Question Title='2. Warum starben in Deutschland ganze Berufszweige aus?' rightAnswer="Wegen der beginnenden Industrialisierung"  Answers={["Wegen der beginnenden Industrialisierung", "Wegen der Hungersnot", "Wegen der Landknappheit", "Wegen dem Erbrecht"]} state={setSecondRight} id={nanoid(5)}/>
            <Question Title='3. Wie viel Prozent(%) der Deutschen Auswanderer gingen im 19. Jhd. zu den Vereinigten Staaten?' rightAnswer="ca. 90%"  Answers={["ca. 90%", "ca. 45%", "ca. 73%", "ca. 69%"]} state={setThirdRight} id={nanoid(5)}/>
            <Question Title='4. Warum gab es in Amerika keinen Mangel an Grundbesitz?' rightAnswer="Wegen der ständigen Westerweiterung"  Answers={["Wegen der ständigen Westerweiterung", "Wegen dem Goldrausch", "wegen der höheren Löhne", "Dank der Erfindung der Desoxyribonukleinsäure"]} state={setFourthRight} id={nanoid(5)}/>
            <Question Title='5. Welchen Ozean mussten die Menschen auf dem Weg nach Europa überqueren?' rightAnswer="Atlantischen Ozean"  Answers={["Atlantischen Ozean", "Indischer Ozean", "Pazifischer Ozean", "Nürnberg"]} state={setFifthRight} id={nanoid(5)}/>
            <Question Title='6. Was ist die Shigellose?' rightAnswer="Ansteckender Durchfall"  Answers={["Ansteckender Durchfall", "Salzwasser im Körper", "Hungertod", "Hautentzündung"]} state={setSixthRight} id={nanoid(5)}/>
            <Question Title='7. Wie nannte man Menschen, welche in Amerika für den überfahrten Preis verkauft wurden?' rightAnswer="Käuflinge"  Answers={["Käuflinge", "German workforce", "German beggars", "Schwarzfahrer"]} state={setSeventhRight} id={nanoid(5)}/>

            <button data-aos="slide-up" onClick={() => {SetShowResults(true)}}>Ergebnisse</button>
        </div> : <div className="Results">
            
            <h4>Deine Testergebnisse:</h4>
            <h2>{[firstRight, secondRight, thirdRight, fourthRight, fifthRight, sixthRight, seventhRight].filter(x => x === true).length} von 7 Fragen richtig beantwortet!</h2>
            
            </div>}






    </div> );
}

const Question = ({Title, rightAnswer, Answers, state, id}) => {

     

    const [choosen, setChoosen] = useState(false)
    const [answers, setanwsers] = useState(Answers.sort((a, b) => 0.5 - Math.random()))
    

    return (
        <div className="Question" data-aos="slide-up">
            <h4>{Title}</h4>
            <div className="Antworten">
                {answers.map((a, index) => (<div key={index} className="antwort">

                        <input id={id + index} disabled={choosen} type="checkbox"  onChange={e => {
                            setChoosen(e.target.checked)
                            if (a === rightAnswer) state(e.target.checked)
                        }}/>
                        <label htmlFor={id + index}>{a}</label>

                </div>))}
            </div>
        </div>
    )
}
 
export default QuizzPage;