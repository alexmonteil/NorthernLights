import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function ServerError() {

    const history = useHistory();
    const {state} = useLocation<any>();
    
    return (
        <Container component={Paper}>
            {state?.error ? (
                <Fragment>
                    <Typography variant='h3' color='error' gutterBottom>{state.error.title}</Typography>
                    <Divider sx={{ mb: 3 }} />
                    <Typography mb={3}>{state.error.detail || 'Internal server error'}</Typography>
                </Fragment>
            ) : (

                <Typography mb={3} variant='h5' gutterBottom>Server Error</Typography>
            )}
            <Button onClick={() => history.push('/catalog')}>Go back to the store</Button>
        </Container>
    );
}