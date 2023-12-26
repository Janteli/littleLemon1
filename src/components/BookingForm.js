import React, { useState } from 'react'

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e)
    }

    const handleChage = (e) => {
        setDate(e);
        props.dispatch(e)
    }
  return (
    <>
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                        <label htmlFor='book-date'>Choose Date</label>
                        <input id='book-date' value={date} onChange = {(e) =>{
                            handleChage(e.target.value)
                        }} type='date' required/>
                        </div>
                        {/* for time selection */}
                        <div>
                        <label htmlFor='book-time'>Choose Time</label>
                        <select id='book-time'>
                            <option value={time} onChange={(e)=> setTime(e.target.value)}>Select a Time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes=> {return <option key = {availableTimes}>{availableTimes}</option>})
                            }
                        </select>
                        </div>

                        {/* for number of guests */}
                        <div>
                            <label htmlFor='book-guests'>Number of Guests</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e)=> setGuests(e.target.value)}/>
                        </div>

                        {/* Occasion Field */}
                        <label htmlFor='book-occasion'>Occasion:</label>
                        <select id='book-occasion' key={occasion} value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniverssary</option>
                        </select>
                        {/* submit button */}
                        <div className='btnReceive'>
                            <input aria-label='On Click'  type='submit' value={'Make Your Reservation'}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    </>
  )
}

export default BookingForm