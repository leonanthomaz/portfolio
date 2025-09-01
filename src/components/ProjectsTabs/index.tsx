// components/ProjectsTabs.tsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useTheme,
  alpha
} from '@mui/material';

interface ProjectsTabsProps {
  activeTab: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const ProjectsTabs: React.FC<ProjectsTabsProps> = ({ activeTab, onTabChange }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        marginBottom: theme.spacing(4),
        width: '100%',
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', px: { xs: 0, sm: 2 } }}>
        <Tabs
          value={activeTab}
          onChange={onTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: theme.palette.primary.main,
              height: 3,
              borderRadius: 3,
            },
            '& .MuiTab-root': {
              color: theme.palette.text.secondary,
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '1rem',
              minWidth: 'auto',
              px: 2.5,
              py: 1.5,
              '&.Mui-selected': {
                color: theme.palette.primary.main,
              },
              '&:hover': {
                color: theme.palette.primary.main,
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
                borderRadius: '8px',
              },
            },
          }}
        >
          <Tab label="Destaque" />
          <Tab label="Automação" />
          <Tab label="API's" />
          <Tab label="IA/Chatbot" />
          <Tab label="Dados" />
          <Tab label="Frontend" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};