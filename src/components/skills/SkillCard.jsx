import { Avatar, Card, Typography } from "@mui/material";

export const SkillCard = ({ skill }) => {
  const IconComponent = skill.Icon;

  return (
    <Card
      elevation={3}
      sx={(theme) => ({
        height: 96,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
        borderRadius: 0.5,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.default',
        boxShadow: theme.palette.mode === 'dark' ? theme.shadows[3] : 'none',
        transition: '.25s',
        '&:hover': {
          borderColor: 'primary.light',
          transform: 'translateY(-2px)',
        },
      })}
    >
      <Avatar
        variant="rounded"
        sx={{
          bgcolor: 'transparent',
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'text.primary',
          ...(skill.iconColor && {
            '& svg *': {
                fill: 'currentColor !important',
            },
          }),
        }}
      >
        <IconComponent size={34} color={skill.iconColor} />
      </Avatar>

      <Typography
        variant="caption"
        sx={{
          fontWeight: 500,
        }}
      >
        {skill.name}
      </Typography>
    </Card>
  );
};