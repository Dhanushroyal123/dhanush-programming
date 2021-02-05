import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

const ResetPassword = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    cpassword: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }
  const resetPass = (e) => {
    e.preventDefault()
    axios
      .post('https://dhanush-test-app.herokuapp.com/user/update', user)
      .then((res) => console.log(res))
      .then((err) => console.log(err))
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6 forms'>
          <h6
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Reset Password
          </h6>
          <br />
          <Form onSubmit={resetPass}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label style={{ color: 'gray' }}>Username</Form.Label>
              <Form.Control
                type='text'
                onChange={handleChange}
                name='username'
                value={user.username}
                required
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label style={{ color: 'gray' }}>Password</Form.Label>
              <Form.Control
                type='password'
                onChange={handleChange}
                name='password'
                value={user.password}
                required
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label style={{ color: 'gray' }}>
                Confirm Password
              </Form.Label>
              <Form.Control
                type='password'
                onChange={handleChange}
                name='cpassword'
                value={user.cpassword}
                required
              />
            </Form.Group>
            <br />
            <p className='button'>
              <Button
                style={{
                  padding: '10px 35px 10px 35px',
                  borderRadius: '35px',
                  backgroundColor: '#ff6781',
                  border: 'none',
                }}
                variant='primary'
                type='submit'
              >
                Submit
              </Button>
            </p>
          </Form>
          <br />
        </div>
        <div className='col-sm-3'></div>
      </div>
    </div>
  )
}

export default ResetPassword
