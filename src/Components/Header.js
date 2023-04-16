import React from 'react'
import './Header.css'
import Logo from './Images/Logo.png';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light" id='my-nav'>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://assets.themuse.com/uploaded/companies/11650/small_logo.png" id='nav-img' alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" id='home-color' href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>

            </ul>
            <form className="d-flex" role="search" id='search-form'>
              <input
                className="form-control me-2 text-white"
                type="search"
                placeholder="Search..."
                aria-label="Search" id='search-box'
              />
              <button className="btn btn-outline-success" id='search-btn' type="submit">
                <i class="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* banner */}
      <div className="container-fluid">
        <div className="row justify-content-center" id='banner'>
          <div className="col-md-6 mt-5" id='bannertext'>
            <h1 id='banner_h1'>First I wanted to be <br />
              a vegeterian</h1>
            <p id='banner_para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Officia facilis illum, obcaecati ipsa veritatis est, aut <br /> consequuntur autem, ipsum similique ea rerum?</p>
            <button id='banner_btn_1' type='button' className='btn mb-5 mt-4'>Contact us</button>
            <button id='banner_btn_2' type='button' className='btn mb-5 mt-4'>Our Services</button>
          </div>
          <div className="col-md-4" id='bannerimg'>
            <img src="https://media.istockphoto.com/photos/happy-black-girl-sitting-together-with-her-french-bulldog-dog-puppy-picture-id1209016414?k=20&m=1209016414&s=612x612&w=0&h=AaBLDsVdYI0FwR6JeIRkYrOUoZMInJ3MjFYUIjgdJnw=" className='img-fluid d-none d-lg-block' alt="" />
          </div>
        </div>

        {/* service section  */}

        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-11 col-11" id='service-text'>
            <h1 className='fw-bolder'>As a vegeterian and <br /> lover of animals</h1>
            <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit totam cumque minus a nam ipsum harum sint suscipit illum tenetur. Fugiat, amet molestiae.</p>
            <button type='button' className='btn' id='service-btn'>Our Services </button>
          </div>
          <div className="col-lg-5" id='service-img'>
            <img src="https://media.istockphoto.com/photos/happiness-peaceful-asian-female-woman-stay-home-lifestylw-with-little-picture-id1335561453?b=1&k=20&m=1335561453&s=170667a&w=0&h=5tiaCcsjEDnfytkx20OeaR4N3wAXx9jcdG05bstc09g=" alt="" className='img-fluid' />
          </div>
        </div>

        {/* counter  */}

        <div className="row justify-content-center"  id='counter-section'>
          <div className="col-md-3 text-center pt-5">
            <h1> <i class="bi bi-balloon-heart-fill"></i></h1>
            <h3>+3434 <br />
              Happy Clients
            </h3>
          </div>
          <div className="col-md-3 text-center pt-5">
            <h1><i class="bi bi-building"></i></h1>
            <h3>+3434 <br />
              Our Branches
            </h3>
          </div>
          <div className="col-md-3 text-center pt-5">
            <h1><i class="bi bi-eyedropper"></i></h1>
            <h3>+3434 <br />
              Vaccines
            </h3>
          </div>
        </div>

        {/* Blog  */}

        <div className="row justify-content-evenly pb-5">
          <div className="col-12 text-center pb-5 pt-5">
            <h1 id='recent-posts' className='fw-bolder'>Recent Posts</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Impedit delectus deleniti voluptate suscipit!</p>
          </div>

          <div className="col-md-3 col-9 shadow p-3 mb-5 bg-white rounded mt-5 mb-5 animation">
            <img src="https://w0.peakpx.com/wallpaper/363/945/HD-wallpaper-little-girl-pretty-little-nexus-beautiful-adorable-dainty-sightly-sweet-kid-graphy-fair-nice-people-beauty-face-child-pink-dog-belle-bonny-lovely-comely-pure-blonde-smile-baby-thumbnail.jpg" className='img-fluid' alt="" />
            <div className='artical-div'>
              <h4>As a vegeterian and lover of animals</h4>
              <p className='clr'>FEBRUARY 09,2022</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa possimus explicabo? Dolorem?</p>
              <p><a href="/" className='clr'>Read More+</a></p>
            </div>
          </div>

          <div className="col-md-3 col-9 shadow p-3 pb-5 mb-5 bg-white rounded mt-5 mb-5 animation">
            <img src="https://w0.peakpx.com/wallpaper/363/945/HD-wallpaper-little-girl-pretty-little-nexus-beautiful-adorable-dainty-sightly-sweet-kid-graphy-fair-nice-people-beauty-face-child-pink-dog-belle-bonny-lovely-comely-pure-blonde-smile-baby-thumbnail.jpg" className='img-fluid' alt="" />
            <div className='artical-div'>
              <h4>As a vegeterian and lover of animals</h4>
              <p className='clr'>FEBRUARY 09,2022</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa possimus explicabo? Dolorem?</p>
              <p><a href="/" className='clr'>Read More+</a></p>
            </div>
          </div>

          <div className="col-md-3 col-9 shadow p-3 mb-5 bg-white rounded mt-5 mb-5 animation" >
            <img src="https://w0.peakpx.com/wallpaper/363/945/HD-wallpaper-little-girl-pretty-little-nexus-beautiful-adorable-dainty-sightly-sweet-kid-graphy-fair-nice-people-beauty-face-child-pink-dog-belle-bonny-lovely-comely-pure-blonde-smile-baby-thumbnail.jpg" className='img-fluid' alt="" />
            <div className='artical-div'>
              <h4>As a vegeterian and lover of animals</h4>
              <p className='clr'>FEBRUARY 09,2022</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa possimus explicabo? Dolorem?</p>
              <p><a href="/" className='clr'>Read More+</a></p>
            </div>
          </div>
        </div>

        {/* Footer  */}
          <div className="row justify-content-center" id='Footer'>
            <div className="col-md-3 pt-5 pb-5">
              <h4 className='pb-2'>About</h4>
              <a href="/">History</a> <br />
              <a href="/">Our Team</a><br />
              <a href="/">Brand guidlines</a><br />
              <a href="/">Terms&condition</a><br />
              <a href="/">Privacy & policy</a>
            </div>
            <div className="col-md-3 pt-5 pb-5">
              <h4 className='pb-2'>Services</h4>
              <a href="/">How to order</a> <br />
              <a href="/">Our Products</a><br />
              <a href="/">Our Statuss</a><br />
              <a href="/">Promo </a><br />
              <a href="/">Payments Methods</a>
            </div>
            <div className="col-md-4 pt-5 pb-5 text-end">
              <h4>Title Here</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <form action="/" id='Footer-form'>
                <input type="text" id='Footer-search'/>
                {/* <button type='submit'><i class="bi bi-send" id='send-icon'></i></button> */}
                <i class="bi bi-send" id='send-icon'></i>
              </form>
              <a href="/"><i class="bi bi-facebook social-icon"></i></a>
              <a href="/"><i class="bi bi-whatsapp social-icon"></i></a>
              <a href="/"><i class="bi bi-instagram social-icon"></i></a>
             <a href="/"><i class="bi bi-twitter social-icon"></i></a>
            </div>
          </div>

        {/* container fluid end  */}
      </div>

    </>
  )
}

export default Header
