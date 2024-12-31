import React, { useState } from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { deleteDataFunction, updateDataFunction } from '../redux/DataSlice';
import { modalFunc } from '../redux/ModelSlice';
import { useNavigate } from 'react-router-dom';



const ProductCard = ({ dt }) => {
    const [openEdit, setOpenEdit] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const uptadeFunc = () => {
        dispatch(modalFunc())
        setOpenEdit(false)
        navigate(`/?id=${dt?.id}`);
    }
    return (
        <div>
            <div className='w-[200px] h-[200px] relative m-2 rounded-md'>
                <img src={dt?.url} className='w-full h-full rounded-md' />
                <div className='absolute left-0 bottom-0 bg-pink-800 text-white w-full px-2'>
                    <div className='text-lg font-semibol'>{dt?.name}</div>
                    <div>{dt?.price}</div>
                </div>
                <div onClick={() => setOpenEdit(!openEdit)} className='absolute top-0 right-1 '>
                    <HiDotsHorizontal size={24} />
                </div>
                {
                    openEdit && (
                        <div className=' bg-pink-800 border border-white text-white absolute top-5 right-2 text-sm p-2'>
                            <div onClick={() => dispatch(deleteDataFunction(dt.id))} className='cursor-pointer'>Sil</div>
                            <div onClick={uptadeFunc} className='cursor-pointer'>Güncelle</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ProductCard
