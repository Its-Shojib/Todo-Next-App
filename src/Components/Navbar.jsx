

const Navbar = () => {
    return (
        <div className="flex flex-wrap py-3 justify-around">
            <h1 className="text-lg font-semibold">Todo App</h1>
            <ul className="flex gap-10 ">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Products</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contacts</li>
            </ul>
        </div>
    );
};

export default Navbar;