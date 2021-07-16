import { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import DateTime from './components/DateTime';
import Weather from './components/Weather';
import TPG from './components/TPG';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOptions } from './store/appSlice';

const App = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.app);

    useEffect(() => {
        dispatch(fetchOptions());
    }, []);

    return (
        <Box p={4}>
            <Grid
                container
                style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'stretch',
                    width: '100%',
                    height: '100%',
                }}
            >
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
                            <TPG />
                        </Grid>
                    </>
                )}
            </Grid>
        </Box>
    );
}

export default App;