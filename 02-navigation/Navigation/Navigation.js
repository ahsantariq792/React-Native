// navigation 
// first install navigation library from https://reactnavigation.org/
// then
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pageone from '../components/Pageone';
import Pagetwo from '../components/Pagetwo';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name='Pageone' component = {Pageone}/>
               <Stack.Screen name='Pagetwo' component = {Pagetwo}/>

                {/* <SettingsStack.Navigator>
                    <SettingsStack.Screen
                        name="Settings"
                        component={SettingsScreen}
                    />
                    <SettingsStack.Screen name="Profile" component={ProfileScreen} />
                </SettingsStack.Navigator> */}

            </Stack.Navigator>
        </NavigationContainer>
    );
}

