import React, { useState } from "react";
import { CCarousel, CCarouselItem, CCarouselCaption, CCardTitle } from "@coreui/react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";
import '@coreui/coreui/dist/css/coreui.min.css';

function Reviews() {
  const [index, setIndex] = useState(0);
  const reviewsLength = customerReviews.length - 1;
  const review = customerReviews[index];

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="review-section" id="reviews">
      <div className="rw-text-content">
        <p className="rw-text-title">
          More than <span className="rw-text-num">20+ Customers</span>
        </p>

        <p className="rw-text-desc">Don't believe us, Check clients word</p>

        <CCarousel controls indicators>
          {customerReviews.map((review, idx) => (
            <CCarouselItem key={idx}>
              <div className="rw-carousel-item">
                <p className="rw-text-format">
                  <div style={{margin : 'auto', width : '60%'}}><CCardTitle>{review.message}</CCardTitle></div>
                </p>
              </div>
              <div className="rw-authors">
                <CCarouselCaption className="d-none d-md-block">
                  <div className="rw-names">
                    <h5 className="rw-reviewer-name">{review.name}</h5>
                    <p className="rw-reviewer-place">{review.location}</p>
                  </div>
                </CCarouselCaption>
              </div>
            </CCarouselItem>
          ))}
        </CCarousel>
      </div>
    </div>
  );
}

export default Reviews;
