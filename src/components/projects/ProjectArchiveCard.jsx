import React from 'react';
import {
  Box,
  Card,
  Typography,
  IconButton,
  Stack,
  Paper,
  Tooltip,
} from '@mui/material';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { publicPath } from '../../utils/path';

export function ProjectArchiveCard({ project }) {

  return (
    <Card
      component='a'
      href={project.liveDemo}
      target="_blank"
      elevation={0}
      sx={{
        p: 2,
        height: '100%',
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

        color: 'inherit', 
        textDecoration: 'none',

        '&:hover': {
          borderColor: 'primary.main',
          textDecoration: 'none',
          boxShadow: (theme) =>
            `0 10px 30px ${theme.palette.primary.main}20`,
        },
      }}
    >
      <Box
        sx={{
          flex: { xs: 'none', sm: '0 0 40%'},
          // pb: 15,
          mr: {xs: 0, sm: 2},
          mb: {xs: 2, sm: 0},
          borderRadius: 1,
          position: 'relative',
          overflow: 'hidden',
          // bgcolor: 'background.default',
          boxShadow: 'none',
        //   border: '1px solid',
        //   borderColor: 'divider',
          backdropFilter: 'blur(14px)',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 1,
            aspectRatio: '16 / 9',
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            // boxShadow: 6,
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
              // pt: '10px', 
              opacity: .9,
              transition: '.35s',
              '.MuiCard-root:hover &': {
                opacity: 1,
                transform: 'scale(1.03)',
              },
            }}
          />
        </Box>
      </Box>

      <Stack spacing={1} sx={{ flexGrow: 1 }}>
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
              variant="body1"
              component='h3'
              sx={{
                // mt: .5,
                fontSize: {xs: '1.25rem', sm: '1rem'},
                fontWeight: 600,
              }}
            >
              {project.title}
            </Typography>
          </Box>

              <ArrowOutwardIcon 
                fontSize="small" 
                sx={{
                  color: 'primary.light',
                  transition: '.25s',
  
                }}
              />
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
      </Stack>
    </Card>
  );
}