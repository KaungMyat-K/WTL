import type { NetworkData } from "../../types/index1";

interface LogoItemProps {
  logo: NetworkData;
}

function ClientLogoItem({ logo }: LogoItemProps) {
  return (
    <div className="flex-shrink-0 px-8 sm:px-12 py-4 flex items-center justify-center">
      <img
        src={`https://wtl-admin-web.onrender.com${logo.imageUrl}`}
        alt={logo.name}
        className="h-10  md:h-16 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      />
    </div>
  );
}

export default ClientLogoItem;
