import React from 'react'
import { Box, Typography, Grid, Card, CardContent, Stack, Avatar } from '@mui/material'
import {
    SiDotnet,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiHtml5,
    SiCss3,
    SiMysql,
    SiPostgresql,
    SiGit,
    SiGithub,
    SiPostman
} from 'react-icons/si'
import { TbBrandCSharp, TbDatabase } from 'react-icons/tb'
import { MdApi } from 'react-icons/md'
import { GiPuzzle } from 'react-icons/gi'
import SectionHeading from './SectionHeader'

const skillCategoriesLeft = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'C#', icon: <TbBrandCSharp color="#68217A" /> },
            { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'ASP.NET Core', icon: <SiDotnet color="#512BD4" /> },
            { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
            { name: 'Express.js', icon: <SiExpress color="#000000" /> },
        ],
    },
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML/CSS', icon: <SiHtml5 color="#E34F26" /> },
            { name: 'React.js', icon: <SiReact color="#61DAFB" /> },
        ],
    },
]

const skillCategoriesRight = [
    {
        title: 'Databases',
        skills: [
            { name: 'SQL Server', icon: <TbDatabase color="#A91D22" /> },
            { name: 'MySQL', icon: <SiMysql color="#00758F" /> },
            { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git / GitHub', icon: <SiGithub color="#181717" /> },
            { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
        ],
    },
    {
        title: 'Other',
        skills: [
            { name: 'REST API', icon: <MdApi color="#4CAF50" /> },
            { name: 'OOP', icon: <GiPuzzle color="#3F51B5" /> },
            { name: 'Basic Design Patterns', icon: <GiPuzzle color="#9C27B0" /> },
        ],
    },
]

const SkillSection = ({ categories }) => (
    <Stack spacing={5}>
        {categories.map((category) => (
            <Box key={category.title}>
                <Typography variant="h6" fontWeight={600} mb={2}>
                    {category.title}
                </Typography>

                <Grid container spacing={2}>
                    {category.skills.map((s) => (
                        <Grid key={s.name}>
                            <Card
                                elevation={2}
                                sx={{
                                    borderRadius: 1,
                                    p: 1.2, // padding trực tiếp
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: 4,
                                    },
                                }}
                            >
                                <Stack direction="row" alignItems="center" spacing={1.5}>
                                    {s.icon}
                                    <Typography fontWeight={500}>{s.name}</Typography>
                                </Stack>
                            </Card>

                        </Grid>
                    ))}
                </Grid>
            </Box>
        ))}
    </Stack>
)

export default function Skills() {
    return (
        <Box id="skills" py={8}>
            <SectionHeading align='center'>Technical Skills</SectionHeading>
            {/* <Typography variant="h4" align='center' gutterBottom>
                Technical Skills
            </Typography> */}
            <Typography variant='subtitle1' align='center' color="text.secondary" mb={3} gutterBottom>
                There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
            </Typography>

            {/* Hai cột lớn */}
            <Grid container spacing={6} mt={4}>
                <Grid size={{ xs: 12, md: 6 }} >
                    <SkillSection categories={skillCategoriesLeft} />
                </Grid>
                <Grid >
                    <SkillSection categories={skillCategoriesRight} />
                </Grid>
            </Grid>
        </Box>
    )
}
