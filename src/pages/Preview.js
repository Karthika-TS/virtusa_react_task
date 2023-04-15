import React, { useState } from "react";
import { Navbar } from "../components";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { empCart } from "../redux/action";

 const Preview = (props) => {
    const state = useSelector((state) => state.handleCart);
   
  const dispatch = useDispatch();
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    const empcar=()=>{
        dispatch(empCart())
    }
    state.map((item) => {
        return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
        return (totalItems += item.qty);
    });
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">PREVIEW & PROCEED ORDER</h1>
                <hr />
                <>
                    <div className="container py-5">
                        <div className="row my-4">
                            <div className="col-md-5 col-lg-4 order-md-last">
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
                                <div className="card mb-4">
                                    <div className="card-header py-3">
                                        <h4 className="mb-0">Payment Information</h4>
                                    </div>

                                    <div className="card-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Name <span>{props.value.ccname}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Credit-Card Number
                                                <span>{props.value.ccnumber}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Expiry-Date <span>{props.value.ccexpiration}</span>
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
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Name <span>{props.value.firstName} {props.value.lastName}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Mobile-Number
                                                <span>{props.value.phnumber}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                E-mail <span>{props.value.email}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Address <span>{props.value.address}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Country <span>{props.value.country}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                State <span>{props.value.states}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Zip <span>{props.value.zip}</span>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                               <div className="card mb-4">
                                    <div className="card-header py-3">
                                        <h4 className="mb-0">Billing address</h4>
                                    </div>

                                    <div className="card-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Name <span>{props.value.firstNameBill} {props.value.lastNameBill}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Mobile-Number
                                                <span>{props.value.phnumberBill}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                E-mail <span>{props.value.emailBill}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Address <span>{props.value.addressBill}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Country <span>{props.value.countryBill}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                State <span>{props.value.statesBill}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Zip <span>{props.value.zipBill}</span>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
 
                            </div>

                        

                        </div>
                    </div>
        
                </>    
                <div className="text-center">
                    <Link to="/emptycart" className="btn  btn-outline-dark col-md-5 col-lg-4" onClick={empcar}>
              Confirm Order<i className="fa fa-arrow-up" ></i>
            </Link>
                </div>
                
            </div>

        </>

    );

};

export default Preview;