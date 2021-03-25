import React from 'react'

const Fullname = () => {
  return (
    <div>
      <form className="fullname">
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" value="" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault02" className="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" value="" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefaultUsername" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  </form>

    </div>
  )
}

export default Fullname

