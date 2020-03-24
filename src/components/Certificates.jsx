import React from 'react';

const Certificates= props =>{
    return(
        <div className="Certificates">
            <div className="Certificates-container">
            {
                props.data.map((cer, index)=>(
                    <div className="Certificates-items" key={`Cer-${index}`}>
                        <h3>{cer.name} {cer.date}</h3>
                        <h4>{cer.institution}</h4>
                        <p>{cer.description}</p>
                    </div>
                ))
            }
            </div>
                
        </div>
    );
};

export default Certificates;