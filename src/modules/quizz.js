import { useState } from "react";
import "../files/css/Quizz.scss"

const QuizzPage = () => {

    const [firstRight, setFirstRight] = useState(false)

    return ( <div className="Quizz box">
        <div className="intro">
            <h3>Checke dein Wissen!</h3>
            <p>Gut im Vortrag aufgepasst? Alles gründlich durchgelsesen? Dann versuche dich an unserem Quizz und schau ob du alles verstanden hast.</p>
        </div>

        <div className="Question">
            <h4>Was erhofften sich Religiöse Splittergruppen im "Land der unbegrenzten Möglichkeiten"?</h4>
            <div className="Antworten">
                <div className="flex antwort">
                        <input id="a11" type="checkbox" checked={firstRight} onChange={(e) => setFirstRight(e.target.checked)}/>
                        <label htmlFor="a11">Mehr Religionsfreiheit</label>
                    </div>
            </div>
        </div>
    </div> );
}
 
export default QuizzPage;