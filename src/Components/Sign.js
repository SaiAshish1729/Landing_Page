import React from 'react'
import './Sign.css'


function Sign() {
  return (
    <>
         {/* <!-- Start SignUp area --> */}
  <section class="pt-120 pb-90">
    <div class="container">
      <div class="mb-6 sign-wrapeer">
        <h2 class="mb-2">Sigup To NFTs</h2>
        <p class="medium">Adipisicing elit. Nam est laudantium libero
          suscipit sapiente.</p>
      </div>
      <div class="row ali">
        <div class="col-lg-6 mb-6">
          {/* <img class="w-100 h-100 rounded" src="images/signup/1.jpg" alt="nft image"/> */}
        </div>
        <div class="col-xl-6 mb-6 border">
          <div class="signup-wrapper signup d-flex justify-content-center flex-column">
            <form action="#">
              <div class="row m-3">
                <div class="col-md-6 mb-4">
                  <div class="field-box">
                    <label for="name" class="form-label">Name</label> <br />
                    <input id="name" type="text" placeholder="Name" required/>
                  </div>
                </div>
                {/* <!-- End .col --> */}

                <div class="col-md-6 mb-4">
                  <div class="field-box">
                    <label for="mail" class="form-label">Email</label>
                    <input id="mail" type="text" placeholder="Enter your email" required/>
                  </div>
                </div>
                {/* <!-- End .col --> */}

                <div class="col-md-6 mb-4">
                  <div class="field-box">
                    <label for="password" class="form-label">Password</label>
                    <input id="password" type="password" placeholder="Password" required/>
                  </div>
                </div>
                {/* <!-- End .col --> */}

                <div class="col-md-6 mb-4">
                  <div class="field-box">
                    <label for="re-password" class="form-label">Re Password</label>
                    <input id="re-password" type="password" placeholder="Password" required/>
                  </div>
                </div>
                {/* <!-- End .col --> */}

                <div class="col-md-12 mb-5">
                  <div class="field-box">
                    <label class="checkbox">
                      <input class="form-check-input me-1" type="checkbox" value="" required/>
                      I have read terms and conditions and all others policy.
                    </label>
                  </div>
                </div>
                {/* <!-- End .col --> */}

                <div class="col-md-12 mb-4">
                  <div class="field-box">
                    <button class="btn btn-gradient w-100 justify-content-center btn-medium {
                        " type="submit" id='SIGN_FORM_Btn'><span>Sign
                        Up</span></button>
                  </div>
                </div>
                {/* <!-- End .col --> */}
              </div>
            </form>

            <div class="row justify-content-center text-center">
              <div class="col-lg-12 mb-3">
                <span>OR</span>
              </div>
              {/* <!-- End .col --> */}

              <div class="col-lg-6 mb-4">
                <a href="#" class="d-flex-center register-with metamask-btn SIGN_UP_META">
                {/* <i class="bi bi-currency-bitcoin"></i> */}
                <i className='bi'><img src="https://lh3.googleusercontent.com/QW0gZ3yugzXDvTANa5-cc1EpabQ2MGnl6enW11O6kIerEaBQGOhgyUOvhRedndD9io8RJMmJZfIXq1rMxUsFHS2Ttw=w128-h128-e365-rj-sc0x00ffffff" alt="" id='DOG_' /></i>
                  <span className='DOG_GOOGLE_SPAN'>Sign in with Metamask</span>
                </a>
              </div>
              {/* <!-- End .col --> */}

              <div class="col-lg-6 mb-4">
                <a href="#" class="d-flex-center register-with google-btn SIGN_UP_META">
                <i class="bi bi-google text-danger"></i>
                  <span className='DOG_GOOGLE_SPAN'>SignUp with Google</span>
                </a>
              </div>
              {/* <!-- End .col --> */}

              <div class="col-lg-12 mb-5 mt-5">
                Already have an account? <a href="signin.html" class="color-primary">Sign in</a>
              </div>
              {/* <!-- End .col --> */}
            </div>
          </div>

        </div>
        {/* <!-- End .col --> */}
      </div>
      {/* <!-- End .row --> */}
    </div>
    {/* <!-- End .container --> */}
  </section>
  {/* <!-- End SignUp area --> */}
    </>
  )
}

export default Sign