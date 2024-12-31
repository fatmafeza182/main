import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';
import Input from '../components/Input';
import Button from '../components/Button';
import { modalFunc } from '../redux/ModelSlice';
import { createDataFunction, updateDataFunction } from '../redux/DataSlice';
import { useLocation, useNavigate } from 'react-router-dom';


const Product = () => {
    const { modalOpen } = useSelector(state => state.model);
    const { data, keyword } = useSelector(state => state.data);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [productInfo, setProductInfo] = useState({ name: "", price: "", url: null });


    const onChangeFunc = (e, type) => {
        if (type === "url") {
            const file = e.target.files[0];
            if (file) {
                setProductInfo(prev => ({
                    ...prev,
                    [e.target.name]: URL.createObjectURL(file)
                }));
            }
        } else {
            setProductInfo(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }));
        }

    };

    const loc = location.search ? Number(new URLSearchParams(location.search).get('id')) : null;

    useEffect(() => {
        if (loc) {
            const foundProduct = data.find(dt => dt.id == loc);
            if (foundProduct) {
                setProductInfo(foundProduct);
            }
        }
    }, [loc, data]);

    const buttonFunc = () => {
        dispatch(createDataFunction({ ...productInfo, id: data.length ? Math.max(...data.map(dt => dt.id)) + 1 : 1 }));
        dispatch(modalFunc())
        setProductInfo({ name: "", price: "", url: null });
        console.log("Ürün oluşturuldu");
    };
    const buttonUpdateFunc = () => {
        dispatch(updateDataFunction({ ...productInfo, id: Number(loc) }));
        dispatch(modalFunc())
        navigate('/')
        console.log("Güncelleme tamamlandı");
    }
    const contentModal = () => (
        <div>
            <Input

                placeholder="Ürün Adı"
                name="name"
                type="text"
                id="name"
                onChange={(e) => onChangeFunc(e, "text")}
                value={productInfo.name}
            />
            <Input
                placeholder="Ürün Fiyatı"
                name="price"
                type="number"
                id="price"
                onChange={(e) => onChangeFunc(e, "price")}
                value={productInfo.price}
            />
            <Input
                placeholder="Ürün Resmi"
                name="url"
                type="file"
                id="url"
                onChange={(e) => onChangeFunc(e, "url")}
            />
            <Button
                btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
                onClick={loc ? buttonUpdateFunc : buttonFunc}
            />

        </div>
    );
    const filtereditems = data.filter(dt => dt.name.toLowerCase().includes(keyword))

    return (
        <div>
            <div className='flex items-center flex-wrap'>
                {
                    filtereditems?.map((dt) => (
                        <ProductCard key={dt.id} dt={dt} />
                    ))
                }
            </div>

            {modalOpen && (
                <Modal
                    content={contentModal()}
                    title={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
                />
            )}

        </div>
    );
};

export default Product;
