import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  return (
    <div className="flex justify-center items-center">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              className="hidden"
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <AiFillStar
              size={50}
              className="cursor-pointer"
              color={currentRating <= (hover || rating) ? "#FAD539" : "gray"}
              onMouseEnter={()=>setHover(currentRating)}
              onMouseLeave={()=>setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
