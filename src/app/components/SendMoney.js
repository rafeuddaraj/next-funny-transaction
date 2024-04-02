import SendMoneyForm from "./SendMoneyForm";


export default function SendMoney() {
    return (
        <section className="pt-16">
            <div className="text-center mb-10">
                <h2 className="text-4xl text-pink-500">বিকাশ থেকে টাকা পাঠান</h2>
                <p className="text-black text-xl">আর পোলাপানের সাথে মজা নিন</p>
            </div>
            <div class="max-w-lg mx-auto">

                <SendMoneyForm />
            </div>
        </section>
    );
}