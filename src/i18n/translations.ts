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

  // Product Showcase
  catalogBadge: string;
  catalogTitle: string;
  catalogSubtitle: string;
  catAll: string;
  catDisplays: string;
  catBatteries: string;
  catChargers: string;
  catAccessories: string;
  compatibleModels: string;
  specLabel: string;
  enquirePriceBtn: string;

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
    problemWholesaleDesc: 'Box lot folders, tested battery packs, and sub-boards for repair shops.',
    problemWholesaleAction: 'Get Wholesale Rates →',

    catalogBadge: 'Hardware Catalogue',
    catalogTitle: 'Featured Spares & Accessories',
    catalogSubtitle:
      'Fast-moving display folders, replacement batteries, and GaN fast chargers available at our Shahada counter.',
    catAll: 'All Items',
    catDisplays: 'Display Assemblies',
    catBatteries: 'Mobile Batteries',
    catChargers: 'Fast Chargers',
    catAccessories: 'Protection & Cables',
    compatibleModels: 'Compatible Models:',
    specLabel: 'Verified Specs:',
    enquirePriceBtn: 'Enquire Price on WhatsApp',

    repairBadge: 'Component Lab',
    repairTitle: 'Precision Repair & Diagnostics',
    repairSubtitle:
      'Professional hardware diagnosis, clean frame gluing, and micro-soldering performed with transparent timelines.',
    step1Title: '01. Diagnostic Inspection',
    step1Desc: 'DC power supply test & multimeter check to isolate short circuits.',
    step2Title: '02. Precision Fitting',
    step2Desc: 'Dust-free frame cleaning, original adhesive strip placement & clamp curing.',
    step3Title: '03. Sensor & Touch Verification',
    step3Desc: 'Rigorous multi-touch latency check, light sensor & earpiece test.',
    step4Title: '04. Counter Handover',
    step4Desc: 'Customer verifies touch smoothness and clarity on counter before final payment.',
    estTimeLabel: 'Estimated Turnaround:',
    enquireRepairBtn: 'Book Diagnostic on WhatsApp',

    wholesaleBadge: 'Technician & Workshop Portal',
    wholesaleTitle: 'Wholesale Supply for Repair Workshops',
    wholesaleSubtitle:
      'Partner with Ravi Mobile for reliable counter stock and bulk parcel supply across Shahada, Taloda, Shirpur, Dhadgaon, and Nandurbar.',
    wholesaleAdvantage1: 'Pre-tested counter stock with verified IC chipsets to minimize returns.',
    wholesaleAdvantage2: 'Dedicated technician discount price tier for regular repair shops.',
    wholesaleAdvantage3: 'Same-day counter pickup and daily bus-parcel dispatch to neighboring towns.',
    wholesaleAdvantage4: 'Direct WhatsApp support for immediate stock inquiries and part reservation.',
    wholesaleFormTitle: 'Request Technician Wholesale Rate-Card',
    fieldShopName: 'Workshop / Shop Name',
    fieldTown: 'Your Town / City (e.g. Taloda, Shirpur)',
    fieldPartsNeeded: 'Required Parts & Quantities (e.g. 5x Note 10 Displays, 3x M31 Batteries)',
    btnSendWholesale: 'Send Wholesale Request to WhatsApp',

    locationBadge: 'Counter Visit',
    locationTitle: 'Visit Our Shahada Counter',
    locationSubtitle:
      'Conveniently located on Market Yard Road near Old Bus Stand. Walk in to inspect spares in person or discuss repair diagnostics.',
    counterAddressHeading: 'Shop Counter Address',
    timingsHeading: 'Operating Hours',
    openGoogleMapsBtn: 'Open in Google Maps',
    callCounterBtn: 'Call Shop Counter',

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
      'शहाद्यात टेस्ट केलेले डिस्प्ले फोल्डर्स, प्युअर कोबाल्ट बॅटऱ्या आणि चिप-लेव्हल रिपेअरिंग. थेट काउंटरवर खात्रीशीर भाव मिळवा.',
    heroCtaWhatsApp: 'व्हॉट्सअ‍ॅपवर भाव विचारा',
    heroCtaExplore: 'समस्या निवडा',
    heroSpecDisplays: 'बेंचवर टेस्ट केलेले डिस्प्ले',
    heroSpecBatteries: 'ड्युअल-IC सेफ बॅटऱ्या',
    heroSpecWholesale: 'टेक्निशियन होलसेल दर',
    heroBenchTitle: 'हार्डवेअर क्वालिटी व काउंटर स्टेटस',
    heroCounterOpen: 'दुकान सुरू आहे',
    heroBenchVisualTitle: 'डिस्प्ले व पॉवर तपासणी',
    heroBenchVisualDesc: 'फ्रेम फिटिंग • 90Hz स्मूथ टच • प्युअर कोबाल्ट बॅटरी सेल',
    heroBenchTurnaround: '३० ते ४५ मिनिटे',
    heroBenchSupply: 'होलसेल बॉक्स रेट उपलब्ध',

    problemHeading: 'आज आपल्याला कशाची मदत हवी आहे?',
    problemSubheading: 'आपल्या फोनची समस्या निवडून थेट व्हॉट्सअ‍ॅपवर उपलब्ध माल व किंमत विचारा:',
    problemScreenTitle: 'स्क्रीन व टच डिस्प्ले',
    problemScreenDesc: 'फुटलेली स्क्रीन, टच काम करत नाही, काळे डाग किंवा लाईन्स येणे.',
    problemScreenAction: 'डिस्प्ले स्टॉक तपासा →',
    problemBatteryTitle: 'बॅटरी बॅकअप व ड्रेन',
    problemBatteryDesc: 'बॅटरी लवकर संपणे, २०% वर फोन बंद पडणे किंवा बॅटरी फुगणे.',
    problemBatteryAction: 'बॅटरी स्टॉक तपासा →',
    problemChargingTitle: 'चार्जिंग जॅक व पोर्ट',
    problemChargingDesc: 'चार्जिंग केबल सैल बसणे, स्लो चार्जिंग, माईकचा आवाज न जाणे.',
    problemChargingAction: 'पोर्ट दुरुस्ती दर विचारा →',
    problemWholesaleTitle: 'टेक्निशियन होलसेल',
    problemWholesaleDesc: 'मोबाईल रिपेअरिंग दुकानांसाठी होलसेल बॉक्स फोल्डर्स व बॅटऱ्या.',
    problemWholesaleAction: 'होलसेल भाव मिळवा →',

    catalogBadge: 'हार्डवेअर कॅटलॉग',
    catalogTitle: 'खास स्पेअर्स व अ‍ॅक्सेसरीज',
    catalogSubtitle:
      'शहादा काउंटरवर उपलब्ध असलेले दर्जेदार डिस्प्ले फोल्डर्स, बॅटऱ्या आणि फास्ट चार्जर्स.',
    catAll: 'सर्व उत्पादने',
    catDisplays: 'डिस्प्ले फोल्डर्स',
    catBatteries: 'मोबाईल बॅटऱ्या',
    catChargers: 'फास्ट चार्जर्स',
    catAccessories: 'केबल्स व कव्हर',
    compatibleModels: 'सपोर्टेड मॉडेल्स:',
    specLabel: 'तपासलेले स्पेसिफिकेशन्स:',
    enquirePriceBtn: 'व्हॉट्सअ‍ॅपवर किंमत विचारा',

    repairBadge: 'रिपेअरिंग लॅब',
    repairTitle: 'अचूक रिपेअरिंग व तपासणी प्रक्रिया',
    repairSubtitle:
      'मायक्रो-सोल्डरिंग, ओरिजिनल गम फ्रेम फिटिंग आणि संपूर्ण तपासणीसह तत्पर सेवा.',
    step1Title: '०१. सुरुवातीची तपासणी',
    step1Desc: 'DC पॉवर सप्लाय व मल्टीमीटरने शॉर्ट सर्किट तपासणी केली जाते.',
    step2Title: '०२. अचूक फिटिंग',
    step2Desc: 'फ्रेममधील धूळ साफ करून मूळ गमिंग आणि क्लॅम्प क्युरिंग केले जाते.',
    step3Title: '०३. सेन्सर व टच टेस्ट',
    step3Desc: 'मल्टी-टच स्मूथनेस, कॉलिंग सेन्सर व माईकची संपूर्ण खात्री केली जाते.',
    step4Title: '०४. काउंटरवर खात्री',
    step4Desc: 'ग्राहकांसमोर फोन चालू करून समाधान झाल्यानंतरच पेमेंट घेतले जाते.',
    estTimeLabel: 'अंदाजे वेळ:',
    enquireRepairBtn: 'रिपेअरिंगसाठी वेळ विचारा',

    wholesaleBadge: 'टेक्निशियन व वर्कशॉप डेस्क',
    wholesaleTitle: 'मोबाईल रिपेअर शॉप्ससाठी होलसेल पुरवठा',
    wholesaleSubtitle:
      'शहादा, तळोदा, शिरपूर, धडगाव आणि नंदुरबार येथील वर्कशॉप्ससाठी खात्रीशीर स्पेअर्स पुरवठादार.',
    wholesaleAdvantage1: 'रिप्लेसमेंटचा त्रास कमी करण्यासाठी काउंटरवर प्री-टेस्ट केलेला माल.',
    wholesaleAdvantage2: 'नियमित कारागिरांसाठी स्पेशल होलसेल डिस्काउंट दर.',
    wholesaleAdvantage3: 'शहाद्यात काउंटर पिकअप आणि आसपासच्या तालुक्यांत बस-पार्सल पाठवण्याची सोय.',
    wholesaleAdvantage4: 'स्टॉक व दरांची माहिती थेट व्हॉट्सअ‍ॅपवर तत्काळ उपलब्ध.',
    wholesaleFormTitle: 'टेक्निशियन होलसेल रेट-कार्ड मिळवा',
    fieldShopName: 'तुमच्या दुकानाचे / वर्कशॉपचे नाव',
    fieldTown: 'तुमचे गाव / शहर (उदा. तळोदा, शिरपूर, धडगाव)',
    fieldPartsNeeded: 'आवश्यक स्पेअर्स व प्रमाण (उदा. ५x नोट १० फोल्डर्स, ३x M31 बॅटऱ्या)',
    btnSendWholesale: 'व्हॉट्सअ‍ॅपवर होलसेल मागणी पाठवा',

    locationBadge: 'दुकानाचा पत्ता',
    locationTitle: 'शहादा येथील आमच्या काउंटरला भेट द्या',
    locationSubtitle:
      'मार्केट यार्ड रोड, जुन्या बस स्टँडजवळ. स्वतः येऊन माल तपासा किंवा रिपेअरिंग सल्ला घ्या.',
    counterAddressHeading: 'दुकान व काउंटरचा पत्ता',
    timingsHeading: 'काउंटरची वेळ',
    openGoogleMapsBtn: 'गुगल मॅप्सवर रस्ता पाहा',
    callCounterBtn: 'काउंटरवर थेट फोन करा',

    footerNotice:
      'सूचना: रवी मोबाईल हे थेट चौकशी व काउंटर विक्री केंद्र आहे. सर्व दर आणि शिल्लक माल व्हॉट्सअ‍ॅपवर किंवा थेट दुकानात निश्चित केले जातात. या वेबसाईटवर कोणतेही ऑनलाईन पेमेंट घेतले जात नाही.',
    footerRights: 'रवी मोबाईल (शहादा). सर्व हक्क राखीव.',
    footerTowns: 'प्रादेशिक पुरवठा: शहादा • तळोदा • धडगाव • शिरपूर • नंदुरबार',

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
    compatibleModels: 'सपोर्टेड मॉडल:',
    specLabel: 'जांची गई खूबियां:',
    enquirePriceBtn: 'व्हाट्सअ‍ॅप पर रेट पूछें',

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
