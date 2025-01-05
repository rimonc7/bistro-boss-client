import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import image from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hook/useMenu";
import { useState } from "react";
import OrderTab from "./orderTab";
import { useParams } from "react-router-dom";

const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop</title>
            </Helmet>
            <Cover
                image={image}
                title={"OUR SHOP"}
                text={"Would you like to try a dish?"}
            />
            <div className="my-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad} ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza} ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup} ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts} ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks} ></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;
