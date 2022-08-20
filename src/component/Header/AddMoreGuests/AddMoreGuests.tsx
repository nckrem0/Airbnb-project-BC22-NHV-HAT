import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {
    setOpenDate(value: boolean): void;
    openDate: boolean;
    addMoreGuests: boolean;
    setMoreGuests(value: boolean): void;
};
const AddMoreGuests = (props: Props) => {
    const { setMoreGuests, addMoreGuests } = props;
    const [adultGuests, setAdultGuests] = useState(0);
    const [childGuests, setChildGuests] = useState(0);
    const [babyGuests, setBabyGuests] = useState(0);
    const [petGuests, setPetGuests] = useState(0);

    const handleMoreGuests = () => {
        setMoreGuests(!addMoreGuests);
        props.setOpenDate(false);
    };
    const navigate = useNavigate();
    const search = () => {
        navigate({
            pathname: "/login",
        });
    };

    return (
        <>
            {addMoreGuests ? (
                <div className="relative">
                    <section className=" mr-4 h-16 py-2 px-2 items-center " onClick={handleMoreGuests}>
                        <div className="px-5">
                            <div className="pb-1 font-medium">Khách</div>
                            <div className="">
                                {adultGuests + childGuests + babyGuests + petGuests !== 0 ? (
                                    <div className="text-sm font-medium">
                                        {adultGuests + childGuests + babyGuests} Khách, {petGuests} Pet
                                    </div>
                                ) : (
                                    <div className="text-gray-400 text-sm"> Thêm Khách</div>
                                )}
                            </div>
                        </div>
                    </section>
                    <div className="absolute box shadow-lg bg-white rounded-[32px] nb:mt-5 md:mt-5 md:left-0 ">
                        <div className="md:w-[450px] nb:w-80 px-5">
                            <div className="flex justify-between my-3 items-center ">
                                <div className="flex-1">
                                    <div className="my-1">Người Lớn</div>
                                    <div className="text-gray-400 text-sm">Từ 13 tuổi trở đi</div>
                                </div>
                                <div className="flex-1 ">
                                    <div className="flex justify-end text-gray-300">
                                        <button
                                            className="text-[30px] mx-3"
                                            onClick={() => setAdultGuests(adultGuests - 1)}
                                        >
                                            <span className="hover:text-red-400">
                                                <AiOutlineMinusCircle />
                                            </span>
                                        </button>
                                        <div>{adultGuests}</div>
                                        <button
                                            className="text-[30px] mx-3"
                                            onClick={() => setAdultGuests(adultGuests + 1)}
                                        >
                                            <span className="hover:text-red-400">
                                                <AiOutlinePlusCircle />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="flex items-center  my-3 ">
                                <div className="flex-1">
                                    <div className=" my-1">Trẻ em</div>
                                    <div className="text-gray-400 text-sm">Độ tuổi 2 - 12</div>
                                </div>
                                <div className="flex-1 ">
                                    <div className="flex justify-end text-gray-300">
                                        <button
                                            className="text-[30px] mx-3"
                                            onClick={() => setChildGuests(childGuests - 1)}
                                        >
                                            <span className="hover:text-red-400">
                                                <AiOutlineMinusCircle />
                                            </span>
                                        </button>
                                        <div>{childGuests}</div>
                                        <button
                                            className="text-[30px] mx-3"
                                            onClick={() => setChildGuests(childGuests + 1)}
                                        >
                                            <span className="hover:text-red-400">
                                                <AiOutlinePlusCircle />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="flex items-center my-3 ">
                                <div className="flex-1">
                                    <div className="my-1">Em bé</div>
                                    <div className="text-gray-400 text-sm">Dưới 2 tuổi</div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-end text-gray-300">
                                        <button
                                            className="text-[30px] mx-3"
                                            onClick={() => setBabyGuests(babyGuests - 1)}
                                        >
                                            <span className="hover:text-red-400">
                                                <AiOutlineMinusCircle />
                                            </span>
                                        </button>
                                        <div>{babyGuests}</div>
                                        <button
                                            className="text-[30px] mx-3"
                                            onClick={() => setBabyGuests(babyGuests + 1)}
                                        >
                                            <span className="hover:text-red-400">
                                                <AiOutlinePlusCircle />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="flex items-center my-3">
                                <div className="flex-1">
                                    <div className=" my-1">Thú cưng</div>
                                    <div className="text-gray-400 text-sm">
                                        Bạn sẽ mang theo động vật
                                        <br /> phục vụ ?
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-end text-gray-300">
                                        <button
                                            className="text-[30px] mx-3"
                                            onClick={() => setPetGuests(petGuests - 1)}
                                        >
                                            <span className="hover:text-red-400">
                                                <AiOutlineMinusCircle />
                                            </span>
                                        </button>
                                        <div>{petGuests}</div>
                                        <button
                                            className="text-[30px] mx-3"
                                            onClick={() => setPetGuests(petGuests + 1)}
                                        >
                                            <span className="hover:text-red-400">
                                                <AiOutlinePlusCircle />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <section className="mr-4 h-16 py-2 px-2 items-center" onClick={handleMoreGuests}>
                    <div className="px-5">
                        <div className="pb-1 font-medium">Khách</div>
                        <div className="">
                            <div className="">
                                {adultGuests + childGuests + babyGuests + petGuests !== 0 ? (
                                    <div className="text-sm font-medium">
                                        {adultGuests + childGuests + babyGuests} Khách, {petGuests} Pet
                                    </div>
                                ) : (
                                    <div className="text-gray-400 text-sm"> Thêm Khách</div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default AddMoreGuests;
