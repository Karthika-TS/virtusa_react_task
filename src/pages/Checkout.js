import React, { useState,useEffect,useCallback } from "react";
import { Navbar } from "../components";
import {EmptyCart, Preview} from "../pages";
import { useSelector, useDispatch } from "react-redux";
import { Link ,useNavigate} from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
 
  const initialValues = { firstName: "", lastName: "", email: "", address: "", phnumber: "", country: "", states: "", zip: "",firstNameBill: "", lastNameBill: "", emailBill: "", addressBill: "", phnumberBill: "", countryBill: "", statesBill: "", zipBill: "", ccname: "", ccnumber: "", ccexpiration: "", cccvv: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [sameBilling, setSameBilling] = useState(false);
  const [prev,setPrev]=useState(false);
  const [billing,setBilling]=useState(false);
  const [payment,setPayment]=useState(false);
  const countryDrop=["Choose","USA"]
  const countryDropBill=["Choose","USA"]
  const [dropdow,setDropdow]=useState(countryDrop[0])
  const [dropdowbill,setDropdowBill]=useState(countryDropBill[0])
  const stateDrop=["Choose","California","Florida","Texas"]
  const stateDropBill=["Choose","California","Florida","Texas"]
  const [dropdowstate,setDropdowstate]=useState(stateDrop[0])
  const [dropdowstatebill,setDropdowstatebill]=useState(stateDropBill[0])
  const navigate = useNavigate();
  const handleChange = async (e) => {
    const { id, value } = e.target;
    if(id=="country")
      setDropdow(e.target.value)
    if(id=="countryBill")
      setDropdowBill(e.target.value)
    if(id=="states")
      setDropdowstate(e.target.value)
    if(id=="statesBill")
      setDropdowstatebill(e.target.value)
    setFormValues({ ...formValues, [id]: value });
  }

  const   handleSubmit = async (e) => {
    e.preventDefault();
    const erro= await validate(formValues);
    setIsSubmit(true);
    if(erro && isSubmit)
    { 
      await validate(formValues);
      setBilling(!billing);
    }
     
  }
  const handleBillingSubmit = async (e) => {
    e.preventDefault();
    const erro= await validateBill(formValues);
    setIsSubmit(true);
    if(erro && isSubmit)
    {
      await validateBill(formValues);
      
      setPayment(!payment);
    }
  }
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
   const erro= await validatePayment(formValues);
    setIsSubmit(true);
    if(erro && isSubmit)
      {
      await validatePayment(formValues);
       
        setPrev(!prev);
      }
  }
  useEffect (()=>{
    if(sameBilling){
      setDropdowBill(formValues.country)
      setDropdowstatebill(formValues.states)
      setFormValues({...formValues,firstNameBill:formValues.firstName,lastNameBill:formValues.lastName,emailBill:formValues.email,addressBill:formValues.address,phnumberBill:formValues.phnumber,countryBill:formValues.country,statesBill:formValues.states,zipBill:formValues.zip})
      }
      else{
        setDropdowBill(countryDropBill[0])
        setDropdowstatebill(stateDropBill[0])
        setFormValues({...formValues,firstNameBill:"",lastNameBill:"",emailBill:"",phnumberBill:"",addressBill:"",countryBill:"",statesBill:"",zipBill:""})
      }
  },[sameBilling]);
  const handleCheck =() =>{
    setSameBilling(!sameBilling)
  }


  const validate = (values) => {
    const errors = {}
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phregex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
    const zipregex = /(^\d{5}$)|(^\d{5}-\d{4}$)/
    


    if (!values.firstName) {
      errors.firstName = "First Name is Required"
    }
    
    if (!values.lastName) {
      errors.lastName = "Last Name is Required"
    }
   
    if (!values.email) {
      errors.email = "E-mail is Required"
    }
    else if (!regex.test(values.email)) {
      errors.email = "Enter a Valid Mail ID"
    }
    
    if (!values.address) {
      errors.address = "address is Required"
    }
    if (!values.phnumber) {
      errors.phnumber = "Phone Number is Required"
    }
    else if (!phregex.test(values.phnumber)) {
      errors.phnumber = "Please Enter a valid Phone number"
    }
    if (!values.country) {
      errors.country = "Country is Required"
    }
    if (!values.states) {
      errors.states = "State is Required"
    }
    if (!values.zip) {
      errors.zip = "Zip is Required"
    }
    else if (!zipregex.test(values.zip)) {
      errors.zip = "Please Enter a valid zip code(12345 or 12345-9876)"
    }
    setFormErrors(errors);
   if(Object.keys(errors).length===0)
   {
      return true;
   }
   return false;
  }
  const validateBill = (values) => {
    const errors = {}
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phregex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
    const zipregex = /(^\d{5}$)|(^\d{5}-\d{4}$)/
    

    if(sameBilling===false){
    if (!values.firstNameBill) {
      errors.firstNameBill = "First Name is Required"
    } 
    if (!values.lastNameBill) {
      errors.lastNameBill = "Last Name is Required"
    }
    if (!values.emailBill) {
      errors.emailBill = "E-mail is Required"
    }
    else if (!regex.test(values.emailBill)) {
      errors.emailBill = "Enter a Valid Mail ID"
    }
  if (!values.addressBill) {
      errors.addressBill = "address is Required"
    }
    if (!values.phnumberBill) {
      errors.phnumberBill = "Phone Number is Required"
    }
    else if (!phregex.test(values.phnumberBill)) {
      errors.phnumberBill = "Please Enter a valid Phone number"
    }
    if (!values.countryBill) {
      errors.countryBill = "Country is Required"
    }
    if (!values.statesBill) {
      errors.statesBill = "State is Required"
    }
    if (!values.zipBill) {
      errors.zipBill = "Zip is Required"
    }
    else if (!zipregex.test(values.zipBill)) {
      errors.zipBill = "Please Enter a valid zip code(12345 or 12345-9876)"
    }
  }
  setFormErrors(errors);
  if(Object.keys(errors).length===0)
  {
     return true;
  }
  return false;
  }
  const validatePayment = (values) => {
    const errors = {}
    
    const ccnumberregex = /(^[0-9]{13}(?:[0-9]{3})?$)/
    const ccvregex = /(^\d{3}$)/
    const expregex = /^\d{1,2}\/\d{4}$/
    if (!values.ccname) {
      errors.ccname = "Card Holder Name is Required"
    }
    if (!values.ccnumber) {
      errors.ccnumber = "CC Number is Required"
    }
    else if (!ccnumberregex.test(values.ccnumber)) {
      errors.ccnumber = "CC Number must be 13 or 16 Digits"
    }
    if (!values.ccexpiration) {
      errors.ccexpiration = "CC Expirationis Required"
    }
    else if (!expregex.test(values.ccexpiration)) {
      errors.ccexpiration = "Expiration should be MM/YYYY format"
    }
    if (!values.cccvv) {
      errors.cccvv = "CCV is Required"
    }
    else if (!ccvregex.test(values.cccvv)) {
      errors.cccvv = "CCV Contains only 3 Digits"
    }
    setFormErrors(errors);
   if(Object.keys(errors).length===0)
   {
      return true;
   }
   return false;
  }
  let subtotal = 0;
  let shipping = 30.0;
  let totalItems = 0;
  state.map((item) => {
    return (subtotal += item.price * item.qty);
  });
  
  state.map((item) => {
    return (totalItems += item.qty);
  });
  
  
  
  
  return (
    <>
      {!prev && <><Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        <>
          <div className="container py-5">
            <div className="row my-4">
            <div className="row my-4">
              <div className="col-md-5 col-lg-4 order-last">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products ({totalItems})<span>${parseFloat(subtotal).toFixed(2)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>${shipping}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>${parseFloat(subtotal + shipping).toFixed(2)}</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h4 className="mb-0">Shipping address</h4>
                  </div>

                 <div className="card-body">

                    <form className="needs-validation" onSubmit={handleSubmit}>
                 
                      <div className="row g-3">
                        <div className="col-sm-6 my-1">
                          <label htmlFor="firstName" className="form-label">
                            First name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder=""
                            value={formValues.firstName}
                            onChange={handleChange}

                          />

                          <p><span style={{ color: 'red' }}>{formErrors.firstName}</span></p>

                        </div>

                        <div className="col-sm-6 my-1">
                          <label htmlFor="lastName" className="form-label">
                            Last name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder=""
                            value={formValues.lastName}
                            onChange={handleChange}

                          />
                          <p><span style={{ color: 'red' }}>{formErrors.lastName}</span></p>
                        </div>

                        <div className="col-12 my-1">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="you@example.com"
                            value={formValues.email}
                            onChange={handleChange}

                          />
                          <p><span style={{ color: 'red' }}>{formErrors.email}</span></p>
                        </div>
                        <div className="col-12 my-1">
                          <label htmlFor="phnumber" className="form-label">
                            Ph-Number

                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="phnumber"
                            placeholder="Phone Numer"
                            value={formValues.phnumber}
                            onChange={handleChange}
                          />
                          <p><span style={{ color: 'red' }}>{formErrors.phnumber}</span></p>
                        </div>

                        <div className="col-12 my-1">
                          <label htmlFor="address" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="1234 Main St"
                            value={formValues.address}
                            onChange={handleChange}

                          />
                          <p><span style={{ color: 'red' }}>{formErrors.address}</span></p>
                        </div>


                        <div className="col-md-5 my-1">
                          <label htmlFor="country" className="form-label">
                            Country
                          </label>
                          <br />

                          <select className="form-select"  id="country" value={dropdow} onChange={handleChange}>
                           
                            {countryDrop.map((value)=>(
                                <option value={value} key={value}>{value}</option>
                            ))
                            }
                          </select>
                          <p><span style={{ color: 'red' }}>{formErrors.country}</span></p>
                        </div>

                        <div className="col-md-4 my-1">
                          <label htmlFor="state" className="form-label">
                            State
                          </label>
                          <br />
                          <select className="form-select" id="states" value={dropdowstate} onChange={handleChange}>
                          {stateDrop.map((value)=>(
                                <option value={value} key={value}>{value}</option>
                            ))
                            }
                          </select>
                          <p><span style={{ color: 'red' }}>{formErrors.states}</span></p>
                        </div>

                        <div className="col-md-3 my-1">
                          <label htmlFor="zip" className="form-label">
                            Zip
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="zip"
                            placeholder=""
                            value={formValues.zip}
                            onChange={handleChange}

                          />
                          <p><span style={{ color: 'red' }}>{formErrors.zip}</span></p>
                        </div>
                      </div>
                      <button
                        className="w-100 btn btn-primary "
                        type="submit"
                        
                      >

                        Continue to Billing Address
                      </button>

                      </form>
                  </div>
                </div>
              </div></div>
   <div className="col-md-7 col-lg-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h4 className="mb-0">Billing Address</h4>
                  </div>

                  {billing &&  <div className="card-body">

                    <form className="needs-validation" onSubmit={handleBillingSubmit}>
                      <><div className="row g-3">
                         <div className="col-sm-12 my-1">
                        <div className="form-check">
                        <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value={sameBilling}
                        id="flexCheckDefault"
                        onChange={handleCheck}
                        />
                        
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            Same as Shipping Address
                          </label>
                          </div>
                      </div>
                        <div className="col-sm-6 my-1">
                          <label htmlFor="firstNameBill" className="form-label">
                            First name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstNameBill"
                            placeholder=""
                            value={formValues.firstNameBill}
                            onChange={handleChange}

                          />

                          <p><span style={{ color: 'red' }}>{formErrors.firstNameBill}</span></p>

                        </div>

                        <div className="col-sm-6 my-1">
                          <label htmlFor="lastNameBill" className="form-label">
                            Last name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastNameBill"
                            placeholder=""
                            value={formValues.lastNameBill}
                            onChange={handleChange}
                          />
                          <p><span style={{ color: 'red' }}>{formErrors.lastNameBill}</span></p>
                        </div>

                        <div className="col-12 my-1">
                          <label htmlFor="emailBill" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="emailBill"
                            placeholder="you@example.com"
                            value={formValues.emailBill}
                            onChange={handleChange}

                          />
                          <p><span style={{ color: 'red' }}>{formErrors.emailBill}</span></p>
                        </div>
                        <div className="col-12 my-1">
                          <label htmlFor="phnumberBill" className="form-label">
                            Ph-Number

                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="phnumberBill"
                            placeholder="Phone Numer"
                            value={formValues.phnumberBill}
                            onChange={handleChange}
                          />
                          <p><span style={{ color: 'red' }}>{formErrors.phnumberBill}</span></p>
                        </div>

                        <div className="col-12 my-1">
                          <label htmlFor="addressBill" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="addressBill"
                            placeholder="1234 Main St"
                            value={formValues.addressBill}
                            onChange={handleChange}

                          />
                          <p><span style={{ color: 'red' }}>{formErrors.addressBill}</span></p>
                        </div>


                        <div className="col-md-5 my-1">
                          <label htmlFor="countryBill" className="form-label">
                            Country
                          </label>
                          <br />

                          <select className="form-select"  id="countryBill" value={dropdowbill} onChange={handleChange}>
                            
                            {countryDropBill.map((value)=>( 
                                <option value={value} key={value}>{value}</option>
                            ))
                            }
                          </select>
                          <p><span style={{ color: 'red' }}>{formErrors.countryBill}</span></p>
                        </div>

                        <div className="col-md-4 my-1">
                          <label htmlFor="statesBill" className="form-label">
                            State
                          </label>
                          <br />
                          <select className="form-select" id="statesBill" value={dropdowstatebill} onChange={handleChange}>
                          {stateDropBill.map((value)=>(
                                <option value={value} key={value}>{value}</option>
                            ))
                            }
                          </select>
                          <p><span style={{ color: 'red' }}>{formErrors.statesBill}</span></p>
                        </div>

                        <div className="col-md-3 my-1">
                          <label htmlFor="zipBill" className="form-label">
                            Zip
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="zipBill"
                            placeholder=""
                            value={formValues.zipBill}
                            onChange={handleChange}
                          />
                          <p><span style={{ color: 'red' }}>{formErrors.zipBill}</span></p>
                        </div>
                      </div>
                    </>
                      
                      <hr className="my-4" />

                      <button
                        className="w-100 btn btn-primary "
                        type="submit"
                       
                      >

                        Continue to Payment
                      </button>
                    </form>
                  </div>}
                </div>
              </div>                 
<div className="col-md-7 col-lg-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h4 className="mb-0">Payment</h4>
                  </div>

                  {payment &&<div className="card-body">

                    <form className="needs-validation" onSubmit={handlePaymentSubmit}>
                      <div className="row gy-3">
                        <div className="col-md-6">
                          <label htmlFor="ccname" className="form-label">
                            Name on card
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="ccname"
                            placeholder=""
                            value={formValues.ccname}
                            onChange={handleChange}

                          />

                          <p><span style={{ color: 'red' }}>{formErrors.ccname}</span></p>
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="ccnumber" className="form-label">
                            Credit card number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="ccnumber"
                            placeholder=""
                            value={formValues.ccnumber}
                            onChange={handleChange}

                          />
                          <p><span style={{ color: 'red' }}>{formErrors.ccnumber}</span></p>
                        </div>

                        <div className="col-md-3">
                          <label htmlFor="ccexpiration" className="form-label">
                            Expiration
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="ccexpiration"
                            placeholder="MM/YYYY"
                            value={formValues.ccexpiration}
                            onChange={handleChange}

                          />
                          <p><span style={{ color: 'red' }}>{formErrors.ccexpiration}</span></p>
                        </div>

                        <div className="col-md-3">
                          <label htmlFor="cccvv" className="form-label">
                            CVV
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cccvv"
                            placeholder="XXX"
                            value={formValues.cccvv}
                            onChange={handleChange}

                          />
                          <p><span style={{ color: 'red' }}>{formErrors.cccvv}</span></p>
                        </div>
                      </div>
                      <button
                        className="w-100 btn btn-primary "
                        type="submit"
                        // onClick={navigatePreview}
                      >
                        Continue to checkout
                      </button>
                      </form>
                  </div>}
                </div>
              </div>
                                        

            </div>
          </div>
        </>
      </div>
</>}{prev && <Preview value={formValues} ship={sameBilling}/>
}

    </>
  
  );
};

export default Checkout;



