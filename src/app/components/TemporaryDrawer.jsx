"use client"
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/material';
import Link from 'next/link';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { text: 'Home', href: '/' },
          { text: 'About', href: '/about' },
          { text: 'Material-Ui', href: '/material' },
          { text: 'Material-Ui componants', href: '/materialcomponents' }

        ].map((item, index) => (
          <Link href={item.href} key={index} passHref>
            <ListItem button component="a">
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
