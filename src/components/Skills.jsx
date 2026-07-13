import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  Stack,
  Avatar,
  Chip,
  SvgIcon,
} from '@mui/material';

import JavascriptOriginalIcon from '@devicon/react/javascript/original';
import TypescriptOriginalIcon from '@devicon/react/typescript/original';
import CsharpOriginalIcon from '@devicon/react/csharp/original';
import JavaOriginalIcon from '@devicon/react/java/original';
import PythonOriginalIcon from '@devicon/react/python/original';
import CplusplusOriginalIcon from '@devicon/react/cplusplus/original';

import ReactOriginalIcon from '@devicon/react/react/original';
import NextjsPlainIcon from '@devicon/react/nextjs/plain';
import TailwindcssOriginalIcon from '@devicon/react/tailwindcss/original';
import MaterialuiOriginalIcon from '@devicon/react/materialui/original';

import NodejsOriginalIcon from '@devicon/react/nodejs/plain';
import ExpressOriginalIcon from '@devicon/react/express/original';
import NestjsOriginalIcon from '@devicon/react/nestjs/original';
import DotnetcoreOriginalIcon from '@devicon/react/dotnetcore/original';

import PrismaOriginalIcon from '@devicon/react/prisma/original';

import PostgresqlOriginalIcon from '@devicon/react/postgresql/original';
import MicrosoftsqlserverOriginalIcon from '@devicon/react/microsoftsqlserver/original';
import MysqlOriginalIcon from '@devicon/react/mysql/original';

import PostmanOriginalIcon from '@devicon/react/postman/original';
import GithubOriginalIcon from '@devicon/react/github/original';


import TerminalIcon from '@mui/icons-material/TerminalOutlined';
import LayersIcon from '@mui/icons-material/LayersOutlined';
import WebIcon from '@mui/icons-material/WebOutlined';
import DnsIcon from '@mui/icons-material/DnsOutlined';
import StorageIcon from '@mui/icons-material/StorageOutlined';
import BuildIcon from '@mui/icons-material/BuildOutlined';
import ArchitectureIcon from '@mui/icons-material/ArchitectureOutlined';

import { LuDatabase } from 'react-icons/lu';

import SectionHeading from './SectionHeader';
import MotionBox from './MotionBox';

const programmingLanguages = [
  { name: 'JavaScript', Icon: JavascriptOriginalIcon },
  { name: 'TypeScript', Icon: TypescriptOriginalIcon },
  { name: 'C#', Icon: CsharpOriginalIcon },
  // { name: 'Java', Icon: JavaOriginalIcon },
  { name: 'Python', Icon: PythonOriginalIcon },
  // { name: 'C++', Icon: CplusplusOriginalIcon },
];

const frontend = [
  { name: 'React', Icon: ReactOriginalIcon },
  { name: 'Next.js', Icon: NextjsPlainIcon, iconColor: 'currentColor' },
  { name: 'Tailwind', Icon: TailwindcssOriginalIcon },
  { name: 'Material UI', Icon: MaterialuiOriginalIcon },
];

const backend = [
  { name: 'Node.js', Icon: NodejsOriginalIcon },
  { name: 'Express', Icon: ExpressOriginalIcon, iconColor: 'currentColor' },
  { name: 'NestJS', Icon: NestjsOriginalIcon },
  { name: '.NET', Icon: DotnetcoreOriginalIcon },
];

const dataOrm = [
  { name: 'Prisma', Icon: PrismaOriginalIcon, iconColor: 'currentColor' },
  { name: 'EF Core', Icon: DotnetcoreOriginalIcon }, 
];

const databases = [
  { name: 'PostgreSQL', Icon: PostgresqlOriginalIcon },
  { name: 'SQL Server', Icon: MicrosoftsqlserverOriginalIcon },
  { name: 'MySQL', Icon: MysqlOriginalIcon },
];

const tools = [
  { name: 'Postman', Icon: PostmanOriginalIcon },
  { name: 'Git / GitHub', Icon: GithubOriginalIcon, iconColor: 'currentColor' },
];

const others = [
  'REST API',
  'OOP',
  'Design Patterns',
  'SOLID Principles',
  'Agile/Scrum',
];

const SkillCard = ({ skill }) => {
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


const Category = ({ icon, title, items }) => (
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

const categoryCardStyle = {
  borderRadius: 1,
  border: '1px solid',
  borderColor: 'divider',
  transition: '.25s',
  '&:hover': {
    borderColor: 'primary.dark',
    transform: 'translateY(-4px)',
  },
}

export default function Skills() {
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
              <TerminalIcon sx={{color: 'primary.light'}} />
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
                  icon={<DnsIcon fontSize="small" />}
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
                  icon={<StorageIcon fontSize="small" />}
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