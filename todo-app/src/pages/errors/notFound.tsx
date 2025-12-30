import Anchor from "../../components/UI/Anchor";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
const NotFound = () => {
  return (
    <>
      <main className="grid h-screen w-screen place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold bg-background text-accent">
            404
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-content sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-tertiary sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Anchor href="#">
              <span>Go Back Home</span>
            </Anchor>
            <Anchor href="#">
              <span>Contact Support</span>
              <ChevronRightIcon className="h-5 w-5 text-tertiary" />
            </Anchor>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
