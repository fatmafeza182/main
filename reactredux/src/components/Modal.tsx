import React from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { modalFunc } from '../redux/ModelSlice';


const Modal = ({ title, content, btnText, btnFunc }) => {
    const dispatch = useDispatch();
    return (
        <div className='fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center'>
            <div className='w-1/3 bg-white shadow-lg p-6'>
                <div className='border-b py-3 flex items-center justify-between'>
                    <div className='text-2xl'>{title}</div>
                    <IoCloseCircleSharp size={24} className="cursor-pointer" onClick={() => dispatch(modalFunc())} />
                </div>
                {content}
            </div>
        </div>
    );
};

export default Modal;
