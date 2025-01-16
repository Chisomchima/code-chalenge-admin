import React from "react";
import {
  Card,
  Avatar,
  Stack,
  Box,
  Button,
  IconButton,
  MenuItem,
  TextField,
  Typography,
  Grid
} from "@mui/material";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Delete, Add } from "@mui/icons-material";

type FormData = {
  title: string;
  description: string;
  focusArea: string;
  prerequisites: string;
  skillLevel: string;
  acceptanceCriteria: { title: string; description: string }[];
  rulesAndResources: { title: string; description: string }[];
  onlineResources: { title: string; description: string }[];
  attachments: { title: string; description: string }[];
};

const NewChallengeForm = () => {
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      title: "",
      focusArea: "",
      prerequisites: "",
      skillLevel: "",
      description: "",
      acceptanceCriteria: [{ title: "", description: "" }],
      rulesAndResources: [{ title: "", description: "" }],
      onlineResources: [{ title: "", description: "" }],
      attachments: [{ title: "", description: "" }],
    },
  });

  // Field arrays for dynamic fields
  const {
    fields: acceptanceFields,
    append: appendAcceptance,
    remove: removeAcceptance,
  } = useFieldArray({ control, name: "acceptanceCriteria" });

  const {
    fields: rulesFields,
    append: appendRules,
    remove: removeRules,
  } = useFieldArray({ control, name: "rulesAndResources" });

  const {
    fields: resourcesFields,
    append: appendResources,
    remove: removeResources,
  } = useFieldArray({ control, name: "onlineResources" });

  const {
    fields: attachmentsFields,
    append: appendAttachments,
    remove: removeAttachments,
  } = useFieldArray({ control, name: "attachments" });

  const onSubmit = (data: FormData) => {
    console.log("Form Data: ", data);
    // Submit logic here (e.g., API call)
  };

  const renderMultiField = (
    fields: any[],
    append: (value: { title: string; description: string }) => void,
    remove: (index: number) => void,
    label: string,
    name: string
  ) => (
    <>
      <Typography variant="h6" mt={3}>
        {label}
      </Typography>
      {fields.map((item, index) => (
        <Box key={item.id} display="flex" flexDirection="column" gap={1} mb={2}>
          <Controller
            name={`${name}.${index}.title`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Title" fullWidth margin="normal" />
            )}
          />
          <Controller
            name={`${name}.${index}.description`}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Description"
                fullWidth
                margin="normal"
                multiline
                rows={2}
              />
            )}
          />
          <IconButton
            onClick={() => remove(index)}
            sx={{ alignSelf: "flex-start", mt: -1 }}
          >
            <Delete />
          </IconButton>
        </Box>
      ))}
      <Button
        variant="outlined"
        startIcon={<Add />}
        onClick={() => append({ title: "", description: "" })}
        sx={{ mt: 1 }}
      >
        Add {label}
      </Button>
    </>
  );

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            width: "100%",
            height: 150,
            backgroundImage: "url('../../../public/images/formbg.svg')",
            backgroundSize: "cover",
            borderRadius: 2,
            padding: 2,
          }}
        />
        <Card
          sx={{
            position: "absolute",
            top: 100,
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 2,
            boxShadow: 3,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            {/* Avatar Image */}
            <Avatar
              variant="rounded"
              src="https://via.placeholder.com/50"
              sx={{ width: 60, height: 60 }}
            />
          </Stack>

          <Stack direction="row" spacing={1}>
            <Button
              color="primary"
              variant="outlined"
              sx={{ textTransform: "initial", color: "black" }}
            >
              Draft for Later
            </Button>
            <Button
              variant="contained"
              sx={{ textTransform: "initial" }}
              color="primary"
            >
              Publish Challenge
            </Button>
          </Stack>
        </Card>
      </Box>
      <Box sx={{ marginTop: 10, overflowY: "auto", maxHeight: "70vh", mx: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography sx={{ mt: 2 }}>Title</Typography>
          </Grid>
          <Grid item xs={9}>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth margin="normal" />
              )}
            />
          </Grid>

          <Grid item xs={3}>
            <Typography sx={{ mt: 2 }}>Focus Area</Typography>
          </Grid>
          <Grid item xs={9}>
            <Controller
              name="focusArea"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth margin="normal" />
              )}
            />
          </Grid>

          <Grid item xs={3}>
            <Typography sx={{ mt: 2 }}>Prerequisites</Typography>
          </Grid>
          <Grid item xs={9}>
            <Controller
              name="prerequisites"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth margin="normal" />
              )}
            />
          </Grid>

          <Grid item xs={3}>
            <Typography sx={{ mt: 2 }}>Skill Level</Typography>
          </Grid>
          <Grid item xs={9}>
            <Controller
              name="skillLevel"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  margin="normal"
                  select
                >
                  <MenuItem value="Beginner">Beginner</MenuItem>
                  <MenuItem value="Intermediate">Intermediate</MenuItem>
                  <MenuItem value="Advanced">Advanced</MenuItem>
                </TextField>
              )}
            />
          </Grid>

          <Grid item xs={3}>
            <Typography sx={{ mt: 2 }}>Description</Typography>
          </Grid>
          <Grid item xs={9}>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  margin="normal"
                  multiline
                  rows={3}
                />
              )}
            />
          </Grid>
        </Grid>

        {renderMultiField(
          acceptanceFields,
          appendAcceptance,
          removeAcceptance,
          "Acceptance Criteria",
          "acceptanceCriteria"
        )}
        {renderMultiField(
          rulesFields,
          appendRules,
          removeRules,
          "Rules and Resources",
          "rulesAndResources"
        )}
        {renderMultiField(
          resourcesFields,
          appendResources,
          removeResources,
          "Online Resources",
          "onlineResources"
        )}
        {renderMultiField(
          attachmentsFields,
          appendAttachments,
          removeAttachments,
          "Attachments",
          "attachments"
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          fullWidth
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default NewChallengeForm;
