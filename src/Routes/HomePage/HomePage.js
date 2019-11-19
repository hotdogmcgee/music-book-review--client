import React from 'react'
import './HomePage.css'
import { Section } from '../../Components/Utils/Utils'

function HomePage() {
    return (
        <Section className="HomePage">

    
        <section>HERO</section>
    
        <section>ABOUT</section>
    
        <section>
            <h2>Instrument select</h2>
            <div class="select-boxes">
                <div class="select-box">Piano</div>
                <div class="select-box">Guitar</div>
                <div class="select-box">Violin</div>
                <div class="select-box">Clarinet</div>
    
    
            </div>
            
        </section>
        
    
      </Section>
    )
}

export default HomePage