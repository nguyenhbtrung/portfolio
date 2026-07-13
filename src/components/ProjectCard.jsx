import React from 'react';
import {
  Box,
  Card,
  Stack,
  Chip,
  Typography,
  IconButton,
  Tooltip,
  Paper,
} from '@mui/material';
// import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${project.slug}`);
  };

  return (
    <Card
      elevation={0}
      onClick={handleCardClick}
      sx={{
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'divider',
        transition: 'all .35s ease',
        overflow: 'hidden',
        boxShadow: 2,
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-8px)',
          borderColor: 'primary.main',
          boxShadow: (theme) => `0 20px 45px ${theme.palette.primary.main}20`,
        },
      }}
    >
      {/* Glass Container */}
      <Paper
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 1,
          position: 'relative',
          overflow: 'hidden',
          bgcolor: 'background.default',
          boxShadow: 'none',
        //   border: '1px solid',
        //   borderColor: 'divider',
          backdropFilter: 'blur(14px)',
        }}
      >
        {/* Computer Frame */}
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 1,
            aspectRatio: '16 / 9',
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            boxShadow: 6,
          }}
        >
          {/* Browser Header */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              px: 1,
              bgcolor: 'background.default',
              borderBottom: '1px solid',
              borderColor: 'divider',
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                bgcolor: 'error.main',
                opacity: .35,
              }}
            />

            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                bgcolor: 'warning.main',
                opacity: .35,
              }}
            />

            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                bgcolor: 'success.main',
                opacity: .35,
              }}
            />
          </Box>

          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              pt: '10px',
              opacity: .9,
              transition: '.35s',
              '.MuiCard-root:hover &': {
                opacity: 1,
                transform: 'scale(1.03)',
              },
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(0,0,0,.45), transparent)',
              pointerEvents: 'none',
            }}
          />
        </Box>
      </Paper>

      {/* Content */}
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{
                color: 'primary.light',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              {project.category}
            </Typography>

            <Typography
              variant="h6"
              component='h3'
              sx={{
                mt: .5,
                fontWeight: 700,
              }}
            >
              {project.title}
            </Typography>
          </Box>

          <Tooltip title='Live Demo' arrow>
            <IconButton
              component='a'
              href={project.liveDemo}
              target="_blank"
              onClick={(e) => {e.stopPropagation()}}
              sx={{
                color: 'primary.light',
                border: '2px solid',
                borderColor: 'primary.light',
                // borderRadius: 1.5,
                width: 42,
                height: 42,
                transition: '.25s',
                '&:hover': {
                  bgcolor: 'primary.light',
                  color: 'primary.contrastText',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <ArrowOutwardIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>

        <Typography
          variant='body2'
          color="text.secondary"
          gutterBottom
          sx={{
            // lineHeight: 1.8,
            flexGrow: 1,
          }}
        >
          {project.description}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                borderRadius: 0.5,
                border: '1px solid',
                borderColor: 'divider'
              }}
            />
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}