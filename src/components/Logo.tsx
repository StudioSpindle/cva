import React, { FC } from 'react';
import { makeStyles, Grid, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  logoContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  logo: {
    width: '245px',
  },
  logoColorOne: {
    fill: '#10B253',
  },
  logoColorOneDark: {
    fill: theme.palette.secondary.dark,
  },
  logoColorTwo: {
    fill: theme.palette.primary.main,
  },
  logoColorThree: {
    fill: theme.palette.secondary.main,
  },
  opacityOne: {
    opacity: '.66',
  },
  opacityTwo: {
    opacity: '.33',
  },
}));

const Logo: FC = () => {
  const classes = useStyles({});
  return (
    <Grid className={classes.logoContainer} alignItems="center" direction="row" justify="center" container>
      <Grid item>
        <svg className={classes.logo} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 1164.51 509.45">
          <circle className={classes.logoColorOne} cx="354.61" cy="466.92" r="7.71" />
          <circle className={classes.logoColorOne} cx="147.18" cy="467" r="7.71" />
          <circle className={`${classes.logoColorOne} ${classes.opacityOne}`} cx="251.44" cy="467.32" r="7.71" />
          <circle className={classes.logoColorOne} cx="251.44" cy="496.41" r="5.78" />
          <circle className={`${classes.logoColorOne} ${classes.opacityTwo}`} cx="251.44" cy="428.48" r="15.42" />
          <path className={classes.logoColorTwo} d="M721.92 197.65c-9.36 9.23-21.45 13.52-34.58 13.52-33.8 0-48.1-23.27-48.23-46.93-.13-23.79 15.34-47.97 48.23-47.97 12.35 0 24.05 4.68 33.41 13.91l-11.44 11.05c-5.98-5.85-14.04-8.58-21.97-8.58-21.97 0-31.46 16.38-31.33 31.59.13 15.08 8.84 30.81 31.33 30.81 7.93 0 16.9-3.25 22.88-9.23l11.7 11.83zM741.03 145l1.17 7.41c4.94-7.93 11.57-9.1 18.07-9.1 6.63 0 13 2.6 16.51 6.11l-7.15 13.78c-3.25-2.73-6.24-4.16-11.44-4.16-8.32 0-15.99 4.42-15.99 16.25v33.8h-15.86V145h14.69zM796.28 182.7c1.04 7.93 7.93 13.65 19.11 13.65 5.85 0 13.52-2.21 17.16-5.98l10.14 10.01c-6.76 7.02-17.81 10.4-27.56 10.4-22.1 0-35.23-13.65-35.23-34.19 0-19.5 13.26-33.54 34.06-33.54 21.45 0 34.84 13.26 32.37 39.65h-50.05zm34.84-13.13c-1.04-8.32-7.54-12.48-16.64-12.48-8.58 0-15.6 4.16-17.94 12.48h34.58zM909.38 145h15.21v64.09h-14.95l-.78-9.36c-3.64 7.54-13.65 11.18-20.8 11.31-18.98.13-33.02-11.57-33.02-34.06 0-22.1 14.69-33.67 33.41-33.54 8.58 0 16.77 4.03 20.41 10.4l.52-8.84zm-38.48 31.98c0 12.22 8.45 19.5 18.98 19.5 24.96 0 24.96-38.87 0-38.87-10.53 0-18.98 7.15-18.98 19.37zM957.61 126.93v18.2h17.68v13.65h-17.81v27.69c0 6.11 3.38 9.1 8.32 9.1 2.47 0 5.33-.78 7.67-1.95l4.42 13.52c-4.55 1.82-8.32 2.6-13.13 2.73-13.91.52-23.01-7.41-23.01-23.4v-27.69h-11.96v-13.65h11.96v-16.51l15.86-1.69zM1004.41 126.93c0 12.35-18.72 12.35-18.72 0s18.72-12.35 18.72 0zm-17.29 17.81v64.35h15.86v-64.35h-15.86zM1064.47 209.09v-33.54c0-9.75-5.33-17.16-15.47-17.16-9.75 0-16.38 8.19-16.38 17.94v32.76h-15.73v-64.22h14.17l1.04 8.71c6.5-6.37 13-9.62 21.06-9.62 15.08 0 27.17 11.31 27.17 31.46v33.67h-15.86zM1144.29 138.5l11.7 8.84-7.15 9.1c4.94 5.59 6.76 11.96 6.76 18.98 0 7.93-2.99 19.11-13.52 23.92 10.66 5.33 13.26 13 13.26 21.19 0 17.68-13.52 28.6-32.11 28.6s-32.5-11.31-32.5-28.6h15.73c0 8.32 7.67 13.78 16.77 13.78s16.25-4.94 16.25-13.78-8.32-12.87-16.25-12.87c-20.02 0-32.5-12.22-32.5-32.24 0-20.02 14.56-32.5 32.5-32.5 5.07 0 10.27.65 14.69 3.64l6.37-8.06zm-37.83 36.92c0 11.18 7.54 17.81 16.77 17.81 9.1 0 16.64-6.76 16.64-17.81s-7.54-18.07-16.64-18.07c-9.23 0-16.77 6.89-16.77 18.07z" />
          <path className={classes.logoColorOne} d="M691.11 281.48H673.3l-37.83-91.39h19.24l27.43 70.85 27.56-70.85h19.24l-37.83 91.39zM778.21 217h15.21v64.09h-14.95l-.78-9.36c-3.64 7.54-13.65 11.18-20.8 11.31-18.98.13-33.02-11.57-33.02-34.06 0-22.1 14.69-33.67 33.41-33.54 8.58 0 16.77 4.03 20.41 10.4l.52-8.84zm-38.48 31.98c0 12.22 8.45 19.5 18.98 19.5 24.96 0 24.96-38.87 0-38.87-10.53 0-18.98 7.15-18.98 19.37zM822.54 190.22v90.87h-15.73v-90.87h15.73zM852.7 217v33.54c0 9.75 5.33 17.16 15.47 17.16 9.75 0 16.38-8.19 16.38-17.94V217h15.73v64.22h-14.17l-1.04-8.71c-6.63 6.5-12.74 9.62-21.71 9.62-15.34 0-26.52-11.57-26.52-31.46V217h15.86zM927.84 254.7c1.04 7.93 7.93 13.65 19.11 13.65 5.85 0 13.52-2.21 17.16-5.98l10.14 10.01c-6.76 7.02-17.81 10.4-27.56 10.4-22.1 0-35.23-13.65-35.23-34.19 0-19.5 13.26-33.54 34.06-33.54 21.45 0 34.84 13.26 32.37 39.65h-50.05zm34.84-13.13c-1.04-8.32-7.54-12.48-16.64-12.48-8.58 0-15.6 4.16-17.94 12.48h34.58z" />
          <path className={classes.logoColorThree} d="M706.32 335.93h-47.58l-7.8 17.16h-18.59l40.82-91h18.72l40.82 91H714l-7.68-17.16zm-23.79-54.73l-16.9 38.74h33.8l-16.9-38.74zM753.64 262.22v90.87h-15.73v-90.87h15.73zM783.28 262.22v90.87h-15.73v-90.87h15.73zM814.48 270.93c0 12.35-18.72 12.35-18.72 0s18.72-12.35 18.72 0zm-17.29 17.81v64.35h15.86v-64.35h-15.86zM878.18 289h15.21v64.09h-14.95l-.78-9.36c-3.64 7.54-13.65 11.18-20.8 11.31-18.98.13-33.02-11.57-33.02-34.06 0-22.1 14.69-33.67 33.41-33.54 8.58 0 16.77 4.03 20.41 10.4l.52-8.84zm-38.48 31.98c0 12.22 8.45 19.5 18.98 19.5 24.96 0 24.96-38.87 0-38.87-10.53 0-18.98 7.15-18.98 19.37zM953.97 353.09v-33.54c0-9.75-5.33-17.16-15.47-17.16-9.75 0-16.38 8.19-16.38 17.94v32.76h-15.73v-64.22h14.17l1.04 8.71c6.5-6.37 13-9.62 21.06-9.62 15.08 0 27.17 11.31 27.17 31.46v33.67h-15.86zM1038.47 344.9c-7.41 7.28-15.21 10.14-24.7 10.14-18.59 0-34.06-11.18-34.06-33.93s15.47-33.93 34.06-33.93c9.1 0 16.12 2.6 23.14 9.49l-10.01 10.53c-3.77-3.38-8.45-5.07-12.87-5.07-10.66 0-18.46 7.8-18.46 18.98 0 12.22 8.32 18.72 18.2 18.72 5.07 0 10.14-1.43 14.04-5.33l10.66 10.4zM1061.61 326.7c1.04 7.93 7.93 13.65 19.11 13.65 5.85 0 13.52-2.21 17.16-5.98l10.14 10.01c-6.76 7.02-17.81 10.4-27.56 10.4-22.1 0-35.23-13.65-35.23-34.19 0-19.5 13.26-33.54 34.06-33.54 21.45 0 34.84 13.26 32.37 39.65h-50.05zm34.84-13.13c-1.04-8.32-7.54-12.48-16.64-12.48-8.58 0-15.6 4.16-17.94 12.48h34.58z" />
          <circle className={`${classes.logoColorOne} ${classes.opacityOne}`} cx="462.09" cy="152.13" r="7.71" />
          <circle className={classes.logoColorOne} cx="403.61" cy="210.62" r="23.13" />
          <circle className={`${classes.logoColorOne} ${classes.opacityTwo}`} cx="438.31" cy="175.91" r="15.42" />
          <circle className={`${classes.logoColorOne} ${classes.opacityOne}`} cx="408.55" cy="98.59" r="7.71" />
          <circle className={classes.logoColorOne} cx="350.07" cy="157.08" r="23.13" />
          <circle className={`${classes.logoColorOne} ${classes.opacityTwo}`} cx="384.77" cy="122.38" r="15.42" />
          <circle className={`${classes.logoColorOne} ${classes.opacityOne}`} cx="462.14" cy="359.52" r="7.71" />
          <circle className={classes.logoColorOne} cx="403.53" cy="301" r="23.13" />
          <circle className={`${classes.logoColorOne} ${classes.opacityOne}`} cx="438.23" cy="335.7" r="15.42" />
          <circle className={`${classes.logoColorOne} ${classes.opacityTwo}`} cx="462.07" cy="359.46" r="7.71" />
          <circle className={`${classes.logoColorOne} ${classes.opacityTwo}`} cx="408.39" cy="413.14" r="7.71" />
          <circle className={classes.logoColorOne} cx="349.84" cy="354.69" r="23.13" />
          <circle className={`${classes.logoColorOne} ${classes.opacityTwo}`} cx="384.54" cy="389.39" r="15.42" />
          <circle className={`${classes.logoColorOne} ${classes.opacityTwo}`} cx="463.12" cy="254.93" r="7.71" />
          <circle className={classes.logoColorOne} cx="492.22" cy="254.94" r="5.78" />
          <circle className={`${classes.logoColorOne} ${classes.opacityOne}`} cx="424.28" cy="254.94" r="15.42" />
          <circle className={`${classes.logoColorOne} ${classes.opacityTwo}`} cx="40.04" cy="359.87" r="7.71" />
          <circle className={classes.logoColorOne} cx="98.58" cy="301.33" r="23.13" />
          <circle className={`${classes.logoColorOne} ${classes.opacityOne}`} cx="63.88" cy="336.03" r="15.42" />
          <circle className={`${classes.logoColorOne} ${classes.opacityTwo}`} cx="93.64" cy="413.47" r="7.71" />
          <circle className={classes.logoColorOne} cx="152.18" cy="354.93" r="23.13" />
          <circle className={`${classes.logoColorOne} ${classes.opacityOne}`} cx="117.48" cy="389.63" r="15.42" />
          <circle className={`${classes.logoColorOne} ${classes.opacityTwo}`} cx="40.07" cy="152.07" r="7.71" />
          <circle className={classes.logoColorOne} cx="98.63" cy="210.94" r="23.13" />
          <circle className={`${classes.logoColorOne} ${classes.opacityOne}`} cx="63.97" cy="175.97" r="15.42" />
          <circle className={`${classes.logoColorOne} ${classes.opacityOne}`} cx="93.84" cy="98.3" r="7.71" />
          <circle className={classes.logoColorOne} cx="152.39" cy="157.15" r="23.13" />
          <circle className={`${classes.logoColorOne} ${classes.opacityOne}`} cx="117.74" cy="122.2" r="15.42" />
          <circle className={classes.logoColorOne} cx="39.67" cy="256.47" r="7.71" />
          <circle className={`${classes.logoColorOne} ${classes.opacityTwo}`} cx="10.58" cy="256.47" r="5.78" />
          <circle className={`${classes.logoColorOne} ${classes.opacityOne}`} cx="78.51" cy="256.47" r="15.42" />
          <circle className={classes.logoColorTwo} cx="197.53" cy="202.38" r="30.23" />
          <circle className={classes.logoColorOne} cx="354.95" cy="45" r="7.71" />
          <circle className={classes.logoColorOne} cx="251.24" cy="44" r="7.71" />
          <circle className={`${classes.logoColorOne} ${classes.opacityOne}`} cx="251.24" cy="14.91" r="5.78" />
          <circle className={classes.logoColorOne} cx="147.44" cy="44.7" r="7.71" />
          <circle className={classes.logoColorOne} cx="251.24" cy="82.84" r="15.42" />
          <path className={classes.logoColorThree} d="M331.17 53.36c-8 0-14.58 6.09-15.34 13.89-.45 3.23-1.89 6.34-4.38 8.82-3.28 3.28-7.67 4.77-11.97 4.5-.99-.13-1.99-.22-3.01-.22-12.78 0-23.13 10.36-23.13 23.13v.07a15.46 15.46 0 01-4.54 10.75c-3.42 3.42-8.13 4.92-12.61 4.46a30.48 30.48 0 00-10.04.05c-4.41.4-9.02-1.12-12.39-4.49-2.78-2.78-4.31-6.58-4.53-10.22l-.02-.02c.01-.24.04-.47.04-.72 0-12.78-10.36-23.13-23.13-23.13-1.06 0-2.09.1-3.11.23l-.05-.04c-.02-.02-.04-.02-.07-.02-4.27.27-8.63-1.21-11.89-4.47-2.37-2.37-3.78-5.31-4.29-8.38-.54-8.03-7.2-14.38-15.37-14.38-8.52 0-15.42 6.9-15.42 15.42 0 7.82 5.83 14.27 13.38 15.27l.01.01c3.4.37 6.69 1.84 9.3 4.45 3.31 3.31 4.79 7.73 4.49 12.05 0 .03.01.05.02.07l.05.06c-.12.94-.19 1.88-.19 2.85 0 12.76 10.33 23.1 23.08 23.13a15.47 15.47 0 0110.97 4.55c3.48 3.48 4.98 8.29 4.44 12.84l-.09.63c-.02.1-.03.19-.04.29l.01.01c-1.12 8.94 1.74 18.29 8.61 25.15 11.8 11.8 30.94 11.8 42.75 0 7.01-7.01 9.86-16.6 8.54-25.72-.68-4.66.71-9.63 4.29-13.22 2.78-2.78 6.65-4.21 10.28-4.43l.01-.02c.21.01.42.03.64.03 12.78 0 23.13-10.36 23.13-23.13 0-1.06-.1-2.09-.23-3.11 0-.01.01-.01.01-.02-.27-4.27 1.21-8.63 4.47-11.89 2.41-2.41 5.42-3.84 8.54-4.32.01 0 .01-.01.01-.01 7.94-.63 14.19-7.26 14.19-15.36 0-8.49-6.9-15.39-15.42-15.39zM171.19 458.52c8 0 14.58-6.09 15.34-13.89.45-3.23 1.89-6.34 4.38-8.82 3.28-3.28 7.67-4.77 11.97-4.5.99.13 1.99.22 3.01.22 12.78 0 23.13-10.36 23.13-23.13v-.07a15.46 15.46 0 014.54-10.75c3.42-3.42 8.13-4.92 12.61-4.46 3.32.54 6.72.52 10.04-.05 4.41-.4 9.02 1.12 12.39 4.49 2.78 2.78 4.31 6.58 4.53 10.22l.02.02c-.01.24-.04.47-.04.72 0 12.78 10.36 23.13 23.13 23.13 1.06 0 2.09-.1 3.11-.23l.05.04c.02.02.04.02.07.02 4.27-.27 8.63 1.21 11.89 4.47 2.37 2.37 3.78 5.31 4.29 8.38.54 8.03 7.2 14.38 15.37 14.38 8.52 0 15.42-6.9 15.42-15.42 0-7.82-5.83-14.27-13.38-15.27l-.01-.01c-3.4-.37-6.69-1.84-9.3-4.45-3.31-3.31-4.79-7.73-4.49-12.05 0-.03-.01-.05-.02-.07l-.05-.06c.12-.94.19-1.88.19-2.85 0-12.76-10.33-23.1-23.08-23.13a15.47 15.47 0 01-10.97-4.55c-3.48-3.48-4.98-8.29-4.44-12.84l.09-.63c.02-.1.03-.19.04-.29l-.01-.01c1.12-8.94-1.74-18.29-8.61-25.15-11.8-11.8-30.94-11.8-42.75 0-7.01 7.01-9.86 16.6-8.54 25.72.68 4.66-.71 9.63-4.29 13.22-2.78 2.78-6.65 4.21-10.28 4.43l-.01.02c-.21-.01-.42-.03-.64-.03-12.78 0-23.13 10.36-23.13 23.13 0 1.06.1 2.09.23 3.11 0 .01-.01.01-.01.02.27 4.27-1.21 8.63-4.47 11.89a15.325 15.325 0 01-8.54 4.32c-.01 0-.01.01-.01.01-7.94.63-14.19 7.26-14.19 15.36 0 8.49 6.9 15.39 15.42 15.39z" />
          <circle className={classes.logoColorOneDark} cx="143.6" cy="256.31" r="30.23" />
          <circle className={classes.logoColorOneDark} cx="251.05" cy="256.31" r="30.23" />
          <circle className={classes.logoColorOneDark} cx="358.35" cy="256.31" r="30.23" />
          <circle className={classes.logoColorTwo} cx="304.77" cy="309.9" r="30.23" />
          <circle className={classes.logoColorOneDark} cx="304.55" cy="202.82" r="30.23" />
          <circle className={classes.logoColorOneDark} cx="197.69" cy="309.68" r="30.23" />
        </svg>
      </Grid>
    </Grid>
  );
};

export default Logo;
