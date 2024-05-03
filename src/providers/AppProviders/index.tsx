import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
// theme provider add

const AppProviders = ({ children }: any) => {
    <>
        <SafeAreaProvider>
            <> {children} </>
        </SafeAreaProvider>
    </>
}

export {
    AppProviders,
};