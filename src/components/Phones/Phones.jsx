// import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import axios from "axios";
import { useEffect, useState } from "react"

const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        // data load by fetch
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))

        // data load by Axios
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
          const phoneData = data.data.data;
          const phoneWithFakeData = phoneData.map(phone => {
            const obj = {
              name: phone.phone_name,
              price: parseInt(phone.slug.split('-')[1]),
            }
            return obj;
          })
          console.log(phoneWithFakeData);
          setPhones(phoneWithFakeData);
        })

    }, [])
  return (
    <div className="pt-6 md:py-12">
      <p className="text-3xl font-semibold pl-8 md:pl-16">Phones: {phones.length} </p>
      <div className='max-w-[700px] h-96 mx-auto mb-16'>
        <ResponsiveContainer>
          <BarChart data={phones}>
            <Bar dataKey={'price'} fill='#8884d8'/>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

// Phones.propTypes = {}

export default Phones