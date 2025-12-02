import { Table } from 'antd'
import React from 'react'
const columns = [
    {
        title: 'Kebeles_ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Kebeles_Name',
        dataIndex: 'Name',
        key: 'Name',
    },
    {
      title: 'Region',
      dataIndex: 'Region',
      key: 'Region',
    },
    {
      title: 'Zone',
      dataIndex: 'Zone',
      key: 'Zone',
    },
    {
        title: 'woreda',
        dataIndex: 'woreda',
        key: 'woreda',
    },

];
const data =[{
  id: 1,
  Name: 'Kebeles_Name',
  Region: 'Region',
  Zone: 'Zone',
  woreda: 'woreda',
}]

const Kebeles = () => {
  return (
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-10 bg-gray-50 p-4 rounded-lg ml-10'>
  <div className="col-span-4 w-full">
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      style={{ width: "100%" }}
    />
  </div>

</div>

  )
}



export default Kebeles