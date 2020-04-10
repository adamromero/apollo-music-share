import React from "react";
import Header from "./components/Header";
import AddSong from "./components/AddSong";
import SongPlayer from "./components/SongPlayer";
import SongList from "./components/SongList";
import { Grid, useMediaQuery } from "@material-ui/core";
import songReducer from "./reducer";

export const SongContext = React.createContext({
   song: {
      id: "42b003e0-b52a-4b32-9abd-02d45f05e8c4",
      title: "Because the Night (Official Audio)",
      artist: "Patti Smith Group",
      thumbnail: "http://img.youtube.com/vi/c_BcivBprM0/0.jpg",
      url: "https://www.youtube.com/watch?v=c_BcivBprM0",
      duration: 208,
   },
   isPlaying: false,
});

function App() {
   const initialSongState = React.useContext(SongContext);
   const [state, dispatch] = React.useReducer(songReducer, initialSongState);
   const greaterThanSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
   const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

   return (
      <SongContext.Provider value={{ state, dispatch }}>
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
                          bottom: 0,
                       }
               }
               item
               xs={12}
               md={5}
            >
               <SongPlayer />
            </Grid>
         </Grid>
      </SongContext.Provider>
   );
}

export default App;
