import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";

const ListingItem = ({ listing, id, onDelete }) => {
  return (
    <div className="categoryListing">
      <Link
        to={`/category/${listing.type}/${id}`}
        className="categoryListingLink"
      >
        <img
          src={listing.imgUrls[0]}
          alt={listing.name}
          className="categoryListingImg"
        />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{listing.location}</p>
          <p className="categoryListingName">{listing.name}</p>

          <p className="categoryListingPrice">
            ${listing.offer ? listing.discountedPrice : listing.regularPrice}
            {listing.type === "rent " && " / Month"}
          </p>

          <div className="categoryListingInfoDiv">
            <img src={bedIcon} alt="bed" />
            <p className="categoryListingInforText">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : "1 Bedroom"}
            </p>
            <img src={bathtubIcon} alt="bath" />
            <p className="categoryListingInfoTex">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Bedrooms`
                : "1 Bedroom"}
            </p>
          </div>
        </div>
      </Link>

      {onDelete && (
        <DeleteIcon
          onClick={() => onDelete(listing.id, listing.name)}
          classNameremoveIcon
          fill="rgb(231, 76, 60) "
        />
      )}
    </div>
  );
};

export default ListingItem;
