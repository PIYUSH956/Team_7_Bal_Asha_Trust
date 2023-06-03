import React from "react";
import "./Card.css";

function ChildProfile() {
  const handleUpload = () => {};

  return (
    <div>
      <h1>Child Profile</h1>

      <div className="row">
        <div className="col-md-6">
          <div className="card zoom-effect card-style m-3 p-2">
            <img
              src="https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0"
              alt="child.name"
              className="card-img-top"
              style={{ height: "160px" }}
            />
            <div className="card-body">
              <h5 className="card-title">child.name</h5>
            </div>
          </div>
        </div>

        <div className="col-md-6" >
          <div className="mt-4">
            <div className="card zoom-effect card-style m-3 p-2"  style={{height: '100%'}}>
              <h5 className="card-title">Details</h5>
              <p className="card-text">Age: child.age</p>
              <p className="card-text">Location: child.location</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6 m-auto">
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Document Upload</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="documentUpload" className="form-label">
                    Upload Document
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="documentUpload"
                    onChange={handleUpload}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button type="submit" className="btn btn-primary">
                  next step
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChildProfile;
