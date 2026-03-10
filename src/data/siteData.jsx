import {
  FaTooth,
  FaShieldAlt,
  FaSmile,
  FaBookMedical,
} from "react-icons/fa"
import {
  MdMedicalServices,
  MdOutlineCleaningServices,
  MdEmergency,
} from "react-icons/md"
import toothpasteImg from "../assets/toothpaste.jpg"
import toothbrushImg from "../assets/toothbrush.jpg"
import kidspackImg from "../assets/kidspack.jpg"
import electrictoothbrushImg from "../assets/electrictoothbrush.jpg"
import orthoDentalkitImg from "../assets/ortho-dentalkit.jpg"
import whiteningkitImg from "../assets/Teethwhiteningkit.jpg"
import mouthguardImg from "../assets/mouthguard.jpg";
import waterflosserImg from "../assets/waterflosser.jpg";
import whiteningPenImg from "../assets/whiteningpen.jpg";
import fluorideRinseImg from "../assets/fluorideRinse.jpg";


export const services = [
  {
    id: "general-checkup",
    title: "General Checkup",
    shortLabel: "General Checkup",
    desc: "Routine dental exams and preventive care to keep your smile healthy all year.",
    icon: <MdMedicalServices className="text-xl text-slate-800" />,
    longDesc:
      "Our general checkup includes a full oral examination, gum health assessment and preventive recommendations tailored to your needs. We focus on early detection so small issues do not become major problems.",
    benefits: [
      "Early detection of dental issues",
      "Personalized oral health advice",
      "Preventive care planning",
      "Routine monitoring for long-term health",
    ],
  },
  {
    id: "teeth-cleaning",
    title: "Teeth Cleaning",
    shortLabel: "Teeth Cleaning",
    desc: "Professional cleaning to remove plaque and maintain fresh breath and healthy gums.",
    icon: <MdOutlineCleaningServices className="text-xl text-slate-800" />,
    longDesc:
      "Professional teeth cleaning helps remove plaque and tartar buildup that regular brushing may miss. It helps reduce gum disease risk and supports fresher breath and healthier gums.",
    benefits: [
      "Plaque and tartar removal",
      "Improved gum health",
      "Fresher breath",
      "Preventive support against decay",
    ],
  },
  {
    id: "fillings",
    title: "Fillings",
    shortLabel: "Fillings",
    desc: "Tooth-colored fillings designed for durability and a natural appearance.",
    icon: <FaShieldAlt className="text-xl text-slate-800" />,
    longDesc:
      "We provide durable tooth-colored fillings to restore teeth affected by cavities or minor fractures. The result is functional, natural-looking restoration with a comfort-focused approach.",
    benefits: [
      "Natural tooth-colored appearance",
      "Restores function and comfort",
      "Durable materials",
      "Minimally invasive treatment",
    ],
  },
  {
    id: "root-canal",
    title: "Root Canal",
    shortLabel: "Root Canal",
    desc: "Comfort-focused treatment to save infected teeth and relieve pain.",
    icon: <MdMedicalServices className="text-xl text-slate-800" />,
    longDesc:
      "Root canal treatment is used to treat infection inside a tooth and preserve the natural tooth structure. We prioritize comfort and clear explanations throughout the process.",
    benefits: [
      "Pain relief from infected tooth",
      "Saves natural tooth",
      "Prevents spread of infection",
      "Restores chewing comfort",
    ],
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    shortLabel: "Teeth Whitening",
    desc: "Cosmetic whitening options for a brighter and more confident smile.",
    icon: <FaSmile className="text-xl text-slate-800" />,
    longDesc:
      "Our whitening options are designed to safely improve tooth brightness and boost confidence. We offer guidance on the most suitable whitening approach based on your oral condition and goals.",
    benefits: [
      "Brighter smile appearance",
      "Confidence boost",
      "Professional guidance",
      "Safe treatment options",
    ],
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    shortLabel: "Orthodontics",
    desc: "Braces and alignment solutions for better bite and straighter teeth.",
    icon: <FaTooth className="text-xl text-slate-800" />,
    longDesc:
      "Orthodontic care helps align teeth and improve bite function. We assess your needs and recommend suitable options for comfort, esthetics and long-term results.",
    benefits: [
      "Straighter teeth",
      "Improved bite alignment",
      "Better oral hygiene access",
      "Improved smile esthetics",
    ],
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    shortLabel: "Dental Implants",
    desc: "Long-term tooth replacement solutions with function and aesthetics in mind.",
    icon: <FaTooth className="text-xl text-slate-800" />,
    longDesc:
      "Dental implants provide a long-term replacement option for missing teeth. Treatment planning focuses on function, comfort and a natural appearance.",
    benefits: [
      "Long-term replacement solution",
      "Improved chewing function",
      "Natural-looking result",
      "Supports jawbone health",
    ],
  },
  {
    id: "emergency-care",
    title: "Emergency Care",
    shortLabel: "Emergency Care",
    desc: "Fast response for urgent dental pain, trauma and unexpected issues.",
    icon: <MdEmergency className="text-xl text-slate-800" />,
    longDesc:
      "Emergency dental care is available for urgent situations such as severe pain, trauma, swelling or broken teeth. We provide quick assessment and immediate care guidance.",
    benefits: [
      "Rapid response for urgent issues",
      "Pain management support",
      "Trauma care assessment",
      "Same-day guidance where possible",
    ],
  },
]

// testimonials data
export const testimonials = [
  {
    id: 1,
    name: "Oyewole Selim",
    role: "Regular Patient",
    location: "Ikeja",
    rating: 5,
    quote:
      "The staff were friendly and professional. My appointment was smooth and the clinic felt very welcoming.",
  },
  {
    id: 2,
    name: "Oyewole Zeenat",
    role: "First-time visitor",
    location: "Victoria Island",
    rating: 5,
    quote:
      "Excellent dental care and clear explanations. I felt comfortable throughout my treatment.",
  },
  {
    id: 3,
    name: "Oyewole Risquat",
    role: "Mother of two",
    location: "Lekki",
    rating: 4,
    quote:
      "Clean clinic, kind team and great service. I would recommend Belleville Dental to anyone.",
  },
  {
    id: 4,
    name: "Adebayo Tunde",
    role: "Emergency patient",
    location: "Yaba",
    rating: 5,
    quote:
      "I had a terrible toothache and they saw me immediately. The pain relief was instant and the follow-up care was excellent.",
  },
  {
    id: 5,
    name: "Chioma Nnamdi",
    role: "Teenager (braces)",
    location: "Surulere",
    rating: 5,
    quote:
      "My daughter got her braces here and the orthodontist was so patient with her. She actually looks forward to her appointments now!",
  },
  {
    id: 6,
    name: "Mr. & Mrs. Okafor",
    role: "Family of four",
    location: "Ikeja GRA",
    rating: 5,
    quote:
      "We all go to Belleville – from the kids to grandparents. They treat everyone with such care and respect.",
  },
  {
    id: 7,
    name: "Fatima Bello",
    role: "Whitening patient",
    location: "Victoria Island",
    rating: 5,
    quote:
      "My smile transformation was amazing – I can’t stop recommending them!",
  },
  {
    id: 8,
    name: "Sam Ade",
    role: "Long-time patient",
    location: "Lekki",
    rating: 5,
    quote:
      "Always a pleasant experience, highly professional and caring staff.",
  },
  {
    id: 9,
    name: "Ijeoma Uche",
    role: "Dental Hygienist",
    location: "Mushin",
    rating: 5,
    quote:
      "As someone who works in dental care, I appreciated their attention to detail and friendly atmosphere. Highly recommended!",
  },
];




export const products = [
  {
    id: "whitening",
    title: "Belleville Whitening Pro",
    price: "₦45,000",
    image: whiteningkitImg,
    desc: "Clinical-grade whitening kit with LED accelerator for home use.",
    features: [
      "16% Hydrogen Peroxide Gel",
      "Desensitizing Serum",
      "LED Light",
      "3 Week Supply",
    ],
  },
  {
    id: "toothpaste",
    title: "Sensitive Care Toothpaste",
    price: "₦8,500",
    image: toothpasteImg,
    desc: "Formulated with potassium nitrate for rapid relief from sensitivity.",
    features: [
      "24hr Protection",
      "Fluoride Enriched",
      "Mint Flavor",
      "Non-Abrasive",
    ],
  },
  {
    id: "brush",
    title: "Soft Bristle Toothbrush",
    price: "₦3,500",
    image: toothbrushImg,
    desc: "Gentle soft-bristle brush for effective cleaning without irritating gums.",
    features: [
      "Soft bristles",
      "Ergonomic handle",
      "Gum-friendly",
      "Daily use",
    ],
  },
  {
    id: "kids",
    title: "Kids Smile Pack",
    price: "₦6,000",
    image: kidspackImg,
    desc: "Child-friendly oral care pack with mild flavor and safe fluoride content.",
    features: [
      "Kids toothpaste",
      "Small brush head",
      "Mild flavor",
      "Age 3+",
    ],
  },
  {
    id: "electric",
    title: "Electric Toothbrush Starter",
    price: "₦28,000",
    image: electrictoothbrushImg,
    desc: "Rechargeable electric toothbrush with multiple cleaning modes.",
    features: [
      "Rechargeable battery",
      "2 cleaning modes",
      "2 brush heads",
      "Built-in timer",
    ],
  },
  {
    id: "ortho",
    title: "OrthoClean System",
    price: "₦22,000",
    image: orthoDentalkitImg,
    desc: "Complete care kit for braces and aligners.",
    features: [
      "Interdental Brushes",
      "Wax Strips",
      "Fluoride Rinse",
      "Travel Case",
    ],
  },

  {
    id: "night-guard",
    title: "Custom-Fit Night Guard",
    price: "₦15,000",
    image: mouthguardImg,
    desc: "Protect your teeth from grinding (bruxism) with this moldable, BPA-free night guard.",
    features: [
      "Boil-and-bite custom fit",
      "Comfortable & durable",
      "Includes storage case",
      "For upper or lower arch",
    ],
  },
  {
    id: "water-flosser",
    title: "Cordless Water Flosser",
    price: "₦18,500",
    image: waterflosserImg,
    desc: "Remove plaque and debris with a powerful, rechargeable water flosser.",
    features: [
      "300ml water tank",
      "3 pressure modes",
      "Includes 4 jet tips",
      "USB rechargeable",
    ],
  },
  {
    id: "whitening-pen",
    title: "On-the-Go Whitening Pen",
    price: "₦7,200",
    image: whiteningPenImg,
    desc: "Instant application for touch-ups anytime, anywhere.",
    features: [
      "No LED needed",
      "Results in 3 days",
      "Easy twist application",
      "Sensitive-teeth friendly",
    ],
  },
  {
    id: "fluoride-rinse",
    title: "Alcohol-Free Fluoride Rinse",
    price: "₦4,200",
    image: fluorideRinseImg,
    desc: "Daily mouthwash that strengthens enamel and fights cavities.",
    features: [
      "0% alcohol",
      "Fresh mint taste",
      "500ml bottle",
      "For all ages",
    ],
  },
];

export const researchPapers = [
  {
    id: 1,
    title: "Efficacy of Nano-Hydroxyapatite in Remineralization",
    authors: "Adeyemi T., Okonkwo C., Bello A.",
    journal: "Journal of Clinical Dentistry",
    year: "2024",
    volume: "35(2)",
    pages: "112-118",
    doi: "10.1234/jcd.2024.35.2.112",
    fullTextLink: "https://example.com/research/nano-hydroxyapatite-remineralization",
    abstract:
      "A 12-month randomized controlled trial observing the effects of nano-hydroxyapatite toothpaste on early caries lesions in 150 adolescents. Results showed significant remineralization compared to fluoride-only controls.",
    methodology:
      "150 adolescents (12-18 years) with early caries lesions were randomly assigned to nano-hydroxyapatite toothpaste (n=75) or fluoride-only control (n=75). Lesions were assessed using quantitative light-induced fluorescence at baseline, 6, and 12 months.",
    keyFindings:
      "The nano-hydroxyapatite group showed 42% greater remineralization than control (p<0.001). No adverse events were reported. Subgroup analysis revealed higher efficacy in patients with poor oral hygiene.",
    conclusion:
      "Nano-hydroxyapatite toothpaste is safe and effective for remineralizing early caries lesions in adolescents, offering a promising alternative to fluoride-only formulations.",
    funding:
      "Supported by a grant from the Nigerian Dental Research Foundation (Grant #NDRF-2023-08).",
    conflictOfInterest: "The authors declare no competing interests.",
  },
  {
    id: 2,
    title: "Patient Anxiety Levels in Open vs. Closed Bay Clinics",
    authors: "Okafor E., Nnamdi C., Adebayo T.",
    journal: "International Dental Journal",
    year: "2023",
    volume: "73(4)",
    pages: "245-251",
    doi: "10.1016/j.identj.2023.04.005",
    fullTextLink: "https://example.com/research/patient-anxiety-open-vs-closed-bay",
    abstract:
      "Comparative analysis of patient cortisol levels and self-reported anxiety in different clinical layouts. Open-plan clinics were associated with lower anxiety scores (p<0.05) among adult patients.",
    methodology:
      "120 adult patients were randomly assigned to treatment in an open-bay clinic (n=60) or private enclosed operatory (n=60). Salivary cortisol was measured pre- and post-treatment; anxiety was assessed using the Modified Dental Anxiety Scale.",
    keyFindings:
      "Open-bay patients had 23% lower post-treatment cortisol (p=0.02) and reported 18% less anxiety. The effect was stronger in first-time visitors.",
    conclusion:
      "Open-plan clinic layouts may reduce patient anxiety during routine dental procedures, possibly due to increased visual distraction and social presence.",
    funding: "Funded by the International Association for Dental Research (IADR).",
    conflictOfInterest: "None declared.",
  },
  {
    id: 3,
    title: "Longevity of Bioactive Glass Ionomers",
    authors: "Balogun F., Eze N., Martins K.",
    journal: "Materials in Dentistry",
    year: "2023",
    volume: "18(3)",
    pages: "89-97",
    doi: "10.1002/mtd.2023.18.3.89",
    fullTextLink: "https://example.com/research/bioactive-glass-ionomers-longevity",
    abstract:
      "Five-year follow-up study on wear resistance of bioactive glass ionomer restorations in posterior teeth. Survival rate was 92% at 5 years, comparable to conventional composites.",
    methodology:
      "80 class II restorations were placed in 40 patients (mean age 35) using bioactive glass ionomer. Annual assessments included USPHS criteria and digital wear analysis.",
    keyFindings:
      "At 5 years, 92% of restorations were clinically acceptable. Annual wear rate averaged 25µm, similar to composite controls. No secondary caries were detected.",
    conclusion:
      "Bioactive glass ionomers offer durable, long-term restorations for posterior teeth with wear resistance comparable to composites.",
    funding: "Materials provided by manufacturer (GC Corporation) with no role in study design.",
    conflictOfInterest:
      "Dr. Balogun has received speaking honoraria from GC, but declares no conflict in this study.",
  },
  {
    id: 4,
    title: "Effectiveness of Probiotics in Reducing Gingivitis",
    authors: "Fashina A., Bello F., Oyewole K.",
    journal: "Journal of Periodontal Research",
    year: "2024",
    volume: "59(1)",
    pages: "22-30",
    doi: "10.1111/jre.13245",
    fullTextLink: "https://example.com/research/probiotics-reducing-gingivitis",
    abstract:
      "A double-blind placebo-controlled trial of Lactobacillus reuteri lozenges in 80 adults with mild gingivitis. Probiotic group showed 35% greater reduction in bleeding on probing after 12 weeks.",
    methodology:
      "80 adults with mild gingivitis were randomized to probiotic lozenge (L. reuteri) or placebo twice daily for 12 weeks. Bleeding on probing (BOP), plaque index, and gingival index were recorded at baseline, 6, and 12 weeks.",
    keyFindings:
      "BOP decreased by 42% in probiotic group vs. 31% in placebo (p=0.01). Gingival index improved significantly. Salivary levels of inflammatory markers (IL-1β) were lower in probiotic group.",
    conclusion:
      "L. reuteri lozenges are effective adjuncts to mechanical debridement for reducing gingival inflammation.",
    funding: "BioGaia AB provided probiotic lozenges and placebo but had no input on data analysis.",
    conflictOfInterest: "None.",
  },
  {
    id: 5,
    title: "3D Printing of Surgical Guides for Implant Placement",
    authors: "Okonkwo C., Adeyemi T., Nnamdi C.",
    journal: "Journal of Oral Implantology",
    year: "2023",
    volume: "49(4)",
    pages: "301-308",
    doi: "10.1563/aaid-joi-D-23-00045",
    fullTextLink: "https://example.com/research/3d-printing-surgical-guides",
    abstract:
      "Accuracy assessment of in-house 3D-printed surgical guides vs. conventional guides in 30 implant cases. Mean deviation at implant apex was 0.4mm for printed guides, within clinically acceptable range.",
    methodology:
      "30 patients requiring single implants were randomly assigned to guides produced by in-house 3D printing (n=15) or conventional lab-fabricated guides (n=15). Post-op CBCT was superimposed on planned position.",
    keyFindings:
      "Mean angular deviation: 2.1° (3D) vs. 2.3° (conventional). Apical deviation: 0.4mm vs. 0.5mm. Differences were not statistically significant. Time from scan to surgery: 2 days (3D) vs. 14 days (conventional).",
    conclusion:
      "In-house 3D-printed surgical guides are as accurate as conventional guides and significantly reduce turnaround time.",
    funding: "Printer and materials provided by Formlabs under a research agreement.",
    conflictOfInterest:
      "Drs. Okonkwo and Adeyemi have received equipment support from Formlabs.",
  },
  {
    id: 6,
    title: "Tele-dentistry for Post-Operative Follow-up",
    authors: "Eze N., Balogun F., Martins K.",
    journal: "Telemedicine and e-Health",
    year: "2024",
    volume: "30(2)",
    pages: "187-194",
    doi: "10.1089/tmj.2023.0456",
    fullTextLink: "https://example.com/research/teledentistry-post-operative-follow-up",
    abstract:
      "Randomized trial comparing video follow-up vs. in-person visits after third molar extractions. Patient satisfaction and complication detection were similar, while cost savings were significant.",
    methodology:
      "120 patients undergoing third molar extraction were randomized to video follow-up at day 3 and 7 (n=60) or in-person visits (n=60). Complication rates, pain scores, and satisfaction were recorded.",
    keyFindings:
      "Complication detection (dry socket, infection) was identical (6% in both groups). Patient satisfaction was 4.7/5 (video) vs. 4.8/5 (in-person). Travel and time costs were reduced by 78% in video group.",
    conclusion:
      "Video follow-up is safe, effective, and preferred by patients after routine third molar surgery.",
    funding: "Supported by the Nigerian Telemedicine Initiative.",
    conflictOfInterest: "None.",
  },
  {
    id: 7,
    title: "Silver Diamine Fluoride for Root Caries in Elderly",
    authors: "Bello A., Okafor E., Adeyemi T.",
    journal: "Gerodontology",
    year: "2023",
    volume: "40(3)",
    pages: "215-222",
    doi: "10.1111/ger.12678",
    fullTextLink: "https://example.com/research/sdf-root-caries-elderly",
    abstract:
      "18-month study of SDF application in 120 nursing home residents. Caries arrest rate was 78% at 18 months, with minimal adverse effects.",
    methodology:
      "120 elderly nursing home residents with root caries lesions received annual SDF application. Lesions were assessed at 6, 12, and 18 months for activity.",
    keyFindings:
      "78% of lesions were arrested at 18 months. Factors associated with failure were poor oral hygiene and xerostomia. Temporary black staining occurred in 92% but was well tolerated.",
    conclusion:
      "Annual SDF application is an effective, minimally invasive strategy for managing root caries in dependent elderly.",
    funding: "Government grant for geriatric oral health.",
    conflictOfInterest: "None.",
  },
  {
    id: 8,
    title: "AI-Assisted Detection of Proximal Caries",
    authors: "Nnamdi C., Okonkwo C., Fashina A.",
    journal: "Dentomaxillofacial Radiology",
    year: "2024",
    volume: "53(1)",
    pages: "20230345",
    doi: "10.1259/dmfr.20230345",
    fullTextLink: "https://example.com/research/ai-assisted-detection-proximal-caries",
    abstract:
      "Deep learning model for detecting proximal caries on bitewing radiographs. Sensitivity was 92% and specificity 89%, outperforming general dentists (p<0.01).",
    methodology:
      "A convolutional neural network was trained on 5,000 annotated bitewings and tested on 1,000 images. Performance was compared to 10 general dentists.",
    keyFindings:
      "AI achieved sensitivity 92%, specificity 89%, AUC 0.96. Dentists averaged sensitivity 78%, specificity 91% (p<0.01 for sensitivity). AI reduced false negatives by 35%.",
    conclusion:
      "AI assistance can significantly improve detection of proximal caries, reducing missed diagnoses.",
    funding: "Research supported by the Nigerian Ministry of Health AI in Healthcare grant.",
    conflictOfInterest:
      "Drs. Nnamdi and Okonkwo have consulted for a dental AI startup, but this study was independently conducted.",
  },
  {
    id: 9,
    title: "Microplastics in Commercial Toothpastes",
    authors: "Adebayo K., Bello S., Okonkwo T.",
    journal: "Environmental Health Perspectives",
    year: "2024",
    volume: "132(3)",
    pages: "45-52",
    doi: "10.1289/EHP14523",
    fullTextLink: "https://example.com/research/microplastics-toothpaste",
    abstract:
      "Analysis of 45 commercial toothpaste brands for microplastic content. 67% contained microplastics; eco-friendly formulations showed significantly lower levels.",
    methodology:
      "Toothpaste samples were analyzed using µFTIR spectrometry to identify and quantify microplastics. Concentrations were compared across brands, formulations, and manufacturing countries.",
    keyFindings:
      "Mean microplastic concentration: 10.9 mg/tube. 30 of 45 brands (67%) contained microplastics. Natural and eco-friendly formulations had 78% lower concentrations. Common polymers were polyethylene and polypropylene.",
    conclusion:
      "Significant microplastic contamination exists in commercial toothpastes. Regulatory standards and eco-friendly alternatives are recommended.",
    funding: "Supported by the Global Environmental Health Initiative.",
    conflictOfInterest: "None declared.",
  },
]

export const patientGuides = [
  {
    id: 1,
    title: "The Complete Guide to Flossing",
    icon: <FaBookMedical className="text-2xl text-teal-600" />,
    readTime: "5 min read",
    desc: "Master the technique to prevent gum disease effectively.",
    category: "Hygiene",
    featured: true,
    content: [
      "Why flossing matters: removes plaque between teeth where brush can't reach.",
      "Step-by-step: proper flossing technique with illustrations.",
      "Common mistakes to avoid.",
      "Alternatives: floss picks, water flossers, interdental brushes.",
    ],
    downloadable: true,
    fileSize: "1.2 MB",
  },
  {
    id: 2,
    title: "Understanding Your Child's Teeth",
    icon: <FaSmile className="text-2xl text-teal-600" />,
    readTime: "8 min read",
    desc: "A timeline of eruption and tips for pediatric oral care.",
    category: "Pediatric",
    featured: true,
    content: [
      "Teething timeline: when to expect baby teeth and permanent teeth.",
      "First dental visit: what to expect and when to schedule.",
      "Preventing early childhood cavities.",
      "Thumb sucking and pacifier habits: when to intervene.",
    ],
    downloadable: true,
    fileSize: "2.5 MB",
  },
  {
    id: 3,
    title: "Nutrition for Healthy Gums",
    icon: <FaShieldAlt className="text-2xl text-teal-600" />,
    readTime: "6 min read",
    desc: "Foods that fight inflammation and strengthen enamel.",
    category: "Nutrition",
    featured: false,
    content: [
      "Top 10 foods for strong teeth and gums.",
      "Foods to avoid: sugar, acids, and sticky snacks.",
      "The role of vitamins: calcium, vitamin D, vitamin C.",
      "Sample meal plan for optimal oral health.",
    ],
    downloadable: true,
    fileSize: "1.8 MB",
  },
  {
    id: 4,
    title: "Caring for Braces and Aligners",
    icon: <FaTooth className="text-2xl text-teal-600" />,
    readTime: "7 min read",
    desc: "Essential tips to keep orthodontic treatment on track.",
    category: "Orthodontics",
    featured: false,
    content: [
      "Brushing and flossing with braces: tools and techniques.",
      "Foods to avoid during orthodontic treatment.",
      "Managing discomfort and emergencies (broken wires, loose brackets).",
      "Retainer care after treatment.",
    ],
    downloadable: true,
    fileSize: "2.0 MB",
  },
  {
    id: 5,
    title: "Understanding Gum Disease",
    icon: <FaShieldAlt className="text-2xl text-teal-600" />,
    readTime: "10 min read",
    desc: "Signs, stages, and treatment options for periodontal health.",
    category: "Periodontics",
    featured: true,
    content: [
      "What is gum disease? Gingivitis vs. periodontitis.",
      "Early warning signs: bleeding, redness, recession.",
      "Risk factors: smoking, diabetes, genetics.",
      "Treatment options: scaling, root planing, laser therapy.",
    ],
    downloadable: true,
    fileSize: "3.1 MB",
  },
  {
    id: 6,
    title: "Dental Emergencies: What to Do",
    icon: <MdEmergency className="text-2xl text-teal-600" />,
    readTime: "4 min read",
    desc: "Quick first-aid steps for common dental injuries.",
    category: "Emergency",
    featured: false,
    content: [
      "Knocked-out tooth: how to preserve and when to see a dentist.",
      "Broken tooth or filling: temporary fixes.",
      "Severe toothache: home care before your appointment.",
      "Soft tissue injuries: controlling bleeding and swelling.",
    ],
    downloadable: true,
    fileSize: "1.5 MB",
  },
  {
    id: 7,
    title: "Oral Care During Pregnancy",
    icon: <FaSmile className="text-2xl text-teal-600" />,
    readTime: "6 min read",
    desc: "Safe dental practices for expectant mothers.",
    category: "Women's Health",
    featured: false,
    content: [
      "Hormonal changes and gum health (pregnancy gingivitis).",
      "Safe dental treatments during each trimester.",
      "Morning sickness and tooth enamel: how to protect teeth.",
      "Nutrition for mother and baby's dental development.",
    ],
    downloadable: true,
    fileSize: "2.2 MB",
  },
  {
    id: 8,
    title: "The Truth About Teeth Whitening",
    icon: <FaSmile className="text-2xl text-teal-600" />,
    readTime: "5 min read",
    desc: "Professional vs. over-the-counter: what really works?",
    category: "Cosmetic",
    featured: true,
    content: [
      "How whitening works: hydrogen peroxide vs. carbamide peroxide.",
      "Professional take-home kits vs. in-office treatments.",
      "Managing sensitivity during and after whitening.",
      "Natural alternatives: do they work?",
    ],
    downloadable: true,
    fileSize: "1.9 MB",
  },
]

export const professionalCourses = [
  {
    id: 1,
    title: "Advanced Endodontic Techniques",
    date: "Next: Oct 15, 2026",
    duration: "3 days",
    format: "In-person (Lagos)",
    spots: "4 spots left",
    level: "Intermediate",
    instructor: "Dr. Adebayo Fashina",
    credits: "18 CPD hours",
    price: "₦250,000",
    description:
      "Hands-on course covering modern root canal techniques, including rotary instrumentation, 3D obturation, and management of complex cases.",
    curriculum: [
      "Day 1: Anatomy and access cavity preparation",
      "Day 2: Cleaning and shaping with nickel-titanium files",
      "Day 3: Obturation techniques and restoration",
    ],
  },
  {
    id: 2,
    title: "Digital Smile Design Masterclass",
    date: "Next: Nov 02, 2026",
    duration: "2 days",
    format: "Online (Live)",
    spots: "Available",
    level: "Advanced",
    instructor: "Dr. Chioma Okonkwo",
    credits: "12 CPD hours",
    price: "₦180,000",
    description:
      "Learn to integrate digital photography, software, and 3D planning to create predictable esthetic outcomes.",
    curriculum: [
      "Day 1: Photography and facial analysis",
      "Day 2: Software workflow and case presentation",
    ],
  },
  {
    id: 3,
    title: "Infection Control Protocols 2026",
    date: "On Demand",
    duration: "4 hours",
    format: "Online (Self-paced)",
    spots: "Unlimited",
    level: "All Levels",
    instructor: "Prof. Olusegun Adeyemi",
    credits: "4 CPD hours",
    price: "₦45,000",
    description:
      "Updated guidelines for sterilization, disinfection, and personal protective equipment in the dental practice.",
    curriculum: [
      "Module 1: Principles of infection control",
      "Module 2: Instrument processing and sterilization",
      "Module 3: Environmental asepsis",
      "Module 4: OSHA and local regulations",
    ],
  },
  {
    id: 4,
    title: "Pediatric Dentistry: Behavior Guidance",
    date: "Next: Dec 05, 2026",
    duration: "2 days",
    format: "In-person (Abuja)",
    spots: "8 spots left",
    level: "Beginner",
    instructor: "Dr. Folake Balogun",
    credits: "14 CPD hours",
    price: "₦200,000",
    description:
      "Practical strategies for managing anxious children, including tell-show-do, positive reinforcement, and sedation options.",
    curriculum: [
      "Day 1: Child psychology and communication",
      "Day 2: Pharmacological and non-pharmacological management",
    ],
  },
  {
    id: 5,
    title: "Full Mouth Rehabilitation",
    date: "Next: Jan 18, 2027",
    duration: "4 days",
    format: "In-person (Lagos)",
    spots: "6 spots left",
    level: "Advanced",
    instructor: "Dr. Kunle Martins",
    credits: "24 CPD hours",
    price: "₦400,000",
    description:
      "Comprehensive approach to restoring worn dentition, from diagnosis to final delivery of complex prostheses.",
    curriculum: [
      "Day 1: Examination and treatment planning",
      "Day 2: Occlusion and wax-up",
      "Day 3: Provisional restorations and tissue management",
      "Day 4: Final impressions and delivery",
    ],
  },
  {
    id: 6,
    title: "Dental Implantology: From Basics to Advanced",
    date: "Next: Feb 22, 2027",
    duration: "5 days",
    format: "Hybrid (Online + Hands-on)",
    spots: "10 spots left",
    level: "Intermediate",
    instructor: "Dr. Ahmed Bello",
    credits: "30 CPD hours",
    price: "₦550,000",
    description:
      "Step-by-step training in implant placement, from single tooth to full-arch restorations, with live surgery observation.",
    curriculum: [
      "Week 1 (Online): Treatment planning and surgical anatomy",
      "Week 2 (Hands-on): Model surgery and case discussions",
      "Week 3 (Live patient): Observation and assisted placement",
    ],
  },
  {
    id: 7,
    title: "Medical Emergencies in Dental Practice",
    date: "Next: Mar 10, 2027",
    duration: "1 day",
    format: "In-person (Port Harcourt)",
    spots: "20 spots left",
    level: "All Levels",
    instructor: "Dr. Ngozi Eze",
    credits: "6 CPD hours",
    price: "₦85,000",
    description:
      "Recognition and management of syncope, allergic reactions, cardiac events, and other emergencies in the dental chair.",
    curriculum: [
      "Morning: Theory and guidelines",
      "Afternoon: Simulation and CPR refresher",
    ],
  },
  {
    id: 8,
    title: "Laser Dentistry: Fundamentals and Applications",
    date: "Next: Apr 05, 2027",
    duration: "2 days",
    format: "In-person (Ibadan)",
    spots: "12 spots left",
    level: "Beginner",
    instructor: "Dr. Chidi Okafor",
    credits: "12 CPD hours",
    price: "₦220,000",
    description:
      "Introduction to diode and Er:YAG lasers for soft and hard tissue procedures.",
    curriculum: [
      "Day 1: Laser physics and safety",
      "Day 2: Hands-on soft tissue surgery and sulcular debridement",
    ],
  },
]

export const galleryImages = [
  {
    id: 1,
    src: "/images/clinic1.jpg",
    alt: "Modern reception area",
    category: "clinic",
  },
  {
    id: 2,
    src: "/images/treatment-room.jpg",
    alt: "State-of-the-art treatment room",
    category: "clinic",
  },
  {
    id: 3,
    src: "/images/staff.jpg",
    alt: "Our friendly team",
    category: "team",
  },
  {
    id: 4,
    src: "/images/patient-smile.jpg",
    alt: "Happy patient after treatment",
    category: "patients",
  },
]

export const faqs = [
  {
    id: 1,
    question: "Do you accept health insurance?",
    answer:
      "Yes, we work with most major Nigerian health insurance providers. Please contact us to verify your coverage.",
  },
  {
    id: 2,
    question: "What is your cancellation policy?",
    answer:
      "We require 24 hours notice for cancellations to avoid a fee. Emergency cancellations are handled case by case.",
  },
  {
    id: 3,
    question: "Do you see children?",
    answer:
      "Absolutely! We offer pediatric dentistry for children of all ages, from first tooth to teens.",
  },
  {
    id: 4,
    question: "How often should I come for a checkup?",
    answer:
      "We recommend every six months for most patients. Some conditions may require more frequent visits.",
  },
]

export const insurancePartners = [
  { id: 1, name: "Hygeia HMO", logo: "/logos/hygeia.png" },
  { id: 2, name: "AXA Mansard", logo: "/logos/axa.png" },
  { id: 3, name: "Reliance HMO", logo: "/logos/reliance.png" },
  { id: 4, name: "Total Health Trust", logo: "/logos/tht.png" },
]

export const hours = {
  monday: "8:00 AM – 5:00 PM",
  tuesday: "8:00 AM – 5:00 PM",
  wednesday: "8:00 AM – 5:00 PM",
  thursday: "8:00 AM – 5:00 PM",
  friday: "8:00 AM – 3:00 PM",
  saturday: "9:00 AM – 1:00 PM",
  sunday: "Closed",
}