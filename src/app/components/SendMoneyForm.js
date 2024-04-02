'use client'

import { useState } from "react";
import { toast } from "react-toastify";
import Modal from "./Modal";

export default function SendMoneyForm() {
    const [showModal, setShowModal] = useState(false)
    const [input, setInput] = useState({
        sender: '',
        receiver: '',
        amount: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const date = new Date()
        const time = `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        const ids = crypto.randomUUID().split('-')
        const transactionId = ids[ids.length - 1]
        const currentAmount = Math.floor(Math.random() * 20000) + 0;
        let success = Object.values(input).every(inp => inp ? true : false)


        if (input.sender && !((input.sender.startsWith('01') || input.sender.startsWith('+8801') || input.sender.startsWith('8801')) && (input.sender.length === 11 || input.sender.length === 14 || input.sender.length === 13))) {
            toast.error("আপনার নিজের নাম্বার ই ঠিক নাই আবার আইছে অন্য জনকে টাকা পাঠাতে!")
            return
        }
        if (input.receiver && !((input.receiver.startsWith('01') || input.receiver.startsWith('+8801') || input.receiver.startsWith('8801')) && (input.receiver.length === 11 || input.receiver.length === 14 || input.receiver.length === 13))) {
            toast.error("যাকে টাকা পাঠাবেন তার নাম্বারটা সঠিক না দিলে হবে কি?")
            return
        }
        if (input.amount && Number(input.amount) < 100) {
            toast("ফুহিন্নি! ১০০ টাকার উপরে পাঠান")
            return
        }
        if (input.amount > 20000) {
            toast.warning("বড়লোক মানুষ! এতো টাকা পাঠানোর ক্ষমতা আমার নাই!")
            return
        }

        const amount = parseFloat(input.amount).toFixed(2)
        if (success) {
            if ((input.sender.replace('+8801', '') === input.receiver.replace('+8801', '')) || (input.sender.replace('8801', '') === input.receiver.replace('8801', '')) || input.sender.replace('01') === input.receiver.replace('01', '')) {
                toast.error("এইটা কোনো কথা। আপনার নিজের নাম্বারে নিজেই টাকা পাঠাবেন!")
                return
            }
            setInput(prev => ({ ...prev, amount, time, transactionId: transactionId.toUpperCase(), currentAmount: parseFloat(currentAmount).toFixed(2), success }))
            setShowModal(true)
        } else {
            toast.error("আপনি আপনার বন্ধুর সাথে মজা নিতে এসে। এই অ্যাপ্লিকেশনের সাথেই মজা নিতে চাচ্ছেন!😆")
            return
        }


    }
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInput(prev => ({ ...prev, [name]: value }))
    }
    return (
        <>
            {showModal && <Modal money={input} onModal={setShowModal} reset={setInput} />}
            <form onSubmit={handleSubmit}>
                <div class="mb-6">
                    <label for="sen" class="text-sm font-medium text-gray-900 block mb-2">প্রেরক বিকাশ নাম্বার</label>
                    <input type="number" value={input.sender} name="sender" id="sen" onChange={handleInput} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="01xxxxxxxxx" required="" />
                </div>
                <div class="mb-6">
                    <label for="rev" class="text-sm font-medium text-gray-900 block mb-2">প্রাপক বিকাশ নাম্বার</label>
                    <input type="number" value={input.receiver} onChange={handleInput} name="receiver" id="rev" placeholder="01xxxxxxxxx" class={"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"} required="" />
                </div>
                <div class="mb-6">
                    <label for="amu" class="text-sm font-medium text-gray-900 block mb-2">টাকার পরিমাণ</label>
                    <input value={input.amount} type="number" onChange={handleInput} name="amount" id="amu" placeholder="1000" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">পাঠান</button>
            </form>
        </>
    );
}