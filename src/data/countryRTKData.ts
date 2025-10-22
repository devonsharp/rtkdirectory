export interface RTKProvider {
  serviceName: string;
  providerOperator: string;
  coverage: string;
  costType: string;
  type: string;
}

export interface CountryRTKData {
  countryName: string;
  slug: string;
  pageTitle: string;
  metaDescription: string;
  h1: string;
  introContent: string;
  networkContent: string;
  choosingContent: string;
  providers: RTKProvider[];
}

export const countryRTKData: Record<string, CountryRTKData> = {
  germany: {
    countryName: "Germany",
    slug: "germany",
    pageTitle: "Germany RTK Correction Services & NTRIP Casters",
    metaDescription: "Comprehensive directory of RTK correction services and NTRIP casters in Germany. Find centimeter-level accuracy for agriculture, surveying, and construction.",
    h1: "RTK Correction Services in Germany",
    introContent: "Real-Time Kinematic (RTK) GNSS technology has become indispensable for high-precision applications across Germany, from precision agriculture in Bavaria to construction surveying in North Rhine-Westphalia. RTK correction services deliver centimeter-level positioning accuracy by transmitting correction data from reference stations to mobile GNSS receivers via NTRIP (Networked Transport of RTCM via Internet Protocol) casters. Germany's diverse landscape—from the flat northern plains to the mountainous Alps—demands robust RTK networks that can maintain signal integrity across varied terrain. Industries including precision farming, cadastral surveying, autonomous vehicle testing, and infrastructure development rely on these services to achieve the sub-decimeter accuracy critical for their operations.",
    networkContent: "Germany boasts one of Europe's most comprehensive RTK infrastructures, anchored by SAPOS® (Satellitenpositionierungsdienst der deutschen Landesvermessung), the official national network operated by the federal states' surveying authorities. SAPOS provides nationwide coverage with various service tiers, from basic DGPS to high-precision VRS (Virtual Reference Station) corrections. Private commercial networks have also emerged, offering specialized services for agricultural machinery manufacturers and construction firms. Users in Germany can also access free community-based networks like Centipede and RTK2go, though coverage may be limited to specific regions. International satellite-based correction services such as Swift Skylark and u-blox PointPerfect provide an alternative for users requiring seamless coverage across borders or in areas with sparse CORS (Continuously Operating Reference Station) infrastructure.",
    choosingContent: "Selecting the right NTRIP provider depends on several critical factors tailored to your specific use case in Germany. Consider your accuracy requirements: while basic DGPS may suffice for general navigation, precision agriculture and surveying typically demand VRS or MAC (Master-Auxiliary Concept) corrections for centimeter-level precision. Evaluate coverage areas carefully—national networks like SAPOS offer comprehensive coverage, but private networks may provide superior service in specific regions. Cost is another key consideration: government networks often offer subscription-based pricing with academic discounts, while commercial services may bundle corrections with equipment purchases. Reliability and support infrastructure matter significantly for time-sensitive operations; ensure your provider offers 24/7 uptime and responsive technical assistance. NTRIP serves as the communication backbone, enabling your GNSS receiver to connect seamlessly to correction data streams over cellular or internet connections. The table below summarizes the major RTK and NTRIP providers available in Germany.",
    providers: [
      {
        serviceName: "SAPOS®",
        providerOperator: "German Federal States Surveying Authorities",
        coverage: "National (Germany)",
        costType: "Paid Subscription",
        type: "National CORS"
      },
      {
        serviceName: "Swift Skylark",
        providerOperator: "Swift Navigation",
        coverage: "International",
        costType: "Paid Subscription",
        type: "Global/SSR"
      },
      {
        serviceName: "u-blox PointPerfect",
        providerOperator: "u-blox",
        coverage: "International",
        costType: "Paid Subscription",
        type: "Global/SSR"
      },
      {
        serviceName: "RTK2go",
        providerOperator: "Community Network",
        coverage: "Regional",
        costType: "Free",
        type: "Community Network"
      },
      {
        serviceName: "Centipede",
        providerOperator: "Open-Source Community",
        coverage: "Regional",
        costType: "Free",
        type: "Community Network"
      }
    ]
  },
  sweden: {
    countryName: "Sweden",
    slug: "sweden",
    pageTitle: "Sweden RTK Correction Services & NTRIP Casters",
    metaDescription: "Complete guide to RTK correction services and NTRIP casters in Sweden. Access SWEPOS and other networks for centimeter-level GNSS accuracy nationwide.",
    h1: "RTK Correction Services in Sweden",
    introContent: "Sweden's extensive forests, agricultural lands, and infrastructure projects demand high-precision GNSS positioning solutions that RTK technology provides. Real-Time Kinematic correction services enable centimeter-level accuracy essential for precision forestry management, modern farming practices, and construction surveying across Sweden's vast territory. NTRIP casters distribute correction data from reference stations to mobile receivers, allowing real-time positioning with unprecedented accuracy. From the northern reaches of Lapland to the southern plains of Skåne, RTK networks must maintain reliability across Sweden's challenging geography, including dense forests and remote areas. Industries such as precision agriculture, forestry, geodetic surveying, and civil engineering increasingly rely on RTK services for operations requiring sub-decimeter positioning accuracy.",
    networkContent: "Sweden's RTK infrastructure is dominated by SWEPOS, the national GNSS reference network operated by Lantmäteriet (the Swedish mapping, cadastral and land registration authority). SWEPOS provides comprehensive nationwide coverage with over 400 permanent reference stations, offering both Network RTK and Single Base corrections through various service tiers. The system supports multiple GNSS constellations including GPS, GLONASS, Galileo, and BeiDou. Beyond the national network, users can access international commercial services like Swift Skylark and u-blox PointPerfect, which provide satellite-based corrections ideal for cross-border operations or maritime applications. Community-based networks such as RTK2go offer free alternatives, though coverage is limited to areas with active volunteer-maintained base stations. For specialized forestry applications, some private operators maintain regional networks optimized for dense canopy environments.",
    choosingContent: "Choosing an appropriate NTRIP provider in Sweden requires careful evaluation of your specific positioning needs and operational context. Accuracy requirements vary significantly—while precision agriculture may need 2-3 cm accuracy, geodetic surveying often demands sub-centimeter precision available through SWEPOS's premium services. Coverage is another critical factor: SWEPOS offers unmatched nationwide coverage including remote northern regions, but international services may be preferable for maritime or cross-border operations. Cost considerations include SWEPOS's subscription tiers, which offer different accuracy levels and support packages, versus free community networks with variable reliability. Assess your need for technical support and guaranteed uptime, particularly important for commercial operations. The NTRIP protocol facilitates seamless connection between your GNSS receiver and correction data streams via internet or cellular networks. Below is a comprehensive table of major RTK and NTRIP providers serving Sweden.",
    providers: [
      {
        serviceName: "SWEPOS",
        providerOperator: "Lantmäteriet (Swedish Mapping Authority)",
        coverage: "National (Sweden)",
        costType: "Paid Subscription",
        type: "National CORS"
      },
      {
        serviceName: "Swift Skylark",
        providerOperator: "Swift Navigation",
        coverage: "International",
        costType: "Paid Subscription",
        type: "Global/SSR"
      },
      {
        serviceName: "u-blox PointPerfect",
        providerOperator: "u-blox",
        coverage: "International",
        costType: "Paid Subscription",
        type: "Global/SSR"
      },
      {
        serviceName: "RTK2go",
        providerOperator: "Community Network",
        coverage: "Regional",
        costType: "Free",
        type: "Community Network"
      }
    ]
  },
  france: {
    countryName: "France",
    slug: "france",
    pageTitle: "France RTK Correction Services & NTRIP Casters",
    metaDescription: "Explore RTK correction services and NTRIP casters in France. Access Orphéon, Centipede, and commercial networks for precision agriculture and surveying.",
    h1: "RTK Correction Services in France",
    introContent: "France's diverse agricultural landscape and extensive infrastructure projects create substantial demand for high-precision GNSS positioning through RTK correction services. From the vineyards of Bordeaux to the wheat fields of Beauce, Real-Time Kinematic technology enables centimeter-level accuracy crucial for precision agriculture, cadastral surveying, and construction applications. NTRIP casters transmit correction data from reference stations to mobile GNSS receivers, facilitating real-time positioning with sub-decimeter accuracy. France's varied terrain—including mountain ranges, coastal areas, and river valleys—requires robust RTK networks capable of maintaining signal quality across diverse environments. Industries including viticulture, precision farming, civil engineering, and geodetic surveying increasingly depend on RTK services for operations demanding the highest positioning accuracy.",
    networkContent: "France's RTK ecosystem features both public and private networks serving different user communities. The official national network, Orphéon, operated by the French National Institute of Geographic and Forest Information (IGN), provides comprehensive coverage across metropolitan France with hundreds of permanent reference stations. Orphéon offers various service levels from basic DGPS to high-precision Network RTK corrections. A notable feature of France's RTK landscape is Centipede, a vibrant open-source community network that has gained significant traction, particularly among farmers and agricultural professionals. Centipede provides free RTK corrections through volunteer-maintained base stations across many French regions. Commercial alternatives include international services like Swift Skylark and u-blox PointPerfect, offering satellite-based corrections ideal for users requiring seamless coverage or operating across borders. Private agricultural machinery manufacturers also operate proprietary networks for their equipment users.",
    choosingContent: "Selecting the optimal NTRIP provider in France involves evaluating multiple factors aligned with your operational requirements. Accuracy needs vary by application: precision agriculture typically requires 2-3 cm accuracy, while surveying and construction may demand sub-centimeter precision available through premium services. Coverage area is critical—Orphéon provides nationwide coverage with consistent quality, Centipede offers strong regional coverage in agricultural areas, and international services excel for cross-border or maritime applications. Cost considerations span from free community networks like Centipede to subscription-based services (Orphéon, commercial providers) with varying pricing tiers. Consider reliability requirements and technical support availability, especially important for commercial operations with uptime dependencies. NTRIP serves as the communication standard, enabling your GNSS receiver to access correction data streams via internet or cellular connectivity. The following table summarizes major RTK and NTRIP providers available throughout France.",
    providers: [
      {
        serviceName: "Orphéon",
        providerOperator: "IGN (French National Institute)",
        coverage: "National (France)",
        costType: "Paid Subscription",
        type: "National CORS"
      },
      {
        serviceName: "Centipede",
        providerOperator: "Open-Source Community",
        coverage: "National (France)",
        costType: "Free",
        type: "Community Network"
      },
      {
        serviceName: "Swift Skylark",
        providerOperator: "Swift Navigation",
        coverage: "International",
        costType: "Paid Subscription",
        type: "Global/SSR"
      },
      {
        serviceName: "u-blox PointPerfect",
        providerOperator: "u-blox",
        coverage: "International",
        costType: "Paid Subscription",
        type: "Global/SSR"
      },
      {
        serviceName: "RTK2go",
        providerOperator: "Community Network",
        coverage: "Regional",
        costType: "Free",
        type: "Community Network"
      },
      {
        serviceName: "Teria",
        providerOperator: "Teria (Telecom)",
        coverage: "National (France)",
        costType: "Paid Subscription",
        type: "Private VRS Network"
      }
    ]
  }
};
