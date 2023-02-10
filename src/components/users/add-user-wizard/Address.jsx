function Address(props) {
    const onNext =()=>{
        props.next();
}
const onPrevious = () =>{
    props.previous();
}
    return (  <div className = "form-group row g-4">
    <div className="col-lg-4">
              <label className="form-label">Street Number</label>
              <input type="text" className="form-control" required/>
            </div>
            <div class="col-lg-4">
              <label className="form-label">Suburb</label>
              <input type="text" className="form-control"  required/>
            </div>
            <div class="col-md-4">
              <label  className="form-label">City</label>
              <input type="text" className="form-control" required/>
            </div>
          
            <div className="col-md-12">
              <label className="form-label">Country</label>
              <select className="form-select col-lg-4"  required>
                <option selected disabled value="">Choose...</option>
                <option>...</option>
              </select>
            </div>
      
           
            <div className="col-lg-6"><button onClick = {onPrevious} className="text-white btn btn-primary btn-block pull-right p-3 col-lg-12 " type="submit"><i className="bi bi-arrow-left-circle-fill"></i> Previous</button>
            </div>
            <div className="col-lg-6"> <button onClick = {onNext} className="text-white btn btn-success btn-block pull-right p-3 col-lg-12" type="submit">Save and Submit <i className="bi bi-arrow-right-circle-fill"></i></button>
           </div>
           
           
    </div> );
}

export default Address;