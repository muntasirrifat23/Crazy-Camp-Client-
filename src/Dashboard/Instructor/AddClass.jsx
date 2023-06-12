import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';

const AddClass = () => {
  const formRef = useRef(null);

  const formLogin = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const image = from.image.value;
    const name = from.name.value;
    const classV = from.classV.value;
    const sit = from.sit.value;
    const ins = from.ins.value;
    const price = from.price.value;
    const add= {name,image,sit, ins, price, email}
    console.log(add);

    const saveLoggedUser = {email: add.email,classV, name:add.displayName, image, sit, price}
    formRef.current.reset();

    fetch('https://assignment-12-server-muntasirrifat23.vercel.app/add', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(saveLoggedUser)
  })
 // formRef.current.reset();  

      .then(res => res.json())
      .then(data => {
         console.log(data);
          });

}
return (
  
        <div>
           <Helmet>
                <title>Crazy Camp | Add Class</title>
            </Helmet>
            

            <form onSubmit={formLogin} ref={formRef}>
      <div className="card-body bg-red-100 rounded-xl mt-20">

<div className='flex'>
<div className="form-control">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input type="text" name="classV" placeholder="class name" className="input input-bordered" />
        </div>

        <div className="form-control ml-3">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="file" name="image" placeholder="image" className="input input-bordered" />
        </div>
</div>

<div className='flex'>
<div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input type="text" name="ins" placeholder="Instructor Name" className="input input-bordered" />
        </div>
        <div className="form-control ml-3">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input type="text" name="email" placeholder="Instructor Email" className="input input-bordered" />
        </div>
</div>

<div className='flex'>
<div className="form-control">
          <label className="label">
            <span className="label-text">Available Sit</span>
          </label>
          <input type="number" name="sit" placeholder=" Sit" className="input input-bordered" />
        </div>
        <div className="form-control ml-3">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" name="price" placeholder="$00" className="input input-bordered" />
        </div>
</div>
        

       
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
      </form>
</div>
    );
};

export default AddClass;