import { useCallback, useEffect } from "react";
import MoneyDetails from "./MoneyDetails";


export default function Modal({ money, onModal, reset }) {
    const handleModal = () => {
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
        <div onClick={handleModal} className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-[1px] bg-gray-400/40">
            <div className="wrapper absolute top-1/2 left-1/2 scale-[.9] -translate-x-1/2 -translate-y-1/2 w-full">
                <MoneyDetails money={money} onClick={(e) => e.stopPropagation()} />
            </div>
        </div>
    );
}