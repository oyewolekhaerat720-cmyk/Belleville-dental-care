import { FaCheck } from "react-icons/fa"
import aboutImg1 from "../assets/aboutImg1.jpg"
import aboutImg2 from "../assets/aboutImg.jpg"
import team1 from "../assets/team1.jpg"
import team2 from "../assets/team2.jpg"
import team3 from "../assets/team3.jpg"
import team4 from "../assets/team4.jpg"
import chooseImg1 from "../assets/chooseImg.jpg"
import chooseImg2 from "../assets/chooseImg2.jpg"
import chooseImg3 from "../assets/clinic.jpg"

function AboutSection({ onBookClick }) {
  const teamMembers = [
    {
      name: "Dr. Oyewole Khaerat",
      role: "Lead Dentist",
      image: team1,
    },
    {
      name: "Dr. Oyedeji Mhardiyyah",
      role: "Cosmetic Dentist",
      image: team2,
    },
    {
      name: "Dr. Solomon Adebayo",
      role: "Pediatric Specialist",
      image: team3,
    },
    {
      name: "Dr. Daniel Okafor",
      role: "Dental Hygienist",
      image: team4,
    },
  ]

  const features = [
    {
      title: "Experienced Professionals",
      text: "Skilled care backed by years of trusted dental experience.",
    },
    {
      title: "Advanced Technology",
      text: "Modern tools ensure accurate and efficient treatment.",
    },
    {
      title: "Personalized Treatment",
      text: "Custom care plans made to fit your smile and lifestyle.",
    },
    {
      title: "Family-Friendly",
      text: "Welcoming space for kids, teens, adults and seniors.",
    },
  ]

  const highlights = [
    "Personalized Treatment Plans",
    "State-of-the-Art Technology",
    "Gentle Care for Kids and Adults",
    "Flexible Appointment Scheduling",
  ]

  return (
    <section id="about" className="bg-white">
      {/* TOP ABOUT AREA */}
      <div className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="grid grid-cols-[0.95fr_1.05fr] gap-4">
            <div className="overflow-hidden rounded-[28px] shadow-sm">
              <img
                src={aboutImg1}
                alt="Dentist with smiling patient"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-8 overflow-hidden rounded-[28px] shadow-sm">
              <img
                src={aboutImg2}
                alt="Dental consultation"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              About Us
            </p>

            <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Exceptional Dental Care With a Personal Touch
            </h2>

            <p className="mb-6 leading-7 text-slate-600">
              We provide high-quality dental care for the whole family in a
              calm, welcoming environment. From routine checkups to advanced
              treatments, our team focuses on comfort, trust and lasting oral
              health.
            </p>

            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs text-white">
                    <FaCheck />
                  </span>
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onBookClick}
              className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* TEAM AREA */}
      <div className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
            Meet Our Team
          </p>

          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            The Experts Behind Every Healthy Smile
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Our experienced professionals are dedicated to delivering gentle,
            personalized care and making every visit as comfortable and
            reassuring as possible.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/40 to-transparent" />
                </div>

                <div className="px-5 pb-6 pt-5 text-left">
                  <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Dental Expert
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US AREA */}
      <div className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              Why Choose Us
            </p>

            <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Trusted Care Designed Around Your Comfort
            </h2>

            <p className="mb-8 max-w-xl leading-7 text-slate-600">
              Choosing the right dental clinic matters. We combine experience,
              modern technology and a patient-first approach to make every visit
              efficient, comfortable and tailored to your unique needs.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white"
                >
                  <h3 className="mb-2 text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-[22px] shadow-sm">
                <img
                  src={chooseImg1}
                  alt="Patient receiving dental care"
                  className="h-44 w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[22px] shadow-sm">
                <img
                  src={chooseImg2}
                  alt="Dental procedure close-up"
                  className="h-56 w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-[22px] shadow-sm">
              <img
                src={chooseImg3}
                alt="Modern dental clinic interior"
                className="h-full min-h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;