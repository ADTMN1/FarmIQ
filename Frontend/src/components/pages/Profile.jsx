import React from 'react'
import { Avatar, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
export const Profile = () => {
  return (
    <div>
        <Avatar size={34}  icon={<UserOutlined />}  />
    </div>
  )
}
export default Profile