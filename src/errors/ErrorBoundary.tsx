import React from 'react';

type State = {error?: Error};

export class ErrorBoundary 
    extends React.Component<React.PropsWithChildren, State>
{
    state: State = {};

    static getDerivedStateFromError(error: Error){
        return {error};
    }

    reset = () => { this.setState({error: undefined})};
    
    render()
    {
        if(this.state.error)
        {
            return(
                <>"Something Happened and it's not good..."</>
            );
        }
        return this.props.children;
    }
}
