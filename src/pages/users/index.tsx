import { Box, TableCell, TableRow } from "@mui/material";
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "@/utils/helpers";
import EmptyState from "@/components/ui/EmptyState";

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

const UserDropdownMenu = ({ id }: { id: string }) => {
  const navigate = useNavigate();

  const redirectToUserDetailsPage = (id: string) => {
    navigate(`/user/${id}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-5 px-1 py-2 rounded-sm bg-transparent outline-none border-0 !ring-0 shadow-none hover:bg-gray-100 text-gray-500 h-5">
          <EllipsisVertical strokeWidth={1.5} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit !font-inter">
        <DropdownMenuItem onClick={() => redirectToUserDetailsPage(id)}>
          View
        </DropdownMenuItem>
        <DropdownMenuItem>Suspend</DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const UsersPage = () => {
  const { tableHeadData, getAllUsers } = useUser();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);

  const { data, isLoading } = getAllUsers(page, limit);

  const isEmpty = !data?.content.length;

  // Sort users alphabetically by firstName and lastName
  const sortedData = data?.content.slice().sort((a, b) => {
    const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
    const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  const navigate = useNavigate();

  const redirectToUserDetailsPage = (id: string) => {
    navigate(`/user/${id}`);
  };

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
                onClick={() => redirectToUserDetailsPage(row.id)}
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
                    <span>{row.medals.length}</span>
                  </div>
                </TableCell>
                <TableCell className="!font-inter !text-center">
                  {row.points}
                </TableCell>
                <TableCell className="!font-inter">
                  {row.skills.length}{" "}
                  {/* replace skills with the right object key when available */}
                </TableCell>
                <TableCell className="!font-inter !text-center">
                  {row.results.length}
                </TableCell>
                <TableCell className="!font-inter !text-center">
                  {row.challengeAchievements.length}
                </TableCell>
                <TableCell className="!font-inter truncate">
                  {row.createdAt
                    ? formatDate(row.createdAt)
                    : formatDate(Date.now())}
                </TableCell>
                <TableCell>
                  <UserDropdownMenu id={row.id} />
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
