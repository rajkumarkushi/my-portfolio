import { Box, Container, Typography, TextField, Button, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { useState } from 'react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

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

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: '#60a5fa' }} />,
      title: 'Email',
      content: 'rajkumarkushi864@gmail.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: '#60a5fa' }} />,
      title: 'Location',
      content: 'Hyderabad,India',
      link: 'https://maps.google.com',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: '#60a5fa' }} />,
      title: 'Phone',
      content: '9381338216',
      link: 'tel:+1234567890',
    },
  ];

  return (
    <Box
      id="contact"
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
                Get In Touch
              </Typography>
            </motion.div>

            <Grid container spacing={4}>
              {/* Contact Information */}
              <Grid item xs={12} md={5}>
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
                        mb: 4,
                        fontWeight: 600,
                        color: '#a78bfa'
                      }}
                    >
                      Contact Information
                    </Typography>
                    <Stack spacing={3}>
                      {contactInfo.map((item, index) => (
                        <motion.div
                          key={item.title}
                          variants={itemVariants}
                          custom={index}
                        >
                          <Box 
                            sx={{ 
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              p: 2,
                              borderRadius: 2,
                              background: 'rgba(124, 58, 237, 0.05)',
                              border: '1px solid rgba(124, 58, 237, 0.1)',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                background: 'rgba(124, 58, 237, 0.1)',
                                transform: 'translateX(5px)',
                              }
                            }}
                          >
                            <Box 
                              sx={{ 
                                p: 1,
                                borderRadius: 1,
                                background: 'rgba(124, 58, 237, 0.1)',
                                color: '#a78bfa'
                              }}
                            >
                              {item.icon}
                            </Box>
                            <Box>
                              <Typography 
                                variant="subtitle2" 
                                sx={{ 
                                  color: 'rgba(255, 255, 255, 0.7)',
                                  mb: 0.5
                                }}
                              >
                                {item.title}
                              </Typography>
                              <Typography 
                                variant="body1" 
                                sx={{ 
                                  color: 'white',
                                  fontWeight: 500
                                }}
                              >
                                {item.content}
                              </Typography>
                            </Box>
                          </Box>
                        </motion.div>
                      ))}
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>

              {/* Contact Form */}
              <Grid item xs={12} md={7}>
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
                        mb: 4,
                        fontWeight: 600,
                        color: '#a78bfa'
                      }}
                    >
                      Send Message
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <Stack spacing={3}>
                        <TextField
                          fullWidth
                          label="Name"
                          variant="outlined"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(124, 58, 237, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: '#7c3aed',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#7c3aed',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: '#a78bfa',
                              },
                            },
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Email"
                          variant="outlined"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(124, 58, 237, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: '#7c3aed',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#7c3aed',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: '#a78bfa',
                              },
                            },
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Message"
                          variant="outlined"
                          name="message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(124, 58, 237, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: '#7c3aed',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#7c3aed',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: '#a78bfa',
                              },
                            },
                          }}
                        />
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{
                              background: 'linear-gradient(45deg, #7c3aed 30%, #a78bfa 90%)',
                              color: 'white',
                              py: 1.5,
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 10px 25px rgba(124, 58, 237, 0.4)'
                              }
                            }}
                          >
                            Send Message
                          </Button>
                        </motion.div>
                      </Stack>
                    </form>
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

export default Contact;