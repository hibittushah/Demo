
import * as React from 'react';
import { StackActions, } from '@react-navigation/native';

export const NavigationRef = React.createRef();

export function navigate(name, params) {
    if (NavigationRef.current) {
        NavigationRef.current.navigate(name, params)
    }
}

export function push(...args) {
    if (NavigationRef.current) {
        NavigationRef.current.dispatch(StackActions.push(...args));
    }
}

export function nestedNavigate(root, child, params) {
    if (NavigationRef.current) {
        NavigationRef.current.navigate(root, { screen: child, params: params })
    }
}


export function goBack() {
    if (NavigationRef.current) {
        NavigationRef.current.goBack()
    }
}
export function resetRoot(rootName) {
    if (NavigationRef.current) {
        NavigationRef.current.resetRoot({
            index: 0,
            routes: [{ name: rootName }],
        });
    }
}