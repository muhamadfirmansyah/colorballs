import { createRef, FormEvent, LegacyRef, useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import moment from 'moment'
import { greeting } from '../../shared/helpers/date';
import { actionGetMeasures, actionPostMeasure } from '../../redux/actions/measureActions';
import { connect, useDispatch } from 'react-redux';

import CSSTransition from 'react-transition-group/CSSTransition';

const Home = ({ measures, isLoading }: any) => {

    const messageRef: LegacyRef<HTMLDivElement> = createRef()

    const alertRef: LegacyRef<HTMLDivElement> = createRef()

    const [currentDate, setCurrentDate] = useState(moment(new Date()))

    const [alert, setAlert] = useState({
        isOpen: false,
        title: "",
        message: ""
    })

    const [data, setData] = useState({
        color: "",
        description: ""
    })

    const [message, setMessage] = useState({
        isOpen: false,
        icon: "",
        text: "",
        color: ""
    })

    const colors = {
        "blue": 0,
        "green": 0,
        "yellow": 0,
        "purple": 0,
        "red": 0,
    }

    const options = {
        chart: {
            offsetY: 25,
            offsetX: 0,
            redrawOnParentResize: true
        },
        xaxis: {
            categories: ["😥", "🤢", "😃", "😱", "😡"],
            labels: {
                style: {
                    fontSize: "22px",
                    fontFamily: "Noto Color Emoj"
                }
            }
        },
        yaxis: {
            show: false,
        },
        plotOptions: {
            radar: {
                polygons: {
                    strokeColor: '#e8e8e8',
                    fill: {
                        colors: ['#f8f8f8', '#fff']
                    }
                }
            }
        },
        colors: ['#E91E63']
    }

    const [series, setSeries]: any = useState([
        {
            name: "Total",
            data: []
        }
    ])

    const dispatch = useDispatch()

    useEffect(() => {
        actionGetMeasures(dispatch)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        let fill = Object.keys(colors).map((cl: string) => (
            measures.filter((a: any) => a.color === cl && a.created_at === moment(currentDate).format('DD/MM/YYYY')).length
        ))

        setSeries([{ ...series[0], data: fill }])

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [measures, currentDate])

    useEffect(() => {
        if (alert.isOpen) {
            setTimeout(() => {
                setAlert({
                    ...alert,
                    isOpen: false
                })
            }, 3000);
        }
    }, [alert])

    const validateSubmit = (payload: any) => {
        if (payload.color === "") {
            return false
        }

        return true
    }

    const getMessage = (color: string) => {
        switch (color) {
            case "blue": {
                return {
                    icon: "😥",
                    text: "A million words would not bring you back, I know because I tried, neither would a million tears, I know because I cried.",
                    color: data.color
                }
            }
            case "green": {
                return {
                    icon: "🤢",
                    text: "I am alone in the midst of these happy, reasonable voices. All these creatures spend their time explaining, realizing happily that they agree with each other. In Heaven's name, why is it so important to think the same things all together.",
                    color: data.color
                }
            }
            case "yellow": {
                return {
                    icon: "😃",
                    text: "There is no path to happiness; happiness is the path.",
                    color: data.color
                }
            }
            case "purple": {
                return {
                    icon: "😱",
                    text: "Each of us must confront our own fears, must come face to face with them. How we handle our fears will determine where we go with the rest of our lives. To experience adventure or to be limited by the fear of it.",
                    color: data.color
                }
            }
            case "red": {
                return {
                    icon: "😡",
                    text: "Do not waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.",
                    color: data.color
                }
            }
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        let payload = { ...data, created_at: moment(currentDate).format('DD/MM/YYYY') }

        if (validateSubmit(payload)) {
            actionPostMeasure(payload, dispatch)

            setData({
                ...data,
                color: "",
                description: ""
            })

            let msg = getMessage(data.color)

            setMessage({
                ...message,
                isOpen: true,
                ...msg
            })

        } else {
            setAlert({
                isOpen: true,
                title: "Warning",
                message: "Please choose one the color balls below, before submiting your feeling!"
            })
        }
    }

    return (
        <div className="container mt-[56px] px-[24px] mb-[64px] mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className='text-[24px] font-medium'>{greeting()}, <br /><strong className='font-bold'>Muhamad Firmansyah</strong></h3>
                </div>
                <div>
                    <img src='./assets/images/img-profile-1.svg' alt='' className='w-[50px] h-[50px]' />
                </div>
            </div>

            <div className="grid grid-cols-5 mt-[16px] gap-[12px]">
                <div className='px-[15px] flex flex-wrap justify-center items-center text-center cursor-pointer active:bg-gray-100 rounded-md' onClick={() => setCurrentDate(moment(currentDate).subtract('days', 2))}>
                    <div>
                        <h5 className='font-bold text-[20px] text-black'>{moment(currentDate).subtract('days', 2).format('DD')}</h5>
                        <p className='text-[12px] text-gray-400'>{moment(currentDate).subtract('days', 2).format('dd')}</p>
                    </div>
                </div>
                <div className='px-[15px] flex flex-wrap justify-center items-center text-center cursor-pointer active:bg-gray-100 rounded-md' onClick={() => setCurrentDate(moment(currentDate).subtract('days', 1))}>
                    <div>
                        <h5 className='font-bold text-[20px] text-black'>{moment(currentDate).subtract('days', 1).format('DD')}</h5>
                        <p className='text-[12px] text-gray-400'>{moment(currentDate).subtract('days', 1).format('dd')}</p>
                    </div>
                </div>
                <div className='py-[16px] px-[14px] bg-rose-100 rounded-xl flex flex-wrap justify-center text-center'>
                    <div>
                        <h5 className='font-bold text-[20px] text-rose-500'>{moment(currentDate).format('DD')}</h5>
                        <p className='text-[14px] text-rose-500'>{moment(currentDate).format('dd')}</p>
                    </div>
                    <div className='w-full'>
                        <div className="rounded-full mx-auto bg-rose-500 w-[7px] h-[7px] mt-[10px]"></div>
                    </div>
                </div>
                <div className='px-[15px] flex flex-wrap justify-center items-center text-center cursor-pointer active:bg-gray-100 rounded-md' onClick={() => setCurrentDate(moment(currentDate).add('days', 1))}>
                    <div>
                        <h5 className='font-bold text-[20px] text-black'>{moment(currentDate).add('days', 1).format('DD')}</h5>
                        <p className='text-[12px] text-gray-400'>{moment(currentDate).add('days', 1).format('dd')}</p>
                    </div>
                </div>
                <div className='px-[15px] flex flex-wrap justify-center items-center text-center cursor-pointer active:bg-gray-100 rounded-md' onClick={() => setCurrentDate(moment(currentDate).add('days', 2))}>
                    <div>
                        <h5 className='font-bold text-[20px] text-black'>{moment(currentDate).add('days', 2).format('DD')}</h5>
                        <p className='text-[12px] text-gray-400'>{moment(currentDate).add('days', 2).format('dd')}</p>
                    </div>
                </div>
            </div>

            {false ? (
                <>
                    <div className="mt-[32px]">
                        <div className='h-[32px] w-40 bg-gray-200 rounded-lg animate-pulse'></div>
                        <div className='h-[16px] w-80 bg-gray-200 rounded-lg animate-pulse mt-[8px]'></div>
                        <div className="mt-[16px] rounded-lg h-[225px] bg-gray-200"></div>
                    </div>

                </>
            ) : (
                <>
                    <div className="mt-[32px]">
                        <div>
                            <h2 className='text-[16px] font-medium'>Today's Graph</h2>
                            <p className='text-[12px] text-gray-400 mt-[4px]'>Below is your feeling summary for today.</p>
                        </div>
                        <div className='rounded-lg p-2 mt-[16px] border-2 border-blue-200 bg-blue-50'>
                            <Chart
                                options={options}
                                series={series}
                                type="radar"
                                className="w-full"
                            />
                        </div>
                    </div>
                </>
            )}

            <div className='mt-[36px]'>
                <form method='POST' onSubmit={handleSubmit}>
                    <div>
                        <h2 className='text-[16px] font-medium'>Color Balls</h2>
                        <p className='text-[12px] text-gray-400 mt-[4px]'>Which one of these colors is representing you at this moment.</p>
                    </div>
                    <div className='grid grid-cols-3 mt-[18px] gap-[16px]'>
                        <div
                            onClick={() => setData({ ...data, color: "blue" })}
                            className={`bg-blue-100 cursor-pointer flex border-2 ${data.color === 'blue' ? 'border-blue-500' : 'border-transparent'} box-border active:border-blue-500 justify-center rounded-lg py-[16px]`}>
                            <div className='w-[50px] h-[50px] bg-blue-200 rounded-full flex items-center justify-center text-[22px]'>😥</div>
                        </div>
                        <div
                            onClick={() => setData({ ...data, color: "green" })}
                            className={`bg-green-100 cursor-pointer flex border-2 ${data.color === 'green' ? 'border-green-500' : 'border-transparent'} box-border active:border-green-500 justify-center rounded-lg py-[16px]`}>
                            <div className='w-[50px] h-[50px] bg-green-200 rounded-full flex items-center justify-center text-[22px]'>🤢</div>
                        </div>
                        <div
                            onClick={() => setData({ ...data, color: "yellow" })}
                            className={`bg-yellow-100 cursor-pointer flex border-2 ${data.color === 'yellow' ? 'border-yellow-500' : 'border-transparent'} box-border active:border-yellow-500 justify-center rounded-lg py-[16px]`}>
                            <div className='w-[50px] h-[50px] bg-yellow-200 rounded-full flex items-center justify-center text-[22px]'>😃</div>
                        </div>
                        <div
                            onClick={() => setData({ ...data, color: "purple" })}
                            className={`bg-purple-100 cursor-pointer flex border-2 ${data.color === 'purple' ? 'border-purple-500' : 'border-transparent'} box-border active:border-purple-500 justify-center rounded-lg py-[16px]`}>
                            <div className='w-[50px] h-[50px] bg-purple-200 rounded-full flex items-center justify-center text-[22px]'>😱</div>
                        </div>
                        <div
                            onClick={() => setData({ ...data, color: "red" })}
                            className={`bg-red-100 cursor-pointer flex border-2 ${data.color === 'red' ? 'border-red-500' : 'border-transparent'} box-border active:border-red-500 justify-center rounded-lg py-[16px]`}>
                            <div className='w-[50px] h-[50px] bg-red-200 rounded-full flex items-center justify-center text-[22px]'>😡</div>
                        </div>
                    </div>
                    <div className='mt-[16px]'>
                        <p className='text-[12px] text-gray-400'>Description (optional)</p>
                        <textarea
                            onChange={(e) => setData({ ...data, description: e.target.value })}
                            className='mt-[8px] bg-rose-100 outline-none resize-none w-full border-2 px-3 py-2 rounded-lg border-rose-200 focus:border-rose-400 box-border'
                            value={data.description} />
                    </div>
                    <div className='mt-[16px]'>
                        <button type='submit' className='bg-rose-500 text-white w-full py-2 rounded-lg border-2 border-rose-500 active:border-rose-700 box-border' disabled={isLoading}>{isLoading ? 'Loading ...' : 'Save'}</button>
                    </div>
                </form>
            </div>


            <CSSTransition nodeRef={alertRef} in={alert.isOpen} timeout={300} classNames="fadeIn" unmountOnExit onEnter={() => alert.isOpen} onExit={() => !alert.isOpen}>
                <div className="fixed top-[16px] bg-rose-400 left-[5%] w-[90%] text-white px-5 py-3 rounded-lg z-50 text-[14px]" ref={alertRef}>
                    <div className="flex justify-between items-center">
                        <h5 className='font-bold'>{alert.title}</h5>
                        <div>
                            <button onClick={() => setAlert({ ...alert, isOpen: false })} className='hover:bg-rose-500 px-2 py-1 rounded-lg'>&#x2715;</button>
                        </div>
                    </div>
                    <p className='mt-[2px]'>
                        {alert.message}
                    </p>
                </div>
            </CSSTransition>

            <CSSTransition nodeRef={messageRef} in={message.isOpen} timeout={300} classNames="fadeIn" unmountOnExit onEnter={() => message.isOpen} onExit={() => !message.isOpen}>
                <div className={`fixed top-0 left-0 h-full w-full bg-${message.color}-500 z-50 flex items-center justify-center flex-wrap`} ref={messageRef}>
                    <div className='w-full text-center'>
                        <h1 className='text-[52px]'>{message.icon}</h1>

                        <div className='mt-[18px] text-white px-4 font-medium text-[18px]'>
                            "{message.text}"
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <button onClick={() => setMessage({ ...message, isOpen: false })} className={`bg-${message.color}-200 items-center flex justify-center rouded-full p-5 w-[75px] h-[75px] text-[32px] rounded-full border-2 border-transparent active:border-gray-300`}>&#x2715;</button>
                    </div>
                </div>
            </CSSTransition>
            {/* {message.isOpen && (
            )} */}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        measures: state.measureReducer.measures,
        isLoading: state.measureReducer.isLoading
    }
}

export default connect(mapStateToProps)(Home)