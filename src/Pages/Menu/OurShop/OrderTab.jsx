import OurShopCart from "./OurShopCart";

const OrderTab = ({ items }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {items.map(item => (
                <OurShopCart key={item._id} item={item} />
            ))}
        </div>
    );
};

export default OrderTab;