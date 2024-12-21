import { Box, Button, FormHelperText } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { MuiOtpInput } from "mui-one-time-password-input";

const OTP = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <h1 className="text-3xl text-center font-extrabold">
            Verify Identity
          </h1>
          <p className="text-1xl text-center font-light">
            Please enter the 6-digit password associated with <br /> your
            account to verify your identity and proceed.
          </p>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            flexDirection: "column",
            gap: 2,
            mx: 70,
            mt: 6,
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="otp"
              control={control}
              rules={{ validate: (value) => value.length === 6 }}
              render={({ field, fieldState }) => (
                <Box>
                  <label htmlFor="otp">Enter OTP</label>
                  <MuiOtpInput
                    id="otp"
                    sx={{ gap: 2, width: "100%" }}
                    {...field}
                    length={6}
                    TextFieldsProps={{
                      variant: "outlined",
                      fullWidth: true,
                      margin: "normal",
                      placeholder: "0",
                    }}
                  />
                  {fieldState.invalid ? (
                    <FormHelperText error>OTP invalid</FormHelperText>
                  ) : null}
                </Box>
              )}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#8B5CF6",
                borderRadius: "16px",
                my: 5,
                width: "100%",
                color: "white",
                "&:hover": {
                  backgroundColor: "#7C3AED",
                },
              }}
            >
              Continue to Login
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default OTP;
