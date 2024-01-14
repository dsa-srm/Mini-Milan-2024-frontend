import { useState } from 'react';
import useResendEmail from "@/features/Bookings/useResendEmail";
import ButtonSpinner from "@/components/Spinners/ButtonSpinner";
import useUser from "@/features/Authentication/useUser";
import { useToast } from "@/components/ui/use-toast"; // Import useToast

const ResendEmailButton = () => {
    const { isLoading, resendEmail } = useResendEmail();
    const [canResend, setCanResend] = useState(true);
    const { user } = useUser();
    const { toast } = useToast(); // Use the toast hook

    if (isLoading) return <div>Loading...</div>;

    const handleResendEmail = () => {
        if (isLoading) return;
       
        if (!canResend) {
            // Show toast message
            toast({
                variant: "error",
                title: "Wait Required",
                description: "You can resend the email after 10 minutes."
            });
            console.log("You can resend the email after 10 minutes.");
            return;           
        }

        resendEmail({
            email: user.email,
            user_id: user.id,
            ticket_id: user.booking_info.ticket_id, 
            payment_id: user.booking_info.payment_id 
        });

        setCanResend(false);
        setTimeout(() => {
            setCanResend(true);
        }, 600000); // 10 minutes cooldown
    };

    return (
        <button
            onClick={handleResendEmail}
            disabled={isLoading}
            className="resendEmailButtonStyle bg-yellow-700/[.8] transition-all duration-500 text-white py-2 px-4 mt-5 rounded-[.6rem] hover:bg-yellow-400/[.8] text-[1.5rem] font-bold font-unbounded tracking-tight"
        >
            {isLoading ? <ButtonSpinner /> : "Resend Email"}
        </button>
    );
};

export default ResendEmailButton;
