import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const AdminId = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
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
            Signin to continue
          </h1>
          <p className="text-1xl text-center font-light">
            please use a valid name or ID
          </p>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ my: 2, mx: 70 }}>
            <TextField
              type="text"
              label="Admin ID"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("adminId", {
                required: "adminId is required",
              })}
              error={!!errors.adminId}
              helperText={
                errors.adminId ? (errors.adminId.message as string) : undefined
              }
              sx={{
                mt: 5,
              }}
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
              Verify Identity
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default AdminId;
