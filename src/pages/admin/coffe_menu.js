import React, { useState, useEffect } from "react";
import axios from 'axios';

// Dummy data
const dummyData = [
    {
        id: 1,
        name: "Ice Shaken Espresso",
        size: "M",
        price: 10000,
        image: "1714728227187-IcedShakenEspresso.png",
        createdAt: "2024-05-03T09:23:47.258Z",
        updatedAt: "2024-05-03T09:23:47.258Z"
    },
    {
        id: 2,
        name: "Iced Cappuccino",
        size: "L",
        price: 15000,
        image: "1714728227187-IcedCappuccino.png",
        createdAt: "2024-05-03T09:23:47.258Z",
        updatedAt: "2024-05-03T09:23:47.258Z"
    },
    {
        id: 3,
        name: "Iced Caramel Macchiato",
        size: "M",
        price: 12000,
        image: "1714728227187-IcedCaramelMacchiato.png",
        createdAt: "2024-05-03T09:23:47.258Z",
        updatedAt: "2024-05-03T09:23:47.258Z"
    }
];

function CoffeMenu(){
    const [menuData, setMenuData] = useState(dummyData); // local
    // const [menuData, setMenuData] = useState([]); // with api
    
    const [searchTerm, setSearchTerm] = useState('');

    // with API
    // useEffect(() => {
    //     const fetchMenuData = async () => {
    //         try {
    //             const response = await axios.get(`http://172.16.100.39:8000/coffee?search=${searchTerm}`);
    //             if (response.data.status) {
    //                 setMenuData(response.data.data);
    //             } else {
    //                 console.error("Error fetching menu data:", response.data.message);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching menu data:", error);
    //         }
    //     };

    //     fetchMenuData();
    // }, [searchTerm]);

    // without API - local data dummy
    useEffect(() => {
        const filteredMenuData = dummyData.filter(menuItem => {
            return menuItem.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        setMenuData(filteredMenuData);
    }, [searchTerm]);

    return(
        <>
            <div className='flex w-full justify-center my-10 sm:p-3'>
                <div className='sm:mx-auto sm:w-1/2'>
                    <h2 className='text-center text-5xl font-semibold'>Coffe Menu</h2>
                    <input className='block w-full h-10 mt-10 rounded-full border-2 border-gray-600 px-3'
                        id='search'
                        name='search'
                        type='text'
                        placeholder="Search menu"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        />
                </div>
            </div>
            <div className="flex w-full my-10 sm:p-3">
                <div className="sm:mx-auto sm:w-[80%]">
                    <button type='button'
                        className='mt-5 rounded-md font-semibold border-2 border-gray-600 px-3 py-1.5'>
                        Add new menu
                    </button>
                    <div className="mt-10">
                        <table className="table-auto w-full border border-black">
                            <thead>
                                <tr className="bg-[#222E3A]/[6%] border border-black">
                                    <th className="border-2 border-black">Menu</th>
                                    <th className="border-2 border-black">Image</th>
                                    <th className="border-2 border-black">Size</th>
                                    <th className="border-2 border-black">Price</th>
                                    <th className="border-2 border-black">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {menuData.map(menuItem => (
                                    <tr key={menuItem.id} className="border border-black text-center">
                                        <td className="border-2 border-black py-3">{menuItem.name}</td>
                                        <td className="border-2 border-black py-3">
                                            <img src={`https://via.placeholder.com/150`} alt={menuItem.name} className="mx-auto" />
                                        </td>
                                        <td className="border-2 border-black py-3">{menuItem.size}</td>
                                        <td className="border-2 border-black py-3">Rp. {menuItem.price}</td>
                                        <td className="border-2 border-black py-3">
                                            <button type='button' className='rounded-md font-semibold px-3 py-1.5'>
                                                Edit
                                            </button>
                                            <span>|</span>
                                            <button type='button' className='rounded-md font-semibold px-3 py-1.5'>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoffeMenu;