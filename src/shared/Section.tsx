import styles from '../app/styles/Section.module.css'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import close_unactive from '../assets/svg/close_unactive.svg'
import close_active from '../assets/svg/close_active.svg'
import plus from '../assets/svg/plus.svg'

interface ActiveStepProps {
    step: string;
    isActive: boolean;
}

const Section: React.FC<ActiveStepProps> = ({ step, isActive }) => {

    if (step === 'situationStep') {
        document.addEventListener('input', function (event: any) {
            if (event.target.tagName.toLowerCase() === 'textarea') {
                autoExpand(event.target);
            }
        });
    
        function autoExpand(textarea: any) {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        }

        return (
            <>
                <div className={styles.background_situation_step}>
                    <textarea readOnly={isActive ? false : true} className={styles.input_situation_step} placeholder="Начните вводить текст..." id="autoExpand">

                    </textarea>
                </div>
            </>
        )
    }
    else if (step === 'rolesStep') {
        const [rolesBlocks, setRolesBlocks] = useState<{ id: string }[]>([]);

        const addRolesBlock = () => {
            setRolesBlocks([...rolesBlocks, { id: uuidv4() }]);
        };
        
          const removeRolesBlock = (id: string) => {
            setRolesBlocks(rolesBlocks.filter(block => block.id !== id));
        };

        return (
            <>
                <div className={styles.container_roles_step}>
                    <div className={styles.flex_roles_step}>
                        <div className={styles.block_roles_step}>
                            <p className={styles.name_roles_step}>Роль</p>
                        </div>

                        <div style={{ width: '5px' }} />

                        <div className={styles.block_roles_step}>
                            <p className={styles.name_roles_step}>Роль<br/>(противоположная)</p>
                        </div>

                        <div className={styles.block_2_roles_step}>
                            
                        </div>
                    </div>

                    <div className={styles.flex_roles_step}>
                        <div className={styles.role_roles_step}>
                            <input className={styles.input_roles_step} placeholder='Жадный ч.' />
                        </div>

                        <div style={{ width: '5px' }} />

                        <div className={styles.role_roles_step}>
                            <input className={styles.input_roles_step} placeholder='Щедрый ч.' />
                        </div>

                        <div className={styles.role_2_roles_step}>
                            <img className={styles.close_img_roles_step} src={close_unactive} />
                        </div>
                    </div>

                    {rolesBlocks.map(block => (
                        <RolesBlock key={block.id} onRemove={() => removeRolesBlock(block.id)} />
                    ))}

                    <button className={styles.plus_btn_roles_step} onClick={addRolesBlock}>
                        <img src={plus} style={{ scale: '1.25' }} />
                    </button>
                </div>
            </>
        )
    }
}

interface RolesBlockProps {
    onRemove: () => void;
}

const RolesBlock: React.FC<RolesBlockProps> = ({ onRemove }) => {
    return (
        <>
            <div className={styles.flex_roles_step}>
                <div className={styles.role_roles_step}>
                    <input className={styles.input_roles_step} placeholder='Жадный ч.' />
                </div>

                <div style={{ width: '5px' }} />

                <div className={styles.role_roles_step}>
                    <input className={styles.input_roles_step} placeholder='Щедрый ч.' />
                </div>

                <div className={styles.role_2_roles_step} onClick={onRemove}>
                    <img className={styles.close_img_roles_step} src={close_active} />
                </div>
            </div>
        </>
    )
}

export default Section