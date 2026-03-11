import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    trigger: "What is the typical timeline for a project?",
    content:
      "Most MVP or marketing sites take 2–4 weeks. Complex full-stack applications or SaaS platforms typically range from 6–12 weeks depending on the feature set.",
  },
  {
    value: "item-2",
    trigger: "How do you determine project pricing?",
    content:
      "We offer both fixed-price packages for defined scopes and value-based pricing for custom builds. Every project starts with a discovery phase to ensure we provide an accurate, transparent quote.",
  },
  {
    value: "item-3",
    trigger: "Do I own the source code once the project is finished?",
    content:
      "Absolutely. Unlike 'website builder' platforms that lock you in, we provide full ownership of the repository and assets upon project completion.",
  },
  {
    value: "item-4",
    trigger: "Will my site be mobile-friendly?",
    content:
      "Yes. Every line of code we write is 'mobile-first ', ensuring your site looks and functions perfectly on everything from an iPhone to a 4K monitor.",
  },
  {
    value: "item-5",
    trigger: "Do you provide ongoing maintenance and support?",
    content:
      "Yes, we offer monthly maintenance retainers that cover hosting management, security updates, and minor feature tweaks so you can focus on your business.",
  },
];

export default function FaqSection() {
  return (
    <section>
      <Accordion
        type="multiple"
        defaultValue={["item-1"]}
        className="w-full my-20"
      >
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
