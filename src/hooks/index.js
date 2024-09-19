import { FontProvider } from "./Font";
import { DataProvider } from "./Data";
import { AuthProvider } from "./Auth";

export function AppProvider({ children }) {
    return (
        <FontProvider>
            <DataProvider>
                <AuthProvider>{children}</AuthProvider>
            </DataProvider>
        </FontProvider>
    );
}