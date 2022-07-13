import React from 'react'
import Description from '../../global/Description'
import Title from '../../global/Title'

export default function CarruselInfo({ title, description, price }) {
    return (
        <>
            <Title title={title} size="M" />
            <Description description={description} />
            <Description description={price} />
        </>
    )
}