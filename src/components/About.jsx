import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skills = [
    { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
    { name: 'Nextjs', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
            { name: 'Mongo db', level: 85 },
    { name: 'SQL', level: 65 },

  ];

  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #030712 0%, #111827 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        py: 8
      }}
    >
      {/* Animated background elements */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.15 }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              borderRadius: '50%',
              background: `linear-gradient(45deg, ${i % 2 === 0 ? '#7c3aed' : '#06b6d4'} 30%, ${i % 2 === 0 ? '#a78bfa' : '#22d3ee'} 90%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.5, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </Box>

      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <Stack spacing={6}>
            {/* Title */}
            <motion.div variants={itemVariants}>
              <Typography 
                variant="h2" 
                sx={{ 
                  textAlign: 'center',
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #a78bfa 30%, #7c3aed 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(124, 58, 237, 0.3)',
                  mb: 4
                }}
              >
                About Me
              </Typography>
            </motion.div>

            <Grid container spacing={4}>
              {/* My Journey */}
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 4,
                      height: '100%',
                      background: 'rgba(17, 24, 39, 0.7)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(124, 58, 237, 0.1)',
                      borderRadius: 4,
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(124, 58, 237, 0.2)',
                      }
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        mb: 3,
                        fontWeight: 600,
                        color: '#a78bfa'
                      }}
                    >
                      My Journey
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: 1.8,
                        fontSize: '1.1rem'
                      }}
                    >
                     Frontend Developer with ~3 years of experience building dashboards, SaaS platforms, and marketplace applications using React.js. Skilled in developing scalable UI, integrating APIs, and implementing authentication systems. Passionate about building real-world applications with clean and responsive design.

                    </Typography>
                   
                  </Paper>
                </motion.div>
              </Grid>

              {/* Skills & Expertise */}
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 4,
                      height: '100%',
                      background: 'rgba(17, 24, 39, 0.7)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(124, 58, 237, 0.1)',
                      borderRadius: 4,
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(124, 58, 237, 0.2)',
                      }
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        mb: 3,
                        fontWeight: 600,
                        color: '#a78bfa'
                      }}
                    >
                      Skills & Expertise
                    </Typography>
                    <Stack spacing={3}>
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          variants={itemVariants}
                          custom={index}
                        >
                          <Box sx={{ mb: 1 }}>
                            <Typography 
                              variant="subtitle1" 
                              sx={{ 
                                color: 'white',
                                fontWeight: 500,
                                mb: 0.5
                              }}
                            >
                              {skill.name}
                            </Typography>
                            <Box 
                              sx={{ 
                                height: 8,
                                background: 'rgba(124, 58, 237, 0.1)',
                                borderRadius: 4,
                                overflow: 'hidden'
                              }}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                style={{
                                  height: '100%',
                                  background: 'linear-gradient(45deg, #7c3aed 30%, #a78bfa 90%)',
                                  borderRadius: 4
                                }}
                              />
                            </Box>
                            <Typography 
                              variant="caption" 
                              sx={{ 
                                color: 'rgba(255, 255, 255, 0.7)',
                                mt: 0.5,
                                display: 'block'
                              }}
                            >
                              {skill.level}%
                            </Typography>
                          </Box>
                        </motion.div>
                      ))}
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;