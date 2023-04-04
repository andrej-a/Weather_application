import React, { Component, ErrorInfo, ReactNode } from 'react';

import { messagesToUI } from '@/types/constants';

import Wrapper, { ErrorDescription } from './styles';

interface Props {
    children?: ReactNode;
}

interface State {
    errorsList: string[];
}

const { ERROR_MESSAGE } = messagesToUI;

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            errorsList: [],
        };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            errorsList: [error.name, errorInfo.componentStack],
        });
    }

    public render() {
        const { errorsList } = this.state;
        if (errorsList.length) {
            return (
                <Wrapper>
                    <ErrorDescription>{ERROR_MESSAGE}</ErrorDescription>
                    {errorsList.map(error => {
                        return (
                            <ErrorDescription key={error}>
                                {error}
                            </ErrorDescription>
                        );
                    })}
                </Wrapper>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
