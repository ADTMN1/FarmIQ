import React from 'react'

const Messaging = () => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-10 bg-gray-100 p-4 rounded-lg'>
            <div className="bg-white p-4 rounded-lg shadow"> hi there</div>
            <div className="bg-white p-4 rounded-lg shadow">Message 1</div>
            <div className="bg-white p-4 rounded-lg shadow">Message 2</div>
            <div className="bg-white p-4 rounded-lg shadow">Message 3</div>

        </div>
    </div>
  )
}

export default Messaging