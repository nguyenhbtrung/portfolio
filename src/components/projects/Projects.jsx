import React, { useState } from 'react';
import {
  Box,
  Button,
  Collapse,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
// import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMore';

import SectionHeading from '../SectionHeading';
import MotionBox from '../MotionBox';
import { ProjectCard } from './ProjectCard';
import { ProjectArchiveCard } from './ProjectArchiveCard';
import { projects, archiveProjects, } from '../../data/projects';

export function Projects() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      id="projects"
      py={8}
    >
      <SectionHeading align="center">
        Featured Projects
      </SectionHeading>

      <Typography
        align="center"
        color="text.secondary"
        mb={3}
        gutterBottom
      >
        A selection of projects that demonstrate my technical skills,
        problem-solving ability, and passion for software development.
      </Typography>


      <Grid container spacing={4} mt={6}>
        {projects.map((project, index) => (
          <Grid
            key={project.slug}
            size={{
              xs: 12,
              md: 6,
              lg: 4,
            }}
          >
            <MotionBox height='100%' transition={{ delay: index * 0.1}}>
              <ProjectCard project={project} />
            </MotionBox>
          </Grid>
        ))}
      </Grid>

      <Box mt={6}>
        <Stack 
          spacing={0} 
          alignItems="center" 
          sx={{ 
            transition: 'all .35s ease',
            '&:hover .decorator': {
              opacity: 1,
              width: 60,
              boxShadow: (theme) =>
                `0 0 8px ${theme.palette.primary.main},
                0 0 18px ${theme.palette.primary.main}`,
            },

            '&:hover .expandIcon': {
              opacity: 1,
              filter: (theme) =>
                `drop-shadow(0 0 6px ${theme.palette.primary.main})
                drop-shadow(0 0 12px ${theme.palette.primary.main})`,
            },
          }}>
        <Button
          disableRipple
          onClick={() => setExpanded((v) => !v)}
          sx={{
            // textTransform: 'uppercase',
            letterSpacing: 2,
            color: 'text.secondary',
            bgcolor: 'transparent',

            '& .decorator': {
              width: 40,
              height: 2,
              borderRadius: 999,
              bgcolor: 'primary.main',
              opacity: 0.35,
              transition: 'all .35s ease',
            },

            '& .expandIcon': {
              color: 'primary.main',
              opacity: 0.6,
              transition: 'all .35s ease',
            },

            '&:hover': {
              bgcolor: 'transparent',
              color: 'text.primary',
            },
          }}
        >
          <Stack direction="row" gap={2} alignItems="center">
            <Box className="decorator" />

            View More Projects

            <Box className="decorator" />
          </Stack>
        </Button>

        <ExpandMoreRoundedIcon
          className="expandIcon"
          sx={{
            color: 'primary.main',
            opacity: 0.35,
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'all .35s ease',
          }}
        />
      </Stack>

      <Box
        sx={{
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
          
          ...(!expanded && {
            opacity: 0,
            transform: 'translateY(-20px)',
            marginTop: 0,
            maxHeight: 0,
          }),

          ...(expanded && {
            opacity: 1,
            transform: 'translateY(0)',
            marginTop: '32px',
            maxHeight: 10000,
          }),
        }}
      >
        <Grid container spacing={3}>
          {archiveProjects.map((project) => (
            <Grid
              key={project.slug}
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <ProjectArchiveCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>

      </Box>
    </Box>
  );
}