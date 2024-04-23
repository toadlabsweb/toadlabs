import { BackgroundBeams } from "../../ui/background-beams";
import SocialLinks from "../../static-details/social-links";
import ContactDetails from "../../static-details/contact-details";
import Logo from "../../static-details/logo";
import Copyright from "../../static-details/copyright";

export function Footer() {
  return (
    <footer className="border-t-4 border-muted">
      <div className="min-h-[30rem] w-full rounded-md bg-neutral-100 dark:bg-neutral-950 relative flex flex-col justify-center antialiased">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 w-5/6 mx-auto my-5">
          <Logo className="w-full" />
          <div className="col-span-2">
            <ContactDetails />
          </div>
          <div>
            <SocialLinks />
          </div>
        </div>
        <BackgroundBeams />
      </div>
      <div>
        <Copyright />
      </div>
    </footer>
  );
}
