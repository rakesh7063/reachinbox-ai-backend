import React from 'react';
import HomeLayout from '../layout/HomeLayout';
import { FiChevronDown } from 'react-icons/fi';
import { MdOutlineRefresh } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";

function Inbox() {
    const isLoggedIn = localStorage.getItem("login") === "true";

    if (!isLoggedIn) {
        window.location.href = '/';
    };

    const users = [
        {
          email: 'Beata@gmail.com',
          name: 'Hoddy',
          date: 'Mar 7',
          status: 'Active',
          campaignName: 'Campaign Name'
        },
        {
          email: 'example1@example.com',
          name: 'John Doe',
          date: 'Mar 7',
          status: 'Inactive',
          campaignName: 'Campaign Name'
        },
        {
          email: 'example2@example.com',
          name: 'Jane Smith',
          date: 'Mar 7',
          status: 'Active',
          campaignName: 'Campaign Name'
        }
    ];
    return (
        <HomeLayout>
            <div className='flex justify-center items-center h-[88vh]'>
                <div className='border border-gray-600 w-[25%] h-full'>
                    <div className='flex justify-between p-4'>
                        <div className='flex flex-col'>
                            <div className='flex items-center justify-center text-xl font-bold text-blue-600'>
                                <h1 className=''>All Inbox(X)</h1>
                                <FiChevronDown />
                            </div>
                            <p className='text-base text-white'><span className='font-bold'>25/25</span> Inboxes selected</p>
                        </div>
                        <div className='flex items-center justify-center h-12 w-12 rounded bg-slate-800'>
                            <MdOutlineRefresh className='text-white text-4xl font-bold' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <input className='flex justify-center items-center ml-2 p-1 rounded-lg w-[90%]' placeholder='Search' type="search" />
                        <div className='flex gap-10 border-b border-gray-600 text-white'>
                            <p>26</p>
                            <p>New Replies</p>
                            <p>Newest</p>
                        </div>
                    </div>
                    <div>
                        {users.map((user, index) => (
                            <div key={index} className='text-white p-2 border-b border-gray-600'>
                                <div className='flex justify-between pb-1'>
                                    <h1 className='text-lg'>{user.email}</h1>
                                    <p>{user.date}</p>
                                </div>
                                <div className='pb-1'>
                                    <h1 className='text-xl'>{user.name}</h1>
                                </div>
                                <div className='flex justify-between pb-1'>
                                    <div className='py-1 px-4 bg-green-300 rounded-full'>{user.status}</div>
                                    <div className='py-1 px-4 bg-gray-600 rounded-full'>{user.campaignName}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=" w-[50%] h-full">
                    <div className='flex justify-between p-2 border-b border-gray-600 text-gray-400'>
                        <div className=''>
                            <h1 className='text-lg font-semibold'>Shivam Maurya</h1>
                            <p>shivam123@gmail.com</p>
                        </div>
                        <div className='flex gap-2'>
                            <div className='py-1 px-2 flex gap-3 items-center bg-slate-600 rounded'>
                                <div className='h-4 w-4 rounded-full bg-yellow-300'></div>
                                <div>Meeting Completed</div>
                                <FiChevronDown/>
                            </div>
                            <div className='py-1 px-2 flex gap-3 items-center bg-slate-600 rounded'>
                                <p>Move </p>
                                <FiChevronDown/>
                            </div>
                            <div className='py-1 px-2 flex gap-3 items-center bg-slate-600 rounded'>
                                <FiMoreHorizontal/>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center text-gray-600'>
                        <div className='text-center'>Done</div>
                    </div>
                    <div className='border border-gray-600 p-2 m-2 rounded-lg text-gray-400'>
                        <div className='flex justify-between'>
                            <h1 className='text-lg font-medium'>New Product Launch</h1>
                            <p>20 june 2022 : 9:16AM</p>
                        </div>
                        <div className='pb-1'>
                            <p>from : jeanne@icloud.com cc : lennon.j@mail.com</p>
                        </div>
                        <div className='pb-4'>
                            <p>to : lennon.j@mail.com</p>
                        </div>
                        <div>
                            <p className='pb-4 text-lg font-semibold'>Hi Shivam Maurya,</p>
                            <p>I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.</p>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-600 w-[25%] text-white h-full'>
                    <div className='p-2'>
                        <h1 className='bg-gray-600 rounded-lg py-1 px-2'>Lead Details</h1>
                        <div className='flex flex-col gap-2 mt-6'>
                            <div className='flex justify-between items-center text-gray-400'>
                                <p>Name</p>
                                <p>Shivam Maurya</p>
                            </div>
                            <div className='flex justify-between items-center text-gray-400'>
                                <p>Contect No</p>
                                <p>+91 7905861940</p>
                            </div>
                            <div className='flex justify-between items-center text-gray-400'>
                                <p>Email</p>
                                <p>shivam123@gmail.com</p>
                            </div>
                            <div className='flex justify-between items-center text-gray-400'>
                                <p>Company</p>
                                <p>Masai School</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default Inbox;
