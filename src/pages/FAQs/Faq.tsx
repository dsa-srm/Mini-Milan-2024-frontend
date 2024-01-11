import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./faqData";

const Faq = () => {
	return (
		<div className="h-full flex flex-col justify-center items-center bg-[#130c1a] ">
			<h1 className=" text-5xl  text-white font-alinsa">FAQ</h1>
			<Accordion type="single" collapsible className="md:w-[80vw] bg-orange-100 m-10 rounded h-[70vh] overflow-scroll  ">
				{faqs.map((faq, index) => (
					<AccordionItem value={index + ""} className="text-left ">
						<AccordionTrigger className="text-left py-10 text-xl pl-5">{faq.question}</AccordionTrigger>
						<AccordionContent className="text-left bg-orange-200 py-10 text-lg pl-5">{faq.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default Faq;
