import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItemCard from "../../Shared/MenuItemCard/MenuItemCard";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])

    return (
        <section>
            <SectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'Check it out'}
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
                <button className="btn btn-outline uppercase border-0 border-b-4">View Full  Menu</button>
            </div>
            <div className="bg-black mb-12">
                <p className="text-white text-5xl font-semibold py-24 text-center">Call Us: +88 0192345678910</p>
            </div>
        </section>
    );
};

export default PopularMenu;