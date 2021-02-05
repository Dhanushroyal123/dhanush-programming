import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const SignUp = () => {
  let history = useHistory()
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const submitForm = (e) => {
    e.preventDefault()
    axios
      .post('https://dhanush-test-app.herokuapp.com/user/save', user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    history.push('/login')
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6 forms'>
          <Form onSubmit={submitForm}>
            <Form.Group controlId='formBasicUsername'>
              <Form.Label style={{ color: 'gray' }}>Username</Form.Label>
              <Form.Control
                type='text'
                onChange={handleChange}
                value={user.username}
                name='username'
                required
              />
            </Form.Group>
            <br />
            <Form.Group controlId='formBasicEmail'>
              <Form.Label style={{ color: 'gray' }}>Email</Form.Label>
              <Form.Control
                type='email'
                onChange={handleChange}
                value={user.email}
                name='email'
                required
              />
            </Form.Group>
            <br />
            <Form.Group controlId='formBasicPassword'>
              <Form.Label style={{ color: 'gray' }}>Password</Form.Label>
              <Form.Control
                type='password'
                onChange={handleChange}
                value={user.password}
                name='password'
                required
              />
            </Form.Group>
            <Form.Group
              style={{ textAlign: 'left' }}
              controlId='formBasicCheckbox'
            ></Form.Group>
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
                Sign Up
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

export default SignUp
