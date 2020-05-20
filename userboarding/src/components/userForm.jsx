import React from 'react'


function UserForm(props){


    const {
        values,
        onInputChange,
        onSubmit,
        onCheckboxChange,
    }=props

    return (
      <div>

        <form onSubmit={onSubmit}>
         <h2> Add a User</h2>

         <button>Submit</button>

         <h4>General Information</h4>

         <label>Name&nbsp;
             <input
                 type='text'
                value={values.name}
                onChange={onInputChange}
                name='name'
             />
         </label>

         <label>Email&nbsp;
             <input
                 type='email'
                value={values.email}
                onChange={onInputChange}
                name='email'
             />
         </label>
  

         <label>Password&nbsp;
             <input
                 type='password'
                value={values.password}
                onChange={onInputChange}
                name='password'
             />
         </label>

   
        <label>Term of Service&nbsp;

        <input
                 type='checkbox'
                checked={values.termsOfService}
                onChange={onCheckboxChange}
                name='termsOfService'
             />

        </label>

        </form>

    </div>


    )}


export default UserForm;