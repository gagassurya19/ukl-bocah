import React from 'react';

function Etalase() {
    return (
        <>
            <div className='flex w-full justify-center my-10 sm:p-3'>
                <div className='sm:mx-auto sm:w-1/2'>
                    <h2 className='text-center text-5xl font-semibold'>Coffe Ordering System</h2>
                    <input className='block w-full h-10 mt-10 rounded-full border-2 border-gray-600 px-3'
                        id='search'
                        name='search'
                        type='text'
                        placeholder="Search menu">
                    </input>
                </div>
            </div>
            <div className="flex w-full my-10 sm:p-3">
                <div className="sm:mx-auto sm:w-[80%]">
                    <div className='grid grid-cols-1 md:grid-cols2 lg:grid-cols-4 gap-8 py-10 text-left mx-5 xl:mx-10'>
                        {/* start here */}
                        <div className='border-2 border-gray-600 rounded-lg hover:drop-shadow-md overflow-hidden relative bg-white'>
                            {/* image and avatar block */}
                            <div className="cursor-pointer h-48 overflow-hidden border-b-2 border-black">
                                <img
                                    src='https://via.placeholder.com/300'
                                    alt="Profile image for perticular category"
                                    sizes="300px"
                                    className="w-full h-full hover:scale-125 delay-200 duration-300 ease-in-out"
                                />
                            </div>
                            {/* card fields section  */}
                            <div className="p-4 space-y-2 relative h-60 text-gray-600">
                                <div>
                                    <span className="text-2xl font-bold text-gray-600 overflow-hidden h-12">
                                        Coffe Tea Size S
                                    </span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="text-sm font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </span>
                                </div>
                                <div>
                                    <span className="text-2xl font-bold text-gray-600 overflow-hidden h-12">
                                        Rp10.000,-
                                    </span>
                                </div>
                                {/* fix bottom section */}
                                <div className="bottom-7 absolute inset-x-0 text-right">
                                    <span className="text-xl text-gray-600 pr-7">
                                        <button class="px-4 py-2 rounded">-</button>
                                        <span class="m-5" x-text="count">0</span>
                                        <button class="px-4 py-2 rounded ">+</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* start here */}
                        <div className='border-2 border-gray-600 rounded-lg hover:drop-shadow-md overflow-hidden relative bg-white'>
                            {/* image and avatar block */}
                            <div className="cursor-pointer h-48 overflow-hidden border-b-2 border-black">
                                <img
                                    src='https://via.placeholder.com/300'
                                    alt="Profile image for perticular category"
                                    sizes="300px"
                                    className="w-full h-full hover:scale-125 delay-200 duration-300 ease-in-out"
                                />
                            </div>
                            {/* card fields section  */}
                            <div className="p-4 space-y-2 relative h-60 text-gray-600">
                                <div>
                                    <span className="text-2xl font-bold text-gray-600 overflow-hidden h-12">
                                        Coffe Tea Size S
                                    </span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="text-sm font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </span>
                                </div>
                                <div>
                                    <span className="text-2xl font-bold text-gray-600 overflow-hidden h-12">
                                        Rp10.000,-
                                    </span>
                                </div>
                                {/* fix bottom section */}
                                <div className="bottom-7 absolute inset-x-0 text-right">
                                    <span className="text-xl text-gray-600 pr-7">
                                        <button class="px-4 py-2 rounded">-</button>
                                        <span class="m-5" x-text="count">0</span>
                                        <button class="px-4 py-2 rounded ">+</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* start here */}
                        <div className='border-2 border-gray-600 rounded-lg hover:drop-shadow-md overflow-hidden relative bg-white'>
                            {/* image and avatar block */}
                            <div className="cursor-pointer h-48 overflow-hidden border-b-2 border-black">
                                <img
                                    src='https://via.placeholder.com/300'
                                    alt="Profile image for perticular category"
                                    sizes="300px"
                                    className="w-full h-full hover:scale-125 delay-200 duration-300 ease-in-out"
                                />
                            </div>
                            {/* card fields section  */}
                            <div className="p-4 space-y-2 relative h-60 text-gray-600">
                                <div>
                                    <span className="text-2xl font-bold text-gray-600 overflow-hidden h-12">
                                        Coffe Tea Size S
                                    </span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="text-sm font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </span>
                                </div>
                                <div>
                                    <span className="text-2xl font-bold text-gray-600 overflow-hidden h-12">
                                        Rp10.000,-
                                    </span>
                                </div>
                                {/* fix bottom section */}
                                <div className="bottom-7 absolute inset-x-0 text-right">
                                    <span className="text-xl text-gray-600 pr-7">
                                        <button class="px-4 py-2 rounded">-</button>
                                        <span class="m-5" x-text="count">0</span>
                                        <button class="px-4 py-2 rounded ">+</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* start here */}
                        <div className='border-2 border-gray-600 rounded-lg hover:drop-shadow-md overflow-hidden relative bg-white'>
                            {/* image and avatar block */}
                            <div className="cursor-pointer h-48 overflow-hidden border-b-2 border-black">
                                <img
                                    src='https://via.placeholder.com/300'
                                    alt="Profile image for perticular category"
                                    sizes="300px"
                                    className="w-full h-full hover:scale-125 delay-200 duration-300 ease-in-out"
                                />
                            </div>
                            {/* card fields section  */}
                            <div className="p-4 space-y-2 relative h-60 text-gray-600">
                                <div>
                                    <span className="text-2xl font-bold text-gray-600 overflow-hidden h-12">
                                        Coffe Tea Size S
                                    </span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="text-sm font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </span>
                                </div>
                                <div>
                                    <span className="text-2xl font-bold text-gray-600 overflow-hidden h-12">
                                        Rp10.000,-
                                    </span>
                                </div>
                                {/* fix bottom section */}
                                <div className="bottom-7 absolute inset-x-0 text-right">
                                    <span className="text-xl text-gray-600 pr-7">
                                        <button class="px-4 py-2 rounded">-</button>
                                        <span class="m-5" x-text="count">0</span>
                                        <button class="px-4 py-2 rounded ">+</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* start here */}
                        <div className='border-2 border-gray-600 rounded-lg hover:drop-shadow-md overflow-hidden relative bg-white'>
                            {/* image and avatar block */}
                            <div className="cursor-pointer h-48 overflow-hidden border-b-2 border-black">
                                <img
                                    src='https://via.placeholder.com/300'
                                    alt="Profile image for perticular category"
                                    sizes="300px"
                                    className="w-full h-full hover:scale-125 delay-200 duration-300 ease-in-out"
                                />
                            </div>
                            {/* card fields section  */}
                            <div className="p-4 space-y-2 relative h-60 text-gray-600">
                                <div>
                                    <span className="text-2xl font-bold text-gray-600 overflow-hidden h-12">
                                        Coffe Tea Size S
                                    </span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="text-sm font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </span>
                                </div>
                                <div>
                                    <span className="text-2xl font-bold text-gray-600 overflow-hidden h-12">
                                        Rp10.000,-
                                    </span>
                                </div>
                                {/* fix bottom section */}
                                <div className="bottom-7 absolute inset-x-0 text-right">
                                    <span className="text-xl text-gray-600 pr-7">
                                        <button class="px-4 py-2 rounded">-</button>
                                        <span class="m-5" x-text="count">0</span>
                                        <button class="px-4 py-2 rounded ">+</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Etalase;