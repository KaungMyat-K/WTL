import { Fragment } from "react/jsx-runtime";

// Types for Location Data
interface ContactPerson {
  name: string;
  email: string;
  label?: string; // Optional label like "(Global Business)"
}

interface Location {
  city: string;
  isHQ?: boolean;
  companyName: string;
  address: string;
  phone: string;
  taxId?: string;
  contacts: ContactPerson[];
}

// Complete Sample Data Array - 6 Locations
const locationData: Location[] = [
  {
    city: "Shenzhen",
    isHQ: true,
    companyName: "WTL International Logistics Ltd (ShenZhen)",
    address:
      "Room 908, Guangshen Building, No.2023, Shennan East Road, Shenzhen, China",
    phone: "+86 755 8229 9181",
    contacts: [{ name: "Eric Ou", email: "ericou@szn.wtl-group.cn" }],
  },
  {
    city: "Shanghai",
    companyName: "WTL International Logistics Ltd (Shanghai)",
    address:
      "Room 609, No.82, Zhongshan North No.1 Road, Hongkou District, Shanghai, China",
    phone: "+86 21 5677 0951",
    contacts: [
      { name: "Eddie Hsu", email: "eddie@sha.wtl-group.cn" },
      {
        name: "Kevin Souchaud (Overseas Dept Manager)",
        email: "kevin@wtl-group.cn",
      },
    ],
  },
  {
    city: "ZhongShan",
    companyName: "WTL International Logistics Ltd (ZhongShan)",
    address:
      "Room 513, Yuhuayuan, Yuhua Garden Plaza, 59 Zhongshan 3 Road, Zhongshan, Guangdong, China",
    phone: "+86 760 8879 8808",
    contacts: [{ name: "Rose Zhang", email: "rose@zhs.wtl-group.cn" }],
  },
  {
    city: "Myanmar",
    companyName: "WTL (Myanmar) International Logistics Co., Ltd",
    address:
      "Room 1305, Junction City Office Tower, Bogyoke Aung San Road, Pabedan Township, Yangon, Myanmar",
    phone: "+959 767 218 323, +959 767 218 343, +959 880 915 130",
    contacts: [
      { name: "Daniel (Kyaw Zin Latt)", email: "daniel@wtl-group.cn" },
      {
        name: "",
        email: "business.rgn@wtl-group.cn",
        label: "Global Business",
      },
      {
        name: "",
        email: "keyaccount@wtl-group.cn",
        label: "Key Client Account",
      },
      {
        name: "",
        email: "finance.rgn@wtl-group.cn",
        label: "Finance",
      },
      {
        name: "",
        email: "hr.rgn@wtl-group.cn",
        label: "HR",
      },
    ],
  },
  {
    city: "Thailand",
    companyName: "World Track Logistics (Thailand) Co., Ltd",
    address:
      "Building No.576, Sukhumvit Soi 95, Bang Chak Subdistrict, Phra Khanong District, Bangkok 10260",
    phone: "+666 4017 1505, +666 4017 1506, +666 4017 1507",
    contacts: [
      {
        name: "Daniel (Kyaw Zin Latt)",
        email: "daniel@worldtracklogistics.com",
      },
      {
        name: "",
        email: "overseas.bkk@worldtracklogistics.com",
        label: "Overseas Sales",
      },
      {
        name: "",
        email: "cs.bkk@worldtracklogistics.com",
        label: "Customer Service",
      },
      {
        name: "",
        email: "finance.bkk@worldtracklogistics.com",
        label: "Finance",
      },
      {
        name: "",
        email: "hiring.bkk@worldtracklogistics.com",
        label: "HR",
      },
    ],
  },
  {
    city: "Indonesia",
    companyName: "PT WORLD TRACK LOGISTIK",
    address: "Grand Slipi Tower FL.7-J, Jakarta Barat 11480",
    phone: "+6221 387 822 87",
    contacts: [
      {
        name: "",
        email: "wtlsupervisor@jktwtl-group.com",
        label: "Supervisor",
      },
    ],
  },
];

// Shared Icons
const MapPinIcon = () => (
  <svg
    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary flex-shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const TaxIcon = () => (
  <svg
    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

function LocationList() {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {locationData.map((loc) => (
          <div key={loc.city} className="group p-4 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex flex-col gap-1 sm:gap-1.5 flex-1">
                {/* Header */}
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {loc.city}
                  </h3>
                  {loc.isHQ && (
                    <span className="text-secondary text-[10px] sm:text-xs font-semibold bg-secondary/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-sm">
                      HQ
                    </span>
                  )}
                </div>

                {/* Company Name */}
                <p className="text-gray-300 text-xs sm:text-sm font-semibold">
                  {loc.companyName}
                </p>

                {/* Address */}
                <p className="text-gray-400 text-xs sm:text-sm flex items-start gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                  <MapPinIcon />
                  <span>{loc.address}</span>
                </p>

                {/* Phone */}
                <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                  <PhoneIcon />
                  <span>{loc.phone}</span>
                </p>

                {/* Tax ID - Only for Indonesia */}
                {loc.taxId && (
                  <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                    <TaxIcon />
                    <span>Tax ID: {loc.taxId}</span>
                  </p>
                )}

                <div className="border-t border-gray-700 my-1.5 sm:my-2" />

                {/* Contacts */}
                {loc.contacts.map((contact, idx) => (
                  <Fragment key={contact.email}>
                    {contact.name?.trim() && (
                      <p
                        className={`text-gray-300 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 ${
                          idx > 0 ? "mt-1 sm:mt-2" : ""
                        }`}
                      >
                        <UserIcon />
                        <span>{contact.name}</span>
                      </p>
                    )}
                    <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                      <MailIcon />
                      <a
                        href={`mailto:${contact.email}`}
                        className="hover:text-secondary transition-colors duration-300 text-xs sm:text-sm break-all"
                      >
                        {contact.email}
                      </a>
                      {contact.label && (
                        <span className="text-gray-500 text-[10px] sm:text-xs">
                          ({contact.label})
                        </span>
                      )}
                    </p>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocationList;
