import React from "react";
import { notification } from "antd";
import { IoIosNotifications } from "react-icons/io";

import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Notification = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      title: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };
  return (
    <div>
      {contextHolder}
     <IoIosNotifications size={30} color="#b3590fff" onClick={openNotification} />
    </div>
  );
};

export default Notification;
