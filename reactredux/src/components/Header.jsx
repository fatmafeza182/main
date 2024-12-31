import React from 'react'
import { MdOutlineTextSnippet } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { modalFunc } from '../redux/ModelSlice';
import { searchDataFunction, sortingDataFunction } from '../redux/DataSlice';

const Header = () => {
    const dispatch = useDispatch();
    return (
        <div className='flex items-center justify-between bg-pink-400 h-20 p-3'>
            <div className='text-3xl text-pink-900'>REACT UYGULAMA</div>
            <div className='flex items-center gap-5'>
                <div className='text-pink-900'>
                    <select onChange={e => dispatch(sortingDataFunction(e.target.value))} className='h-8 rounded-md'>
                        <option value="asc" className='h-8 rounded-md'>Artan</option>
                        <option value="desc" className='h-8 rounded-md'>Azalan</option>
                    </select>
                </div>
                <input onChange={e => dispatch(searchDataFunction(e.target.value))} className='h-8 rounded-md text-black'></input>
                <div className='w-25 h-10 bg-pink-600 flex items-center p-2 rounded-full cursor-pointer' onClick={() => dispatch(modalFunc())}>
                    <MdOutlineTextSnippet size={30} />
                </div>
            </div>
        </div>

    )
}

export default Header
