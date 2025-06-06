import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  Container, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
  Stack,
  Typography
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import DownloadIcon from '@mui/icons-material/Download';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => ({
        id: item.toLowerCase(),
        offset: document.getElementById(item.toLowerCase())?.offsetTop - 100
      }));

      const currentSection = sections.reduce((acc, section) => {
        if (window.scrollY >= section.offset) {
          return section.id;
        }
        return acc;
      }, 'home');

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          sx={{ 
            background: 'rgba(3, 7, 18, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(124, 58, 237, 0.1)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  component="a"
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
                  <CodeIcon 
                    sx={{ 
                      fontSize: 32,
                      mr: 1,
                      color: '#7c3aed',
                      filter: 'drop-shadow(0 0 8px rgba(124, 58, 237, 0.5))'
                    }} 
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      background: 'linear-gradient(45deg, #a78bfa 30%, #7c3aed 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Rajkumar
                  </Typography>
                </Box>
              </motion.div>

              {/* Desktop Navigation */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 2 }}>
                {['home', 'about', 'projects', 'contact'].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => scrollToSection(item)}
                      sx={{
                        color: activeSection === item ? '#a78bfa' : 'white',
                        textTransform: 'capitalize',
                        fontSize: '1rem',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: activeSection === item ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                          width: '80%',
                          height: '2px',
                          background: 'linear-gradient(45deg, #7c3aed 30%, #a78bfa 90%)',
                          transition: 'transform 0.3s ease',
                        },
                        '&:hover::after': {
                          transform: 'translateX(-50%) scaleX(1)',
                        },
                      }}
                    >
                      {item}
                    </Button>
                  </motion.div>
                ))}
              </Box>

              {/* Resume Button */}
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    href="/images/projects/resume.pdf"
                    target="_blank"
                    startIcon={<DownloadIcon />}
                    sx={{
                      background: 'linear-gradient(45deg, #7c3aed 30%, #a78bfa 90%)',
                      color: 'white',
                      px: 3,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 25px rgba(124, 58, 237, 0.4)'
                      }
                    }}
                  >
                    Resume
                  </Button>
                </motion.div>
              </Box>

              {/* Mobile Menu Button */}
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  onClick={handleDrawerToggle}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(124, 58, 237, 0.15)',
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 240,
            background: 'rgba(3, 7, 18, 0.95)',
            backdropFilter: 'blur(12px)',
            borderLeft: '1px solid rgba(124, 58, 237, 0.1)',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(124, 58, 237, 0.15)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollToSection(item);
                  handleDrawerToggle();
                }}
                sx={{
                  color: activeSection === item ? '#a78bfa' : 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(124, 58, 237, 0.15)',
                  }
                }}
              >
                <ListItemText 
                  primary={item.charAt(0).toUpperCase() + item.slice(1)} 
                  sx={{
                    textAlign: 'center',
                    '& .MuiTypography-root': {
                      fontWeight: activeSection === item ? 600 : 400,
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="/images/projects/resume.pdf"
              target="_blank"
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(124, 58, 237, 0.15)',
                }
              }}
            >
              <ListItemText 
                primary="Resume" 
                sx={{
                  textAlign: 'center',
                  '& .MuiTypography-root': {
                    fontWeight: 500,
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;