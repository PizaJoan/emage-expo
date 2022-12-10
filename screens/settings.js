import { Text } from '@ui-kitten/components';

import MainLayout from './../layouts/mainLayout';
import SettingsHeader from './../components/headers/settingsHeader';

export default function SettingsScreen({ navigation }) {

    function WrappedSettingsHeader(props) {

        return <SettingsHeader {...props} goBack={() => navigation.goBack()} />;
    }

    return (
        <MainLayout header={WrappedSettingsHeader}>
            <Text onPress={() => navigation.goBack()}>Settings</Text>
        </MainLayout>
    );
}

