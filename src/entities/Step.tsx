import styles from '../app/styles/Step.module.css'
import React, { useState } from 'react';

import Section from '../shared/Section.tsx';
import ButtonContinue from '../shared/ButtonContinue.tsx';

import arrow_up from '../assets/svg/arrow_up_white.svg'
import arrow_down from '../assets/svg/arrow_down_white.svg'
import help_question_marks from '../assets/img/help_question_marks.png'

interface Step {
    title: string;
    description: string;
    help: {
        description: string;
        video: string;
    }
}

interface ActiveStepProps {
    step: Step;
    section: string;
}

interface ActiveStepAdditions {
    step: Step;
}

const ActiveStep: React.FC<ActiveStepProps> = ({ step, section }) => {
    const [isActive, setIsActive] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [arrowMainImg, setArrowMainImg] = useState(arrow_up);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    const toggleVisible = () => {
        setIsVisible(!isVisible);

        if (isVisible) 
            setArrowMainImg(arrow_down)
        else
            setArrowMainImg(arrow_up)
    };

    return (
        <>
            <div>
                { section != "situationStep" ?
                    <div className={styles.title_container} onClick={toggleVisible}>
                        <p className={styles.title}>
                            {step.title}
                        </p>
                        <img src={arrowMainImg} className={styles.button_image} />
                    </div>
                    :
                    <div className={styles.title_container}>
                        <p className={styles.title}>
                            {step.title}
                        </p>
                    </div>
                }

                <div style={isVisible ? { visibility: 'visible', height: 'auto' } : { visibility: 'hidden', height: '0px' }}>
                    { isActive ? <ActiveStepAdditions step={step} /> : <></> }

                    <Section step={section} isActive={isActive} />

                    <ButtonContinue toggleActive={toggleActive} isActive={isActive}/>
                </div>
            </div>
        </>
    );
};

const ActiveStepAdditions: React.FC<ActiveStepAdditions> = ({ step }) => {
    const [isHelpActive, setIsHelpActive] = useState(false);
    const [arrowImg, setArrowImg] = useState(arrow_down);

    const toggleHelpVisible = () => {
        setIsHelpActive(!isHelpActive)
        
        if (isHelpActive) 
            setArrowImg(arrow_down)
        else
            setArrowImg(arrow_up)
    };

    return (
        <>
            { step.help.description != "" ? 
            <>
                <div className={styles.description_container}>
                    <p>
                        {step.description}
                    </p>
                </div>

                <div className={styles.help}>
                    <div className={styles.help_container} onClick={toggleHelpVisible}>
                        <p className={styles.title}>Подсказка</p>
                        <img src={arrowImg} className={styles.button_image} />
                    </div> 

                    { isHelpActive ? 
                    <div className={styles.help_desc_container}>
                        <p>
                            {step.help.description}
                        </p>

                        <a href={step.help.video} target="_blank">Смотреть видеоурок</a>

                        <img src={help_question_marks} className={styles.help_bg} />
                    </div>
                    : 
                    <></> }
                </div> 
            </>
            : 
            <></> }
        </>
    )
}

export default ActiveStep