import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./faqData";

const Faq = () => {
	return (
		<div className="h-full flex justify-around items-center">
			<Accordion type="single" collapsible className="w-full">
				{faqs.map((faq, index) => (
					<AccordionItem value={index + ""}>
						<AccordionTrigger>{faq.question}</AccordionTrigger>
						<AccordionContent>{faq.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default Faq;
