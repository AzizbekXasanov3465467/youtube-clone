import React from "react";
import './about.css'



const About = () => {
    const img = 'https://i.ytimg.com/vi/rYQgy8QDEBI/maxresdefault.jpg'
    const img_2 = 'https://i.ytimg.com/vi/aEY6CIM7YUI/maxresdefault.jpg'
    const img_3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHoUYgexG49i1JttrADrN-5zFEX4NyzQegQ&usqp=CAU'
    return(
        <div>
  <div className="videoE">
    <div className="videoB">
    <img src={img} alt="" width={400} />
    <img src={img_2} alt="" width={400} />
    <img src={img_3} alt="" width={400} />
    </div>
  </div>
        </div>
    )
}
export default About