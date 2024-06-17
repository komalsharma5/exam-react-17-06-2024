import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  const [input, setInput] = useState({})

  const getdata = () => {
    axios.get(`http://localhost:3050/users`).then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }

  const input_Handler = (e) => {
    setInput({...input,[e.target.name] : e.target.value})
  }

  const submit_Handler = () => {
    axios.post(`http://localhost:3050/users`,input)
  }

    useEffect (() => {
      getdata()
    },[data])

  return (
    <>
    <h1 className='text-center mt-2'>Form</h1>
    <div className='mx-auto d-block border border-1 w-50 mt-5 p-3'>
        <form className="row g-3 d-flex mx-auto needs-validation bgimg" novalidate>
        <div >
          <label for="validationCustom01" className="form-label">First name</label>
          <input type='text' placeholder='firstname' minlength='2'  maxlength="8" className=' form-control' name='fname' value={input.fname} onChange={input_Handler} required></input>
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div>
          <label for="validationCustom02" className="form-label">Last name</label>
          <input type="text" className="form-control"  minlength='2'  maxlength="8" placeholder='lastname' value={input.lname} onChange={input_Handler}  name='lname'  required></input>
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div>
          <label for="validationCustomUsername" className="form-label">Password</label>
          <div className="input-group has-validation">
          <input type='password' id="password" placeholder="Password" name='pass' value={input.pass} className="form-control" onChange={input_Handler} minlength='2'  maxlength="8"  required></input>
          </div>
        </div>
        <div >
          <label for="validationCustom03" className="form-label">Mobile No.</label>
          <input type='tel' id="password2" placeholder="mobile no." name='mobno' value={input.mobno} className="form-control" onChange={input_Handler} minlength='0'  maxlength="10"  required></input>
        </div>
        <div className="col-12">
          <button className="btn btn-primary w-100 my-3" type="submit" onClick={submit_Handler}>Submit form</button>
        </div>
      </form>

      {
            data?.map((val,id)=>{
              return(
                <div className='border border-1 border-dark my-2 w-50 text-center mx-auto d-block p-2 bgi' key={id}>
                  <h3>id:{val.id}</h3>
                  <h3>First name: {val.fname}</h3>
                  <h3>Last name : {val.lname}</h3>
                  <h3>Password : {val.pass}</h3>
                  <h3>Mobile No. : {val.mobno}</h3>
                </div>
              )
            })
          }

    </div>
    </>

  
  )
}

export default App