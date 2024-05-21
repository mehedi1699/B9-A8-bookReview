import { getStoredWishListedBook } from "../Utility/localStorage";
import WishCard from "./WishCard";



const WishList = () => {
    const wishList = getStoredWishListedBook()
    // console.log(wishList)
    

    return (
       <div>
        {
            wishList.map((wishbook,idx)=><WishCard key={idx} wishbook={wishbook}></WishCard>)
        }
       </div>
    );
};

export default WishList;