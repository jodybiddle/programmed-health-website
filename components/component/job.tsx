import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "./header";
import Footer from "./footer";

export default function Jobs() {
  return (
    <div className="bg-[rgb(12,35,64)] text-white min-h-[100dvh] flex flex-col">
      <Header />
      <main className="flex-1 container px-4 md:px-6 py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center text-center">
        <div className="space-x-6 flex items-center justify-between">
          <div className="max-w-2xl space-y-6 text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Positions available
            </h1>
            <p className="text-lg md:text-xl text-[rgba(255,255,255,0.8)]">
              We have jobs available for registered nurses, enrolled nurses, and
              personal services workers across the country. Work in Perth,
              Sydney, Melbourne, Adelaide, or Brisbane as well as many regional
              placements available. Join our team and start start working now.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button className="bg-[rgb(132,189,0)] text-[rgb(12,35,64)] font-medium px-8 py-3 rounded-md hover:bg-[rgb(106,152,0)]">
                Apply Now
              </Button>
              <Link
                href="/about"
                className="text-[rgb(132,189,0)] font-medium hover:underline"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/jobs.jpg"
              alt="Nurse"
              width={300}
              height={300}
              className="hidden md:block rounded-lg"
              style={{ aspectRatio: "700/900", objectFit: "cover" }}
            />
          </div>
          {/* <div>
            <img
              src="/jobs.jpg"
              alt="Nurse"
              width={300}
              height={300}
              className="hidden md:block rounded-lg"
              style={{ aspectRatio: "2000/2150", objectFit: "cover" }}
            />
          </div> */}
        </div>
      </main>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[rgba(255,255,255,0.05)]">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Jobs Available</h2>
            <p className="max-w-3xl mx-auto text-[rgba(255,255,255,0.8)]">
              We have a variety of job opportunities available across Australia.
              Apply now for immediate start.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-[rgba(255,255,255,0.1)] rounded-lg p-6 space-y-4">
              <HospitalIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Enrolled Nurses Wanted</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Enrolled nurses wanted for casual work in Perth, Sydney,
                Melbourne, Adelaide, and Brisbane. Apply now for immediate
                start.
              </p>
              <Button className="bg-[rgb(132,189,0)] text-[rgb(12,35,64)] font-medium px-6 py-2 rounded-md hover:bg-[rgb(106,152,0)]">
                Apply Now
              </Button>
            </div>
            <div className="bg-[rgba(255,255,255,0.1)] rounded-lg p-6 space-y-4">
              <HospitalIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">
                Registered Nurses Wanted
              </h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Registered nurses wanted for casual work in Perth, Sydney,
                Melbourne, Adelaide, and Brisbane. Apply now for immediate
                start.
              </p>
              <Button className="bg-[rgb(132,189,0)] text-[rgb(12,35,64)] font-medium px-6 py-2 rounded-md hover:bg-[rgb(106,152,0)]">
                Apply Now
              </Button>
            </div>
            <div className="bg-[rgba(255,255,255,0.1)] rounded-lg p-6 space-y-4">
              <HospitalIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">
                Personal Care Workers Wanted
              </h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Personal care workers wanted for casual work across Perth,
                Sydney, Melbourne, Adelaide, and Brisbane. Apply now for
                immediate start.
              </p>
              <Button className="bg-[rgb(132,189,0)] text-[rgb(12,35,64)] font-medium px-6 py-2 rounded-md hover:bg-[rgb(106,152,0)]">
                Apply Now
              </Button>
            </div>
            <div className="bg-[rgba(255,255,255,0.1)] rounded-lg p-6 space-y-4">
              <HospitalIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">
                Personal Services Workers Wanted
              </h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Personal services workers wanted for casual work in Perth,
                Sydney, Melbourne, Adelaide, and Brisbane. Apply now for
                immediate start.
              </p>
              <Button className="bg-[rgb(132,189,0)] text-[rgb(12,35,64)] font-medium px-6 py-2 rounded-md hover:bg-[rgb(106,152,0)]">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[rgba(255,255,255,0.05)]">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose Programmed Health Professionals?
            </h2>
            <p className="max-w-3xl mx-auto text-[rgba(255,255,255,0.8)]">
              We are committed to providing the best healthcare staffing
              solutions in Australia. Our team of experts works tirelessly to
              match the right healthcare professionals with the right
              opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[rgba(255,255,255,0.1)] rounded-lg p-6 space-y-4">
              <BriefcaseIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">
                Wide Range of Opportunities
              </h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We have jobs available for registered nurses, enrolled nurses,
                and personal services workers across Australia.
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.1)] rounded-lg p-6 space-y-4">
              <ClipboardIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Streamlined Onboarding</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Our efficient onboarding process ensures you can start your new
                role quickly and seamlessly.
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.1)] rounded-lg p-6 space-y-4">
              <WalletIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Competitive Rates</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We offer competitive rates and excellent benefits to ensure our
                healthcare professionals are well-compensated.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[rgba(255,255,255,0.05)]">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Financial Benefits
            </h2>
            <p className="max-w-3xl mx-auto text-[rgba(255,255,255,0.8)]">
              At Programmed Health Professionals, we offer a range of financial
              benefits to support our healthcare professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[rgba(255,255,255,0.1)] rounded-lg p-6 space-y-4">
              <WalletIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Weekly Pay</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We offer weekly pay to ensure our healthcare professionals have
                a consistent and reliable income.
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.1)] rounded-lg p-6 space-y-4">
              <DollarSignIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Best Rates</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We provide the best rates in the industry to ensure our
                healthcare professionals are well-compensated for their hard
                work.
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.1)] rounded-lg p-6 space-y-4">
              <BriefcaseIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Excellent Benefits</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                In addition to competitive rates, we offer a range of excellent
                benefits to support our healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[rgba(255,255,255,0.05)]">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Benefits of Working with Us
            </h2>
            <p className="max-w-3xl mx-auto text-[rgba(255,255,255,0.8)]">
              At Programmed Health Professionals, we are committed to supporting
              our healthcare professionals every step of the way.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[rgba(255,255,255,0.1)] rounded-lg p-6 space-y-4">
              <CalendarIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Flexible Scheduling</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We offer flexible scheduling options to accommodate your needs
                and preferences.
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.1)] rounded-lg p-6 space-y-4">
              <BriefcaseIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Career Development</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We provide ongoing training and support to help you grow your
                skills and advance your career.
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.1)] rounded-lg p-6 space-y-4">
              <ClipboardIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Personalized Support</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Our dedicated team is here to support you every step of the way,
                from onboarding to placement and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function BriefcaseIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CalendarIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClipboardIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function DollarSignIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function HospitalIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 18h-4" />
      <path d="M14 8h-4" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  );
}

function WalletIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
