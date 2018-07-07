import {RegistrationScreen} from './components/specific/RegistrationScreen';
import {CustomerChildTargetScreen} from './components/specific/CustomerChildTargetScreen';
import {RoleSelectingScreen} from './components/specific/RoleSelectingScreen';

export const RootStack =  createStackNavigator(
    {
        RegistrationEmail: {
            screen: RegistrationScreen
        },
        RoleSelect: {
            screen: RoleSelectingScreen
        },
        ChildTargets: {
            screen: CustomerChildTargetScreen
        }
    }, 
    {
        initialRouteName: 'RoleSelect',
    }
);
