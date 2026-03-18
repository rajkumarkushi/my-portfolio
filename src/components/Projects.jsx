import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip, Stack, IconButton, useTheme } from '@mui/material';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import { useState, useEffect } from 'react';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const ProjectDialog = ({ open, onClose, screenshots, title }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = screenshots?.length || 0;

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          borderRadius: 2,
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'white',
            zIndex: 1
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '70vh',
              objectFit: 'contain',
              borderRadius: 1,
            }}
            src={screenshots?.[activeStep]?.img}
            alt={screenshots?.[activeStep]?.title}
          />
          
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" color="white">
              {screenshots?.[activeStep]?.title}
            </Typography>
            <Typography variant="body2" color="grey.400">
              {screenshots?.[activeStep]?.description}
            </Typography>
          </Box>

          <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="space-between" 
            alignItems="center"
            sx={{ mt: 2 }}
          >
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ color: 'white' }}
              startIcon={<KeyboardArrowLeft />}
            >
              Back
            </Button>
            <Typography color="grey.400">
              {activeStep + 1} / {maxSteps}
            </Typography>
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{ color: 'white' }}
              endIcon={<KeyboardArrowRight />}
            >
              Next
            </Button>
          </Stack>
        </DialogContent>
      </Box>
    </Dialog>
  );
};


const Projects = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const projectsPerPage = 1;

  const projects = [
    {
      title: "Tractors-24",
      description: "An online platform for buying and selling tractors across Indian states. Implemented dealer dashboard and location-based filtering.",
      image: "/images/projects/tractors24/main.png",
      screenshots: [
        {
          img: "/images/projects/tractors24/main.png",
          title: "Home Page",
          description: "Main landing page showing featured tractors and search filters"
        },
        {
          img: "/images/projects/tractors24/dealer-dashboard.png",
          title: "Dealer Dashboard",
          description: "dealer dashboared for tractor dealers to upload new tractors to the customer dashboard"
        },
        {
          img: "/images/projects/tractors24/brands.png",
          title: "Location Filter",
          description: "available tractors avialble in particular brands"
        },
        {
          img: "/images/projects/tractors24/districts.png",
          title: "Product Details",
          description: "deatailed view of tractors available districts loacation wise"
        }
      ], technologies: ["React.js", "Material UI", "Firebase", "Firestore"],
      features: ["Location-based filtering", "Dealer dashboard", "Real-time updates"],
      github: "https://github.com/rajkumarkushi/tractors-24.git",
      live: "https://tractors24.in/",
      color: "#3b82f6"
    },
    {
  title: "Spa Management Dashboard",
  description: "Multi-role dashboard for managing services, staff, and customer bookings with real-time data tracking.",
  image: "/images/projects/Ody-spa/main.png",
  screenshots: [
    {
      img: "/images/projects/Ody-spa/main.png",
      title: "Dashboard Overview",
      description: "Admin dashboard showing business insights and service overview"
    },
    {
      img: "/images/projects/Ody-spa/services.png",
      title: "Services Management",
      description: "View and manage available spa services"
    },
    {
      img: "/images/projects/Ody-spa/staff.png",
      title: "Staff Management",
      description: "Track staff availability and schedules"
    }
  ],
  technologies: ["Next.js", "Tailwind CSS", "REST APIs"],
  features: ["Multi-role dashboards", "Service tracking", "Responsive UI"],
  github: "https://github.com/rajkumarkushi/spa-dashboard",
  live: "https://odyluxuriousspa.com",
  color: "#10b981"
},
    {
      title: "Gym Management System",
      description: "Comprehensive gym management solution with multiple dashboards for staff, trainers, and dieticians.",
      image: "/images/projects/gym/landingpage.png",
      screenshots: [
        {
          img: "/images/projects/gym/admin-attendence.png",
          title: "Admin Dashboard-attendence tracking",
          description: "admin-dashboard tracking the attendence of the customers"
        },
        {
          img: "/images/projects/gym/admin-insights.png",
          title: "admin dashboard-insights",
          description: "admin dashboard tracking the insights and analytics of gym"
        },
        {
          img: "/images/projects/gym/personaltraining.png",
          title: "personel training section",
          description: "personal trainers and dieticians available in gym"
        },
        {
          img: "/images/projects/gym/about-section.png",
          title: "about section",
          description: "about our gym-mangement-system"
        },
        {
          img: "/images/projects/gym/success-stories.png",
          title: "success stories",
          description: "success stories of different customers"
        },
        {
          img: "/images/projects/gym/working-categories.png",
          title: "working-categories",
          description: "different working categories available in gym"
        }
      ],
      technologies: ["React.js", "Material UI", "Node.js", "MongoDB"],
      features: [
        "Multiple dashboards",
        "Member tracking",
        "Schedule management",
        "Diet planning",
        "Payment tracking"
      ],
      github: "https://github.com/rajkumarkushi/gym-management-system.git",
      live: "https://gym-management.herokuapp.com",
      color: "#8b5cf6"
    },
    
    {
      title: "7 Eyes Project",
      description: "Web application built with core web technologies focusing on user interface and experience.",
      image: "/images/projects/7eyes/homepage.png",
      screenshots: [
        {
          img: "/images/projects/7eyes/homepage.png",
          title: "Landing Page",
          description: "Modern and attractive landing page with smooth animations"
        },
        {
          img: "/images/projects/7eyes/about.png",
          title: "About Section",
          description: "Detailed information about the project and its goals"
        },
        {
          img: "/images/projects/7eyes/services.png",
          title: "Services Section",
          description: "Interactive services showcase with hover effects"
        },
        {
          img: "/images/projects/7eyes/mobile.png",
          title: "Mobile View",
          description: "Responsive design optimized for mobile devices"
        },
        {
          img: "/images/projects/7eyes/contact.png",
          title: "Contact Section",
          description: "User-friendly contact form with validation"
        }
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Responsive design",
        "Modern UI",
        "Interactive elements",
        "Smooth animations",
        "Cross-browser support"
      ],
      github: "https://github.com/rajkumarkushi/7eyes-fashion.git",
      live: "https://7-eyes.netlify.app",
      color: "#ec4899"
    },
     {
      title: "Healthcare-dashboard",
      description: "healthcare dashboard for doctors and patients",
      image: "/images/projects/healthcare/dashboard.png",
     technologies: ["React.js", "Material UI", "Firebase", "Firestore"],
      features: ["appointmentschedule", "healthscore", "Diet plans"],
      github: "https://github.com/rajkumarkushi/healthcare-dashboard.git",
      live: "https://healthcare-dashboard-gules-six.vercel.app/",
      color: "#3b82f6"
    },
    {
      title: "NewsWave",
      description: "A dynamic news application that provides real-time news updates across various categories. Users can personalize their news feed and save articles for later reading.",
      image: "/images/projects/newswave.png",
      technologies: ["React.js", "Node.js", "NewsAPI", "Material UI"],
      features: [
        "Category-wise news filtering",
        "International & National news",
        "Search functionality",
        "Bookmark articles",
        "Dark/Light mode"
      ],
      github: "https://github.com/rajkumarkushi/news-web.git",
      live: "https://newswave-app.netlify.app",
      color: "#8b5cf6"
    },
    {
      title: "JobHunt - Naukri Clone",
      description: "A comprehensive job portal where job seekers can search for opportunities and employers can post job listings. Features include advanced job filtering and application tracking.",
      image: "/images/projects/jobhunt.png",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT"],
      features: [
        "Job search & filters",
        "Company profiles",
        "Application tracking",
        "Resume builder",
        "Email notifications"
      ],
      github: "https://github.com/rajkumarkushi/naukri-app.git",
      live: "https://jobhunt-portal.herokuapp.com",
      color: "#ec4899"
    },
  
    {
      title: "MusicVibe",
      description: "A music streaming platform featuring curated playlists, artist profiles, and personalized recommendations. Users can create and share their own playlists.",
      image: "/images/projects/musicvibe.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Music streaming",
        "Playlist creation",
        "Artist profiles",
        "Search functionality",
        "Social sharing"
      ],
      github: "https://github.com/rajkumarkushi/music-albums.git",
      live: "https://musicvibe-app.netlify.app",
      color: "#10b981"
    },
  ];

  const totalPages = projects.length;

  const handleNext = () => {
    setSlideDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setSlideDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentProjects = [projects[currentPage]];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.32, 0.72, 0, 1]
      }
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.32, 0.72, 0, 1]
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.32, 0.72, 0, 1]
      }
    })
  };

  const pageVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.2
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1
      }
    })
  }; 

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <Box 
      id="projects" 
      sx={{ 
        py: 10,
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
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
      <motion.div style={{ y }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography 
              variant="h2" 
              textAlign="center" 
              mb={2}
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #818cf8 30%, #6366f1 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                animation: 'titleGlow 3s ease-in-out infinite',
                '@keyframes titleGlow': {
                  '0%, 100%': {
                    textShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                  },
                  '50%': {
                    textShadow: '0 0 30px rgba(99, 102, 241, 0.5)',
                  },
                },
              }}
            >
              My Projects
            </Typography>

            <Typography 
              variant="h6" 
              textAlign="center" 
              mb={8}
              color="grey.400"
              sx={{
                animation: 'fadeIn 1s ease-out',
                '@keyframes fadeIn': {
                  from: { opacity: 0, transform: 'translateY(20px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              Here are some of my recent works
            </Typography>

            <Box sx={{ minHeight: '600px', position: 'relative' }}>
              <AnimatePresence initial={false} custom={slideDirection} mode="wait">
                <motion.div
                  key={currentPage}
                  custom={slideDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      handleNext();
                    } else if (swipe > swipeConfidenceThreshold) {
                      handlePrev();
                    }
                  }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    willChange: 'transform'
                  }}
                >
                  <Grid container spacing={4} justifyContent="center">
                    {currentProjects.map((project, index) => (
                      <Grid item xs={12} md={8} key={project.title}>
                        <motion.div 
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover={{ 
                            y: -10,
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <Card 
                            sx={{ 
                              height: '100%',
                              background: 'rgba(255, 255, 255, 0.05)',
                              backdropFilter: 'blur(10px)',
                              borderRadius: 4,
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              overflow: 'hidden',
                              position: 'relative',
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                                '& .MuiCardMedia-root': {
                                  transform: 'scale(1.05)',
                                },
                              },
                            }}
                          >
                            <Box 
                              sx={{ 
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: `linear-gradient(90deg, ${project.color} 0%, ${project.color}88 100%)`,
                                animation: 'gradientFlow 3s linear infinite',
                                '@keyframes gradientFlow': {
                                  '0%': { backgroundPosition: '0% 50%' },
                                  '100%': { backgroundPosition: '100% 50%' },
                                },
                              }} 
                            />
                            
                            <CardMedia
                              component="img"
                              height="200"
                              image={project.image}
                              alt={project.title}
                              sx={{ 
                                objectFit: 'cover',
                                transition: 'transform 0.5s ease-in-out',
                              }}
                            />
                            
                            <CardContent sx={{ p: 3 }}>
                              <Typography 
                                variant="h5" 
                                gutterBottom
                                sx={{ 
                                  color: 'white',
                                  fontWeight: 'bold'
                                }}
                              >
                                {project.title}
                              </Typography>
                              
                              <Typography 
                                variant="body2" 
                                color="grey.400"
                                paragraph
                              >
                                {project.description}
                              </Typography>

                              <Box sx={{ mb: 3 }}>
                                <Typography 
                                  variant="subtitle2" 
                                  color="grey.400"
                                  gutterBottom
                                >
                                  Key Features:
                                </Typography>
                                <Stack direction="row" spacing={1} flexWrap="wrap">
                                  {project.features.map((feature) => (
                                    <Chip
                                      key={feature}
                                      label={feature}
                                      size="small"
                                      icon={<WebIcon sx={{ fontSize: 16 }} />}
                                      sx={{
                                        mb: 1,
                                        color: 'white',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        '&:hover': {
                                          backgroundColor: 'rgba(255, 255, 255, 0.2)'
                                        }
                                      }}
                                    />
                                  ))}
                                </Stack>
                              </Box>
                              
                              <Typography 
                                variant="subtitle2" 
                                color="grey.400"
                                gutterBottom
                              >
                                Technologies Used:
                              </Typography>
                              <Stack direction="row" spacing={1} flexWrap="wrap">
                                {project.technologies.map((tech) => (
                                  <Chip 
                                    key={tech} 
                                    label={tech}
                                    size="small"
                                    icon={<CodeIcon sx={{ fontSize: 16 }} />}
                                    sx={{ 
                                      mb: 1,
                                      color: project.color,
                                      borderColor: project.color,
                                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                      '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                      }
                                    }} 
                                    variant="outlined"
                                  />
                                ))}
                              </Stack>
                            </CardContent>
                            
                            <CardActions sx={{ p: 3, pt: 0 }}>
                              {project.screenshots && project.screenshots.length > 0 && (
                                <Button 
                                  startIcon={<PhotoLibraryIcon />}
                                  onClick={() => {
                                    setSelectedProject(project);
                                    setOpenDialog(true);
                                  }}
                                  sx={{ 
                                    color: 'white',
                                    '&:hover': {
                                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                    }
                                  }}
                                >
                                  Screenshots
                                </Button>
                              )}
                              <Button 
                                startIcon={<GitHubIcon />}
                                href={project.github}
                                target="_blank"
                                sx={{ 
                                  color: 'white',
                                  '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                  }
                                }}
                              >
                                Code
                              </Button>
                              <Button 
                                startIcon={<LaunchIcon />}
                                href={project.live}
                                target="_blank"
                                sx={{ 
                                  color: 'white',
                                  '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                  }
                                }}
                              >
                                Live Demo
                              </Button>
                            </CardActions>
                          </Card>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </AnimatePresence>

              <IconButton
                onClick={handlePrev}
                sx={{
                  position: 'absolute',
                  left: { xs: -16, md: -30 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  '&:hover': {
                    backgroundColor: 'rgba(99, 102, 241, 0.2)',
                    transform: 'translateY(-50%) scale(1.1)',
                  },
                  transition: 'all 0.2s ease',
                  zIndex: 2,
                }}
              >
                <KeyboardArrowLeft />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: { xs: -16, md: -30 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  '&:hover': {
                    backgroundColor: 'rgba(99, 102, 241, 0.2)',
                    transform: 'translateY(-50%) scale(1.1)',
                  },
                  transition: 'all 0.2s ease',
                  zIndex: 2,
                }}
              >
                <KeyboardArrowRight />
              </IconButton>

              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                sx={{ mt: 4 }}
              >
                {Array.from({ length: totalPages }).map((_, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: currentPage === index ? '#6366f1' : 'rgba(255, 255, 255, 0.2)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: currentPage === index ? '0 0 10px rgba(99, 102, 241, 0.5)' : 'none',
                      }}
                      onClick={() => setCurrentPage(index)}
                    />
                  </motion.div>
                ))}
              </Stack>
            </Box>
          </motion.div>
        </Container>
      </motion.div>

      {selectedProject && (
        <ProjectDialog
          open={openDialog}
          onClose={() => {
            setOpenDialog(false);
            setSelectedProject(null);
          }}
          screenshots={selectedProject.screenshots}
          title={selectedProject.title}
        />
      )}
    </Box>
  );
};

export default Projects;