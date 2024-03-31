import React from 'react';
import HomeLayout from '../layout/HomeLayout';
import noIng from '../assets/No Message illustration.png';

function Onebox() {
  return (
    <HomeLayout>
      <div className='flex justify-center items-center flex-col gap-6 h-[88vh]'>
        <img className='w-1/4' src={noIng} alt="img not found" />
        <h1 className='text-white text-2xl font-bold text-center'>It’s the beginning of a legendary sales pipeline</h1>
        <p className='text-gray-500 text-lg text-center'>When you have inbound E-mails,<br/> you'll see them here</p>
      </div>
    </HomeLayout>
  );
}

export default Onebox;
