import { useInView } from "react-intersection-observer";
import '../styles/About.css';
const About =()=>{

    const {ref: myTitleRef , inView : titleVisible} = useInView();
    const {ref: myDesRef, inView: despVisible} = useInView();
    
    return( 
        <>
            <main className="about-wrapper" id="about">
                <div className="about-title">
                    <h2 ref={myTitleRef} className={ titleVisible ? "component-headings show" : "component-headings"}>A brief <span className="heading-highlight">info about</span> me</h2>
                    <div className="underline"></div>
                </div>
                <div ref={myDesRef} className={despVisible ? "about-description show" : "about-description"}>
                    <p>Hey! I am Lasya Priya, a passionate web developer from Andhra Pradesh,India. I am a junior, currently pursuing my bachelors in Computer Science Engineering - Hons.</p>
                    <p>I am interested in development of web sites and web apps.</p>
                    <p>I am open for remote opportunites as a collaborator, freelancer or an intern.</p>
                </div>
            </main>
        </>
    );
}

export default About;