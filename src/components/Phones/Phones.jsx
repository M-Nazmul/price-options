// import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import axios from "axios";
import { useEffect, useState } from "react";
import { MutatingDots } from 'react-loader-spinner'

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
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
          setLoading(false)
        })

    }, [])
  return (
    <div className="pt-6 md:py-12 text-center">
      <div className='text-center max-w-96 mx-auto md:pl-28'>
      {loading && <MutatingDots 
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />}
      </div>
      <p className="text-3xl font-semibold pl-8 md:pl-16">Phones: {phones.length} </p>
      <div className='max-w-4xl h-96 mx-auto mb-16'>
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