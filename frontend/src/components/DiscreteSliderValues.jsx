import React, { useState } from 'react';
import { Box, Slider, Typography, Paper } from '@mui/material';
import {
  Database,
  ChevronsRight,
  Briefcase,
  Codepen,
  RefreshCcw,
} from 'lucide-react';

const steps = [
  {
    icon: <Database size={22} />,
    title: 'Multi-source Data',
    description: 'Works with datasets from varied formats and sources.',
  },
  {
    icon: <ChevronsRight size={22} />,
    title: 'Ready to Go Algos',
    description: 'Built-in accelerators based on proven learnings.',
  },
  {
    icon: <Briefcase size={22} />,
    title: 'Stakeholder Alignment',
    description: 'Align teams with clarity and transparency.',
  },
  {
    icon: <Codepen size={22} />,
    title: 'Internal Capability Building',
    description: 'Empower teams with enhanced AI tooling.',
  },
  {
    icon: <RefreshCcw size={22} />,
    title: 'Continuous Engagement',
    description: 'Support and evolve long-term strategies.',
  },
];

export default function ZigZagSliderFinal() {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', overflowX: 'auto', padding: 6 }}>
      <Box className="zigzag-slider-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-card ${index % 2 === 1 ? 'top' : 'bottom'}`}
            style={{ left: `${index * 220}px` }}
            
          >
            <Paper elevation={3} sx={{ padding: 2, width: 220 }}>
              <div className="icon-wrapper">{step.icon}</div>
              <Typography variant="subtitle1" color="green">
                {step.title}
              </Typography>
              <Typography variant="body2">{step.description}</Typography>
            </Paper>
          </div>
        ))}

        <Slider
          value={value}
          min={0}
          max={steps.length - 1}
          step={null}
          marks={steps.map((_, index) => ({ value: index }))}
          onChange={handleChange}
          valueLabelDisplay="off"
          sx={{
            position: 'absolute',
            bottom: '50%',
            transform: 'translateY(50%)',
            width: 1156,
            height: 8,
            borderRadius: '100px',
            opacity: 1,
            color: 'green',
            '& .MuiSlider-track': {
              backgroundColor: 'green',
              border: 'none',
              height: 8,
              borderRadius: '100px',
            },
            '& .MuiSlider-rail': {
              backgroundColor: '#e0e0e0',
              height: 8,
              borderRadius: '100px',
            },
            '& .MuiSlider-mark': {
              backgroundColor: 'green',
              height: 12,
              width: 2,
            },
            '& .MuiSlider-markActive': {
              backgroundColor: '#FFBD59',
            },
          }}
        />
      </Box>
    </Box>
  );
}
