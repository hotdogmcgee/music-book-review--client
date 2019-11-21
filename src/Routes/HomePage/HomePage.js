import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
import { Section } from '../../Components/Utils/Utils'

function HomePage() {
    return (
        <Section className="HomePage">

    
        <section><Link to="/">Music Book Review</Link></section>
    
        <section>ABOUT</section>
    
        <section>
            <h2>Instrument select</h2>
            <div className="select-boxes">
                <div className="select-box">Piano</div>
                <div className="select-box">Guitar</div>
                <div className="select-box">Violin</div>
                <div className="select-box">Clarinet</div>
    
    
            </div>
            
        </section>
        
    
      </Section>
    )
}

export default HomePage