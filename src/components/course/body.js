import { data } from './data'
import { useEffect } from 'react'

const Coursebody = () => {
  return (
    <>
      <div className='course-body'>
        <div className='item it1'>
          <div className='dp'>
            <span>
              Category: <span style={{ color: 'red' }}>All&#9660;</span>
            </span>
          </div>
          <div className='dp-content'>
            <ul>
              <li>All</li>
              <li>Front End (16)</li>
              <li>Back End (8)</li>
              <li>Bundles (7)</li>
              <li>Mobile (5)</li>
              <li>Programming Languages (11)</li>
              <li>Software Engineering Essentials (3)</li>
            </ul>
          </div>
        </div>
        <div className='item it2'>
          <div className='dp'>
            <span>
              Author:{' '}
              <span style={{ color: 'red' }}>
                &nbsp;&nbsp;&nbsp;&nbsp;All&#9660;
              </span>
            </span>
          </div>
          <div className='dp-content'>
            <ul>
              <li>All</li>
              <li>Chris</li>
              <li>Dhanush Royal</li>
            </ul>
          </div>
        </div>
        <div className='item it5'></div>
        <div className='item it3'>
          <input
            className='search'
            style={{
              width: '250px',
              borderRadius: '3px',
              border: '1px solid lightgray',
              padding: '6px',
            }}
            type='text'
            placeholder='search'
          />
        </div>
        <div className='item it4'>
          <i
            style={{
              padding: '10px',
              borderRadius: '3px',
              border: '1px solid lightgray',
            }}
            class='fa fa-search'
            aria-hidden='true'
          ></i>
        </div>
      </div>
      <div className='courses'>
        {data.map((course) => {
          const { image, h1, des } = course
          return (
            <div className='item'>
              <div>
                <img
                  style={{
                    width: '100%',
                    height: '200px',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                  }}
                  src={image}
                  alt=''
                />
              </div>
              <div style={{ margin: '10px' }}>
                <h5 style={{ fontWeight: 'bold' }}>{h1}</h5>
                <p style={{ color: 'gray', fontSize: '15px' }}>{des}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Coursebody
