import type { Language } from '../types/catalog';

export interface TranslationDictionary {
  // Navigation
  navProducts: string;
  navRepairs: string;
  navWholesale: string;
  navLocation: string;
  navWhatsApp: string;

  // Hero Section
  heroEyebrow: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroSubtitle: string;
  heroCtaWhatsApp: string;
  heroCtaExplore: string;
  heroSpecDisplays: string;
  heroSpecBatteries: string;
  heroSpecWholesale: string;
  heroBenchTitle: string;
  heroCounterOpen: string;
  heroBenchVisualTitle: string;
  heroBenchVisualDesc: string;
  heroBenchTurnaround: string;
  heroBenchSupply: string;

  // Quick Problem Selector (Section 1)
  problemHeading: string;
  problemSubheading: string;
  problemScreenTitle: string;
  problemScreenDesc: string;
  problemScreenAction: string;
  problemBatteryTitle: string;
  problemBatteryDesc: string;
  problemBatteryAction: string;
  problemChargingTitle: string;
  problemChargingDesc: string;
  problemChargingAction: string;
  problemWholesaleTitle: string;
  problemWholesaleDesc: string;
  problemWholesaleAction: string;

  // Product Showcase & Search Filter
  catalogBadge: string;
  catalogTitle: string;
  catalogSubtitle: string;
  catAll: string;
  catDisplays: string;
  catBatteries: string;
  catChargers: string;
  catAccessories: string;
  catalogSearchPlaceholder: string;
  catalogSearchLabel: string;
  catalogAllBrands: string;
  catalogResultsCount: string;
  catalogNoResults: string;
  catalogRequestPartBtn: string;
  catalogClearSearch: string;
  compatibleModels: string;
  specLabel: string;
  enquirePriceBtn: string;

  // Interactive Repair Cost Estimator
  estimatorBadge: string;
  estimatorTitle: string;
  estimatorSubtitle: string;
  estimatorStep1Brand: string;
  estimatorStep2Issue: string;
  estimatorStep3Grade: string;
  estimatorEstimateTitle: string;
  estimatorEstimatedRange: string;
  estimatorTurnaroundLabel: string;
  estimatorWarrantyLabel: string;
  estimatorPerk1: string;
  estimatorPerk2: string;
  estimatorPerk3: string;
  estimatorBookWhatsAppBtn: string;
  estimatorCallCounterBtn: string;
  estimatorDisclaimer: string;

  // Estimator issues
  issueScreen: string;
  issueBattery: string;
  issueCharging: string;
  issueWater: string;
  issueCamera: string;
  issueBoard: string;

  // Estimator grades
  gradeOriginal: string;
  gradeOriginalDesc: string;
  gradeDiamond: string;
  gradeDiamondDesc: string;

  // Repair Services
  repairBadge: string;
  repairTitle: string;
  repairSubtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  estTimeLabel: string;
  enquireRepairBtn: string;

  // Wholesale Desk
  wholesaleBadge: string;
  wholesaleTitle: string;
  wholesaleSubtitle: string;
  wholesaleAdvantage1: string;
  wholesaleAdvantage2: string;
  wholesaleAdvantage3: string;
  wholesaleAdvantage4: string;
  wholesaleFormTitle: string;
  fieldShopName: string;
  fieldTown: string;
  fieldPartsNeeded: string;
  btnSendWholesale: string;

  // Location & Contact
  locationBadge: string;
  locationTitle: string;
  locationSubtitle: string;
  counterAddressHeading: string;
  timingsHeading: string;
  openGoogleMapsBtn: string;
  callCounterBtn: string;

  // Footer & Compliance
  footerNotice: string;
  footerRights: string;
  footerTowns: string;

  // Mobile Sticky Bar
  mobileCall: string;
  mobileWhatsApp: string;
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    navProducts: 'Products & Spares',
    navRepairs: 'Repair Lab',
    navWholesale: 'Technician Desk',
    navLocation: 'Location & Hours',
    navWhatsApp: 'Chat on WhatsApp',

    heroEyebrow: '📍 SHAHADA, DIST. NANDURBAR • WORKSHOP & COUNTER',
    heroTitleLine1: 'Mobile Hardware.',
    heroTitleLine2: 'Handled with Precision.',
    heroSubtitle:
      'Tested display folders, pure cobalt batteries, and component-level repairs in Shahada. Direct counter quotations with zero hidden fees.',
    heroCtaWhatsApp: 'Check Price on WhatsApp',
    heroCtaExplore: 'Explore Diagnostics',
    heroSpecDisplays: 'Bench-Tested Displays',
    heroSpecBatteries: 'Safe Dual-IC Cells',
    heroSpecWholesale: 'Technician Wholesale Tiers',
    heroBenchTitle: 'Hardware Quality & Bench Status',
    heroCounterOpen: 'Counter Open',
    heroBenchVisualTitle: 'Display & Power Diagnostics',
    heroBenchVisualDesc: 'Frame alignment • 90Hz touch pass-through • Pure cobalt chemistry',
    heroBenchTurnaround: '30 – 45 Minutes',
    heroBenchSupply: 'Bulk Box Rates Available',

    problemHeading: 'What do you need assistance with today?',
    problemSubheading: 'Tap your smartphone symptom for immediate counter availability and quotation:',
    problemScreenTitle: 'Screen / Touch Display',
    problemScreenDesc: 'Cracked outer glass, touch dead zones, black ink spots, or flickering lines.',
    problemScreenAction: 'Check Display Stock →',
    problemBatteryTitle: 'Battery Drain & Backup',
    problemBatteryDesc: 'Phone dies in 2 hours, unexpected shutdowns at 20%, or swollen back cover.',
    problemBatteryAction: 'Check Battery Stock →',
    problemChargingTitle: 'Charging Port / Sub-Board',
    problemChargingDesc: 'Cable is loose, fast charging not detected, mic not working during calls.',
    problemChargingAction: 'Diagnose Port Fix →',
    problemWholesaleTitle: 'Technician Wholesale',
    problemWholesaleDesc: 'Direct wholesale rates on tested folders and cells for repair shops.',
    problemWholesaleAction: 'Get Technician Pricing →',

    catalogBadge: 'Hardware Inventory',
    catalogTitle: 'Featured Spares & Accessories',
    catalogSubtitle:
      'Counter-tested smartphone display folders, high-capacity cobalt batteries, and fast chargers available for immediate pickup in Shahada.',
    catAll: 'All Items',
    catDisplays: 'Folder Displays',
    catBatteries: 'Mobile Batteries',
    catChargers: 'Fast Chargers',
    catAccessories: 'Cables & Tools',
    catalogSearchPlaceholder: 'Search model (e.g. Note 10, M31, iPhone), part name, or SKU...',
    catalogSearchLabel: 'Search Spares & Accessories',
    catalogAllBrands: 'All Brands',
    catalogResultsCount: 'Showing verified parts',
    catalogNoResults: 'No exact match found in quick catalog for this query.',
    catalogRequestPartBtn: 'Request Custom Part on WhatsApp',
    catalogClearSearch: 'Clear search',
    compatibleModels: 'Compatibility:',
    specLabel: 'Verified Quality Highlights:',
    enquirePriceBtn: "Enquire Today's Price",

    estimatorBadge: 'Instant Repair Calculator',
    estimatorTitle: 'Interactive Smartphone Repair Cost Estimator',
    estimatorSubtitle:
      'Select your smartphone brand, hardware issue, and quality grade for an immediate counter pricing estimate and turnaround slot in Shahada.',
    estimatorStep1Brand: '1. Select Smartphone Brand',
    estimatorStep2Issue: '2. Select Hardware Issue / Component',
    estimatorStep3Grade: '3. Select Quality Grade',
    estimatorEstimateTitle: 'Diagnostic Workshop Estimate',
    estimatorEstimatedRange: 'Estimated Counter Price Range',
    estimatorTurnaroundLabel: 'Turnaround Time',
    estimatorWarrantyLabel: 'Warranty Included',
    estimatorPerk1: 'Zero diagnostic inspection charge on counter examination',
    estimatorPerk2: 'Data Safe Guarantee — zero formatting of customer photos & contacts',
    estimatorPerk3: '12-point hardware bench testing before counter handoff',
    estimatorBookWhatsAppBtn: 'Book Repair Slot on WhatsApp',
    estimatorCallCounterBtn: 'Call Workshop Counter',
    estimatorDisclaimer:
      '*Final counter quotation depends on physical motherboard condition and exact model sub-revision upon bench inspection.',

    issueScreen: 'Display & Touch Screen (Cracked/Lines)',
    issueBattery: 'Battery Drain & Swelling Replacement',
    issueCharging: 'Charging Jack / Sub-Board / Mic',
    issueWater: 'Water Damage Ultrasonic Cleaning',
    issueCamera: 'Camera Lens / Back Glass Housing',
    issueBoard: 'Dead Phone / Motherboard Short Circuit',

    gradeOriginal: 'OEM / Original Service Grade',
    gradeOriginalDesc: 'Factory IC, true-color AMOLED/LCD, 90-day counter replacement warranty.',
    gradeDiamond: 'Diamond Tested Grade',
    gradeDiamondDesc: 'High-quality pre-tested aftermarket folder/battery, 30-day testing warranty.',

    repairBadge: 'Component Lab',
    repairTitle: 'Precision Diagnostics & Clean Fitting Procedure',
    repairSubtitle:
      'We combine micro-soldering, dust-free frame pasting, and component testing to deliver reliable hardware repairs right in Shahada.',
    step1Title: '01. Diagnostic Inspection',
    step1Desc: 'DC power supply test and digital multimeter check to pinpoint the exact failure.',
    step2Title: '02. Precision Assembly',
    step2Desc: 'Ultrasonic frame cleanout, OEM-grade sealant, and regulated thermal curing.',
    step3Title: '03. Sensor & Touch Bench Test',
    step3Desc: 'Multi-touch matrix test, ambient light sensor check, and microphone clarity test.',
    step4Title: '04. Counter Handoff',
    step4Desc: 'Full customer inspection and testing before accepting payment at our shop.',
    estTimeLabel: 'Typical Turnaround:',
    enquireRepairBtn: 'Enquire for My Model',

    wholesaleBadge: 'Technician Desk',
    wholesaleTitle: 'Wholesale Hardware Supply for Local Technicians',
    wholesaleSubtitle:
      'Supplying repair shops and freelance technicians across Shahada, Taloda, Shirpur, Dhadgaon, and Nandurbar with pre-tested spares.',
    wholesaleAdvantage1: 'Pre-tested folder displays and batteries to reduce customer return hassles.',
    wholesaleAdvantage2: 'Volume discount tiers for recurring smartphone technicians and mechanics.',
    wholesaleAdvantage3: 'Same-day counter dispatch in Shahada and regional bus-parcel dispatch.',
    wholesaleAdvantage4: 'Direct WhatsApp communication with our workshop technician team.',
    wholesaleFormTitle: 'Request Technician Wholesale Rate-Card',
    fieldShopName: 'Your Repair Shop / Workshop Name',
    fieldTown: 'City / Town (e.g. Taloda, Shirpur, Dhadgaon)',
    fieldPartsNeeded: 'Required Parts & Quantities (e.g. 5x Note 10 Folders, 3x M31 Batteries)',
    btnSendWholesale: 'Send Wholesale Enquiry on WhatsApp',

    locationBadge: 'Workshop Counter',
    locationTitle: 'Visit Our Physical Counter in Shahada',
    locationSubtitle:
      'Conveniently located on Market Yard Road near the Old Bus Stand. Walk in for fast diagnosis or component collection.',
    counterAddressHeading: 'Physical Shop Address',
    timingsHeading: 'Operating Hours',
    openGoogleMapsBtn: 'Get Directions on Google Maps',
    callCounterBtn: 'Call Counter Now',

    footerNotice:
      'Notice: Ravi Mobile operates an enquiry-first counter. All prices and stock availability are confirmed directly on WhatsApp or at our Shahada shop. We do not accept online payments or card checkouts on this website.',
    footerRights: 'Ravi Mobile (Shahada). All rights reserved.',
    footerTowns: 'Regional Supply: Shahada • Taloda • Dhadgaon • Shirpur • Nandurbar',

    mobileCall: '📞 Call Counter',
    mobileWhatsApp: '💬 WhatsApp Us',
  },

  mr: {
    navProducts: 'स्पेअर पार्ट्स आणि उत्पादने',
    navRepairs: 'रिपेअरिंग लॅब',
    navWholesale: 'टेक्निशियन डेस्क',
    navLocation: 'पत्ता व वेळ',
    navWhatsApp: 'व्हॉट्सअ‍ॅपवर बोला',

    heroEyebrow: '📍 शहादा, जि. नंदुरबार • वर्कशॉप व होलसेल काउंटर',
    heroTitleLine1: 'मोबाईल हार्डवेअर.',
    heroTitleLine2: 'अचूक व खात्रीशीर काम.',
    heroSubtitle:
      'शहाद्यात तपासलेले डिस्प्ले फोल्डर्स, ओरिजिनल कोबाल्ट बॅटऱ्या आणि चिप-लेव्हल रिपेअरिंग. थेट काउंटर दर आणि कोणतीही छुपी फी नाही.',
    heroCtaWhatsApp: 'व्हॉट्सअ‍ॅपवर दर विचारा',
    heroCtaExplore: 'समस्या निवडा',
    heroSpecDisplays: 'बेंच-टेस्टेड डिस्प्ले',
    heroSpecBatteries: 'सुरक्षित ड्युअल-IC बॅटरी',
    heroSpecWholesale: 'टेक्निशियन होलसेल दर',
    heroBenchTitle: 'हार्डवेअर गुणवत्ता व काउंटर स्थिती',
    heroCounterOpen: 'काउंटर सुरू आहे',
    heroBenchVisualTitle: 'डिस्प्ले व पॉवर टेस्टिंग',
    heroBenchVisualDesc: 'फ्रेम अलाइनमेंट • ९०Hz स्मूथ टच • शुद्ध कोबाल्ट सेल',
    heroBenchTurnaround: '३० ते ४५ मिनिटे',
    heroBenchSupply: 'होलसेल बॉक्स दर उपलब्ध',

    problemHeading: 'आज तुम्हाला कशात मदत हवी आहे?',
    problemSubheading: 'मोबाईलमधील समस्या निवडा आणि तत्काळ काउंटर उपलब्धता व दर जाणून घ्या:',
    problemScreenTitle: 'स्क्रीन व टच डिस्प्ले',
    problemScreenDesc: 'तुटलेली काच, टच न चालणे, काळे डाग किंवा स्क्रीनवर रंगीत रेषा येणे.',
    problemScreenAction: 'डिस्प्ले स्टॉक तपासा →',
    problemBatteryTitle: 'बॅटरी बॅकअप व ड्रेन',
    problemBatteryDesc: 'बॅटरी २ तासात संपणे, अचानक फोन बंद होणे किंवा बॅटरी फुगणे.',
    problemBatteryAction: 'बॅटरी स्टॉक तपासा →',
    problemChargingTitle: 'चार्जिंग पोर्ट व सब-बोर्ड',
    problemChargingDesc: 'चार्जिंग केबल सैल बसणे, फास्ट चार्ज न होणे, कॉलमध्ये आवाज न जाणे.',
    problemChargingAction: 'पोर्ट दुरुस्ती दर विचारा →',
    problemWholesaleTitle: 'टेक्निशियन होलसेल',
    problemWholesaleDesc: 'मोबाईल रिपेअरिंग दुकानदारांसाठी बॉक्स फोल्डर्स व बॅटऱ्यांचे होलसेल दर.',
    problemWholesaleAction: 'होलसेल दरपत्रक मिळवा →',

    catalogBadge: 'हार्डवेअर इन्व्हेंटरी',
    catalogTitle: 'प्रमुख स्पेअर पार्ट्स व दर्जेदार अॅक्सेसरीज',
    catalogSubtitle:
      'शहादा काउंटरवर तत्काळ उपलब्ध असलेले टेस्टेड डिस्प्ले फोल्डर्स, जास्त बॅकअप देणाऱ्या बॅटऱ्या आणि फास्ट चार्जर्स.',
    catAll: 'सर्व स्पेअर',
    catDisplays: 'डिस्प्ले फोल्डर्स',
    catBatteries: 'मोबाईल बॅटऱ्या',
    catChargers: 'फास्ट चार्जर्स',
    catAccessories: 'केबल्स व सब-बोर्ड',
    catalogSearchPlaceholder: 'मॉडेल (उदा. Note 10, M31, iPhone), पार्ट नाव किंवा SKU शोधा...',
    catalogSearchLabel: 'स्पेअर्स व अॅक्सेसरीज शोधा',
    catalogAllBrands: 'सर्व ब्रँड',
    catalogResultsCount: 'तपासलेले पार्ट उपलब्ध',
    catalogNoResults: 'या शोध निकषांसाठी थेट पार्ट सापडला नाही.',
    catalogRequestPartBtn: 'व्हॉट्सअ‍ॅपवर पार्टची चौकशी करा',
    catalogClearSearch: 'शोध रद्द करा',
    compatibleModels: 'सपोर्टेड मॉडेल्स:',
    specLabel: 'तपासलेली गुणवत्ता वैशिष्ट्ये:',
    enquirePriceBtn: 'काउंटर दर विचारा',

    estimatorBadge: 'झटपट दुरुस्ती खर्च गणक',
    estimatorTitle: 'तुमच्या मोबाईलचा दुरुस्ती खर्च तपासा',
    estimatorSubtitle:
      'शहाद्यातील अचूक काउंटर दर आणि वेळेचा अंदाज मिळवण्यासाठी तुमचा मोबाईल ब्रँड, समस्या आणि पार्टची गुणवत्ता निवडा.',
    estimatorStep1Brand: '१. मोबाईल ब्रँड निवडा',
    estimatorStep2Issue: '२. काय समस्या किंवा पार्ट बदलावा लागेल?',
    estimatorStep3Grade: '३. पार्टची गुणवत्ता ग्रेड निवडा',
    estimatorEstimateTitle: 'वर्कशॉप दुरुस्ती अंदाज',
    estimatorEstimatedRange: 'अंदाजित काउंटर किंमत मर्यादा',
    estimatorTurnaroundLabel: 'लागणारा वेळ',
    estimatorWarrantyLabel: 'वॉरंटी हमी',
    estimatorPerk1: 'काउंटर तपासणीचे कोणतेही अतिरिक्त शुल्क नाही',
    estimatorPerk2: 'डेटा सुरक्षितता हमी — फोटो आणि कॉन्टॅक्ट्स सुरक्षित राहतात',
    estimatorPerk3: 'डिलिव्हरीपूर्वी १२-पॉइंट हार्डवेअर बेंच टेस्टिंग',
    estimatorBookWhatsAppBtn: 'व्हॉट्सअ‍ॅपवर स्लॉट बुक करा',
    estimatorCallCounterBtn: 'वर्कशॉप काउंटरला थेट कॉल करा',
    estimatorDisclaimer:
      '*अंतिम किंमत प्रत्यक्ष फोनची स्थिती आणि अचूक मॉडेल तपासल्यानंतर ठरवली जाते.',

    issueScreen: 'डिस्प्ले व टच स्क्रीन (काच/स्क्रीन तुटली)',
    issueBattery: 'बॅटरी लवकर संपते / फुगली आहे',
    issueCharging: 'चार्जिंग सॉकेट / सब-बोर्ड / माईक',
    issueWater: 'पाण्यात पडलेला फोन (अल्ट्रासॉनिक क्लीनिंग)',
    issueCamera: 'कॅमेरा काच / बॅक ग्लास कव्हर',
    issueBoard: 'डेड फोन / मदरबोर्ड शॉर्ट डायग्नोस्टिक',

    gradeOriginal: 'OEM / ओरिजिनल सर्विस ग्रेड',
    gradeOriginalDesc: 'ओरिजिनल आयसी, ट्रू कलर AMOLED/LCD, ९० दिवस थेट काउंटर रिप्लेसमेंट वॉरंटी.',
    gradeDiamond: 'डायमंड टेस्टेड ग्रेड',
    gradeDiamondDesc: 'बेंच-टेस्टेड उच्च दर्जाचा आफ्टरमार्केट पार्ट, ३० दिवस टेस्टिंग वॉरंटी.',

    repairBadge: 'कम्पोनेंट लॅब',
    repairTitle: 'अचूक डायग्नोस्टिक्स व डस्ट-फ्री फिटिंग',
    repairSubtitle:
      'आम्ही मायक्रो-सोल्डरिंग, डस्ट-फ्री फ्रेम पेस्टिंग आणि पूर्ण टेस्टिंगद्वारे खात्रीशीर काम करतो.',
    step1Title: '०१. प्राथमिक तपासणी',
    step1Desc: 'DC पॉवर सप्लाय व डिजिटल मल्टीमीटरने नेमकी बिघाड शोधली जाते.',
    step2Title: '०२. अचूक फिटिंग',
    step2Desc: 'फ्रेमची स्वच्छता करून ओरिजिनल सीलंट व क्लॅम्पद्वारे मजबूत फिटिंग.',
    step3Title: '०३. सेन्सर व टच टेस्ट',
    step3Desc: 'मल्टी-टच, कॉलिंग सेन्सर व मायक्रोफोनची लॅबमध्ये पूर्ण चाचणी.',
    step4Title: '०४. काउंटर डिलिव्हरी',
    step4Desc: 'ग्राहकासमोर फोन चालू करून पूर्ण समाधानानंतरच पेमेंट स्वीकारले जाते.',
    estTimeLabel: 'सर्वसाधारण वेळ:',
    enquireRepairBtn: 'माझ्या मॉडेलसाठी वेळ विचारा',

    wholesaleBadge: 'टेक्निशियन व वर्कशॉप डेस्क',
    wholesaleTitle: 'स्थानिक रिपेअरिंग दुकानांसाठी होलसेल पुरवठा',
    wholesaleSubtitle:
      'शहादा, तलोदा, शिरपूर, धडगाव आणि नंदुरबार येथील वर्कशॉप्सना खात्रीशीर स्पेअर पार्ट्सचा पुरवठा.',
    wholesaleAdvantage1: 'रिटर्नचा त्रास टाळण्यासाठी काउंटरवर आधीच तपासलेला स्टॉक.',
    wholesaleAdvantage2: 'नियमित कारागीर व दुकानदारांसाठी विशेष होलसेल डिस्काउंट दर.',
    wholesaleAdvantage3: 'शहाद्यात त्वरित काउंटर डिलिव्हरी आणि बस-पार्सल सुविधा.',
    wholesaleAdvantage4: 'थेट आमच्या वर्कशॉप टेक्निशियनशी व्हॉट्सअ‍ॅपवर संपर्क.',
    wholesaleFormTitle: 'टेक्निशियन होलसेल दरपत्रक मागवा',
    fieldShopName: 'दुकान / वर्कशॉपचे नाव',
    fieldTown: 'तुमचे गाव / शहर (उदा. तलोदा, शिरपूर)',
    fieldPartsNeeded: 'लागणारे पार्ट व प्रमाण (उदा. ५x नोट १० फोल्डर, ३x M31 बॅटरी)',
    btnSendWholesale: 'व्हॉट्सअ‍ॅपवर होलसेल चौकशी पाठवा',

    locationBadge: 'काउंटर पत्ता',
    locationTitle: 'शहादा येथील आमच्या दुकानाला भेट द्या',
    locationSubtitle:
      'मार्केट यार्ड रोड, जुन्या बस स्टँडजवळ. स्वतः येऊन पार्ट्स तपासा किंवा रिपेअरिंग करून घ्या.',
    counterAddressHeading: 'दुकान व काउंटरचा पत्ता',
    timingsHeading: 'काउंटर उघडण्याची वेळ',
    openGoogleMapsBtn: 'गुगल मॅप्सवर रस्ता पहा',
    callCounterBtn: 'काउंटरला थेट कॉल करा',

    footerNotice:
      'सूचना: रवी मोबाईल हे थेट चौकशीवर चालणारे काउंटर आहे. सर्व दर व उपलब्धता थेट व्हॉट्सअ‍ॅप किंवा दुकानातच निश्चित केली जाते. या वेबसाईटवर कोणतेही ऑनलाइन पेमेंट घेतले जात नाही.',
    footerRights: 'रवी मोबाईल (शहादा). सर्व हक्क राखीव.',
    footerTowns: 'स्थानिक पुरवठा: शहादा • तलोदा • धडगाव • शिरपूर • नंदुरबार',

    mobileCall: '📞 काउंटरला फोन करा',
    mobileWhatsApp: '💬 व्हॉट्सअ‍ॅप करा',
  },

  hi: {
    navProducts: 'स्पेयर पार्ट्स व उत्पाद',
    navRepairs: 'रिपेयरिंग लैब',
    navWholesale: 'तकनीशियन डेस्क',
    navLocation: 'पता व समय',
    navWhatsApp: 'व्हाट्सअ‍ॅप पर चैट',

    heroEyebrow: '📍 शहादा, जिला नंदुरबार • वर्कशॉप व होलसेल काउंटर',
    heroTitleLine1: 'मोबाइल हार्डवेयर।',
    heroTitleLine2: 'पूर्ण तकनीकी शुद्धता।',
    heroSubtitle:
      'शहादा में टेस्टेड डिस्प्ले फोल्डर्स, शुद्ध कोबाल्ट बैटरियां और कम्पोनेंट रिपेयर। सीधे काउंटर रेट और सही सलाह पाएं।',
    heroCtaWhatsApp: 'व्हाट्सअ‍ॅप पर रेट पूछें',
    heroCtaExplore: 'समस्या चुनें',
    heroSpecDisplays: 'बेंच-टेस्टेड डिस्प्ले',
    heroSpecBatteries: 'सेफ ड्यूल-IC बैटरियां',
    heroSpecWholesale: 'तकनीशियन होलसेल दर',
    heroBenchTitle: 'हार्डवेयर क्वालिटी व काउंटर स्टेटस',
    heroCounterOpen: 'काउंटर खुला है',
    heroBenchVisualTitle: 'डिस्प्ले व पावर टेस्टिंग',
    heroBenchVisualDesc: 'फ्रेम अलाइनमेंट • 90Hz स्मूथ टच • शुद्ध कोबाल्ट केमिस्ट्री',
    heroBenchTurnaround: '३० से ४५ मिनट',
    heroBenchSupply: 'होलसेल बॉक्स रेट उपलब्ध',

    problemHeading: 'आज आपको किस समस्या में मदद चाहिए?',
    problemSubheading: 'अपने फोन की खराबी चुनें और तुरंत काउंटर उपलब्धता व रेट जानें:',
    problemScreenTitle: 'स्क्रीन व टच डिस्प्ले',
    problemScreenDesc: 'टूटा हुआ ग्लास, टच न चलना, काले धब्बे या स्क्रीन पर लाइनें आना।',
    problemScreenAction: 'डिस्प्ले स्टॉक जांचें →',
    problemBatteryTitle: 'बैटरी बैकअप व ड्रेन',
    problemBatteryDesc: 'बैटरी २ घंटे में खत्म होना, अचानक फोन बंद होना या बैटरी फूलना।',
    problemBatteryAction: 'बैटरी स्टॉक जांचें →',
    problemChargingTitle: 'चार्जिंग पोर्ट व स्ट्रिप',
    problemChargingDesc: 'केबल ढीली होना, स्लो चार्जिंग, कॉल में आवाज न जाना।',
    problemChargingAction: 'पोर्ट रिपेयर रेट पूछें →',
    problemWholesaleTitle: 'तकनीशियन होलसेल',
    problemWholesaleDesc: 'मोबाइल रिपेयर दुकानों के लिए बॉक्स फोल्डर व टेस्टेड बैटरियां।',
    problemWholesaleAction: 'होलसेल रेट प्राप्त करें →',

    catalogBadge: 'हार्डवेयर कैटलॉग',
    catalogTitle: 'पॉपुलर स्पेयर पार्ट्स व एक्सेसरीज',
    catalogSubtitle:
      'शहादा काउंटर पर उपलब्ध बेहतरीन डिस्प्ले फोल्डर्स, रिप्लेसमेंट बैटरियां और फास्ट चार्जर्स।',
    catAll: 'सभी स्पेयर',
    catDisplays: 'डिस्प्ले फोल्डर',
    catBatteries: 'मोबाइल बैटरियां',
    catChargers: 'फास्ट चार्जर',
    catAccessories: 'केबल्स व कवर',
    catalogSearchPlaceholder: 'मॉडल (जैसे Note 10, M31, iPhone), पार्ट नाम या SKU खोजें...',
    catalogSearchLabel: 'स्पेयर एवं एक्सेसरीज खोजें',
    catalogAllBrands: 'सभी ब्रांड्स',
    catalogResultsCount: 'सत्यापित पार्ट उपलब्ध',
    catalogNoResults: 'इस खोज के लिए सीधा पार्ट कैटलॉग में नहीं मिला।',
    catalogRequestPartBtn: 'व्हाट्सएप पर पार्ट की उपलब्धता पूछें',
    catalogClearSearch: 'सर्च साफ करें',
    compatibleModels: 'सपोर्टेड मॉडल:',
    specLabel: 'जांची गई खूबियां:',
    enquirePriceBtn: 'व्हाट्सअ‍ॅप पर रेट पूछें',

    estimatorBadge: 'त्वरित रिपेयर खर्च कैलकुलेटर',
    estimatorTitle: 'अपने मोबाइल का रिपेयर खर्च जानें',
    estimatorSubtitle:
      'शहादा काउंटर पर सही कीमत और समय का अनुमान पाने के लिए अपना ब्रांड, समस्या और पार्ट की क्वालिटी चुनें।',
    estimatorStep1Brand: '१. मोबाइल ब्रांड चुनें',
    estimatorStep2Issue: '२. समस्या या खराब पार्ट चुनें',
    estimatorStep3Grade: '३. पार्ट की क्वालिटी ग्रेड चुनें',
    estimatorEstimateTitle: 'वर्कशॉप रिपेयर एस्टीमेट',
    estimatorEstimatedRange: 'अनुमानित काउंटर रेट',
    estimatorTurnaroundLabel: 'लगने वाला समय',
    estimatorWarrantyLabel: 'वारंटी सुविधा',
    estimatorPerk1: 'काउंटर डायग्नोस्टिक जांच का कोई शुल्क नहीं',
    estimatorPerk2: 'डेटा सुरक्षा गारंटी — फोटो व कॉन्टैक्ट्स बिल्कुल सुरक्षित',
    estimatorPerk3: 'डिलीवरी से पहले 12-पॉइंट बेंच टेस्टिंग',
    estimatorBookWhatsAppBtn: 'व्हाट्सएप पर स्लॉट बुक करें',
    estimatorCallCounterBtn: 'वर्कशॉप काउंटर पर कॉल करें',
    estimatorDisclaimer:
      '*अंतिम रेट फोन की वास्तविक स्थिति और सही मॉडल की जांच के बाद तय होता है।',

    issueScreen: 'डिस्प्ले व टच स्क्रीन (कांच/स्क्रीन टूटा)',
    issueBattery: 'बैटरी जल्दी खत्म होना / फूल जाना',
    issueCharging: 'चार्जिंग जैक / सब-बोर्ड / माइक',
    issueWater: 'पानी में गिरा फोन (अल्ट्रासॉनिक क्लीनिंग)',
    issueCamera: 'कैमरा ग्लास / बैक ग्लास हाउसिंग',
    issueBoard: 'डेड फोन / मदरबोर्ड शॉर्ट डायग्नोस्टिक्स',

    gradeOriginal: 'OEM / ओरिजिनल सर्विस ग्रेड',
    gradeOriginalDesc: 'ओरिजिनल आईसी, ट्रू कलर डिस्प्ले, 90 दिन डायरेक्ट काउंटर वारंटी।',
    gradeDiamond: 'डायमंड टेस्टेड ग्रेड',
    gradeDiamondDesc: 'बेंच-टेस्टेड हाई-क्वालिटी पार्ट, बजट-फ्रेंडली 30 दिन टेस्टिंग वारंटी।',

    repairBadge: 'कम्पोनेंट लैब',
    repairTitle: 'सटीक रिपेयरिंग व जांच प्रक्रिया',
    repairSubtitle:
      'माइक्रो-सोल्डरिंग, डस्ट-फ्री फ्रेम फिटिंग और पूरी टेस्टिंग के साथ पारदर्शी रिपेयरिंग।',
    step1Title: '०१. प्राथमिक जांच',
    step1Desc: 'DC पावर सप्लाई और मल्टीमीटर से शॉर्ट-सर्किट की जांच की जाती है।',
    step2Title: '०२. सटीक फिटिंग',
    step2Desc: 'फ्रेम की सफाई के बाद ओरिजिनल पेस्टिंग और क्लैंप क्योरिंग।',
    step3Title: '०३. सेंसर व टच टेस्ट',
    step3Desc: 'मल्टी-टच स्मूथनेस, कॉलिंग सेंसर और माइक की पूरी पुष्टि।',
    step4Title: '०४. काउंटर हैंडओवर',
    step4Desc: 'ग्राहक के सामने फोन चालू करवाकर संतुष्टि के बाद ही पेमेंट लिया जाता है।',
    estTimeLabel: 'अनुमानित समय:',
    enquireRepairBtn: 'रिपेयरिंग के लिए समय पूछें',

    wholesaleBadge: 'तकनीशियन व वर्कशॉप डेस्क',
    wholesaleTitle: 'मोबाइल रिपेयर दुकानों के लिए थोक सप्लाई',
    wholesaleSubtitle:
      'शहादा, तलोदा, शिरपुर, धड़गांव और नंदुरबार के वर्कशॉप्स के लिए भरोसेमंद स्पेयर पार्ट्स पार्टनर।',
    wholesaleAdvantage1: 'रिटर्न की परेशानी से बचने के लिए काउंटर पर प्री-टेस्ट किया गया स्टॉक।',
    wholesaleAdvantage2: 'नियमित दुकानदारों व मैकेनिकों के लिए स्पेशल होलसेल डिस्काउंट दरें।',
    wholesaleAdvantage3: 'शहादा में तुरंत काउंटर पिकअप और आसपास के शहरों में बस-पार्सल सुविधा।',
    wholesaleAdvantage4: 'स्टॉक और रेट की जानकारी सीधे व्हाट्सअ‍ॅप पर उपलब्ध।',
    wholesaleFormTitle: 'तकनीशियन होलसेल रेट-कार्ड प्राप्त करें',
    fieldShopName: 'दुकान / वर्कशॉप का नाम',
    fieldTown: 'आपका शहर / कस्बा (उदा. तलोदा, शिरपुर)',
    fieldPartsNeeded: 'आवश्यक पार्ट्स व मात्रा (उदा. ५x नोट १० फोल्डर, ३x M31 बैटरी)',
    btnSendWholesale: 'व्हाट्सअ‍ॅप पर होलसेल मांग भेजें',

    locationBadge: 'दुकान का पता',
    locationTitle: 'शहादा स्थित हमारे काउंटर पर पधारें',
    locationSubtitle:
      'मार्केट यार्ड रोड, पुराने बस स्टैंड के पास। खुद आकर पार्ट्स जांचें या रिपेयरिंग पर चर्चा करें।',
    counterAddressHeading: 'दुकान व काउंटर का पता',
    timingsHeading: 'खुलने का समय',
    openGoogleMapsBtn: 'गूगल मैप्स पर रास्ता देखें',
    callCounterBtn: 'काउंटर पर सीधे कॉल करें',

    footerNotice:
      'सूचना: रवि मोबाइल एक डायरेक्ट इन्क्वायरी काउंटर है। सभी रेट और स्टॉक उपलब्धता व्हाट्सअ‍ॅप या सीधे दुकान पर तय होते हैं। इस वेबसाइट पर कोई ऑनलाइन पेमेंट नहीं लिया जाता है।',
    footerRights: 'रवि मोबाइल (शहादा)। सर्वाधिकार सुरक्षित।',
    footerTowns: 'क्षेत्रीय सप्लाई: शहादा • तलोदा • धड़गांव • शिरपुर • नंदुरबार',

    mobileCall: '📞 काउंटर को कॉल करें',
    mobileWhatsApp: '💬 व्हाट्सअ‍ॅप करें',
  },
};
