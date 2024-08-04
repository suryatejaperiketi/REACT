import React from 'react'
import banner1 from "./assets/img1.jpg"
import banner2 from "./assets/img2.webp"
import banner3 from "./assets/img3.webp"

function Slider() {
  return (
    <div>
        <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <li
                    data-bs-target="#carouselId"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="First slide"
                ></li>
                <li
                    data-bs-target="#carouselId"
                    data-bs-slide-to="1"
                    aria-label="Second slide"
                ></li>
                <li
                    data-bs-target="#carouselId"
                    data-bs-slide-to="2"
                    aria-label="Third slide"
                ></li>
            </div>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img
                        src={banner2}
                        className="w-100 d-block"
                        alt="First slide"
                    />
                </div>
                <div className="carousel-item">s
                    <img
                        src={banner1}
                        className="w-100 d-block"
                        alt="Second slide"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={banner3}
                        className="w-100 d-block"
                        alt="Third slide"
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
    </div>
  )
}

export default Slider