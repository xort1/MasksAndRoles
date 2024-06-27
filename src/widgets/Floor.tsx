import styles from '../app/styles/Floor.module.css';
import steps from '../app/steps.json'

import ActiveStep from "../entities/Step"

import arrow_up from '../assets/svg/arrow_up.svg'

const Floor: React.FC = () => {

    return (
        <>
            <section className={styles.floor}>
                <div className={styles.header}>
                    <button className={styles.header_button}>
                        <p className={styles.button_text}>Номер этажа</p>
                        <img src={arrow_up} className={styles.button_image} />
                    </button>
                </div>
                
                <div className={styles.container}>
                    <ActiveStep step={steps['situationStep']} />
                </div>
            </section>
        </>
    )
}

export default Floor