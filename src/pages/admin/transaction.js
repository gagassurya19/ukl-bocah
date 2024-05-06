import React from 'react';

function Transaction() {
    return (
        <>
             <div className='flex w-full justify-center my-10 sm:p-3'>
                <div className='sm:mx-auto sm:w-1/2'>
                    <h2 className='text-center text-5xl font-semibold'>Transaction History</h2>
                </div>
            </div>
            <div className="flex w-full my-10 sm:p-3">
                <div className="sm:mx-auto sm:w-[80%]">
                    <div className="">
                        <table className="table-auto w-full border border-black">
                            <thead>
                                <tr className="bg-[#222E3A]/[6%] border border-black">
                                    <th className="border-2 border-black">No</th>
                                    <th className="border-2 border-black">Date</th>
                                    <th className="border-2 border-black">Customer Name</th>
                                    <th className="border-2 border-black">Order Type</th>
                                    <th className="border-2 border-black">Detail Order</th>
                                    <th className="border-2 border-black">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border border-black text-center">
                                    <td className="border-2 border-black py-3">1</td>
                                    <td className="border-2 border-black py-3">2021/09/01</td>
                                    <td className="border-2 border-black py-3">John Doe</td>
                                    <td className="border-2 border-black py-3">Dine In</td>
                                    <td className="border-2 border-black py-3">
                                        <ul>
                                            <li>Ice Coffe size S (1)</li>
                                            <li>Ice Tea size M (2)</li>
                                        </ul>
                                    </td>
                                    <td className="border-2 border-black py-3">Rp. 10.000</td>
                                </tr>
                                <tr className="border border-black text-center">
                                    <td className="border-2 border-black py-3">2</td>
                                    <td className="border-2 border-black py-3">2021/09/02</td>
                                    <td className="border-2 border-black py-3">Jane Doe</td>
                                    <td className="border-2 border-black py-3">Take Away</td>
                                    <td className="border-2 border-black py-3">
                                        <ul>
                                            <li>Ice Coffe size M (1)</li>
                                            <li>Ice Tea size L (2)</li>
                                        </ul>
                                    </td>
                                    <td className="border-2 border-black py-3">Rp. 20.000</td>
                                </tr>
                                <tr className="border border-black text-center">
                                    <td className="border-2 border-black py-3">3</td>
                                    <td className="border-2 border-black py-3">2021/09/03</td>
                                    <td className="border-2 border-black py-3">John Doe</td>
                                    <td className="border-2 border-black py-3">Dine In</td>
                                    <td className="border-2 border-black py-3">
                                        <ul>
                                            <li>Ice Coffe size L (1)</li>
                                            <li>Ice Tea size S (2)</li>
                                        </ul>
                                    </td>
                                    <td className="border-2 border-black py-3">Rp. 30.000</td>
                                </tr>
                            </tbody>
                        </table>  
                    </div>
                </div>
            </div>
        </>
    );
}

export default Transaction;