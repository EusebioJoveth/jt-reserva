import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

function List() {
  return (
    <div className='list'>
      <Navbar />
      <Header type="list"/>
    </div>
  )
}

export default List