import styles from '../app/styles/Step.module.css'

import arrow_up from '../assets/svg/arrow_up_white.svg'
import help_question_marks from '../assets/img/help_question_marks.png'

interface Step {
    title: string;
    description: string;
    help: {
        description: string;
        video: string;
    };
    section: string;
}

interface ActiveStepProps {
    step: Step;
}

const ActiveStep: React.FC<ActiveStepProps> = ({ step }) => {

    return (
        <>
            <div className={styles.title_container}>
                <p className={styles.title}>
                    {step.title}
                </p>
                <img src={arrow_up} className={styles.button_image} />
            </div>
            
            <div className={styles.description_container}>
                <p>
                    {step.description}
                </p>
            </div>
            { () => console.log(step.description) }
            { step.help.description != "" ? 

            <section className={styles.help}>
                <div className={styles.help_container}>
                    <p className={styles.title}>Подсказка</p>
                    <img src={arrow_up} className={styles.button_image} />
                </div> 

                <div className={styles.help_desc_container}>
                    <p>
                        {step.help.description}
                    </p>

                    <a href={step.help.video} target="_blank">Смотреть видеоурок</a>

                    <img src={help_question_marks} className={styles.help_bg} />
                </div>
            </section>
            : 
            <></> }
        </>
    );
};

// const CompletedStep: React.FC = () => {

//     return (
//         <>
            
//         </>
//     )
// }

// const UpcomingStep: React.FC = () => {

//     return (
//         <>
            
//         </>
//     )
// }

export default ActiveStep