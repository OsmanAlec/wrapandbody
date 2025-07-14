import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });

export default function Guidelines () {
    return (
        <div className="flex flex-col items-center min-h-[70vh] bg-off-white px-4">
            <h1 className={`text-5xl md:text-7xl p-8 pt-20 text-center ${merriweather.className}`}>Terms & Conditions</h1>
            <div className="mb-20 bg-white-smoke border border-rose-gold rounded-xl shadow-md p-8 max-w-2xl w-full animate-fade-in-down">
                <ol className="list-decimal list-none list-inside text-dark-green space-y-4 text-lg">
                    <li>
                        <span className="font-semibold">Consultation:</span> All clients must undergo a consultation prior to any treatment. Please disclose any medical conditions, allergies, or medications.
                    </li>
                    <li>
                        <span className="font-semibold">Appointments:</span> Please arrive at least 10 minutes before your scheduled appointment. Late arrivals may result in reduced treatment time.
                    </li>
                    <li>
                        <span className="font-semibold">Cancellations:</span> We require at least 24 hours’ notice for cancellations or rescheduling. Missed appointments may incur a fee.
                    </li>
                    <li>
                        <span className="font-semibold">Payment:</span> Payment is due at the time of service. We accept cash, credit/debit cards, and online payments.
                    </li>
                    <li>
                        <span className="font-semibold">Results:</span> Individual results may vary. Multiple sessions may be required for optimal results. No guarantees are made regarding outcomes.
                    </li>
                    <li>
                        <span className="font-semibold">Aftercare:</span> Follow all aftercare instructions provided by your therapist to ensure the best results and minimize risks.
                    </li>
                    <li>
                        <span className="font-semibold">Health & Safety:</span> For your safety, please inform us of any changes to your health status before each session.
                    </li>
                    <li>
                        <span className="font-semibold">Personal Belongings:</span> We are not responsible for loss or damage to personal items during your visit.
                    </li>
                    <li>
                        <span className="font-semibold">Right to Refuse Service:</span> We reserve the right to refuse service to anyone for inappropriate behavior or health concerns.
                    </li>
                    <li>
                        <span className="font-semibold">Privacy:</span> All client information is kept confidential and used solely for treatment and booking purposes.
                    </li>
                </ol>
            </div>
            <style>
                {`
                    .animate-fade-in-down {
                        animation: fadeInDown 0.6s cubic-bezier(.4,0,.2,1);
                    }
                    @keyframes fadeInDown {
                        0% {
                            opacity: 0;
                            transform: translateY(-40px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
        </div>
    );
}