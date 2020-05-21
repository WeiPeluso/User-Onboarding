import React,{useState, useEffect} from 'react';
import './App.css';
import User from './components/user'
import UserForm from './components/userForm'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from '../src/validation/FormSchema'



//inital states

const initialFormValues={
  name:'',
  email:'',
  password:'',
  termsOfService: false,
}

const initalFormErrors={
  name:'',
  email:'',
  password:'',
  termsOfService:false,
}

const initalUsers=[]
const initialDisabled=true


function App() {

  const [users,setUsers]=useState(initalUsers)
  const [formValues, setFormValues]=useState(initialFormValues)
  const [disabled,setDisabled]=useState(initialDisabled)
  const [formErrors,setFormErrors]=useState(initalFormErrors)




  const onInputChange=(event)=>{
    const name= event.target.name
    const value=event.target.value
    
    yup
        .reach(formSchema,name)
        .validate(value)
        .then(valid=>{
          setFormErrors({
            ...formErrors, 
            [name]: ''
          })
        })
        .catch(error=>{
            setFormErrors({
              ...formErrors,
              [name]:error.errors[0]

            })
          })
        




    setFormValues({
      ...formValues,
      [name]:value
    })
  }


  const postNewUser= (newUser)=>{

    axios.post('https://reqres.in/api/users',newUser)
    .then((res)=>{
      setUsers([res.data, ...users])
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{

      setFormValues(initialFormValues)
    })
    
  }

  const onSubmit=(event)=>{
     event.preventDefault();
     const newUser={
           name: formValues.name.trim(),
           email:formValues.email.trim(),
           password:formValues.password.trim(),
           termsOfService:formValues.termsOfService,

     }

     postNewUser(newUser)
  }

  const onCheckboxChange=(event)=>{
      const {checked}=event.target

      setFormValues({...formValues, termsOfService:checked })
  }

     useEffect(()=>{
      
      formSchema.isValid(formValues)
      .then(valid=>{
        setDisabled(!valid)
      })
          
     }, [formValues])

  return (
    <div className="App">

      <UserForm 
      values={formValues}
       onInputChange={onInputChange} 
       onSubmit={onSubmit} 
       onCheckboxChange={onCheckboxChange}
       disabled={disabled}
       errors={formErrors}/>

      {
               users.map((user,index)=>{
                 return(
                   <User key={index} information={user}/>
                 )
               })

      }


    </div>

  

  )
}

export default App;
