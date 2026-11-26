/**
 * Sampreeth Dental Clinic - Centralized Doctors Dataset
 * Reusable across About Us, Our Doctors, Homepage, and Appointment Booking.
 */

const SAMPREETH_DOCTORS = [
  {
    id: "dr-koteswara-rao",
    name: "Dr. Nadella Koteswara Rao",
    qualifications: "MDS – Oral & Maxillofacial Surgery",
    designation: "Consultant Surgeon & Implantologist",
    category: "permanent", // "permanent" or "visiting"
    badge: "Oral & Maxillofacial Surgeon",
    image: "images/doctor01.jpg",
    bio: "Dr. Nadella Koteswara Rao is a distinguished Oral & Maxillofacial Surgeon known for surgical precision and clinical acumen. He has extensive expertise in treating complex facial bone trauma, surgical removal of impacted third molars (wisdom teeth), management of jaw pathology (dentigerous cysts and benign tumors), and osseointegrated dental implantology.",
    specializations: [
      "Impacted Teeth Excision",
      "Dental Implant Fixtures",
      "Mandibular & Maxillary Fractures",
      "Jaw Cysts & Neoplasms",
      "Bone Grafting & Sinus Lift",
      "Temporomandibular Joint (TMJ)"
    ],
    email: "drnadellakoteswararao@gmail.com",
    availability: "Mon-Sat: 10:00 AM – 1:00 PM & 4:30 PM – 9:00 PM | Sun: 10:00 AM – 1:00 PM",
    timingShort: "Mon-Sat: 10AM-1PM & 4:30PM-9PM | Sun: 10AM-1PM",
    dropdownLabel: "Dr. Nadella Koteswara Rao (MDS – Maxillofacial Surgeon)"
  },
  {
    id: "dr-neelima",
    name: "Dr. Nadella Neelima",
    qualifications: "BDS – Dental Surgeon",
    designation: "Aesthetic Dentist & Endodontist",
    category: "permanent",
    badge: "Dental Surgeon & Aesthetic Specialist",
    image: "images/doctor02.jpg",
    bio: "Dr. Nadella Neelima brings a warm, gentle touch to family dental care, cosmetic restorations, and painless root canal treatments. She has dedicated her clinical practice to delivering patient comfort, preventive maintenance, and beautiful natural smile restorations for patients of all age groups.",
    specializations: [
      "Rotary Root Canal Therapy (RCT)",
      "Aesthetic Teeth Whitening",
      "Pediatric Preventive Dental Care",
      "Ceramic Crowns & Fixed Bridges",
      "Composite Cosmetic Restorations",
      "Ultrasonic Scaling & Gum Therapy"
    ],
    email: "drnadellaneelima@gmail.com",
    availability: "Mon-Sat: 10:00 AM – 1:00 PM & 4:30 PM – 9:00 PM | Sun: 10:00 AM – 1:00 PM",
    timingShort: "Mon-Sat: 10AM-1PM & 4:30PM-9PM | Sun: 10AM-1PM",
    dropdownLabel: "Dr. Nadella Neelima (BDS – Dental Surgeon)"
  },
  {
    id: "dr-kiran-kumar",
    name: "Dr. Kiran Kumar Dodda",
    qualifications: "MDS – Orthodontics & Dentofacial Orthopedics",
    designation: "Visiting Specialist Consultant",
    category: "visiting",
    badge: "Orthodontist / Braces Specialist",
    image: "images/doctor01.jpg",
    bio: "Visiting specialist consultant collaborating with Sampreeth Dental Clinic for advanced orthodontic alignments, conventional and ceramic braces, and modern clear aligners.",
    specializations: [
      "Orthodontics & Braces",
      "Clear Aligners & Invisible Braces",
      "Malocclusion & Bite Alignment",
      "Dentofacial Orthopedics"
    ],
    email: "drkirankumardodda@gmail.com",
    availability: "Consultant Slot: Tue & Fri: 4:30 PM – 8:00 PM (By Appointment)",
    timingShort: "Tue & Fri: 4:30PM – 8PM (By Appointment)",
    dropdownLabel: "Dr. Kiran Kumar Dodda (Orthodontics & Aligners)"
  },
  {
    id: "dr-srikanth-koya",
    name: "Dr. Srikanth Koya",
    qualifications: "MDS – Prosthodontics & Crown Bridge",
    designation: "Visiting Specialist Consultant",
    category: "visiting",
    badge: "Prosthodontist / Implant Prosthetics",
    image: "images/doctor01.jpg",
    bio: "Visiting consultant specializing in complete and partial dentures, full-mouth prosthetic rehabilitation, ceramic crowns, bridges, and implant-supported superstructures.",
    specializations: [
      "Full Mouth Rehabilitation",
      "Fixed Partial Dentures (FPD)",
      "Implant Supported Overdentures",
      "Zirconia & Ceramic Crowns"
    ],
    email: "drsrikanthkoya@gmail.com",
    availability: "Consultant Slot: Wed & Sat: 4:30 PM – 8:00 PM (By Appointment)",
    timingShort: "Wed & Sat: 4:30PM – 8PM (By Appointment)",
    dropdownLabel: "Dr. Srikanth Koya (Prosthodontics & Rehabilitation)"
  },
  {
    id: "dr-ravi-kiran",
    name: "Dr. Ravi Kiran V",
    qualifications: "MDS – Pediatric & Preventive Dentistry",
    designation: "Visiting Specialist Consultant",
    category: "visiting",
    badge: "Pediatric Dental Specialist",
    image: "images/doctor01.jpg",
    bio: "Visiting consultant dedicated to infants, children, and adolescents, specializing in fear-free pediatric dental therapies, preventive sealants, space maintainers, and pulpectomies.",
    specializations: [
      "Child Dentistry & Habit Breaking",
      "Fluoride Varnish & Sealants",
      "Pediatric Pulpectomy & Crowns",
      "Early Interceptive Orthodontics"
    ],
    email: "drravikiranv@gmail.com",
    availability: "Consultant Slot: Mon & Thu: 4:30 PM – 8:00 PM (By Appointment)",
    timingShort: "Mon & Thu: 4:30PM – 8PM (By Appointment)",
    dropdownLabel: "Dr. Ravi Kiran V (Pediatric & Child Dentistry)"
  },
  {
    id: "dr-satya-karthik",
    name: "Dr. Satya Karthik M",
    qualifications: "MDS – Conservative Dentistry & Endodontics",
    designation: "Visiting Specialist Consultant",
    category: "visiting",
    badge: "Endodontist / Root Canal Specialist",
    image: "images/doctor01.jpg",
    bio: "Visiting consultant specializing in microscopic and complex root canal treatments, re-treatments, aesthetic direct veneers, and conservative tooth preservations.",
    specializations: [
      "Microscopic Endodontics",
      "Complex Root Canal Treatments",
      "Endodontic Re-treatment",
      "Conservative Restorations"
    ],
    email: "drsatyakarthik@gmail.com",
    availability: "Consultant Slot: Mon-Sat: 5:00 PM – 8:30 PM (By Appointment)",
    timingShort: "Mon-Sat: 5:00PM – 8:30PM (By Appointment)",
    dropdownLabel: "Dr. Satya Karthik M (Endodontics & RCT)"
  },
  {
    id: "dr-prasanna",
    name: "Dr. Prasanna",
    qualifications: "MDS – Periodontology & Oral Implantology",
    designation: "Visiting Specialist Consultant",
    category: "visiting",
    badge: "Periodontist / Gum Specialist",
    image: "images/doctor02.jpg",
    bio: "Visiting consultant specializing in advanced gum therapies, flap surgery, bone grafting for periodontal defects, gingival depigmentation, and cosmetic gum contouring.",
    specializations: [
      "Periodontal Flap Surgery",
      "Gingival Recession & Grafting",
      "Cosmetic Gum Contouring",
      "Deep Scaling & Root Planing"
    ],
    email: "drprasanna.perio@gmail.com",
    availability: "Consultant Slot: Wed & Sat: 11:00 AM – 2:00 PM (By Appointment)",
    timingShort: "Wed & Sat: 11:00AM – 2:00PM (By Appointment)",
    dropdownLabel: "Dr. Prasanna (Periodontics & Gum Care)"
  }
];

// Helper functions for dynamic UI rendering
if (typeof window !== 'undefined') {
  window.SAMPREETH_DOCTORS = SAMPREETH_DOCTORS;
}
