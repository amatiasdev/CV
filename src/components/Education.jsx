import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from "../styled/h3Styled";
import PStyled from '../styled/PStyled';

const Education= props =>{
    return(
        <div className="Education">
            <H2Styled name="Education"/>
            <div className="Education-container">
                {
                    props.data.map((edu, index) => (
                        <div className="Education-item" key={`Edu-${index}`}>
                            <H3Styled>{edu.degree}{edu.institucion}
                                <span>{edu.starDate} - {edu.endDate}</span>
                            </H3Styled>
                            <PStyled name="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sed iure, cum eius tempore deleniti eveniet sunt aliquam quisquam excepturi nemo rerum autem quo dignissimos eos. Enim accusantium earum iure"/>
                        </div>
                    ))
                }
                    

            </div>
        </div>
    );
};
export default Education;