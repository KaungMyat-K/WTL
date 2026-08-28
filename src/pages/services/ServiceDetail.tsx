import DetailHeroSection from "../../components/services/DetailHeroSection";
import OverViewSection from "../../components/services/OverViewSection";
import KeyFeatureSection from "../../components/services/KeyFeatureSection";
import { Navigate, useParams } from "react-router-dom";
import { SERVICES_DATA } from "../../static/serviceData";
import CtaSection from "../../components/contact/CtaSection";

function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const currentService = SERVICES_DATA.find(
    (service) => service.id === serviceId
  );

  if (!currentService) {
    return <Navigate to="/services" replace />;
  }
  return (
    <>
      <DetailHeroSection
        title={currentService.title}
        imageSrc={currentService.image}
      />
      <OverViewSection />
      <KeyFeatureSection />
      <CtaSection />
    </>
  );
}

export default ServiceDetail;
