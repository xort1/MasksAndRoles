import styles from '../app/styles/Section.module.css'

interface ActiveStepProps {
    step: string;
    isActive: boolean;
}

const Section: React.FC<ActiveStepProps> = ({ step, isActive }) => {
    document.addEventListener('input', function (event: any) {
        if (event.target.tagName.toLowerCase() === 'textarea') {
            autoExpand(event.target);
        }
    });

    function autoExpand(textarea: any) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }

    if (step === 'situationStep') {
        return (
            <>
                <div className={styles.background}>
                    <textarea readOnly={isActive ? false : true} className={styles.input} placeholder="Начните вводить текст..." id="autoExpand">

                    </textarea>
                </div>
            </>
        )
    }
}

export default Section