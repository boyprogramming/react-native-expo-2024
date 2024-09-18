import { createContext } from 'react';

const DataContext = createContext();

export default function DataProvider({ children }) {
    const [data, setData] = useState(false);
    return (
    <DataContext.Provider value={{ data }}>
        {children}</DataContext.Provider>
    );
}


export function useData() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
}