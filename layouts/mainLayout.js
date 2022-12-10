import { Layout, useTheme } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MainLayout(props) {

    const theme = useTheme();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {props.header ? <props.header /> : ''}
            <Layout style={{ flex: 1, backgroundColor: theme['color-primary-800'], ...props.style }}>
                {props.children}
            </Layout>
        </SafeAreaView>
    );
}