import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Country = () => {
  const [countryName, setcountryName] = useState();
  const [countryflag, setcountryflag] = useState();

  useEffect(() => {
    axios
      .get(
        'http://api.ipstack.com/2a02:2f0e:d91c:2f00:6141:1d3d:9aaa:197e?access_key=173fc33069619ffa9a501be064fe3477',
      )
      .then((response) => {
        let data = response.data;
        setcountryName(data.country_name);
        setcountryflag(data.location.country_flag_emoji);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: 'black',
        padding: '10px',
        borderRadius: '20px',
        color: 'white',
        justifyContent: 'center',
      }}>
      {countryName}
      {countryflag}
    </div>
  );
};

export default Country;
