import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
import { Section } from '../../Components/Utils/Utils'
import InstrumentCard from '../../Components/InstrumentCard/InstrumentCard'

function HomePage() {
    return (
        <Section className="HomePage">

    
        <section><Link to="/">Music Book Review</Link></section>
    
        <section>ABOUT</section>
    
        <section>
            <h2>Instrument select</h2>
            <div className="select-boxes">
                
                <div className="select-box"><InstrumentCard title="piano" image="a piano"/></div>
                <div className="select-box"><InstrumentCard title="guitar" image="a guitar"/></div>
                <div className="select-box"><InstrumentCard title="violin" image="a violin"/></div>
                <div className="select-box"><InstrumentCard title="clarinet" image="a clarinet"/></div>
    
    
            </div>
            
        </section>
        
    
      </Section>
    )
}

export default HomePage