/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { ProductsData } from './Order.jsx';
import { loginAPI } from '../../Service/auth.js';
import LogoBQueen from '/3.png';
import { AlertBtnSendOrder } from './Alert.jsx';


function ImgLogo() {
    return (
        <>
            <div className='lg:mt-[-35px] w-[80%]'>
                <img className='flex justify-center h-55 w-full '
                    src={LogoBQueen} alt="Logo burger queen" />
            </div>
        </>
    )
}

function InfoClient() {
    const workersName = localStorage.getItem("workers");
    const [cliente, setCliente] = useState('');
    const [mesa, setMesa] = useState('');

    return (
        <>

            <div className=' font-judson text-2xl border-b-2 border-b-[#F67575] w-[90%] lg:w-[75%] lg:ml-16 '>
                <label htmlFor="">Mesero:</label>
                <p className='font-judson ml-2 mt-3'> {workersName} </p>
            </div>

            <div>
                <input
                    className='focus:outline-none focus:border-rose-500 w-full border-2 text-2xl border-[#F5A25D] rounded-full p-4 mt-1 h-1/2 font-judson drop-shadow-md bg-[#FFE1CD] placeholder-gray-500 lg:w-[75%] lg:ml-16'
                    placeholder='Ingrese cliente'
                    required
                    type='text'
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                />
            </div>
            <div>
                <input
                    className='focus:outline-none focus:border-rose-500 w-full border-2 text-2xl border-[#F5A25D] rounded-full p-4 mt-1 h-1/2 font-judson drop-shadow-md bg-[#FFE1CD] placeholder-gray-500 lg:w-[75%] lg:ml-16'
                    placeholder='Ingrese n° Mesa'
                    required
                    type='text'
                    value={mesa}
                    onChange={(e) => setMesa(e.target.value)}
                />
            </div>
        </>
    )
}

function NavPrincipal() {
    const [selectedItem, setSelectedItem] = useState('desayuno');
    const [showDiv, setShowDiv] = useState(true);


    const handleClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <>
            <nav className='flex justify-center my-6 lg:justify-start lg:ml-20'>
                <ul className='lg:flex'>
                    <li>
                        <a
                            className={`bg-white inline-block rounded-t-lg py-2 px-4 text-gray-500 hover:text-black font-judson text-4xl  ${selectedItem === 'desayuno' ? 'border-t-4 border-x-4 border-[#389393]' : 'border-b-4 border-b-[#389393]'
                                }`}
                            href="#"
                            onClick={() => handleClick('desayuno')}>
                            Desayuno
                        </a>

                        <a
                            className={`bg-white inline-block rounded-t-lg py-2 px-4 text-gray-500 hover:text-black font-judson ${selectedItem === 'almuerzo' ? 'border-b-white border-t-4 border-x-4 border-[#389393]' : 'border-b-4 border-b-[#389393]'
                                } text-4xl`}
                            href="#"
                            onClick={() => handleClick('almuerzo')}>
                            Almuerzo y cena
                        </a>

                        <a
                            className={`bg-white inline-block rounded-t-lg py-2 px-4  text-gray-500 hover:text-black  font-judson ${selectedItem === 'pedido' ? 'border-b-white border-t-4 border-x-4 border-[#389393]' : 'border-b-4 border-b-[#389393]'
                                } text-4xl`}
                            href="#"
                            onClick={() => handleClick('pedido')}>
                            Pedido Listos
                        </a>

                    </li>
                </ul>
            </nav>

            {/* Mostrar el div cuando showDiv es verdadero */}
            {showDiv && (
                <div className='m-auto'>
                    {/* Aquí se incluye el componente ProductsData */}
                    <ProductsData selectedItem={selectedItem} />
                </div>
            )}


        </>
    );
}

function BtnSendOrder() {
    const handleOrderClick = () => {

        AlertBtnSendOrder();

    }

    return (
        <div className=' mt-32 w-2/3 justify-center'>
            <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out text-5xl bg-cyan-700 text-white w-full p-4 h-20 rounded-full font-lobster shadow-xl lg:mb-20'
                type='submit'
                onClick={handleOrderClick}
            >Enviar Pedido</button>
        </div>
    )
}

export { ImgLogo, InfoClient, NavPrincipal, BtnSendOrder };





