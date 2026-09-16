import { useTranslation } from "react-i18next";
import { CLIENT_MARQUEE } from "../../static/clientMarquee";
import ClientLogoItem from "../ui/ClientLogo";

function ClientMarquee() {
  const { t } = useTranslation();

  return (
    <section className="py-10 bg-white  overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-lg sm:text-lg md:text-lg text-gray-400 tracking-wider">
            {t("home.clients.title")}
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="animate-marquee">
            {/* First Set */}
            <div className="flex flex-shrink-0 items-center">
              {CLIENT_MARQUEE.clients.map((logo) => (
                <ClientLogoItem key={`set1-${logo.id}`} logo={logo} />
              ))}
            </div>

            {/* Duplicate Set for  Loop */}
            <div className="flex flex-shrink-0 items-center">
              {CLIENT_MARQUEE.clients.map((logo) => (
                <ClientLogoItem key={`set2-${logo.id}`} logo={logo} />
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

export default ClientMarquee;
