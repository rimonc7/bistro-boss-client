
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center m-6 mx-auto md:w-4/12">
            <p className=" italic text-yellow-600 text-xl ">---{subHeading}---</p>
            <h3 className="text-4xl border-y-4 py-3 mt-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;