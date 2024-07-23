import { Button, Form, Input, Spin } from 'antd'

import { useLoginPage } from '@/hooks/LoginPage'

import { StyledLoginPage, StyledTitle } from './styled'

const LoginPage = () => {
  const { loading, handleFormSubmit } = useLoginPage()

  return (
    <StyledLoginPage>
      <Form onFinish={handleFormSubmit}>
        <Spin spinning={loading}>
          <StyledTitle>ocloud系统</StyledTitle>
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="请输入用密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              <span>登录</span>
            </Button>
          </Form.Item>
        </Spin>
      </Form>
    </StyledLoginPage>
  )
}

export default LoginPage
