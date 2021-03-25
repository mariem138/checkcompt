import React from 'react'

const Address = () => {
  return (
    <div>
       <form className="MyAddress">
    <label for="validationDefault03" className="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required/>
  
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationDefault05" required/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label className="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>

    </div>
  )
}

export default Address






 