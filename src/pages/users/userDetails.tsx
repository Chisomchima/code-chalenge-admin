import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams, useNavigate } from "react-router-dom";
import Banner from "./asssets/svg/userDetailsPageBanner.svg";
import { CircleSlash, Copy, TvMinimal, User } from "lucide-react";
import { useUser } from "./hook/userUser";
import { Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/utils/helpers";
import { toast } from "react-toastify";

const UserDetailsPage = () => {
  const { id } = useParams();
  const { getSingleUser } = useUser();
  const navigate = useNavigate();
  const { data } = getSingleUser(id || "");

  useEffect(() => {
    if (!data) {
      navigate("/*");
    }
  }, [data, navigate]);

  if (!data) return null;

  const isLinkOrEmail = (value: string) => {
    return value.startsWith("http") || value.includes("@");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy to clipboard.");
      });
  };

  const userDetails = [
    { label: "Email:", value: data.email || "johndoe@example.com" },
    { label: "Badge:", value: "Explorer" },
    { label: "Number of medals:", value: "12" },
    { label: "Portfolio Link:", value: "https://www.link.com" },
    { label: "LinkedIn Link:", value: "https://www.link.com" },
    { label: "Total Reviews:", value: "0" },
    { label: "Achievements:", value: "12" },
  ];

  const additionalDetails = [
    { label: "Completion Rate:", value: "98%" },
    { label: "Signup Date:", value: formatDate(Date.now()) },
  ];

  const renderDetailRow = (label: string, value: string) => (
    <div className="grid grid-cols-2 gap-x-10">
      <Typography className="!font-semibold !font-inter !text-sm">
        {label}
      </Typography>
      <div className="flex items-center gap-2">
        <Typography className="!font-normal text-gray-500 !font-inter !text-sm">
          {isLinkOrEmail(value) ? (
            <a
              href={value.includes("@") ? `mailto:${value}` : value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {value}
            </a>
          ) : (
            value
          )}
        </Typography>
        {isLinkOrEmail(value) && (
          <button
            onClick={() => copyToClipboard(value)}
            className="p-1 hover:bg-gray-100 rounded-md cursor-pointer"
          >
            <Copy strokeWidth={1.25} className="text-gray-500 size-4" />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-3 pr-3">
      <div className="w-full relative">
        <LazyLoadImage
          src={Banner}
          alt="banner"
          className="w-full h-full object-cover rounded-md"
        />

        <div className="absolute top-[55%] shadow rounded-lg bg-white bg-opacity-70 backdrop-blur-lg left-[50%] -translate-x-[50%] w-[90%] p-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex gap-x-3 items-center">
              <div className="!h-16 !w-16 overflow-hidden rounded-md ring-2 ring-white shadow-md bg-gray-400 flex items-center justify-center">
                {data.avatar ? (
                  <LazyLoadImage
                    src={data.avatar.url}
                    alt={data.firstName}
                    effect="blur"
                    className="!w-full !h-full object-cover"
                  />
                ) : (
                  <User strokeWidth={1.5} className="text-white size-10" />
                )}
              </div>
              <Typography className="!text-xl !font-semibold !font-inter">
                {data.firstName} {data.lastName}
              </Typography>
            </div>

            <div className="flex flex-row items-center gap-x-3">
              <Button className="!bg-white flex items-center gap-x-2 font-inter">
                <TvMinimal strokeWidth={1.25} className="text-gray-900" />
                <span className="text-gray-900 !text-sm !font-normal">
                  Mentorship
                </span>
              </Button>
              <Button className="!bg-white flex !py-3 items-center gap-x-2 font-inter">
                <CircleSlash strokeWidth={1.25} className="text-gray-900" />
                <span className="text-gray-900 !text-sm !font-normal">
                  Ban User
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="mt-20 flex flex-col space-y-3 w-[350px]">
          {userDetails.map((detail, index) => (
            <div key={index}>{renderDetailRow(detail.label, detail.value)}</div>
          ))}
        </div>

        <div className="my-5">
          <hr />
          <div className="my-5 flex flex-col space-y-3 w-[350px]">
            {additionalDetails.map((detail, index) => (
              <div key={index}>
                {renderDetailRow(detail.label, detail.value)}
              </div>
            ))}
          </div>
          <hr />
        </div>

        <div>
          <Typography className="!font-semibold !font-inter !text-sm">
            Achievements
          </Typography>
          {/* Map through achievements data when provided */}
        </div>
      </div>
    </section>
  );
};

export default UserDetailsPage;
