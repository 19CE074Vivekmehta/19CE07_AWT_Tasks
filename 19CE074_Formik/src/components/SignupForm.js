import React from 'react'
import {useFormik} from 'formik';
function SignupForm() {
    const formik=useFormik({
        initialValues:{
            fName:'',
            lName:'',
            mobile:'',
            email:'',
            address:'',
            caddress:''
        },
         onSubmit: values=>{
            //console.log('form Data: ',values)
        },
        validate:values=>{
            let errors={}
            if(!values.fName){
                errors.fName='FirstName Is required.'
            }
            if(!values.lName){
                errors.lName='Last Name Is required.'
            }
            if(!values.email){
             errors.email='Email  Is required.'
         }
         if(!values.mobile){
            errors.mobile='Mobile Number Is required.'
        }
         if(!values.address){
             errors.address='address Is required.'
         }
         if(!values.caddress){
             errors.caddress='Confirmation of address  Is required.'
         }
         return errors;
        }
 
    })
 
    
    //console.log('Form valus are: ',formik.errors)
    return (
        <div>
            <h1>Welcome to Signup form</h1>
            <form onSubmit={formik.handleSubmit}>
                
                <div className='form-control'>
                <label htmlFor="fName">Enter First Name</label>
                <input type="text" name='fName' 
                onChange={formik.handleChange}
                 value={formik.values.fName}></input>
                
                </div>
               {formik.touched.fName && formik.errors.fName?<div className='error'>{formik.errors.fName}</div> :null}

               <div className='form-control'>
                <label htmlFor="lName">Enter Last Name</label>
                <input type="text" name='lName' 
                onChange={formik.handleChange}
                 value={formik.values.lName}></input>
                
                </div>
               {formik.touched.lName && formik.errors.lName?<div className='error'>{formik.errors.lName}</div> :null}

               <div className='form-control'>
                <label htmlFor="email">Enter Email</label>
                <input type="text" name='email' 
                onChange={formik.handleChange}
                 value={formik.values.email}></input>
                
                </div>
               {formik.touched.email && formik.errors.email?<div className='error'>{formik.errors.email}</div> :null}

               <div className='form-control'>
                <label htmlFor="mobile">Enter Mobile</label>
                <input type="mobile" name='mobile' 
                onChange={formik.handleChange}
                 value={formik.values.mobile}></input>
                
                </div>
               {formik.touched.mobile && formik.errors.mobile?<div className='error'>{formik.errors.mobile}</div> :null}

               <div className='form-control'>
                <label htmlFor="dob">Enter Date of Birth</label>
                <input type="date" name='dob' 
                onChange={formik.handleChange}
                 value={formik.values.dob}></input>
                
                </div>
               {formik.touched.dob && formik.errors.dob?<div className='error'>{formik.errors.dob}</div> :null}

               <div className='form-control'>
                <label htmlFor="gender">Gender</label>
                <input type="radio" name='male' 
                onChange={formik.handleChange}
                 value={formik.values.male}></input><span>Male</span>
                  <input type="radio" name='female' 
                onChange={formik.handleChange}
                 value={formik.values.female}></input><span>Female</span>
                
                </div>
               {formik.touched.mobile && formik.errors.mobile?<div className='error'>{formik.errors.mobile}</div> :null}

               

               <div className='form-control'>
                <label htmlFor="address">Enter address</label>
                <input type="text" name='address' 
                onChange={formik.handleChange}
                 value={formik.values.address}></input>
                
                </div>
               {formik.touched.address && formik.errors.address?<div className='error'>{formik.errors.address}</div> :null}

               
                
         
                <button id="submit">Submit</button>
            </form>
        </div>
    )
}
export default SignupForm;
