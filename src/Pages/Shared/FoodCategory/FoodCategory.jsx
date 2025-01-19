import { useEffect, useState } from "react";
import MenuItemCard from "../../Shared/MenuItemCard/MenuItemCard";
import { Link } from "react-router-dom";

const FoodCategory = ({ category }) => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-woad-two.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === category)
                setMenu(popularItems)
            })
    }, [category])

    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                {
                    menu.map(item => <MenuItemCard
                        key={item._id}
                        item={item}
                    >
                    </MenuItemCard>)
                }
            </div>
            <div className="text-center mt-6 mb-16">
                <Link to={`/shop/${category}`} className="btn btn-outline uppercase border-0 border-b-4">ORDER YOUR FAVORITE FOOD</Link>
            </div>
        </section>
    );
};

export default FoodCategory;