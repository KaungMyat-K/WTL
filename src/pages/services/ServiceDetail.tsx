import DetailHeroSection from "../../components/services/DetailHeroSection";
import OverViewSection from "../../components/services/OverViewSection";
import KeyFeatureSection from "../../components/services/KeyFeatureSection";
import { useParams } from "react-router-dom";
import CtaSection from "../../components/contact/CtaSection";
import { useTranslation } from "react-i18next";
import type { ServiceItem } from "../../types/index1";
import { Images } from "../../components/images";

function ServiceDetail() {
  const { t } = useTranslation();
  const { serviceId } = useParams<{ serviceId: string }>();

  const translatedItems = t("services.servicesList.items", {
    returnObjects: true,
  }) as ServiceItem[];

  const currentService = Array.isArray(translatedItems)
    ? translatedItems.find((item) => item.id === serviceId)
    : undefined;

  if (!currentService) {
    return <div>Service not found.</div>;
  }

  const img = Images.services.img.find((img) => img.id === currentService.id);

  return (
    <>
      <DetailHeroSection title={currentService.title} img={img?.src || ""} />
      <OverViewSection
        title={currentService.details.overview.title}
        content={currentService.details.overview.content}
      />
      <KeyFeatureSection features={currentService.details.keyFeatures} />
      <CtaSection />
    </>
  );
}

export default ServiceDetail;
