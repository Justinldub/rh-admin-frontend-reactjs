function PersonalDetails(props) {
    const onNext =()=>{
            props.next();
    }
    return (
        <div className = "form-group row">
        <div className="col-lg-4">
                  <label className="form-label">First name</label>
                  <input type="text" className="form-control" required/>
                </div>
                <div class="col-lg-4">
                  <label className="form-label">Last name</label>
                  <input type="text" className="form-control"  required/>
                </div>
                <div class="col-md-4">
                  <label  className="form-label">ID number</label>
                  <input type="text" className="form-control" required/>
                </div>
                <div class="col-md-3 mt-4">
                  <label className="form-label">Email</label>
                  <div className="input-group">
                    <span className="input-group-text" >@</span>
                    <input typeName="text" class="form-control"   required/>
                  </div>
                </div>
                <div className="col-md-3 mt-4">
                  <label className="form-label">Home Language</label>
                  <select className="form-select"  required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-3 mt-4">
                  <label className="form-label">Nationality</label>
                  <select className="form-select"  required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-3 mt-4">
                  <label className="form-label">Race</label>
                  <select className="form-select"  required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="mt-3 col-lg-12">
                  <button onClick = {onNext} className="text-white btn btn-success btn-block pull-right p-3 col-lg-3 col-sm-12" type="submit">Save & Proceed <i className="bi bi-arrow-right-circle-fill"></i></button>
                </div>
        </div>
      );
}

export default PersonalDetails;