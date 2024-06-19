import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "" 
  });
  const inputEvent = (e) => {
    const {name, value} = e.target;

    setData((preVal) => {
        return {
          ...preVal,
          [name] : value
        }
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My Name Is ${data.fullname}. My Mobile Number Is ${data.phone} and My Email Is ${data.email}, Here Is What I Want To Say ${data.msg}`)
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact US </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name "
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Phone</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Mobile No "
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  rows="3"
                ></textarea>
              </div><br />
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
