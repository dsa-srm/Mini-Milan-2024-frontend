import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./faqData";
import '../Dashboard/Dashboard.css'
import './faq.css'

const Faq = () => {
	return (
		<div className="h-full flex flex-col justify-center items-center bg-[#130c1a] dashboardContainer hide-scrollbar">
			<h1 className=" text-8xl  text-white font-alinsa">FAQ</h1>
			<Accordion type="single" collapsible className="md:w-[80vw] bg-gradient-to-r from-indigo-400 to-indigo-50 m-10 rounded h-[70vh] overflow-scroll font-unbounded  ">
				{faqs.map((faq, index) => (
					<AccordionItem value={index + ""} className="text-left ">
						<AccordionTrigger className="text-left py-10 text-xl pl-5">{faq.question}</AccordionTrigger>
						<AccordionContent className="text-left bg-gradient-to-r from-indigo-50 to-indigo-400 py-10 text-lg pl-5">{faq.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default Faq;
