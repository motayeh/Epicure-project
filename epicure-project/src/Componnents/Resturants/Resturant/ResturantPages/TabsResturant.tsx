import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ContainerOfTabs } from '../../ResurantsStyle';

export default function ColorTabsResturantPage({
  handleChanger,
}: {
  handleChanger: (event: React.SyntheticEvent, newValue: string) => void;
}) {
  const [value, setValue] = React.useState('BreakFast');
  const { id } = useParams();
  return (
    <>
      <ContainerOfTabs>
        <Box sx={{ width: '75%' }}>
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
            <Tab
              value="BreakFast"
              label="BreakFast"
              onClick={() => {
                setValue('BreakFast');
              }}
            />

            <Tab
              value="Dinner"
              label="Dinner"
              onClick={() => {
                setValue('Dinner');
              }}
            />
            <Tab
              value="Lunch"
              label="Lunch"
              onClick={() => {
                setValue('Lunch');
              }}
            />
          </Tabs>
        </Box>
      </ContainerOfTabs>
    </>
  );
}
