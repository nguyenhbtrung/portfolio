import { Box, Grid, Stack, Typography } from "@mui/material";
import { SkillCard } from "./SkillCard";

export const Category = ({ icon, title, items }) => (
  <Box>
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      mb={2}
      color="primary.light"
    >
      {icon}
      <Typography
        variant="overline"
        sx={{
          fontWeight: 700,
          letterSpacing: 1.5,
        }}
      >
        {title}
      </Typography>
    </Stack>

    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid key={item.name} size={6}>
          <SkillCard skill={item} />
        </Grid>
      ))}
    </Grid>
  </Box>
);