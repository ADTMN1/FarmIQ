import { Card, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const LoginCiredential = {
  password: "@Bon123",
  username: "bonsa@gmail.com",
};

const Login = () => {
  const navigate = useNavigate();

  const OnFnish = (values) => {
    const { username, password } = values;
    if (
      username == LoginCiredential.username ||
      password == LoginCiredential.password
    ) {
      navigate("/ZoneDashBoard");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div className="flex justify-center items-center bg-green-700 h-screen">
      <Card
        border={false}
        title={<h1 className="text-2xl font-bold text-green-700">Login</h1>}
        style={{
          width: "750px",
          maxWidth: "500px",
          padding: "20px",
          position: "relative",
          borderRadius: "10px",
          boxShadow: "0px 10px 20px rgba(0,0,0,0.4)",
        }}
      >
        <Form
          layout="vertical"
          name="login"
          style={{ padding: "20px", maxWidth: "350px" }}
          onFinish={OnFnish}
        >
          <Form.Item label="Username" name="username">
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{
                background: "green",
                width: "100%",
                maxWidth: "250px",
                position: "relative",
                left: "10%",
                marginTop: "40px",
              }}
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
