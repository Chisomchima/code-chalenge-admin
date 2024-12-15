import { SxProps, Theme } from "@mui/material";

export type Dict = Record<string, string>;
export type DictOf<T> = Record<string, T>;

export type SxPropsType = {
    sx?: SxProps<Theme>;
  };
