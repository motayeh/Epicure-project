import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';
import MostPopularOnes from './MostPopularResturants';
import { ContainerOfTabs } from './ResurantsStyle';

export default function ColorTabs({
  handleChanger,
}: {
  handleChanger: (event: React.SyntheticEvent, newValue: string) => void;
}) {
  const [value, setValue] = React.useState('new');

  return (
    <>
      <ContainerOfTabs>
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={value}
            onChange={handleChanger}
            aria-label="secondary"
            TabIndicatorProps={{
              sx: {
                backgroundColor: 'rgba(222, 146, 0, 0.9)',
                height: '1.8px',
              },
            }}
            sx={{
              '& button': {
                margin: '0px',
                padding: '0 10px',
                color: 'black',
                fontWeight: '200',
                height: '30px',
                minWidth: 'auto',
                minHeight: 'unset',
                display: 'flex',
                justifyContent: 'flex-end',
                paddingBottom: '5px',
              },
              '& button.Mui-selected': { color: 'black', fontWeight: '650' },
              '& .MuiTabs-flexContainer': {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
              '& .MuiTabs-root': { height: '20px', width: 'fit-content' },

              '& .MuiTabs-scroller': { height: '30px' },
              width: '100%',
            }}
          >
            <Tab value="All" label="All" />
            <Tab value="New" label="New" />
            <Tab value="Most_Popular" label="Most Popular" />
            <Tab value="Open_Now" label=" Open Now" />
          </Tabs>
        </Box>
      </ContainerOfTabs>
    </>
  );
}
