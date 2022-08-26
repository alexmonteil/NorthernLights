import { Button, ButtonGroup, Typography } from "@mui/material";
import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/storeConfig";
import { decrement, increment } from "./counterReducer";

export default function ContactPage() {

    const dispatch = useAppDispatch();
    const {data, title} = useAppSelector(state => state.counter);

    return (

        <Fragment>
            <Typography variant='h2'>
                {title}
            </Typography>
            <Typography variant='h5'>
                The data is: {data}
            </Typography>
            <ButtonGroup>
                <Button onClick={() => dispatch(decrement(1))} variant='contained' color='error'>Decrement</Button>
                <Button onClick={() => dispatch(increment(1))} variant='contained' color='primary'>Increment</Button>
                <Button onClick={() => dispatch(increment(5))} variant='contained' color='secondary'>Increment by 5</Button>
            </ButtonGroup>
        </Fragment>
    );
}