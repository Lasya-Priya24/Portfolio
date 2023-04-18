import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Experience.css';

const Experience = () => {

    const { ref: myTitleRef, inView: titleVisible } = useInView();
    const { ref: myexpRef, inView: expVisible } = useInView();

    return (
        <section className="experience-wrapper" id="experience">
            <h2 ref={myTitleRef} className={titleVisible ? "component-headings show" : "component-headings"}>
                My <span className="heading-highlight"> Education</span> so far
            </h2>
            <div className="underline"></div>

            <div ref={myexpRef}
                className={expVisible ? "list-wrapper show" : "list-wrapper"}>
                <ul>
                    {/*  */}
                    <li>
                        <p className="position">
                            KL University, Vijayawada
                        </p>
                        <p className="organisation">
                            2020-2024
                        </p>
                       <li>Bachelors in Computer Science and Engineering - Honors</li>
                       
                    </li>
                    {/*  */}
                    <li>
                        <p className="position">
                            GAYATRI JUNIOR COLLEGE
                        </p>
                        <p className="organisation">
                            2018 - 2020
                        </p>
                        <li>Andhra Pradesh Board of Intermediate Education (BIEAP)</li>
                       
                    </li>
                   {/*  */}
                    <li>
                        <p className="position">
                            PRAGATHI CONCEPT SCHOOL
                        </p>
                        <p className="organisation">
                            2017 - 2018
                        </p>
                        <li>Andhra Pradesh Open School Society (APOSS)</li>
                        
                        
                    </li>
                
                </ul>
            </div>
        </section>
    )
}

export default Experience;
