import ContactForm from "@/components/ContactForm";
import SupportCategories from "@/components/SupportCategories";
import FaqSection from "@/components/FaqSection";
import { Navbar } from "@/components/Navbar";

export default function Page() {
  return (
      <>
          <Navbar />
      <div className="min-h-screen ">
      {/* Hero */}
      <div className="py-36 text-center bg-amber-950 dark:bg-gray-900">
        <h1 className="text-4xl text-white font-bold">Need Help?</h1>
        <p className="mt-3 text-white   max-w-xl mx-auto">
          We’re here to assist you with orders, payments, refunds, or any technical issues.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <SupportCategories />
        <ContactForm />
        <FaqSection />
      </div>
    </div>
      </>
  );
}