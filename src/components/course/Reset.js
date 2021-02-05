import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

const Reset = () => {
  const [email, setEmail] = useState('')
  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  const sendEmail = () => {
    axios
      .post('https://dhanush-test-app.herokuapp.com/user/resetmail', { email })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
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
          <Form onSubmit={sendEmail}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label style={{ color: 'gray' }}>Email Address</Form.Label>
              <Form.Control
                type='email'
                onChange={handleChange}
                name='email'
                value={email}
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
                Send me Instructions
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

export default Reset
