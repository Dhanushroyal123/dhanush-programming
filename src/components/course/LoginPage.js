import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export var profileuser = ''
const LoginForm = () => {
  let history = useHistory()
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const [type, setType] = useState('password')

  const [show, setShow] = useState(false)
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const remove = () => {
    setShow(false)
  }

  const setData = (username) => {
    localStorage.setItem('myData', username)
  }

  const check = (e) => {
    if (e.target.checked) {
      setType('text')
    } else {
      setType('password')
    }
  }

  const submitForm = (e) => {
    e.preventDefault()
    axios
      .post('https://dhanush-test-app.herokuapp.com/user/validate', user)
      .then((res) => {
        if (res.data.value < 300) {
          setData(res.data.username)
          history.push('/')
        } else {
          setShow(true)
        }
      })
      .catch((err) => setShow(true))
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6 forms'>
          {show && (
            <div
              style={{
                backgroundColor: '#ffe3e6',
                borderRadius: '3px',
                padding: '10px',
                border: '1px solid pink',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '13px' }}>
                Incorrect username or password &nbsp; &nbsp; &nbsp; &nbsp;
                <span
                  onClick={remove}
                  style={{
                    color: 'red',
                    fontSize: '15px',
                    cursor: 'pointer',
                  }}
                >
                  &#10006;
                </span>
              </span>
            </div>
          )}
          <br />
          <Form onSubmit={submitForm}>
            <Form.Group controlId='formBasicUser'>
              <Form.Label style={{ color: 'gray' }}>Username</Form.Label>
              <Form.Control
                name='username'
                type='text'
                onChange={handleChange}
                value={user.username}
                required
              />
            </Form.Group>
            <br />
            <Form.Group controlId='formBasicPassword'>
              <Form.Label style={{ color: 'gray' }}>Password</Form.Label>
              <Form.Control
                name='password'
                type={type}
                onChange={handleChange}
                value={user.password}
                required
              />
            </Form.Group>
            <Form.Group
              style={{ textAlign: 'left' }}
              controlId='formBasicCheckbox'
            >
              <Form.Check
                onChange={check}
                type='checkbox'
                label='Show password'
                style={{ color: 'gray' }}
              />
            </Form.Group>
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
                Log In
              </Button>
            </p>
          </Form>
          <br />
          <p style={{ textAlign: 'center' }}>
            <a style={{ fontSize: '14px' }} href='/reset'>
              Forgot Password?
            </a>
          </p>
          <p style={{ color: 'gray', fontSize: '14px', textAlign: 'center' }}>
            Dont Have an Account?<a href='/signup'>Create an account</a>
          </p>
        </div>
        <div className='col-sm-3'></div>
      </div>
    </div>
  )
}

export default LoginForm
