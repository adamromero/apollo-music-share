import React from "react";
import {
   Typography,
   Avatar,
   IconButton,
   makeStyles,
   useMediaQuery
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

function QueuedSongList() {
   const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up("md"));

   const song = {
      title: "Offline P.K.",
      artist: "Pinback",
      thumbnail:
         "https://img.discogs.com/uPJO7hSvrT0TRabSb-SkKG1jErU=/fit-in/599x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-594833-1395690773-1297.jpeg.jpg"
   };

   return (
      greaterThanMd && (
         <div style={{ margin: "10px 0" }}>
            <Typography color="textSecondary" variant="button">
               QUEUE (5)
            </Typography>
            {Array.from({ length: 5 }, () => song).map((song, i) => (
               <QueuedSong key={i} song={song} />
            ))}
         </div>
      )
   );
}

const useStyles = makeStyles({
   avatar: {
      width: 44,
      height: 44
   },
   text: {
      textOverflow: "ellipsis",
      overflow: "hidden"
   },
   container: {
      display: "grid",
      gridAutoFlow: "column",
      gridTemplateColumns: "50px auto",
      gridGap: 12,
      alignItems: "center",
      marginTop: 10
   },
   songInfoContainer: {
      overflow: "hidden",
      whiteSpace: "nowrap"
   }
});

function QueuedSong({ song }) {
   const classes = useStyles();
   const { thumbnail, artist, title } = song;

   return (
      <div className={classes.container}>
         <Avatar
            src={thumbnail}
            alt="Song thumbnail"
            className={classes.avatar}
         />
         <div className={classes.songInfoContainer}>
            <Typography variant="subtitle2" className={classes.text}>
               {title}
            </Typography>
            <Typography
               color="textSecondary"
               variant="body2"
               className={classes.text}
            >
               {artist}
            </Typography>
         </div>
         <IconButton>
            <Delete color="error" />
         </IconButton>
      </div>
   );
}

export default QueuedSongList;
