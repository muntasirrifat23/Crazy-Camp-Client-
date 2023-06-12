import React from 'react';

const AddClass = () => {
    return (
        <div>
            
      <div className="card-body bg-red-100 rounded-xl mt-20">

<div className='flex'>
<div className="form-control">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input type="text" placeholder="class name" className="input input-bordered" />
        </div>

        <div className="form-control ml-3">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="file" placeholder="image" className="input input-bordered" />
        </div>
</div>

<div className='flex'>
<div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input type="text" placeholder="Instructor Name" className="input input-bordered" />
        </div>
        <div className="form-control ml-3">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input type="text" placeholder="Instructor Email" className="input input-bordered" />
        </div>
</div>

<div className='flex'>
<div className="form-control">
          <label className="label">
            <span className="label-text">Available Sit</span>
          </label>
          <input type="number" placeholder=" Sir" className="input input-bordered" />
        </div>
        <div className="form-control ml-3">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" placeholder="$00" className="input input-bordered" />
        </div>
</div>
        

       
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
   
</div>
    );
};

export default AddClass;