import React from "react";
import { useInView } from "react-intersection-observer";
import '../styles/Achievements.css';

const Achievements=()=>{
    const {ref: myTitleRef , inView : titleVisible} = useInView();
    const {ref: myDesRef, inView: despVisible} = useInView();
    return(
        <section className="achievements-wrapper" id="achievements">
             <h2 ref={myTitleRef} className={ titleVisible ? "component-headings show" : "component-headings"}>
                My <span className="heading-highlight">achievements </span>so far 
             </h2>
                    <div className="underline"></div>
                    <div ref={myDesRef}
                     className={despVisible ? "list-wrapper show" : "list-wrapper"}>
                    <ul>
                        <li><p>Selected as a MENTEE for Microsoft Engage program</p></li>
                        <li><p>AWS Certified Developer Associate</p></li>
                        <li><p>RedHat Certified Enterprise Application Developer</p></li>
                        <li><p>AWS Certified Cloud Practitioner</p></li>
                    </ul>
                    </div>
        </section>
    );
}
export default Achievements;