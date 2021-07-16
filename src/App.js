import { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import DateTime from './components/DateTime';
import Weather from './components/Weather';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOptions } from './store/appSlice';
import logoSAE from './assets/logo-sae.png';
import audioLogo from './assets/logo-audio.png';
import musicLogo from './assets/logo-music.png';
import filmLogo from './assets/logo-film.png';
import vfxLogo from './assets/logo-vfx.png';
import gameLogo from './assets/logo-game.png';
import webLogo from './assets/logo-web.png';
import mppLogo from './assets/logo-mpp.png';

const App = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.app);

    useEffect(() => {
        dispatch(fetchOptions());
    }, []);

    return (
        <Box width="100%" height="100%" p={4}>
            <Grid container style={{ height: '100%' }}>
                {loading ? (
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <CircularProgress size={64} />
                    </div>
                ) : (
                    <>
                        <Grid item xs={12}>
                            <Grid container style={{ justifyContent: 'space-between' }}>
                                <Grid item xs="auto">
                                    <DateTime />
                                </Grid>
                                <Grid item xs="auto">
                                    <Weather />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                <h1 style={{ fontSize: 64, marginBottom: 40 }}>MAGIC MIRROR</h1>
                                <img src={logoSAE} alt="SAE Institute Genève" />
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={2} style={{ paddingTop: 128, justifyContent: 'space-around' }}>
                                <Grid item><img src={audioLogo} style={{ width: 48 }} alt="" /></Grid>
                                <Grid item><img src={musicLogo} style={{ width: 48 }} alt="" /></Grid>
                                <Grid item><img src={filmLogo} style={{ width: 48 }} alt="" /></Grid>
                                <Grid item><img src={vfxLogo} style={{ width: 48 }} alt="" /></Grid>
                                <Grid item><img src={gameLogo} style={{ width: 48 }} alt="" /></Grid>
                                <Grid item><img src={webLogo} style={{ width: 48 }} alt="" /></Grid>
                                <Grid item><img src={mppLogo} style={{ width: 48 }} alt="" /></Grid>
                            </Grid>
                        </Grid>
                    </>
                )}
            </Grid>
        </Box>
    );
}

export default App;