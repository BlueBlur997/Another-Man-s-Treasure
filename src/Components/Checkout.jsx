import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Checkout() {
  const location = useLocation();
  const cart = location.state.cart; // Get the cart data from the location state

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    cardName: "",
    expiration: "",
    cvv: "",
  });

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleProcessPayment = () => {
    // Process payment logic
    alert("Payment processed successfully!");
    window.location.href = "/";
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBRow>
                  <MDBCol lg="7" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Your products
                    </MDBTypography>

                    {/* Display cart products */}
                    {cart.map((product) => (
                      <div key={product.id} className="d-flex align-items-center mb-5">
                        {/* Product image */}
                        <div className="flex-shrink-0">
                          <img
                            src={product.image}
                            alt={`Product ${product.id}`}
                            style={{ width: "150px" }}
                          />
                        </div>

                        {/* Product details */}
                        <div className="flex-grow-1 ms-3">
                          <MDBTypography tag="h5" className="text-primary">
                            {product.name}
                          </MDBTypography>


                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">${product.price}</p>


                            {/* <div className="def-number-input number-input safari_only">
                              <button className="minus"></button>
                              <input
                                className="quantity fw-bold text-black"
                                name={`quantity_${product.id}`}
                                min={0}
                                defaultValue={product.quantity}
                                type="number"
                                disabled
                              />
                              <button className="plus"></button>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Total */}
                    <div
                      className="d-flex justify-content-between px-x"
                      style={{ marginBottom: "20px" }}
                    >
                      <p className="fw-bold">Discount:</p>
                      <p className="fw-bold">NONE LMAO</p>
                    </div>
                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#e1f5fe" }}
                    >
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Total:
                      </MDBTypography>
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        ${cart.reduce((total, product) => total + product.price * product.quantity, 0)}
                      </MDBTypography>
                    </div>
                  </MDBCol>
                  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Payment
                    </MDBTypography>

                    {/* Payment */}
                    <form className="mb-5">
                      <MDBInput
                        className="mb-5"
                        label="Card number"
                        type="text"
                        size="lg"
                        name="cardNumber"
                        value={paymentData.cardNumber}
                        onChange={handlePaymentChange}
                      />

                      <MDBInput
                        className="mb-5"
                        label="Name on card"
                        type="text"
                        size="lg"
                        name="cardName"
                        value={paymentData.cardName}
                        onChange={handlePaymentChange}
                      />

                      <MDBRow>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Expiration"
                            type="text"
                            size="lg"
                            name="expiration"
                            value={paymentData.expiration}
                            onChange={handlePaymentChange}
                            minLength="7"
                            maxLength="7"
                            placeholder="MM/YYYY"
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="CVV"
                            type="text"
                            size="lg"
                            name="cvv"
                            value={paymentData.cvv}
                            onChange={handlePaymentChange}
                            minLength="3"
                            maxLength="3"
                            placeholder="CVV"
                          />
                        </MDBCol>
                      </MDBRow>

                      <p className="mb-5">
                      Please note that this is a demo payment page, and no actual transactions will occur.
                        <a href="https://cash.app/$IzzyFuji"> Wanna pay anyway? </a>.
                      </p>

                      <MDBBtn block size="lg" onClick={handleProcessPayment}>
                        Process Payment
                      </MDBBtn>

                      <MDBTypography
                        tag="h5"
                        className="fw-bold mb-5"
                        style={{ position: "absolute", bottom: "0" }}
                      >
                        <a href="/Cart">
                          <MDBIcon fas icon="angle-left me-2" />
                          Back to Cart
                        </a>
                      </MDBTypography>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
