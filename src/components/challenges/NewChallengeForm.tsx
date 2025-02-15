import React, { useEffect } from "react";
import {
  Card,
  Avatar,
  Stack,
  Box,
  Button,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Delete, Add } from "@mui/icons-material";
import { ChallengeData } from "./types";
import {
  useCreateChallenge,
  useEditChallenge,
  useGetChallengeById,
  useUploadChallengeAvatar,
} from "../../hooks/react-query/useChallenge";
import Loader from "../ui/Loader";
import { useParams } from "react-router-dom";
import FormField from "./FormField";
import { focusAreas, skillLevels } from "../../utils/constant";

const NewChallengeForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [avatar, setAvatar] = React.useState<File | null>(null);
  const { isLoading, mutateAsync: createChallenge } = useCreateChallenge();
  const { isLoading: isEditing, mutateAsync: editChallenge } =
    useEditChallenge();
  const { mutateAsync: uploadAvatar } = useUploadChallengeAvatar();
  const { data: challengeData, isLoading: isFetching } =
    useGetChallengeById(id);

  const { handleSubmit, control, setValue, trigger } = useForm<ChallengeData>({
    defaultValues: {
      avatar: null,
      title: "",
      focusArea: "",
      prerequisites: "",
      points: 0,
      skillLevel: "",
      description: "",
      acceptanceCriteria: [{ title: "", description: "" }],
      rulesAndResources: [{ title: "", description: "" }],
      onlineResources: [{ title: "", description: "" }],
      attachments: [{ title: "", description: "" }],
    },
  });

  useEffect(() => {
    if (challengeData?.content) {
      setAvatar(challengeData.content.challengeImage?.url);
      setValue("title", challengeData.content.title);
      setValue("focusArea", challengeData.content.focusArea);
      setValue("prerequisites", challengeData.content.prerequisites);
      setValue("points", challengeData.content.points);
      setValue("skillLevel", challengeData.content.skillLevel);
      setValue("description", challengeData.content.description);
      setValue("acceptanceCriteria", challengeData.content.acceptanceCriteria);
      setValue("rulesAndResources", challengeData.content.rulesAndResources);
      setValue("onlineResources", challengeData.content.onlineResources);
      setValue("attachments", challengeData.content.attachments);
    }
  }, [challengeData, setValue]);

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

  const onSubmit = async (data: ChallengeData): Promise<void> => {
    const formData = new FormData();
    const { avatar, ...challengeDetails } = data;

    let challengeId = id;

    if (id) {
      // Handle challenge update
      const editResponse = await editChallenge({
        challengeId: id,
        data: challengeDetails,
      });
      if (!editResponse?.success) return;
    } else {
      // Handle new challenge creation
      const challengeResponse = await createChallenge(challengeDetails);
      if (!challengeResponse?.success) return;

      challengeId = challengeResponse.content?.challengeID;
    }

    // Upload avatar if available (for both edit and create)
    if (avatar && challengeId) {
      formData.append("id", challengeId);
      formData.append("image", avatar);
      await uploadAvatar(formData);
    }
  };

  const renderMultiField = (
    fields: any[],
    append: (value: { title: string; description: string }) => void,
    remove: (index: number) => void,
    label: string,
    name: string,
    fieldLabel: { title: string; description: string }
  ) => (
    <>
      <Typography variant="h6" mt={3}>
        {label}
      </Typography>
      {fields.map((item, index) => (
        <Box key={item.id} display="flex" flexDirection="column" gap={1} mb={2}>
          <Controller
            name={`${name}.${index}.title` as any}
            control={control}
            rules={{ required: `${fieldLabel.title} is required` }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={fieldLabel.title}
                fullWidth
                margin="normal"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name={`${name}.${index}.description` as any}
            control={control}
            rules={{ required: `${fieldLabel.description} is required` }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={fieldLabel.description}
                fullWidth
                margin="normal"
                multiline
                rows={2}
                error={!!error}
                helperText={error ? error.message : null}
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
        variant="contained"
        startIcon={<Add />}
        onClick={() => append({ title: "", description: "" })}
        sx={{
          mt: 1,
          backgroundColor: "white",
          color: "blue",
          boxShadow: 2,
          p: 1,
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        }}
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
          <Stack direction="column" spacing={1} alignItems="center">
            {/* Clickable Avatar */}
            <Controller
              name="avatar"
              control={control}
              rules={{
                validate: (value) => {
                  if (!value && !avatar) {
                    return "Avatar is required";
                  }
                  return true;
                },
              }}
              render={({ fieldState: { error } }) => (
                <>
                  <Avatar
                    variant="rounded"
                    src={
                      avatar instanceof File
                        ? URL.createObjectURL(avatar)
                        : avatar || "https://via.placeholder.com/50"
                    }
                    sx={{ width: 60, height: 60, cursor: "pointer" }}
                    onClick={() =>
                      document.getElementById("avatar-upload")?.click()
                    }
                  />
                  {error && (
                    <Typography color="error" variant="caption">
                      {error.message}
                    </Typography>
                  )}
                </>
              )}
            />

            {/* Hidden File Input */}
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const file = e.target.files[0];
                  setAvatar(file);
                  setValue("avatar", file);
                  trigger("avatar");
                }
              }}
            />
          </Stack>

          <Stack direction="row" spacing={1}>
            <Button
              color="primary"
              onClick={handleSubmit(onSubmit)}
              variant={id ? "contained" : "outlined"}
              sx={{ textTransform: "initial", color: id ? "white" : "black" }}
            >
              {id ? "Edit" : "Draft for later"}
            </Button>
          </Stack>
        </Card>
      </Box>
      {(isLoading || isEditing || isFetching) && <Loader />}
      <Box
        sx={{
          marginTop: 10,
          overflowY: "auto",
          maxHeight: "70vh",
          mx: 5,
          py: 5,
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        }}
      >
        <FormField
          name="title"
          control={control}
          rules={{ required: "Title is required" }}
          label="Title"
        />
        <FormField
          name="description"
          control={control}
          rules={{ required: "Description is required" }}
          label="Description"
          multiline
          rows={3}
        />
        <FormField
          name="prerequisites"
          control={control}
          rules={{ required: "Prerequisites are required" }}
          label="Prerequisites"
        />
        <FormField
          name="skillLevel"
          control={control}
          rules={{ required: "Skill Level is required" }}
          label="Skill Level"
          options={skillLevels}
          placeholder="Select Skill Level"
        />
        <FormField
          name="focusArea"
          control={control}
          rules={{ required: "Focus Area is required" }}
          label="Focus Area"
          options={focusAreas}
        />
        <FormField
          name="points"
          control={control}
          rules={{ required: "Points is required" }}
          label="Points"
          type="number"
        />

        {renderMultiField(
          acceptanceFields,
          appendAcceptance,
          removeAcceptance,
          "Acceptance Criteria",
          "acceptanceCriteria",
          {
            title: "Acceptance Criterion Title",
            description: "Acceptance Criterion Description",
          }
        )}
        {renderMultiField(
          rulesFields,
          appendRules,
          removeRules,
          "Rules and Resources",
          "rulesAndResources",
          {
            title: "Rule/Resource Title",
            description: "Rule/Resource Description",
          }
        )}
        {renderMultiField(
          resourcesFields,
          appendResources,
          removeResources,
          "Online Resources",
          "onlineResources",
          { title: "Resource Title", description: "Resource Description" }
        )}
        {renderMultiField(
          attachmentsFields,
          appendAttachments,
          removeAttachments,
          "Attachments",
          "attachments",
          { title: "Attachment Title", description: "Attachment Description" }
        )}
      </Box>
    </Box>
  );
};

export default NewChallengeForm;
