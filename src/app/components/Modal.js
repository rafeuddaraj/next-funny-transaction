import { useCallback, useEffect, useRef } from "react";
import MoneyDetails from "./MoneyDetails";


export default function Modal({ money, onModal, reset }) {
    const wrapper = useRef()
    const handleModal = () => {
        wrapper.current.classList.add('invisible')
        onModal(false)
        reset({
            sender: '',
            receiver: '',
            amount: ''
        })
    }

    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === 'Escape') {
                wrapper.current.classList.add('invisible')
                onModal(false)
                reset({
                    sender: '',
                    receiver: '',
                    amount: ''
                })
            }
        }, [])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.addEventListener('keypress', handleKeyDown)
        }
    }, [handleKeyDown])





    return (
        <div onClick={handleModal} className=" z-10 fixed top-0 left-0 right-0 bottom-0 backdrop-blur-[1px] bg-gray-400/40">
            <div ref={wrapper} onClick={handleModal} className={`visible z-10 wrapper absolute top-1/2 left-1/2 scale-[.8] -translate-x-1/2 -translate-y-1/2 w-full delay-200`}>
                <MoneyDetails money={money} />
            </div>
        </div>
    );
}