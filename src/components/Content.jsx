import React, { useContext, useEffect, useState } from 'react'
import Button from './Button'
import EventCard from './EventCard'
import { FadeLoader } from 'react-spinners'
import { EventContext } from '../context/eventContext'

const Content = () => {

    const {  active, setActive, events, setEvents, filtered, setfiltered, loadMore, setloadMore, loading, setloading, fetchEvents } = useContext(EventContext);

    const buttons = [
        { id: 1, label: 'All' },
        { id: 2, label: 'Plantation Day' },
        { id: 3, label: 'Annual Day' },
        { id: 4, label: 'Sports Day' },
        { id: 5, label: 'NCC (National cadet corps)' },
        { id: 6, label: 'Science labs' },
        { id: 7, label: 'Alumni association' },
        { id: 8, label: 'Cleanliness drive' }
    ];

    const filterBtnClickFn = (id) => {
        setActive(id)
        if (id === 1) {
            fetchEvents()
            return
        }
        const type = buttons[id - 1].label

        const filteredEvents = events.filter((ev) => {
            return ev.attributes.type.toLowerCase() === type.toLocaleLowerCase()
        })
        setfiltered(filteredEvents)
        console.log(filteredEvents)
    }

    const loadMoreFn = () => {
        const newItems = events.slice(loadMore, loadMore + 5)
        setloadMore((prev) => prev + 5)
        setfiltered((prev) => [...prev, ...newItems])

    }


    return (
        <div className='contentArea'>
            <div className="filterSection">
                {buttons.map((button, index) => (
                    <Button
                        label={button.label}
                        className={`filterButton ${active === button.id ? "active" : ""}`}
                        onClick={() => filterBtnClickFn(button.id)}
                    />
                ))}
            </div>
            {loading ? (
                <div className='loader'>
                    <FadeLoader color='#f54e39' />;
                    <h1>Loading..</h1>
                </div>
            ) : (
                filtered.length !== 0 ?
                    <div className="eventSection">
                        {filtered.map((ev, index) => (
                            <EventCard
                                key={index}
                                img={ev.attributes.date}
                                title={ev.attributes.title}
                                date={ev.attributes.dateTime}
                            />

                        ))}
                    </div>
                    : <div className='noData'>No data found</div>


            )}


            <div className="more">
                {loadMore <= filtered.length && <Button className="outlineButton" label='View more' onClick={loadMoreFn} />}
            </div>
        </div>
    )
}

export default Content