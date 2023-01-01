import cn from "@styles/cssUtils";
import ContactFormComponent from "./ContactForm";

export default {
  title: "Components/Forms/ContactForm",
  component: ContactFormComponent,
};

export const ContactForm = () => (
  <div className={cn("p-8")}>
    <ContactFormComponent />
  </div>
);
