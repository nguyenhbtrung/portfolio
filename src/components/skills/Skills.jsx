import {
  Box,
  Typography,
  Grid,
  Card,
  Stack,
  Chip,
  SvgIcon,
} from '@mui/material';

// import TerminalIcon from '@mui/icons-material/TerminalOutlined';
import CodeIcon from '@mui/icons-material/CodeOutlined';
import LayersIcon from '@mui/icons-material/LayersOutlined';
import WebIcon from '@mui/icons-material/WebOutlined';
// import DnsIcon from '@mui/icons-material/DnsOutlined';
import TerminalIcon from '@mui/icons-material/TerminalOutlined';
// import StorageIcon from '@mui/icons-material/StorageOutlined';
import DataObjectIcon from '@mui/icons-material/DataObjectOutlined';
import BuildIcon from '@mui/icons-material/BuildOutlined';
import ArchitectureIcon from '@mui/icons-material/ArchitectureOutlined';

import { LuDatabase } from 'react-icons/lu';

import SectionHeading from '../SectionHeader';
import MotionBox from '../MotionBox';

import { Category } from './Category';
import { SkillCard } from './SkillCard';
import { backend, databases, dataOrm, frontend, others, programmingLanguages, tools } from '../../data/skills';

const categoryCardStyle = {
  borderRadius: 1,
  border: '1px solid',
  borderColor: 'divider',
  transition: '.25s',
  '&:hover': {
    borderColor: 'primary.main',
    transform: 'translateY(-4px)',
    boxShadow: (theme) => `0 10px 25px ${theme.palette.primary.main}15`,
  },
}

export function Skills() {
  return (
    <Box id="skills" py={8}>
      <SectionHeading align="center">
        Technical Skills
      </SectionHeading>

      <Typography align="center" color="text.secondary" gutterBottom>
        A comprehensive overview of my engineering toolkit. I specialize in
        building scalable web applications with a focus on type safety,
        performance, and modern architecture.
      </Typography>

      <Box mt={6}>
        {/* Programming Languages */}
        <MotionBox>
          <Card 
            elevation={1}
            sx={{
              ...categoryCardStyle,
              p: 3,
              mb: 4,
            }}
          >
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              mb={3}
            >
              <CodeIcon sx={{color: 'primary.light'}} />
              <Typography variant="h6">
                Programming Languages
              </Typography>
            </Stack>

            <Grid container spacing={2}>
              {programmingLanguages.map((item) => (
                <Grid
                  key={item.name}
                  size={{
                    xs: 6,
                    sm: 4,
                    md: 3,
                    lg: 2,
                  }}
                >
                  <SkillCard skill={item} />
                </Grid>
              ))}
            </Grid>
          </Card>
        </MotionBox>

        {/* Frameworks */}
        <MotionBox>
          <Card
            elevation={1}
            sx={{
              ...categoryCardStyle,
              p: 3,
              mb: 4,
            }}
          >
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              mb={4}
            >
              <LayersIcon sx={{color: 'primary.light'}} />
              <Typography variant="h6">
                Frameworks & Libraries
              </Typography>
            </Stack>

            <Grid container spacing={5}>
              <Grid
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <Category
                  icon={<WebIcon fontSize="small" />}
                  title="Frontend"
                  items={frontend}
                />
              </Grid>

              <Grid
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <Category
                  icon={<TerminalIcon fontSize="small" />}
                  title="Backend"
                  items={backend}
                />
              </Grid>

              <Grid
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <Category
                  icon={<DataObjectIcon fontSize="small" />}
                  title="Data & ORM"
                  items={dataOrm}
                />
              </Grid>
            </Grid>
          </Card>
        </MotionBox>

        {/* Bottom */}
        <Grid container spacing={3}>
          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <MotionBox height='100%'>
              <Card
                elevation={1}
                sx={{
                  ...categoryCardStyle,
                  p: 3,
                  height: '100%',
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  mb={3}
                >
                  <SvgIcon sx={{color: 'primary.light'}}>
                      <LuDatabase />
                  </SvgIcon>
                  <Typography variant="h6">
                    DBMS
                  </Typography>
                </Stack>

                <Grid container spacing={2}>
                  {databases.map((item) => (
                    <Grid size={6} key={item.name}>
                      <SkillCard skill={item} />
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </MotionBox>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <MotionBox height='100%' transition={{delay: 0.1}}>
              <Card
                elevation={1}
                sx={{
                  ...categoryCardStyle,
                  p: 3,
                  height: '100%',
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  mb={3}
                >
                  <BuildIcon sx={{color: 'primary.light'}} />
                  <Typography variant="h6">
                    Tools
                  </Typography>
                </Stack>

                <Grid container spacing={2}>
                  {tools.map((item) => (
                    <Grid size={6} key={item.name}>
                      <SkillCard skill={item} />
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </MotionBox>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <MotionBox height='100%' transition={{delay: 0.2}}>
              <Card
                elevation={1}
                sx={{
                  ...categoryCardStyle,
                  p: 3,
                  height: '100%',
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  mb={3}
                >
                  <ArchitectureIcon sx={{color: 'primary.light'}} />
                  <Typography variant="h6">
                    Others
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={1}
                >
                  {others.map((item) => (
                    <Chip
                      key={item}
                      label={item}  
                      sx={{
                        borderRadius: 0.5,
                        border: '1px solid transparent',
                        '&:hover': {
                          borderColor: 'primary.light',
                        },
                      }}
                    />
                  ))}
                </Stack>
              </Card> 
            </MotionBox>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}