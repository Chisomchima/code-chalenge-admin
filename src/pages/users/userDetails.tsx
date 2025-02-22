import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import Banner from "./asssets/svg/userDetailsPageBanner.svg";
import { User } from "lucide-react";
import { useUser } from "./hook/userUser";

const userDetailsPage = () => {
  const { id } = useParams();
  const { getSingleUser } = useUser();

  const { data } = getSingleUser(id || "");
  console.log(data);

  return (
    <>
      <section className="py-3 pr-3">
        <div className="w-full relative">
          <LazyLoadImage
            src={Banner}
            alt={"banner"}
            className="w-full h-full object-cover rounded-md"
          />

          <div className="absolute top-[55%] shadow rounded-lg bg-white bg-opacity-70 backdrop-blur-lg left-[50%] -translate-x-[50%] w-[90%] p-4">
            <div className="flex flex-row items-center justify-between">
              {/* <div className="h-30 w-30 overflow-hidden rounded-sm bg-gray-300 flex items-center justify-center">
                {data?.avatar ? (
                  <LazyLoadImage
                    src={data.avatar.url}
                    alt={data.firstName}
                    effect="blur"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User strokeWidth={1.5} />
                )}
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default userDetailsPage;
