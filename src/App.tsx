import { Form, Input, Button } from 'antd';
import './App.css'

import { login } from './api/auth';

function App() {
  const [form] = Form.useForm();

  const onFinish = async () => {
    const access_token = await login(form.getFieldsValue())

    localStorage.setItem('access_token', access_token);
  
    console.log('submit');
    form.resetFields();
  }

  return (
    <>
      <div>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="userId">
            <Input placeholder="id" />
          </Form.Item>
          <Form.Item  name="userName">
            <Input placeholder="username" /> 
          </Form.Item>
          <Form.Item  name="password">
            <Input placeholder="password" />
          </Form.Item>
          
          <Button htmlType="submit" type="primary">login</Button>
        </Form>
      </div>
    </>
  )
}

export default App
