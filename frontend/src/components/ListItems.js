import * as React from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ClassIcon from '@mui/icons-material/Class';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GradingIcon from '@mui/icons-material/Grading';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to={'/viewStudent'}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Student" />
    </ListItemButton>
    <ListItemButton component={Link} to= {'/viewTeacher'}>
      <ListItemIcon>
        <CastForEducationIcon />
      </ListItemIcon>
      <ListItemText primary="Teacher" />
    </ListItemButton>
    <ListItemButton component={Link} to= {'/viewClass'}>
      <ListItemIcon>
        <ClassIcon/>
      </ListItemIcon>
      <ListItemText primary="Class" />
    </ListItemButton >
    <ListItemButton component={Link} to= {'/viewChecker'}>
      <ListItemIcon>
        <AdminPanelSettingsIcon />
      </ListItemIcon>
      <ListItemText primary="System Users" />
    </ListItemButton>
    <ListItemButton component={Link} to= {'/checkin'}>
      <ListItemIcon>
        <GradingIcon />
      </ListItemIcon>
      <ListItemText primary="CheckIn" />
    </ListItemButton>
  </React.Fragment>
);