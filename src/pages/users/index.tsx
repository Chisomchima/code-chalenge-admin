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

const UsersPage = () => {
  const [tableHeadData] = useUser();

  return (
    <Box className="py-4 pr-4">
      <FilterButtons />
      <StatsBar data={STATS_BAR_DATA} />

      <Box className="my-4">
        <UsersTable
          tableHead={tableHeadData}
          hasSearch={true}
          searchPlaceholder="Search"
          tableBody={usersMockData.map((row, index) => (
            <TableRow
              key={index}
              className="cursor-pointer [&>td]:border-0 [&>th]:border-0 hover:bg-black/5 transition-colors duration-200"
            >
              <TableCell className="!font-light !font-inter w-fit">
                <div className="flex flex-row items-center gap-2">
                  <div className="h-10 w-10 overflow-hidden rounded-sm bg-gray-300 flex items-center justify-center">
                    <User strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-semibold font-inter text-sm flex items-center gap-2">
                      <span className="block truncate">{row.name}</span>
                      {row.role.toLowerCase() === "mentor" && (
                        <div className="ring-1 ring-co-primary py-[0.5] px-2 rounded-full text-co-primary text-xs">
                          {row.role}
                        </div>
                      )}
                    </div>
                    <div className="font-inter text-xs text-gray-500 truncate">
                      {row.email}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="!font-inter">
                <div className="flex flex-row items-center gap-1">
                  <Medal strokeWidth={1.5} className="size-4" />
                  <span className="block">{row.medals}</span>
                </div>
              </TableCell>
              <TableCell className="!font-inter">
                {row.challengePoints}
              </TableCell>
              <TableCell className="!font-inter">{row.reviews}</TableCell>
              <TableCell className="!font-inter">
                {row.completionRate}
              </TableCell>
              <TableCell className="!font-inter">{row.achievements}</TableCell>
              <TableCell className="!font-inter">{row.signupDate}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-5 px-1 py-2 rounded-sm bg-transparent outline-none border-0 !ring-0 shadow-none duration-300 ease-in hover:bg-gray-100 text-gray-500 h-5">
                      <EllipsisVertical strokeWidth={1.5} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-fit !font-inter">
                    <DropdownMenuItem>View</DropdownMenuItem>
                    <DropdownMenuItem>Suspend</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
          tableData={usersMockData}
          tableHeaderTitle={
            <div className="flex flex-row items-center gap-2">
              <span className="block">Users</span>
              <Filter strokeWidth={1.5} className="text-co-primary size-4" />
            </div>
          }
        />
      </Box>
    </Box>
  );
};

export default UsersPage;
