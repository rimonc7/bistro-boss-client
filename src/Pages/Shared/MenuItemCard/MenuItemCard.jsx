const MenuItemCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex p-4 space-x-4 hover:shadow-xl transition-shadow duration-300">
            <img 
                className="w-28 h-28 object-cover rounded-r-[200px] rounded-bl-[200px] " 
                src={image} 
                alt={name} 
            />

            <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{name}------</h3>
                <p className="text-gray-600 text-sm mt-2">{recipe}</p>
            </div>
            <div className="flex items-center justify-end text-lg font-semibold text-gray-900">
                <span className="text-green-600">${price}</span>
            </div>
        </div>
    );
};

export default MenuItemCard;
