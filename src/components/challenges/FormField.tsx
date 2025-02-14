import React from "react";
import { Controller } from "react-hook-form";
import { TextField, MenuItem, Typography, Grid } from "@mui/material";

interface FormFieldProps {
  name: string;
  control: any;
  rules: any;
  label: string;
  options?: string[];
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  type?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  control,
  rules,
  label,
  options,
  placeholder,
  multiline,
  rows,
  type,
}) => (
  <Grid container spacing={2}>
    <Grid item xs={3}>
      <Typography sx={{ mt: 2 }}>{label}</Typography>
    </Grid>
    <Grid item xs={9}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            fullWidth
            margin="normal"
            select={!!options}
            placeholder={placeholder}
            error={!!error}
            helperText={error ? error.message : null}
            multiline={multiline}
            rows={rows}
            type={type}
          >
            {options &&
              options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
          </TextField>
        )}
      />
    </Grid>
  </Grid>
);

export default FormField;
