import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../App';


const NewHirePopup = ({ show, setShow, fetchHires }) => {

    let auth = useContext(AuthContext)

    let [hire, setHire] = useState({
        title: "",
        description: "",
        totalNumber: 1,
        createdBy: auth.userDetail._id
    })

    let [err, setErr] = useState({
        show: false,
        msg: ""
    })

    let createHire = async () => {

        if (hire.title === "" || hire.description === "" || hire.totalNumber <= 0) {

            setErr({
                show: true,
                msg: "Please fill in all the details and try again"
            })

        } else {
            try {

                await axios.post('http://localhost:8080/api/v1/hire/createHire', hire)

                setShow(false)
                fetchHires()

            } catch (e) {
                console.log(e);
            }
        }


    }

    return (
        <React.Fragment>
            <div onClick={() => setShow(false)} className={` ${show === false && "hidden"} bg-black opacity-30 fixed top-0 left-0 right-0 bottom-0`} />
            <div style={{
                height: 'fit-content',
                width: '50%',
                transform: `translateX(-50%) translateY(-50%)`,
                top: show === true ? "50%" : "-30%",
                opacity: show === true ? 1 : 0,
                left: '50%',
            }} className={"bg-white fixed duration-300 shadow-lg"}>


                <div className="text-xl p-3 flex shadow-md items-center">
                    Create a new hire
                </div>

                {err.show && (
                    <div className="text-xl text-red-500 m-3 p-1 bg-red-100">
                        {err.msg}
                    </div>
                )}

                <div className={'p-4'}>
                    <input
                        value={hire.title}
                        onChange={(e) => {
                            setHire({
                                ...hire,
                                title: e.target.value
                            })
                        }} className={'border-2 border-blue-500 w-full px-3 py-1 my-3 rounded-md focus:outline-none'} type="text" placeholder={"Title"} /> <br />
                    <textarea value={hire.description}
                        onChange={(e) => {
                            setHire({
                                ...hire,
                                description: e.target.value
                            })
                        }} className={'border-2 border-blue-500 w-full px-3 py-1 my-3 rounded-md focus:outline-none'} placeholder={"Description"} /> <br />
                    <input min={1} value={hire.totalNumber}
                        onChange={(e) => {
                            setHire({
                                ...hire,
                                totalNumber: e.target.value
                            })
                        }} className={'border-2 border-blue-500 w-full px-3 py-1 my-3 rounded-md focus:outline-none'} type="number" placeholder={"Number of workers"} /> <br />
                    <button onClick={() => createHire()} className={'bg-blue-500 text-white px-3 py-2 mr-3'}>
                        Submit
                    </button>
                    <button onClick={() => {
                        setShow(false)
                    }} className={'border-2 border-blue-500 text-blue-500 px-3 py-2 mr-3'}>Close</button>
                </div>

            </div>

        </React.Fragment>
    );
}

export default NewHirePopup;