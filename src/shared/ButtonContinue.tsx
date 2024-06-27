import styles from '../app/styles/ButtonContinue.module.css'

interface ChildComponentProps {
    toggleActive: () => void;
    isActive: boolean;
}

const ButtonContinue: React.FC<ChildComponentProps> = ({ toggleActive, isActive }) => {

    return (
        <>
            { isActive ?
            <button className={styles.button_continue} onClick={toggleActive}>
                Далее
            </button>
            :
            <button className={styles.button_continue} onClick={toggleActive}>
                Редактировать
            </button>
            }
        </>
    )
}

export default ButtonContinue