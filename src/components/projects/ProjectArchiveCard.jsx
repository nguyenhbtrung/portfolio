import React from 'react';
import {
  Box,
  Card,
  Typography,
  IconButton,
  Stack,
} from '@mui/material';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from 'react-router-dom';
import { publicPath } from '../../utils/path';

export function ProjectArchiveCard({ project }) {
  const navigate = useNavigate();

  return (
    <Card
      elevation={0}
      onClick={() => navigate(`/project/${project.slug}`)}
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        overflow: 'hidden',
        cursor: 'pointer',
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        transition: '.3s',

        '&:hover': {
          borderColor: 'primary.main',
          boxShadow: (theme) =>
            `0 10px 30px ${theme.palette.primary.main}20`,
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: 180,
          },
          aspectRatio: {
            xs: '16 / 9',
            sm: '1',
          },
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src={publicPath(project.image)}
          alt={project.title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: .85,
            transition: '.35s',

            '.MuiCard-root:hover &': {
              opacity: 1,
              transform: 'scale(1.04)',
            },
          }}
        />
      </Box>

      <Box
        sx={{
          p: 3,
          flexGrow: 1,
          position: 'relative',
        }}
      >
        <IconButton
          component="a"
          href={project.liveDemo}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: 'primary.light',
          }}
        >
          <ArrowOutwardIcon fontSize="small" />
        </IconButton>

        <Typography
          variant="caption"
          sx={{
            color: 'primary.light',
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          {project.category}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mt: .5,
            mb: 1,
            fontWeight: 700,
          }}
        >
          {project.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {project.description}
        </Typography>
      </Box>
    </Card>
  );
}