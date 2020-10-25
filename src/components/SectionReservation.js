import React from 'react';
import './SectionReservation.css';
import {useFormik} from 'formik';


const initialValues = {
    name:'',
    date: '',
    phone: '',
    persons:''

}

const onSubmit = values => {
    console.log(values)
}
const validate= values => {
    let errors = {}

    if (!values.name){
        errors.name ='Name must be completed'
    }
    if (!values.date){
        errors.date ='You have to pick a date'
    }
    if (!values.phone){
        errors.phone ='We need your phone number'
    }
    if (!values.persons){
        errors.persons ='How many persons are coming?'
    }



    return errors
}

export const SectionReservation = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
      
    });


    return (
        <section className='reservation' id='reservation'>
            <h3>Make a reservation</h3>
            <form className='reservation-form' onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input id='name' type='text' name='name' onBlur={formik.handleBlur} onChange= {formik.handleChange} value={formik.values.name} />
                {formik.touched.name && formik.errors.name? <div>{formik.errors.name}</div> : null }
                <label htmlFor='date'>Date: </label>
                <input id='date' type='date' name='date' onBlur={formik.handleBlur} onChange= {formik.handleChange} value={formik.values.date}/>
                {formik.touched.date && formik.errors.date? <div>{formik.errors.date}</div> : null }

                <label htmlFor='phone'>Phone Number: </label>
                <input id='phone' type='tel' name='phone' onBlur={formik.handleBlur} onChange= {formik.handleChange} value={formik.values.phone}/>
                {formik.touched.phone && formik.errors.phone? <div>{formik.errors.phone}</div> : null }

                <label htmlFor='persons'>How Many Persons? </label>
                <input id='persons' type='number' name='persons' onBlur={formik.handleBlur} onChange= {formik.handleChange} value={formik.values.persons} />
                {formik.touched.persons && formik.errors.persons? <div>{formik.errors.persons}</div> : null }

                <button type='submit'>Make a Reservation</button>
            </form>
            
        </section>
    )
}
