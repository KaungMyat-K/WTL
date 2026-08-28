import type { ClientLogo } from "../../types";

interface LogoItemProps {
  logo: ClientLogo;
}

function ClientLogoItem({ logo }: LogoItemProps) {
  return (
    <div className="flex-shrink-0 px-8 sm:px-12 py-4 flex items-center justify-center">
      <img
        src={logo.src}
        alt={logo.name}
        className="h-6 sm:h-8 md:h-10 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      />
    </div>
  );
}

export default ClientLogoItem;
