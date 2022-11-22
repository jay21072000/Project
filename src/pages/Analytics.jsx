import React from 'react';

const Analytics = () => {
    return (
        <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            
            <div className="form-group mt-3">
              <label  className="input "><h4>Buyer Address</h4></label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter Address"
              />
            </div>

            
            <div className="form-group mt-3">
              <label  className="input "><h4>Package Address</h4></label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter Address"
              />
            </div>

            <div className="form-group mt-3">
              <label><h4>Seller Address</h4></label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter Address"
              />
            </div>
            
            <div className="form-group mt-3">
              <label><h4>Signature</h4></label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Signature"
              />
            </div>

            <div className="form-group mt-3">
              <label><h4>Timestamp</h4></label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Timestamp"
              />
            </div>
            
            
             <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
            
          </div>
        </form>
      </div>
    
    );
};

export default Analytics;