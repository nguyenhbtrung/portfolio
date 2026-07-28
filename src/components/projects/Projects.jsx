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

      <Box mt={14}>
        <Stack
          spacing={1}
          alignItems="center"
          mb={6}
        >
          <Button
            disableRipple
            onClick={() => setExpanded((v) => !v)}
            sx={{
              textTransform: 'uppercase',
              letterSpacing: 2,
              color: 'text.secondary',

              '&:hover': {
                bgcolor: 'transparent',
                color: 'text.primary',
              },
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Box
                sx={{
                  width: 40,
                  height: 1,
                  bgcolor: 'primary.main',
                  opacity: .4,
                }}
              />

              View More Projects

              <Box
                sx={{
                  width: 40,
                  height: 1,
                  bgcolor: 'primary.main',
                  opacity: .4,
                }}
              />
            </Stack>
          </Button>

          <ExpandMoreRoundedIcon
            sx={{
              color: 'primary.main',
              opacity: .6,
              transition: '.3s',
              transform: expanded
                ? 'rotate(180deg)'
                : 'rotate(0)',
            }}
          />
        </Stack>

        <Collapse in={expanded}>
          <Grid container spacing={3}>
            {archiveProjects.map((project) => (
              <Grid
                key={project.slug}
                size={{
                  xs: 12,
                  lg: 6,
                }}
              >
                <ProjectArchiveCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </Box>
    </Box>
  );
}