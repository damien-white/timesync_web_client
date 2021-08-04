import { Button } from '@material-ui/core';
// import { styled, alpha } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            size="large"
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1, textTransform: 'uppercase' }}>
            TimeSync
          </Typography>
          <Button color="primary" variant="outlined">
            New Task
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
