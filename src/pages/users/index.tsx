import { Box, TableCell, TableRow, Typography } from "@mui/material";
import FilterButtons from "@/components/ui/filterButtons";
import StatsBar from "@/components/ui/statsBar";
import { STATS_BAR_DATA, usersMockData } from "./mock_data/_schema";
import UsersTable from "@/components/dashboard/UsersTable";
import { useUser } from "./hook/userUser";
import { EllipsisVertical, Filter, Medal, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const EmptyState = ({ message }: { message: string }) => (
  <Box className="flex flex-col items-center justify-center p-8 h-[40vh]">
    <Typography
      variant="h6"
      className="text-gray-500 !font-inter !text-2xl !font-semibold"
    >
      {message}
    </Typography>
    <Typography
      variant="body2"
      className="text-gray-400 mt-2 text-sm !font-inter"
    >
      {message === "No users found"
        ? "There are no users to display at the moment."
        : "Getting users data"}
    </Typography>
  </Box>
);

const UserAvatar = ({ avatar, name }: { avatar?: string; name: string }) => (
  <div className="h-10 w-10 overflow-hidden rounded-sm bg-gray-300 flex items-center justify-center">
    {avatar ? (
      <LazyLoadImage
        src={avatar}
        alt={name}
        effect="blur"
        className="w-full h-full object-cover"
        width={40}
        height={40}
      />
    ) : (
      <User strokeWidth={1.5} />
    )}
  </div>
);

const UserDropdownMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="w-5 px-1 py-2 rounded-sm bg-transparent outline-none border-0 !ring-0 shadow-none hover:bg-gray-100 text-gray-500 h-5">
        <EllipsisVertical strokeWidth={1.5} />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-fit !font-inter">
      <DropdownMenuItem>View</DropdownMenuItem>
      <DropdownMenuItem>Suspend</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// ! IMPORTANT: missing properties being returned from BE (placeholders used for now)
// ! Some properties are used in the wrong table col because the properties are missing from data
const UsersPage = () => {
  const { tableHeadData, data, isLoading } = useUser();
  const isEmpty = !data?.length;

  // Sort users alphabetically by firstName and lastName
  const sortedData = data?.slice().sort((a, b) => {
    const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
    const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  return (
    <Box className="py-4 pr-4">
      <FilterButtons />
      <StatsBar data={STATS_BAR_DATA} />
      <Box className="my-4">
        {isEmpty ? (
          <EmptyState message="No users found" />
        ) : isLoading ? (
          <EmptyState message="Getting users data" />
        ) : (
          <UsersTable
            tableHead={tableHeadData}
            hasSearch
            searchPlaceholder="Search"
            tableBody={sortedData?.map((row, index) => (
              <TableRow
                key={index}
                className="cursor-pointer hover:bg-black/5 transition-colors duration-200"
              >
                <TableCell className="!font-light !font-inter w-fit">
                  <div className="flex items-center gap-2">
                    <UserAvatar
                      avatar={row.avatar?.url}
                      name={`${row.firstName} ${row.lastName}`}
                    />
                    <div>
                      <div className="font-semibold text-sm flex items-center gap-2">
                        <span className="block truncate">
                          {row.firstName} {row.lastName}
                        </span>
                        {row.mentorAchievements && (
                          <div className="ring-1 ring-co-primary py-[0.5] px-2 rounded-full text-co-primary text-xs">
                            Mentor
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {row.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="!font-inter">
                  <div className="flex items-center gap-1">
                    <Medal strokeWidth={1.5} className="size-4" />
                    <span>{row.medals.length || "N/A"}</span>
                  </div>
                </TableCell>
                <TableCell className="!font-inter !text-center">
                  {row.points || "N/A"}
                </TableCell>
                <TableCell className="!font-inter">
                  {row.skills.length || "N/A"}
                </TableCell>
                <TableCell className="!font-inter !text-center">
                  {row.results.length || "N/A"}
                </TableCell>
                <TableCell className="!font-inter !text-center">
                  {row.challengeAchievements.length || "N/A"}
                </TableCell>
                <TableCell className="!font-inter !text-center">
                  {row.badges.length || "N/A"}
                </TableCell>
                <TableCell>
                  <UserDropdownMenu />
                </TableCell>
              </TableRow>
            ))}
            tableData={usersMockData}
            tableHeaderTitle={
              <div className="flex items-center gap-2">
                <span>Users</span>
                <Filter strokeWidth={1.5} className="text-co-primary size-4" />
              </div>
            }
          />
        )}
      </Box>
    </Box>
  );
};

export default UsersPage;
