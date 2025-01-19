import { useEffect, useState } from "react";
import MenuItemCard from "../../Shared/MenuItemCard/MenuItemCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const MenuCategory = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-woad-two.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])

    return (
        <section>
            <SectionTitle
                heading={"TODAY'S OFFER"}
                subHeading={"Don't miss"}
            >
            </SectionTitle>
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
                <button className="btn btn-outline uppercase border-0 border-b-4">ORDER YOUR FAVORITE FOOD</button>
            </div>
        </section>
    );
};

export default MenuCategory;