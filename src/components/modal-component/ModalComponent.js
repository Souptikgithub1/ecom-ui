import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ModalComponent = ({open, setOpen, headerText, children}) => {


    return (<Dialog
                maxWidth={2000}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setOpen(false)}
                aria-describedby="alert-dialog-slide-description">
                {!!headerText && <DialogTitle>{headerText}</DialogTitle>}
                <DialogContent>
                    {children}
                </DialogContent>
            </Dialog>
    );
}

export default ModalComponent
