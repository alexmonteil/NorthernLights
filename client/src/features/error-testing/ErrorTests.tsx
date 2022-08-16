import { Container, Typography, ButtonGroup, Button, Alert, AlertTitle, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import agent from "../../app/api/agent";

export default function ErrorTests() {

        const [validationErrors, setValidationErrors] = useState<string[]>([]);

        function getValidationError() {
                agent.TestErrors.getValidationError()
                .then(() => console.log("Should not see this"))
                .catch(error => setValidationErrors(error));
        }

        return (
                <Container>
                <Typography variant='h2' textAlign='center' mb={4}>Errors for testing purposes</Typography>
                <ButtonGroup fullWidth sx={{mb: 2}}>
                        <Button variant='contained' 
                                onClick={() => agent.TestErrors.get400Error().catch(error => console.log(error))}>Test 400 Error</Button>
                        <Button variant='contained' 
                                onClick={() => agent.TestErrors.get401Error().catch(error => console.log(error))}>Test 401 Error</Button>
                        <Button variant='contained' 
                                onClick={() => agent.TestErrors.get404Error().catch(error => console.log(error))}>Test 404 Error</Button>
                        <Button variant='contained' 
                                onClick={() => agent.TestErrors.get500Error().catch(error => console.log(error))}>Test 500 Error</Button>
                        <Button variant='contained' 
                                onClick={getValidationError}>Test Validation Error</Button>
                </ButtonGroup>
                {validationErrors.length > 0 &&
                        <Alert severity='error'>
                                <AlertTitle>Validation Errors</AlertTitle>
                                <List>
                                {validationErrors.map(error => (
                                        <ListItem key={error}>
                                                <ListItemText>{error}</ListItemText>
                                        </ListItem>
                                ))}
                                </List>
                        </Alert>

                }
                </Container>
        );
}