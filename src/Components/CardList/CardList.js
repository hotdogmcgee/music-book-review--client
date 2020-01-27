import React from 'react'
import InstrumentCard from '../InstrumentCard/InstrumentCard'
import { Section } from '../Utils/Utils'
import './CardList.css'

export default function CardList(props) {
    const cardList = props.instruments.map((item, key) => {
        return <div key={key} className='select-box'><InstrumentCard title={item.title}/></div>
    })
    return (
        <Section className='select-boxes'>
            {cardList}
        </Section>
    )
}