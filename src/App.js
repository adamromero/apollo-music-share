import React from "react";
import Header from "./components/Header";
import AddSong from "./components/AddSong";
import SongPlayer from "./components/SongPlayer";
import SongList from "./components/SongList";
import { Grid, useMediaQuery } from "@material-ui/core";

function App() {
   const greaterThanSm = useMediaQuery(theme => theme.breakpoints.up("sm"));
   const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up("md"));

   return (
      <>
         {greaterThanSm && <Header />}
         <Grid container spacing={3}>
            <Grid
               style={{ paddingTop: greaterThanSm ? 80 : 10 }}
               item
               xs={12}
               md={7}
            >
               <AddSong />
               <SongList />
            </Grid>
            <Grid
               style={
                  greaterThanMd
                     ? { position: "fixed", width: "100%", right: 0, top: 70 }
                     : {
                          position: "fixed",
                          width: "100%",
                          left: 0,
                          bottom: 0
                       }
               }
               item
               xs={12}
               md={5}
            >
               <SongPlayer />
            </Grid>
         </Grid>
      </>
   );
}

export default App;
