import { Box, Container, Typography, IconButton, Link, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background: 'linear-gradient(135deg, #030712 0%, #111827 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
          animation: 'gradientShift 15s ease infinite',
          '@keyframes gradientShift': {
            '0%': {
              backgroundPosition: '0% 0%',
            },
            '50%': {
              backgroundPosition: '100% 100%',
            },
            '100%': {
              backgroundPosition: '0% 0%',
            },
          },
        }
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center">
          <Typography
            variant="h5"
            component={motion.h5}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #a78bfa 30%, #7c3aed 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
            }}
          >
            Let's Connect
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <IconButton
              component={Link}
              href="https://github.com/rajkumarkushi"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(124, 58, 237, 0.2)',
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              component={Link}
              href="https://linkedin.com/in/rajkumar-enduri"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(124, 58, 237, 0.2)',
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              component={Link}
              href="https://twitter.com/rajkumar_enduri"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(124, 58, 237, 0.2)',
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <TwitterIcon />
            </IconButton>

            <IconButton
              component={Link}
              href="mailto:rajkumarenduri@gmail.com"
              sx={{
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(124, 58, 237, 0.2)',
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>

          <Typography
            variant="body2"
            color="grey.400"
            component={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            sx={{ textAlign: 'center' }}
          >
            © {currentYear} Rajkumar Enduri. All rights reserved.
          </Typography>

          <Typography
            variant="body2"
            color="grey.500"
            component={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            sx={{ textAlign: 'center' }}
          >
            Built with React, Material-UI, and Framer Motion
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;