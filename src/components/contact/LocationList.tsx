import { Fragment } from "react/jsx-runtime";
import { Icons } from "../icons";
import { locationData } from "../../static/locationData";

function LocationList() {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {locationData.map((loc) => (
          <div key={loc.city} className="group p-4 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex flex-col gap-1 sm:gap-1.5 flex-1">
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

                <p className="text-gray-300 text-xs sm:text-sm font-semibold">
                  {loc.companyName}
                </p>

                <p className="text-gray-400 text-xs sm:text-sm flex items-start gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                  <Icons.mapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </p>

                <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                  <Icons.phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                  <span>{loc.phone}</span>
                </p>

                {/* {loc.taxId && (
                  <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                    <Icons.tax className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                    <span>Tax ID: {loc.taxId}</span>
                  </p>
                )} */}

                <div className="border-t border-gray-700 my-1.5 sm:my-2" />

                {loc.contacts.map((contact, idx) => (
                  <Fragment key={contact.email}>
                    {contact.name?.trim() && (
                      <p
                        className={`text-gray-300 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 ${
                          idx > 0 ? "mt-1 sm:mt-2" : ""
                        }`}
                      >
                        <Icons.user className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                        <span>{contact.name}</span>
                      </p>
                    )}
                    <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                      <Icons.mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
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
