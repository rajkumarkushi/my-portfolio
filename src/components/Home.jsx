import { Box, Container, Typography, Button, Stack, Avatar, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <Box 
      id="home" 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #030712 0%, #111827 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 }
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
        <Grid container spacing={4} alignItems="center">
          {/* Text Content */}
          <Grid item xs={12} md={7}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
             <Stack spacing={4}>
                {/* Modified greeting section */}
                <motion.div variants={itemVariants}>
                  <Box 
                    sx={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      backgroundColor: 'rgba(124, 58, 237, 0.15)',
                      borderRadius: '50px',
                      px: 2,
                      py: 1,
                      border: '1px solid rgba(124, 58, 237, 0.3)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      👋
                    </motion.div>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: '#a78bfa',
                        fontWeight: 600,
                      }}
                    >
                      Welcome to my portfolio
                    </Typography>
                    </Box>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography 
                    variant="h1" 
                    sx={{ 
                      fontSize: { xs: '2.5rem', md: '4.5rem' },
                      fontWeight: 'bold',
                      background: 'linear-gradient(45deg, #a78bfa 30%, #7c3aed 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1.2,
                      textShadow: '0 0 30px rgba(124, 58, 237, 0.3)',
                    }}
                  >
                    Rajkumar Enduri
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
               <Typography 
  variant="body1" 
  sx={{ 
    color: 'rgba(255, 255, 255, 0.9)',
    maxWidth: '600px',
    fontSize: '1.1rem',
    lineHeight: 1.8
  }}
>
  Frontend Developer with ~3 years of experience in building scalable dashboards, SaaS platforms, and marketplace applications using React.js and the MERN stack.  

  Experienced in developing real-world applications with API integration, authentication systems, and responsive UI design. Focused on writing clean, maintainable code and delivering user-friendly solutions.
</Typography>
<Typography 
  variant="body2"
  sx={{ 
    color: '#a78bfa',
    fontWeight: 600,
    mt: 1
  }}
>
  🚀 Open to new opportunities | Available for immediate joining
</Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                    {[
                      { icon: GitHubIcon, url: 'https://github.com/rajkumarkushi', label: 'GitHub' },
                      { icon: LinkedInIcon, url: 'https://www.linkedin.com/in/rajkumar-e-866733222/', label: 'LinkedIn' },
                      { icon: EmailIcon, url: 'mailto:rajkumarkushi864@gmail.com', label: 'Email' }
                    ].map((social, index) => (
                      <motion.div
                        key={social.label}
                        whileHover={{ y: -5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outlined"
                          href={social.url}
                          target="_blank"
                          startIcon={<social.icon />}
                          sx={{
                            color: 'white',
                            borderColor: 'rgba(124, 58, 237, 0.3)',
                            backdropFilter: 'blur(12px)',
                            '&:hover': {
                              borderColor: '#7c3aed',
                              backgroundColor: 'rgba(124, 58, 237, 0.15)',
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >
                          {social.label}
                        </Button>
                      </motion.div>
                    ))}
                  </Stack>

                  <Stack 
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={2}
                  >
                    <Button
  variant="contained"
  size="large"
  href="#projects"
>
  View My Work
</Button>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<DownloadIcon />}
                      href="/images/projects/resume.pdf"
                      target="_blank"
                      sx={{
                        borderColor: '#7c3aed',
                        color: 'white',
                        px: 4,
                        py: 1.5,
                        backdropFilter: 'blur(12px)',
                        '&:hover': {
                          borderColor: '#a78bfa',
                          backgroundColor: 'rgba(124, 58, 237, 0.15)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      Download CV
                    </Button>
                  </Stack>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>

          {/* Profile Photo */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '280px', md: '400px' },
                  height: { xs: '280px', md: '400px' },
                  margin: '0 auto',
                }}
              >
                {/* Decorative circles */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '1px solid rgba(124, 58, 237, 0.3)',
                    animation: 'spin 20s linear infinite',
                    '@keyframes spin': {
                      '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
                      '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
                    }
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    height: '90%',
                    borderRadius: '50%',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    animation: 'spin 15s linear infinite reverse',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: '80%',
                    borderRadius: '50%',
                    border: '1px solid rgba(124, 58, 237, 0.2)',
                    animation: 'spin 10s linear infinite',
                  }}
                />
                <Avatar
                  src="/images/projects/profile-pic.jpg"
                  alt="Rajkumar Enduri"
                  sx={{
                    width: '100%',
                    height: '100%',
                    border: '4px solid rgba(124, 58, 237, 0.3)',
                    boxShadow: '0 0 30px rgba(124, 58, 237, 0.3)',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ 
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <Typography 
              variant="body2" 
              color="grey.400"
              sx={{ 
                textAlign: 'center',
                cursor: 'pointer',
                '&:hover': { color: '#a78bfa' }
              }}
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Scroll Down
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;