// import React, { useState } from 'react';
// import { Box, Slider, Typography, Paper } from '@mui/material';
// import database from "../assets/database.png";
// import codepen from "../assets/codepen.png"; 
// import refresh from "../assets/refresh.png"; 
// import briefcase from "../assets/briefcase.png";
// import chevronsRight from "../assets/chevronsRight.png";
// const features = [
//   { 
//     icon: database,
//     title: "Multi-source Data",
//     description:
//       "Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.",
//   },
//   {
//     icon: chevronsRight,
//     title: "Ready to Go Algos",
//     description:
//       "We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.",
//   },
//   {
//     icon: briefcase,
//     title: "Stakeholder Alignment",
//     description:
//       "No black boxes. Stakeholders understand the “how”, “so what” and “now what”, leading to clear decision-making trade offs.",
//   },
//   {
//     icon: codepen,
//     title: "Internal Capability Building",
//     description:
//       "We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.",
//   },
//   { 
//     icons: refresh,
//     title: "Continuous Engagement",
//     description:
//       "We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work.",
//   },
// ];

// const marks = features.map((_, index) => ({
//   value: index,

// }));

// export default function CardStepperSlider() {
//   const [index, setIndex] = useState(0);

//   const handleChange = (_, newValue) => {
//     setIndex(newValue);
//   };

//   return (
//     <Box sx={{ width: '30%', margin: 'auto', mt: 5}}>
     

//       <Paper elevation={3} sx={{ padding: 4, borderRadius: 4, minHeight: 200 }}>
//         <Typography variant="h6" color="green">
//           {features[index].title}
//         </Typography>
//         <Typography variant="body1" sx={{ mt: 2 }}>
//           {features[index].description}
//         </Typography>
//       </Paper>

//       <Box sx={{ mt: 5 }}>
//         <Slider
//           value={index}
//           marks={marks}
//           min={0}
//           sx={{
//             color: 'green', // this sets the track and thumb color
//             '& .MuiSlider-thumb': {
//               backgroundColor: 'green',
//             },
//             '& .MuiSlider-track': {
//               backgroundColor: 'green',
//             },
//             '& .MuiSlider-rail': {
//               backgroundColor: '#c8e6c9', // light green rail
//             },
//             '& .MuiSlider-mark': {
//               backgroundColor: '#66bb6a',
//               fontSize:'50px' // mark dots
//             },
//             '& .MuiSlider-markActive': {
//               backgroundColor: 'green',
//             },
//             '& .MuiSlider-valueLabel': {
//               backgroundColor: 'green',
//             },
//           }}
//           max={features.length - 1}
//           onChange={handleChange}
//           valueLabelDisplay="auto"
//         />
//       </Box>
//     </Box>
//   );
// }
