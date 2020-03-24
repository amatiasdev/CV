import React from 'react';

const Education= props =>{
    return(
        <div className="Education">
            <div className="Education-container">
                {
                    props.data.map((edu, index) => (
                        <div className="Education-item" key={`Edu-${index}`}>
                            <h3>{edu.degree}{edu.institucion}
                                <span>{edu.starDate} - {edu.endDate}</span>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sed iure, cum eius tempore deleniti eveniet sunt aliquam quisquam excepturi nemo rerum autem quo dignissimos eos. Enim accusantium earum iure.</p>
                        </div>
                    ))
                }
                    

            </div>
        </div>
    );
};
export default Education;