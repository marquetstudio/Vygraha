import { ServiceDiscipline, ProjectCaseStudy, TeamMember, Testimonial } from '../types';

export interface EnrichedSubService {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface EnrichedServiceDiscipline {
  id: 'construction' | 'interiors' | 'furnishing' | 'consulting';
  title: string;
  badge: string;
  shortDesc: string;
  image: string;
  subServices: EnrichedSubService[];
}

export const BRAND_INFO = {
  name: 'Vygraha Interiors & Constructions',
  clientBrand: 'Vygraha Interiors & Constructions',
  location: '# 42, 1st Main, Krishna Nagar Industrial Layout, Venkateshwara Layout, D R C Post, Koramangala, Bengaluru – 560029',
  registeredAddress: '# 42, 1st Main, Krishna Nagar Industrial Layout, Venkateshwara Layout, D R C Post, Koramangala, Bengaluru, Karnataka – 560029',
  directInquiries: '+91 99455 62825 / +91 95351 11117 | vygraha.interiors@gmail.com',
  phone1: '+91 99455 62825',
  phone2: '+91 95351 11117',
  email: 'vygraha.interiors@gmail.com',
  corePractice: [
    'Turnkey House Construction',
    'Interior Design & Execution',
    'Architectural Planning',
    '3D Rendering & Visualization',
  ],
  metrics: [
    { label: 'Sq. Ft. Constructed', value: '180,000+' },
    { label: 'Projects Delivered', value: '85+' },
    { label: 'Client Satisfaction', value: '99%' },
  ],
  social: [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
  ],
};

export const SERVICES_DATA: EnrichedServiceDiscipline[] = [
  {
    id: 'interiors',
    title: 'Interiors',
    badge: 'Discipline 1',
    shortDesc: 'Bespoke interior design, professional execution and project management, and turnkey renovations.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    subServices: [
      {
        id: 'interior-design',
        name: '1. Interior Design',
        description: 'Crafting inspired, elevated spaces, catered to your distinct and specific needs forms the foundation of our design goals. Creating a confluence between aesthetically pleasing spaces and functionality is key to our success as a firm. In our services, we include every aspect on the continuum of interior design.',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=900&auto=format&fit=crop',
      },
      {
        id: 'execution-pm',
        name: '2. Execution & Project Management',
        description: 'Our team of experts ensures the smooth execution of all our projects. We believe in providing our clients with a stress-free environment while bringing their projects to life.',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=900&auto=format&fit=crop',
      },
      {
        id: 'renovations',
        name: '3. Renovations & Refurbishments',
        description: 'Renewing, modernising, increasing functionality, or creating a more visually appealing space – we handle it all! We are your one-stop shop for your renovation and refurbishing requirements – whether it be an entire office or living space or an antique piece of furniture that wishes a little TLC..',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'furnishing',
    title: 'Furnishing',
    badge: 'Discipline 2',
    shortDesc: 'Handcrafted loose furniture tailored to your space and thoughtfully selected soft furnishings.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
    subServices: [
      {
        id: 'loose-furniture',
        name: '1. Loose Furniture',
        description: 'Beds, Cabinets, Sofas, and Tables – each piece of furniture tells a story and becomes an integral part of your room. Our team of experts helps you choose each piece, maximising space, practicality, and functionality and making it your own to create new memories with',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=900&auto=format&fit=crop',
      },
      {
        id: 'soft-furnishing',
        name: '2. Soft Furnishing',
        description: 'Choosing the right textures, textiles, and tapestries to elevate your space is what our team of experts excel at. Keeping in mind color schemes, patterns, comfort, and aesthetics, our team helps in bringing in warmth and softness through the choicest soft furnishing.',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'consulting',
    title: 'Consulting Services',
    badge: 'Discipline 3',
    shortDesc: 'Professional project management consultancy (PMC) and specialized hospitality advisory.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    subServices: [
      {
        id: 'pmc-services',
        name: '1. PMC Services',
        description: 'We provide project management services for your project planning and execution requests. Through our organisational systems, procedures, and methodologies we ensure effortless execution until the completion of your project',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop',
      },
      {
        id: 'hospitality-consulting',
        name: '2. Hospitality Consulting',
        description: 'Our top-notch team of hospitality consultants are skilled in giving inputs on your hospitality questions. From décor to menus, from finance, and business management to customer insights our team will assist you every step of the way.',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=900&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'construction',
    title: 'Construction Services',
    badge: 'Discipline 4',
    shortDesc: 'End-to-end civil construction, masonry, waterproofing, fabrication, and outdoor landscaping.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?q=80&w=1200&auto=format&fit=crop',
    subServices: [
      {
        id: 'masonry',
        name: '1. Masonry',
        description: 'Our experts possess the art of crafting any building or part of a building in stone, clay, brick, or concrete as required. The end results are assuredly beautiful, durable and aesthetically pleasing.',
        image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=900&auto=format&fit=crop',
      },
      {
        id: 'waterproofing',
        name: '2. Water Proofing',
        description: 'Ensuring the durability and quality of our constructions is key to our success. Therefore, processes such as water proofing (covering or treating concrete to prevent permeability) are streamlined and given significant importance in our trade',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop',
      },
      {
        id: 'fabrication',
        name: '3. Fabrication',
        description: 'Fabrication is the process of using semi-finished or raw materials to make something from start to finish, as opposed to just assembling it. Our proficiency lies in making something from scratch and customised to your wishes thereby creating unique masterpieces',
        image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=900&auto=format&fit=crop',
      },
      {
        id: 'landscaping',
        name: '4. Landscaping',
        description: 'In today’s world curb appeal and landscaping are as important as interiors. Whether it is building or installing a feature on your land, adding a patio, veranda, or even building a pergola or gazebo – you are in good and skilled hands.',
        image: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?q=80&w=900&auto=format&fit=crop',
      },
    ],
  },
];

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'card-1',
    title: 'Modern Villa — Koramangala',
    location: 'Koramangala, Bengaluru',
    category: 'full-builds',
    scopeOfWork: 'Turnkey Construction + Full Interior Design',
    metrics: {
      plotArea: '4,800 Sq. Ft.',
      completionTimeframe: '14 Months',
      styleTheme: 'Modern Villa',
    },
    summary: 'Turnkey Construction + Full Interior Design execution in Koramangala.',
    renderingImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    completedImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'card-2',
    title: 'Full Builds & Ground-Up Residential',
    location: 'Indiranagar, Bengaluru',
    category: 'full-builds',
    scopeOfWork: 'Turnkey House Construction & Architectural Planning',
    metrics: {
      plotArea: '3,600 Sq. Ft.',
      completionTimeframe: '12 Months',
      styleTheme: 'Contemporary Residential',
    },
    summary: 'Complete ground-up residential build from foundation laying to final handover.',
    renderingImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    completedImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'card-3',
    title: 'Residential Interiors (Living, Dining & Master Suites)',
    location: 'Lavelle Road, Bengaluru',
    category: 'residential-interiors',
    scopeOfWork: 'Interior Design & Execution, Furnishing',
    metrics: {
      plotArea: '3,200 Sq. Ft.',
      completionTimeframe: '4 Months',
      styleTheme: 'Modern Luxury Interior',
    },
    summary: 'Bespoke residential interior design covering living, dining, and master suites.',
    renderingImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    completedImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'card-4',
    title: 'Commercial Spaces & Office Fit-Outs',
    location: 'Outer Ring Road, Bengaluru',
    category: 'commercial',
    scopeOfWork: 'Commercial Fit-Outs & PMC Services',
    metrics: {
      plotArea: '7,500 Sq. Ft.',
      completionTimeframe: '3 Months',
      styleTheme: 'Contemporary Commercial Workspace',
    },
    summary: 'Complete commercial office fit-out with effortless execution and project management.',
    renderingImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    completedImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Manju S',
    role: 'Co-founder',
    qualifications: 'Master Diploma in Interior Designing',
    education: 'Master Diploma in Interior Designing',
    experience: '15 Years Industry Experience',
    specialization: 'Construction Services, Technical Planning & Site Execution',
    image: '/manju-s.png',
    bio: 'In-depth knowledge and experience in Construction Services, with an excellent track record of managing execution with meticulous planning, technical knowledge, and 15 years of experience managing multiple projects across India.',
    paragraphs: [
      'In-depth knowledge and experience in Construction Services, has an excellent track record of managing execution with meticulous planning, and in-depth technical knowledge.',
      '15 years of work experience managing multiple Projects across locations in India.',
      'Worked as project manager with various brands like Samsung, Lifestyle, US Pizza, and Aditya Birla.',
    ],
    brands: ['Samsung', 'Lifestyle', 'US Pizza', 'Aditya Birla'],
  },
  {
    name: 'A. K. Venugopal Pillai',
    role: 'Co-founder',
    qualifications: '25+ Years Experience Across South India',
    education: 'Turnkey Commercial & Residential Governance',
    experience: 'Over 25 Years of Industry Experience',
    specialization: 'Retail, QSR, Office Spaces, Centralised Kitchens & Premium Residential',
    image: '/venugopal-pillai.png',
    bio: 'Powerhouse of passion and expertise with over 25 years of experience delivering residential and commercial projects across South India, from QSR chains like KFC and Taco Bell to Italian architect collaborations.',
    paragraphs: [
      'With over 25 years of experience in Residential and Commercial projects across South India, founder AK Venugopal is a powerhouse of passion and expertise.',
      'He has in-depth knowledge and an unmatched understanding in a plethora of industry segments including Retail, Quick Service Restaurants, Office Spaces, Centralised Kitchens, and Premium Residential Projects.',
      'He has been associated with the commercial success of restaurants such as KFC, Pizza Hut, and Taco Bell. He has also collaborated with Architects based in Italy for a commercial venture of Italian Leather Goods in Bangalore.',
      'Effortlessly donning several hats over the years, Mr. AK Venugopal has gathered immense knowledge in the areas of project planning, project documentation, execution, project management, and mall operations.',
    ],
    brands: ['KFC', 'Pizza Hut', 'Taco Bell', 'Italian Leather Goods Venture'],
  },
  {
    name: 'Dr. Gopalakrishna',
    role: 'Co-founder',
    qualifications: 'MA, PhD',
    education: 'MA and PhD',
    experience: 'Over 10 Years Industry Experience',
    specialization: 'Large-scale Land Amalgamation, Government Liaison & Real Estate Strategy',
    image: '/dr-gopalakrishna.png',
    bio: 'Brings over 10 years of strategic insight and business acumen, specializing in large-scale land amalgamation, government liaison, plotted development across Bangalore, and financial institution collaborations.',
    paragraphs: [
      'With over 10 years of experience in client handling and the real estate sector, Dr. Gopalakrishna brings a wealth of industry knowledge, strategic insight, and business acumen to Vygraha.',
      'His expertise spans large-scale land amalgamation, government liaison, plotted development projects across Bangalore, and real estate sales. He has also worked closely with financial institutions to facilitate strategic collaborations and support project development.',
      'With a strong focus on business development, Dr. Gopalakrishna has played an instrumental role in identifying opportunities, building strategic relationships, and driving successful projects. His ability to navigate complex real estate ecosystems, coupled with a strong understanding of client requirements, has contributed significantly to the organisation\'s growth and project success.',
      'Holding an MA and PhD, he brings an analytical and strategic perspective to every endeavour, strengthening Vygraha\'s approach.',
    ],
    brands: ['Plotted Developments', 'Government Liaison', 'Land Amalgamation', 'Financial Collaborations'],
  },
];

export interface ExtendedTestimonial extends Testimonial {
  company?: string;
}

export const TESTIMONIALS: ExtendedTestimonial[] = [
  {
    id: '1',
    clientName: 'Sanjay Rao',
    company: 'Rao Heritage Villa',
    projectType: 'Turnkey House Construction (4,800 Sq. Ft.)',
    location: 'Koramangala, Bengaluru',
    rating: 5,
    highlight: 'Transparent BOQ execution and single-point accountability from foundation to handover.',
    review: 'Vygraha delivered on their promise of transparent BOQ execution with zero hidden fees. The construction durability and interior finishes are exceptional.',
    completionYear: '2024',
  },
  {
    id: '2',
    clientName: 'Dr. Arvind Swaminathan',
    company: 'Sky Residence',
    projectType: 'Bespoke Interior Design & Furnishing',
    location: 'Lavelle Road, Bengaluru',
    rating: 5,
    highlight: 'Quality craftsmanship with meticulous attention to detail.',
    review: 'Our living and dining spaces were executed with extraordinary care. The joinery, lighting mood, and soft furnishings exceeded all our expectations.',
    completionYear: '2024',
  },
  {
    id: '3',
    clientName: 'Deepak Chawla',
    company: 'NexTech Innovations',
    projectType: 'Commercial Office Fit-Out & PMC Services',
    location: 'Outer Ring Road, Bengaluru',
    rating: 5,
    highlight: 'Stress-free environment and effortless turnkey project delivery.',
    review: 'Their project management team handled our office fit-out with precision and clear systems, delivering on time and within the agreed budget.',
    completionYear: '2023',
  },
  {
    id: '4',
    clientName: 'Malini & Karthik V.',
    company: 'Private Residence',
    projectType: 'Villa Renovation, Landscaping & Pergola',
    location: 'Indiranagar, Bengaluru',
    rating: 5,
    highlight: 'Flawless waterproofing and beautiful curb appeal.',
    review: 'From solving persistent water seepage with modern membranes to crafting a tranquil courtyard patio, Vygraha handled everything with absolute professionalism.',
    completionYear: '2023',
  },
];
