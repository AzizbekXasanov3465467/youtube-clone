import React from "react";

import About from '../about/about'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
 
const Home = () => {
    const img = 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png'
    const img_2 = 'https://static-00.iconduck.com/assets.00/profile-icon-512x512-w0uaq4yr.png'

    return(
        <div>
<div className="menu">
    <div className="menu-2">
        <div className="menu-3">
  <div className="one_1">
  <span><i class="fa-solid fa-bars"></i></span>
<Nav to=''></Nav>
  </div>

  <div className="inpit">
  <form class="form">
    <label for="search">
        <input class="input" type="text" required="" placeholder="Search twitter" id="search"/>
        <div class="fancy-bg"></div>
        <div class="search">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
            </svg>
        </div>
        <button class="close-btn" type="reset">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </button>
    </label>
</form>
  </div>
<div className="left">
<span className="yuklashvideo"><i class="fa-solid fa-video"></i></span>
    <span className="qongiroq"><i class="fa-solid fa-bell"></i></span>
    <div className="img_2">
    <img src={img_2} alt="" width={30} />
    </div>
</div>
        </div>
        <div className="gird">
    <img src="https://icon-library.com/images/home-icon-white/home-icon-white-11.jpg" alt="" width={25} />
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-shorts-white-icon.png" alt="" width={25} />
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png" alt="" width={25} />
       <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/m_collection_png/512x512/plain/clock_history.png" alt="" width={25} />
        </div>
<div className="btn-l">

<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Button</span>
</button>
<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Button</span>
</button>
<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Button</span>
</button>
<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Button</span>
</button>
<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Button</span>
</button>
<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Button</span>
</button>
<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Button</span>
</button>
<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Button</span>
</button>
<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Button</span>
</button>
<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Button</span>
</button>
<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Button</span>
</button>
<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Button</span>
</button>
<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Button</span>
</button>

</div>

    </div>
    <About />
    <About />
    <About />
</div>

       </div>
        
    )
}
export default Home